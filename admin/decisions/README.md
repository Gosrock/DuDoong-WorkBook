# Admin 의사결정 로그

| # | 날짜 | 결정 | 맥락 |
|---|------|------|------|
| AD01 | 2026-03-17 | JWT에 role 넣지 않고 userId만 → DB/Redis에서 실시간 조회 | 역할 변경 즉시 반영, refresh 재검증 불필요 |
| AD02 | 2026-03-17 | 어드민 토큰을 일반 유저 토큰과 분리 | 일반 JWT로 admin API 접근 차단 |
| AD03 | 2026-03-17 | Admin 코드를 DuDoong-Admin 모듈로 분리, 앱은 DuDoong-Api 하나만 실행 | 코드 경계 명확화, 배포 구조 변경 없음 |
| AD04 | 2026-03-17 | Admin 프론트는 shadcn/ui + Tailwind 사용 | 어드민 특화 컴포넌트, Next.js 궁합 |
