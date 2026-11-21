import { Hono } from 'hono'

// The Worker in front of the static site: a health check, a JSON 404 for any
// other /api/* route, and everything else falling through to the built assets.
type Env = {
  ASSETS: Fetcher
}

const app = new Hono<{ Bindings: Env }>()

app.get('/api/health', (c) => c.json({ ok: true }))

app.all('/api/*', (c) => c.json({ error: 'Not found' }, 404))

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
