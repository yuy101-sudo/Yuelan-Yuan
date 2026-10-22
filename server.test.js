const test = require('node:test');
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const http = require('node:http');

function get(url) {
  return new Promise((resolve, reject) => http.get(url, res => {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', chunk => body += chunk);
    res.on('end', () => resolve({ status: res.statusCode, type: res.headers['content-type'], body }));
  }).on('error', reject));
}

test('server serves homepage and static assets', async t => {
  const port = 3400 + Math.floor(Math.random() * 1000);
  const child = spawn(process.execPath, ['server.js'], { env: { ...process.env, PORT: String(port) }, stdio: 'ignore' });
  t.after(() => child.kill('SIGTERM'));
  let ready = false;
  for (let i = 0; i < 40; i++) {
    try { const r = await get(`http://127.0.0.1:${port}/`); if (r.status === 200) { ready = true; break; } } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  assert.equal(ready, true, 'server starts and serves homepage');
  const home = await get(`http://127.0.0.1:${port}/`);
  assert.match(home.type, /text\/html/);
  for (const section of ['About Me', 'EXPERIENCE', 'SKILLS', 'CONTACT']) assert.match(home.body, new RegExp(section, 'i'));
  const css = await get(`http://127.0.0.1:${port}/styles.css`);
  assert.equal(css.status, 200);
  assert.match(css.type, /text\/css/);
  const js = await get(`http://127.0.0.1:${port}/script.js`);
  assert.equal(js.status, 200);
  assert.match(js.type, /javascript/);
});
