const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

function buildPrompt(formData) {
  const systemPrompt = [
    '你是一个资深 Prompt 架构师，擅长把零散业务描述改写成可直接交给 AI 执行的正式任务 Prompt。',
    '你需要在内部综合 P/R/O/M/P/T 六个维度，但最终不要按 P/R/O/M/P/T 逐项复述。',
    '输出必须像一段成熟 Prompt：先明确 AI 角色与能力，再说明任务目标、背景材料、输出格式、限制条件、评估/自检要求。',
    '只输出最终 Prompt，不要解释过程，不要 Markdown 标题，不要项目符号堆砌。',
    '要求：中文、自然、结构清晰、可执行；不要编造输入中没有的业务事实；总长度控制在 500 个中文字符以内。',
  ].join('\n');

  const userPrompt = `请把以下六类输入融合改写成一段正式 Prompt。注意：不要输出“P - Problem / R - Role”等标签，而是写成可直接复制给 AI 的完整任务说明。\n\n业务问题：${formData.problem || ''}\n角色设定：${formData.role || ''}\n输出要求：${formData.output || ''}\n背景信息：${formData.material || ''}\n限制条件：${formData.parameters || ''}\n验收标准：${formData.test || ''}`;

  return { systemPrompt, userPrompt };
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);
    if (request.method !== 'POST' || url.pathname !== '/api/generate-prompt') {
      return jsonResponse({ error: 'Not found' }, 404);
    }

    if (!env.DEEPSEEK_API_KEY) {
      return jsonResponse({ error: 'Missing DEEPSEEK_API_KEY in Worker secrets.' }, 500);
    }

    try {
      const formData = await request.json();
      const { systemPrompt, userPrompt } = buildPrompt(formData);

      const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.DEEPSEEK_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: env.DEEPSEEK_MODEL || 'deepseek-v4-flash',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
          temperature: 0.2,
          max_tokens: 700,
          stream: false,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        return jsonResponse({ error: data?.error?.message || 'DeepSeek request failed' }, response.status);
      }

      const prompt = data?.choices?.[0]?.message?.content?.trim();
      if (!prompt) {
        return jsonResponse({ error: 'DeepSeek returned empty content' }, 502);
      }

      return jsonResponse({ prompt });
    } catch (error) {
      return jsonResponse({ error: error instanceof Error ? error.message : 'Unknown server error' }, 500);
    }
  },
};

