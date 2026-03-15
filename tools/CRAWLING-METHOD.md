# Crawling Method

## Overview

DuDoong의 퍼블릭 Notion 페이지를 Playwright를 사용해 크롤링하여 마크다운 파일로 변환.

## Tools

- **Runtime**: Node.js v18
- **Browser Automation**: Playwright (chromium, headless mode)
- **Script**: `crawl.mjs` (ES Module)

## Approach

1. **Single browser context**: Notion은 Cloudflare 보호를 사용하므로, 여러 브라우저 컨텍스트를 열면 challenge 페이지가 표시됨. 단일 브라우저 컨텍스트(쿠키 공유)로 모든 페이지를 순차 탐색.

2. **Rate limiting**: 페이지 간 2초 딜레이를 두어 Cloudflare 차단 방지.

3. **Content extraction**: Notion의 CSS 클래스 기반으로 블록 타입을 판별하여 마크다운으로 변환:
   - `.notion-header-block` -> `# heading`
   - `.notion-sub_header-block` -> `## heading`
   - `.notion-sub_sub_header-block` -> `### heading`
   - `.notion-text-block` -> paragraph
   - `.notion-bulleted_list-block` -> `- item`
   - `.notion-numbered_list-block` -> `1. item`
   - `.notion-quote-block` -> `> quote`
   - `.notion-callout-block` -> `> **Note:** text`
   - `.notion-to_do-block` -> `- [ ] / - [x]`
   - `.notion-code-block` -> fenced code block
   - `.notion-table-block` -> markdown table
   - `.notion-image-block` -> image URL reference

4. **Link discovery**: 페이지 내 `<a>` 태그와 `.notion-page-block` 요소에서 `dudoong.notion.site` 도메인의 내부 링크를 수집하여 BFS 방식으로 하위 페이지 탐색 (최대 depth 3).

5. **Deduplication**: URL pathname 기준으로 중복 방문 방지.

## Execution

```bash
cd DuDoong-WorkBook/public-notion
npm install playwright
node crawl.mjs
```

## Crawl Date

2026-03-15

## Results

총 10개 페이지 크롤링 (메인 1 + 하위 9):

| Page | File |
| --- | --- |
| 두둥 서비스 (메인) | main-page.md |
| 두둥 티켓 종류 및 유의사항 | 두둥-티켓-종류-및-유의사항.md |
| 두둥 환불 규정 관련 | 두둥-환불-규정-관련.md |
| 두둥 공연 오픈하기 | 두둥-공연-오픈하기.md |
| 두둥 호스트 관리하기 | 두둥-호스트-관리하기.md |
| 두둥 공연 관리하기 | 두둥-공연-관리하기.md |
| 제휴 호스트 | 제휴-호스트.md |
| 두둥 정산 관련 | 두둥-정산-관련.md |
| 입장 체크하기 | 입장-체크하기.md |
| 두둥 호스트 슬랙 알림 설정 방법 | 두둥-호스트-슬랙-알림-설정-방법.md |

## Limitations

- 이미지는 URL 참조만 기록 (다운로드하지 않음). Notion의 S3 URL은 시간이 지나면 만료될 수 있음.
- Notion의 toggle 블록 내부 콘텐츠는 펼치지 않은 상태에서는 추출되지 않을 수 있음.
- Cloudflare 보호로 인해 빠른 연속 요청 시 차단될 수 있어 rate limiting 필요.
