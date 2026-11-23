// Prints a full-screen Canvas walkthrough HTML document to an A4 landscape PDF via headless Chrome.
// Usage: node build/canvas_pdf.mjs <in.html> <out.pdf>
import { createRequire } from 'module';
import fs from 'fs';
import os from 'os';
import path from 'path';

const require = createRequire(import.meta.url);
const candidates = [
  process.env.PLAYWRIGHT_CORE,
  path.join(os.homedir(), '.npm-global/lib/node_modules/@playwright/cli/node_modules/playwright-core'),
  '/opt/homebrew/lib/node_modules/playwright-core',
  '/opt/homebrew/lib/node_modules/playwright/node_modules/playwright-core'
].filter(Boolean);
const corePath = candidates.find(p => fs.existsSync(p)) || 'playwright-core';
const { chromium } = require(corePath);
const [inp, out] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage();
await page.setContent(fs.readFileSync(inp, 'utf8'), { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts ? document.fonts.ready : null);
await page.pdf({ path: out, format: 'A4', landscape: true, printBackground: true, preferCSSPageSize: true });
await browser.close();
