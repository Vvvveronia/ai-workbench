import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {})
      } catch (error) {
        reject(error)
      }
    })
    req.on('error', reject)
  })
}

function sendJson(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(payload))
}

function deepseekPromptApi(env) {
  return {
    name: 'deepseek-prompt-api',
    configureServer(server) {
      server.middlewares.use('/api/generate-prompt', async (req, res) => {
        if (req.method !== 'POST') {
          sendJson(res, 405, { error: 'Method not allowed' })
          return
        }

        const apiKey = env.DEEPSEEK_API_KEY
        if (!apiKey) {
          sendJson(res, 500, { error: 'Missing DEEPSEEK_API_KEY. 请在项目根目录 .env.local 中配置。' })
          return
        }

        try {
          const formData = await readRequestBody(req)
          const systemPrompt = [
            '你是一个资深 Prompt 架构师，擅长把零散业务描述改写成可直接交给 AI 执行的正式任务 Prompt。',
            '你需要在内部综合 P/R/O/M/P/T 六个维度，但最终不要按 P/R/O/M/P/T 逐项复述。',
            '输出必须像一段成熟 Prompt：先明确 AI 角色与能力，再说明任务目标、背景材料、输出格式、限制条件、评估/自检要求。',
            '只输出最终 Prompt，不要解释过程，不要 Markdown 标题，不要项目符号堆砌。',
            '要求：中文、自然、结构清晰、可执行；不要编造输入中没有的业务事实；总长度控制在 500 个中文字符以内。'
          ].join('\n')

          const userPrompt = `请把以下六类输入融合改写成一段正式 Prompt。注意：不要输出“P - Problem / R - Role”等标签，而是写成可直接复制给 AI 的完整任务说明。\n\n业务问题：${formData.problem || ''}\n角色设定：${formData.role || ''}\n输出要求：${formData.output || ''}\n背景信息：${formData.material || ''}\n限制条件：${formData.parameters || ''}\n验收标准：${formData.test || ''}`

          const response = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              model: env.DEEPSEEK_MODEL || 'deepseek-v4-flash',
              messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
              ],
              temperature: 0.2,
              max_tokens: 700,
              stream: false
            })
          })

          const data = await response.json()
          if (!response.ok) {
            sendJson(res, response.status, { error: data?.error?.message || 'DeepSeek request failed' })
            return
          }

          const content = data?.choices?.[0]?.message?.content?.trim()
          if (!content) {
            sendJson(res, 502, { error: 'DeepSeek returned empty content' })
            return
          }

          sendJson(res, 200, { prompt: content })
        } catch (error) {
          sendJson(res, 500, { error: error instanceof Error ? error.message : 'Unknown server error' })
        }
      })
    }
  }
}

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: './',
    plugins: [
      figmaAssetResolver(),
      deepseekPromptApi(env),
      // The React and Tailwind plugins are both required for Make, even if
      // Tailwind is not being actively used – do not remove them
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        // Alias @ to the src directory
        '@': path.resolve(__dirname, './src'),
      },
    },

    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})
