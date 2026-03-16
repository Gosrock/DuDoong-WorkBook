# Admin 변경 이력

## 2026-03-17

- admin/ 디렉토리 구조 생성 (PRD, API spec, decisions, UI, changelog)
- 이슈 생성: #645 (모듈 분리), #646 (인증 보강)
- 의사결정: JWT role 제거 → userId + Redis 캐시 방식 채택
- 의사결정: 어드민 토큰 일반 토큰과 분리
- 의사결정: DuDoong-Admin 모듈 분리 (앱은 1개 유지)
- 기술 스택 결정: Next.js + shadcn/ui + Tailwind

## 2026-03-16

- PR #643: Admin API 13개 UseCase + 인증 구현 (리뷰 중)
