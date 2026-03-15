/**
 * Notion Page Reader via Playwright
 *
 * Usage:
 *   node notion-reader.mjs <notion-url>
 *   node notion-reader.mjs https://www.notion.so/workspace/Page-abc123
 *
 * First run opens a browser for Notion login.
 * Session is saved to notion-auth.json for subsequent runs.
 */
import { chromium } from 'playwright';
import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const STORAGE_PATH = resolve(__dirname, 'notion-auth.json');

const targetUrl = process.argv[2];
if (!targetUrl) {
  console.error('Usage: node notion-reader.mjs <notion-url>');
  process.exit(1);
}

(async () => {
  const browser = await chromium.launch({ headless: false });

  let context;
  if (existsSync(STORAGE_PATH)) {
    console.log('저장된 로그인 세션 사용 중...');
    context = await browser.newContext({ storageState: STORAGE_PATH });
  } else {
    context = await browser.newContext();
  }

  const page = await context.newPage();

  if (!existsSync(STORAGE_PATH)) {
    await page.goto('https://www.notion.so/login');
    console.log('=== 브라우저에서 Notion 로그인해주세요 ===');
    await page.waitForURL((url) => !url.pathname.includes('/login'), { timeout: 300000 });
    await context.storageState({ path: STORAGE_PATH });
    console.log('로그인 세션 저장 완료!');
  }

  console.log('대상 페이지로 이동 중...');

  await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(8000);

  // Extract page content
  const content = await page.evaluate(() => {
    const article = document.querySelector('.notion-page-content')
      || document.querySelector('[class*="notion-page-content"]')
      || document.querySelector('.layout-content')
      || document.querySelector('main');

    if (!article) {
      const blocks = document.querySelectorAll('[data-block-id]');
      if (blocks.length > 0) {
        return Array.from(blocks).map(b => b.innerText).join('\n');
      }
      return document.body.innerText;
    }
    return article.innerText;
  });

  const title = await page.title();

  console.log('\n========== PAGE TITLE ==========');
  console.log(title);
  console.log('\n========== PAGE CONTENT ==========');
  console.log(content);
  console.log('\n========== END ==========');

  await browser.close();
})();
