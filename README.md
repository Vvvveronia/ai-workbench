
# AI Workbench

AI Workbench is a Vite + React frontend for an internal AI workflow demo.

## Local development

Run `npm i` to install dependencies.

Run `npm run dev` to start the development server.

Create `.env.local` from `.env.local.example` if you need the local DeepSeek proxy:

```bash
DEEPSEEK_API_KEY=sk-your-deepseek-api-key
DEEPSEEK_MODEL=deepseek-v4-flash
VITE_PROMPT_API_URL=
```

## GitHub Pages

The frontend is deployed as a static site. Build output is safe to host on GitHub Pages because the DeepSeek API key is not bundled into the frontend.

## DeepSeek backend proxy

GitHub Pages cannot run backend code. Use the Cloudflare Worker in `worker/` as a small DeepSeek proxy.

Deploy the Worker:

```bash
cd worker
npx wrangler login
npx wrangler secret put DEEPSEEK_API_KEY
npx wrangler deploy
```

After deployment, copy the Worker URL and set this GitHub repository variable:

```bash
VITE_PROMPT_API_URL=https://your-worker-subdomain.workers.dev/api/generate-prompt
```

Then rerun the GitHub Pages deployment workflow or push a new commit.

  
