# Admin 변경 이력

## 2026-03-17

### Backend
- PR #643 머지: Admin API 13개 UseCase + 인증 구현
- PR #649 머지: DuDoong-Admin 모듈 분리 (#645) + JWT 인증 보강 (#646)
  - JWT에서 role 제거 → DB 실시간 조회
  - Admin 토큰 aud:admin 클레임 + X-Admin-Token 헤더 분리
  - JwtTokenProvider 단위 테스트 13개 + E2E 테스트 추가
- PR #651 머지: Swagger admin-token 보안 스킴 추가
- 의사결정: Redis 캐시 제거 → DB 직접 조회로 단순화

### Frontend
- 기술 스택 확정: **Vite + React 18** (Next.js → 메모리 이슈로 변경)
- DuDoong-Admin-Front 현황: 7/9 페이지 구현 완료
- tech-stack.md 전면 업데이트 (실제 구현 기준)
- 이슈 생성: #652 (X-Admin-Token 전환), #653 (Detail 페이지), #654 (테스트 환경)

### WorkBook
- admin/ 디렉토리 구조 생성 (PRD, API spec, decisions, UI, changelog)
- 이슈 생성: #645 (모듈 분리), #646 (인증 보강) → 완료
- 의사결정 4건: JWT 전략, 토큰 분리, 모듈 구조, 프론트 기술 스택

## 2026-03-16

- PR #643: Admin API 13개 UseCase + 인증 구현
