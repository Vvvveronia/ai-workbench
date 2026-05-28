// Deno Deploy entrypoint — DeepSeek API proxy.
// Mirrors worker/deepseek-proxy.js but runs on deno.dev (国内可达).
// Set env var DEEPSEEK_API_KEY in Deno Deploy project Settings → Environment Variables.

const ALLOWED_ORIGINS = new Set([
  "https://vvvveronia.github.io",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
]);

function corsHeadersFor(origin: string | null): HeadersInit {
  const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://vvvveronia.github.io";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

function jsonResponse(payload: unknown, status: number, origin: string | null): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeadersFor(origin),
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

interface FormData {
  problem?: string;
  role?: string;
  output?: string;
  material?: string;
  parameters?: string;
  test?: string;
}

function buildPrompt(formData: FormData) {
  const systemPrompt = [
    "你是一个资深 Prompt 架构师，擅长把零散业务描述改写成可直接交给 AI 执行的正式任务 Prompt。",
    "你需要在内部综合 P/R/O/M/P/T 六个维度，但最终不要按 P/R/O/M/P/T 逐项复述。",
    "输出必须像一段成熟 Prompt：先明确 AI 角色与能力，再说明任务目标、背景材料、输出格式、限制条件、评估/自检要求。",
    "只输出最终 Prompt，不要解释过程，不要 Markdown 标题，不要项目符号堆砌。",
    "要求：中文、自然、结构清晰、可执行；不要编造输入中没有的业务事实；总长度控制在 500 个中文字符以内。",
  ].join("\n");

  const userPrompt = `请把以下六类输入融合改写成一段正式 Prompt。注意：不要输出"P - Problem / R - Role"等标签，而是写成可直接复制给 AI 的完整任务说明。

业务问题：${formData.problem || ""}
角色设定：${formData.role || ""}
输出要求：${formData.output || ""}
背景信息：${formData.material || ""}
限制条件：${formData.parameters || ""}
验收标准：${formData.test || ""}`;

  return { systemPrompt, userPrompt };
}

Deno.serve(async (request: Request) => {
  const origin = request.headers.get("Origin");

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeadersFor(origin) });
  }

  const url = new URL(request.url);
  if (request.method !== "POST" || url.pathname !== "/api/generate-prompt") {
    return jsonResponse({ error: "Not found" }, 404, origin);
  }

  const apiKey = Deno.env.get("DEEPSEEK_API_KEY");
  if (!apiKey) {
    return jsonResponse({ error: "Missing DEEPSEEK_API_KEY env var." }, 500, origin);
  }

  try {
    const formData = (await request.json()) as FormData;
    const { systemPrompt, userPrompt } = buildPrompt(formData);

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: Deno.env.get("DEEPSEEK_MODEL") || "deepseek-v4-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.2,
        max_tokens: 700,
        stream: false,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return jsonResponse(
        { error: data?.error?.message || "DeepSeek request failed" },
        response.status,
        origin,
      );
    }

    const prompt = data?.choices?.[0]?.message?.content?.trim();
    if (!prompt) {
      return jsonResponse({ error: "DeepSeek returned empty content" }, 502, origin);
    }

    return jsonResponse({ prompt }, 200, origin);
  } catch (error) {
    return jsonResponse(
      { error: error instanceof Error ? error.message : "Unknown server error" },
      500,
      origin,
    );
  }
});
