# DuDoong Admin — PRD

> 에픽: EP04 | 우선순위: P1 | 상태: 설계 중

---

## 배경

현재 두둥은 **호스트 어드민**(이벤트 주최자가 자기 이벤트 관리)만 존재.
플랫폼 레벨 운영 관리 도구가 없어서 DB 직접 조회/수정으로 운영 중.

### 필요한 이유
- CS 문의 대응 시 DB 직접 접근 필요 → 위험하고 느림
- 악성 댓글/이벤트 신고 처리 수단 없음
- 유저/주문/이벤트 현황 파악 불가
- 쿠폰 캠페인 관리가 API 직접 호출로만 가능

---

## 대상 사용자

| 역할 | AccountRole | 권한 범위 |
|------|-------------|----------|
| 슈퍼 어드민 | SUPER_ADMIN | 전체 권한 (유저 역할 변경, 쿠폰 관리 포함) |
| 어드민 | ADMIN | 조회 + 대부분 관리 (역할 변경 불가) |
| 매니저 | MANAGER | 조회 + CS 대응 (댓글 삭제, 주문 환불) |

---

## 기능 목록

### Phase 1: 백엔드 Admin API (PR #643)

| # | 기능 | API | 권한 |
|---|------|-----|------|
| 1 | 대시보드 통계 | `GET /internal-api/v1/dashboard` | MANAGER+ |
| 2 | 유저 목록/검색 | `GET /internal-api/v1/users` | MANAGER+ |
| 3 | 유저 상세 | `GET /internal-api/v1/users/{id}` | MANAGER+ |
| 4 | 유저 역할 변경 | `PATCH /internal-api/v1/users/{id}/role` | SUPER_ADMIN |
| 5 | 유저 정지/복구 | `PATCH /internal-api/v1/users/{id}/status` | ADMIN+ |
| 6 | 이벤트 목록 (DELETED 포함) | `GET /internal-api/v1/events` | MANAGER+ |
| 7 | 이벤트 상세 | `GET /internal-api/v1/events/{id}` | MANAGER+ |
| 8 | 이벤트 삭제 (soft) | `DELETE /internal-api/v1/events/{id}` | ADMIN+ |
| 9 | 주문 목록 (크로스 이벤트) | `GET /internal-api/v1/orders` | MANAGER+ |
| 10 | 주문 상세 | `GET /internal-api/v1/orders/{uuid}` | MANAGER+ |
| 11 | 주문 강제 취소 | `POST /internal-api/v1/orders/{uuid}/cancel` | ADMIN+ |
| 12 | 댓글 목록 | `GET /internal-api/v1/comments` | MANAGER+ |
| 13 | 댓글 삭제 (soft) | `DELETE /internal-api/v1/comments/{id}` | MANAGER+ |

### Phase 2: 프론트엔드

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 대시보드 | `/` | 주요 지표 + 최근 활동 |
| 유저 관리 | `/users` | 테이블 + 검색 + 필터 |
| 유저 상세 | `/users/[id]` | 프로필 + 주문 + 호스트 |
| 이벤트 관리 | `/events` | 테이블 + 검색 + 필터 |
| 이벤트 상세 | `/events/[id]` | 정보 + 티켓 + 주문 + 통계 |
| 주문 관리 | `/orders` | 테이블 + 검색 + 필터 |
| 주문 상세 | `/orders/[uuid]` | 정보 + 결제 + 티켓 + 이력 |
| 댓글 관리 | `/comments` | 테이블 + 모더레이션 |

### Phase 3: 확장 (백로그)
- 호스트 관리, 쿠폰 관리
- 감사 로그 (누가 뭘 했는지)
- 알림 (Slack 연동)
- 배치 처리 (대량 환불 등)

---

## 인증 구조 (#646)

```
JWT(userId만) → Redis 캐시에서 role 조회 → 권한 확인
역할 변경 시 → 캐시 무효화 → 즉시 반영
```

- 어드민 전용 토큰 (일반 유저 JWT와 분리)
- 어드민 로그인을 거쳐야만 admin 토큰 발급
- IP whitelist (선택, ACL_WHITELIST 활용)

---

## 관련 이슈

| 이슈 | 제목 |
|------|------|
| #643 | Admin API PR (리뷰 중) |
| #645 | Admin 모듈 분리 |
| #646 | Admin 인증 보강 |
