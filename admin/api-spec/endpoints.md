# Admin API 엔드포인트

> Base path: `/internal-api/v1`
> 인증: Admin 전용 토큰 (MANAGER+ 역할)
> OpenAPI 자동 생성 연동 예정

---

## Auth

| Method | Path | 설명 | 권한 |
|--------|------|------|------|
| POST | `/auth/oauth/kakao/login` | 카카오 로그인 (MANAGER+ 체크) | permitAll |
| POST | `/auth/oauth/local/login` | 로컬 개발용 로그인 (deprecated) | permitAll |
| POST | `/auth/token/refresh` | 토큰 갱신 | permitAll |
| GET | `/auth/me` | 현재 어드민 유저 정보 | MANAGER+ |

## Dashboard

| Method | Path | 설명 | 권한 |
|--------|------|------|------|
| GET | `/dashboard` | 대시보드 통계 (유저수, 주문수, 매출 등) | MANAGER+ |

## Users

| Method | Path | 설명 | 권한 |
|--------|------|------|------|
| GET | `/users` | 유저 목록 (페이지네이션 + 검색) | MANAGER+ |
| GET | `/users/{userId}` | 유저 상세 (프로필 + 주문 + 호스트) | MANAGER+ |
| PATCH | `/users/{userId}/role` | 유저 역할 변경 | SUPER_ADMIN |
| PATCH | `/users/{userId}/status` | 유저 정지/복구 | ADMIN+ |

## Events

| Method | Path | 설명 | 권한 |
|--------|------|------|------|
| GET | `/events` | 이벤트 목록 (DELETED 포함) | MANAGER+ |
| GET | `/events/{eventId}` | 이벤트 상세 | MANAGER+ |
| DELETE | `/events/{eventId}` | 이벤트 soft delete | ADMIN+ |

## Orders

| Method | Path | 설명 | 권한 |
|--------|------|------|------|
| GET | `/orders` | 주문 목록 (크로스 이벤트 검색) | MANAGER+ |
| GET | `/orders/{uuid}` | 주문 상세 | MANAGER+ |
| POST | `/orders/{uuid}/cancel` | 주문 강제 취소 | ADMIN+ |

## Comments

| Method | Path | 설명 | 권한 |
|--------|------|------|------|
| GET | `/comments` | 댓글 목록 | MANAGER+ |
| DELETE | `/comments/{commentId}` | 댓글 soft delete | MANAGER+ |

---

_PR #643 기준. OpenAPI 자동 생성 연동 후 이 문서는 자동 생성으로 대체 예정._
