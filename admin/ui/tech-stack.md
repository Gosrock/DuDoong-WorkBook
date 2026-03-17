# Admin 프론트엔드 기술 스택

> 마지막 업데이트: 2026-03-17

---

## 프레임워크

| 항목 | 선택 | 이유 |
|------|------|------|
| Framework | **Vite + React 18** | Next.js 대비 메모리 사용량 적음, 어드민 SPA에 SSR 불필요 |
| Routing | **React Router v6** | SPA 라우팅, NavLink 기반 사이드바 |
| 서버 상태 | **TanStack React Query v5** | 캐싱, refetching, mutation 관리 |
| API Client | **Axios** | request/response 인터셉터로 토큰 관리 + 401 리다이렉트 |
| Styling | **Tailwind CSS 3** | 유틸리티 퍼스트, 빠른 어드민 UI 개발 |
| Icons | **lucide-react** | 트리쉐이킹 지원, 일관된 아이콘 세트 |
| 유틸 | **clsx + tailwind-merge** | 조건부 클래스 결합 |

## 프로젝트 구조

```
DuDoong-Admin-Front/
├── src/
│   ├── api/
│   │   ├── client.ts        # Axios 인스턴스 (X-Admin-Token 인터셉터)
│   │   └── admin.ts         # Admin API 함수 (16개 엔드포인트)
│   ├── pages/
│   │   ├── LoginPage.tsx     # 로그인 (이메일/이름 로컬 로그인)
│   │   ├── DashboardPage.tsx # 대시보드 (6개 KPI 카드)
│   │   ├── UsersPage.tsx     # 사용자 목록 (테이블 + 검색 + 페이지네이션)
│   │   ├── UserDetailPage.tsx# 사용자 상세 (역할 변경, 계정 정지/복원)
│   │   ├── EventsPage.tsx    # 이벤트 목록 (테이블 + 상태 필터 + 삭제)
│   │   ├── OrdersPage.tsx    # 주문 목록 (테이블 + 상태 필터 + 취소)
│   │   └── CommentsPage.tsx  # 댓글 목록 (테이블 + 검색 + 삭제)
│   ├── layouts/
│   │   └── AdminLayout.tsx   # 사이드바 + 헤더 + Outlet
│   ├── types/
│   │   └── index.ts          # 타입 정의 (DashboardData, AdminUser, Page<T> 등)
│   ├── lib/
│   │   └── utils.ts          # cn() 유틸리티 (clsx + tailwind-merge)
│   ├── App.tsx               # 라우트 + ProtectedRoute + QueryClient
│   └── main.tsx              # 엔트리포인트
├── .env.local                # VITE_API_BASE_URL (로컬)
├── .env.staging              # VITE_API_BASE_URL (스테이징)
├── .env.production           # VITE_API_BASE_URL (프로덕션)
└── package.json
```

## 구현된 기능 (Phase 2)

### 페이지 (7/9 완료)

| 페이지 | 라우트 | 상태 | 주요 기능 |
|--------|--------|------|-----------|
| Login | `/login` | ✅ 완료 | 이메일/이름 로컬 로그인, 에러 처리, 로딩 상태 |
| Dashboard | `/` | ✅ 완료 | 6개 KPI 카드 (전체 사용자, 신규 가입, 주문, 매출, 이벤트, 환불), 스켈레톤 로딩 |
| Users | `/users` | ✅ 완료 | DataTable, 검색, 페이지네이션, 역할/상태 뱃지, 행 클릭 → 상세 |
| User Detail | `/users/:id` | ✅ 완료 | 프로필 상세, 역할 변경 (select), 계정 정지/복원 (mutation) |
| Events | `/events` | ✅ 완료 | DataTable, 검색, 상태 필터 (6종), soft delete (confirm 모달) |
| Orders | `/orders` | ✅ 완료 | DataTable, 검색, 상태 필터 (6종), 강제 취소 (confirm 모달) |
| Comments | `/comments` | ✅ 완료 | DataTable, 검색, soft delete, 댓글 미리보기 (50자 truncate) |
| Event Detail | `/events/:id` | ❌ 미구현 | 이슈 #653 |
| Order Detail | `/orders/:uuid` | ❌ 미구현 | 이슈 #653 |

### 공통 패턴

- **스켈레톤 로딩**: 모든 목록/상세 페이지에 animate-pulse 스켈레톤
- **페이지네이션**: 이전/다음 버튼 + 현재 페이지/총 페이지 표시
- **검색**: form onSubmit → 쿼리 파라미터 갱신 → React Query refetch
- **뱃지**: 역할별 (SUPER_ADMIN=빨강, ADMIN=주황, MANAGER=파랑, USER=회색), 상태별 색상
- **Mutation**: useMutation + invalidateQueries 패턴
- **반응형**: 모바일 사이드바 (햄버거 메뉴 + 오버레이), 데스크탑 고정 사이드바

## 인증 흐름

```
1. LoginPage → POST /internal-api/v1/auth/oauth/local/login
2. Backend → MANAGER+ 역할 체크 → admin 토큰 발급 (JWT aud:admin)
3. Frontend → localStorage.admin_token 저장
4. Axios 인터셉터 → X-Admin-Token: {token} 헤더 자동 추가
5. 401 응답 → admin_token 삭제 → /login 리다이렉트
```

- **ProtectedRoute**: `localStorage.admin_token` 없으면 `/login`으로 Navigate
- **토큰 분리**: 일반 유저 JWT (`Authorization: Bearer`)와 admin 토큰 (`X-Admin-Token`) 별도
- **역할 변경 즉시 반영**: JWT에 role 없음 → 매 요청마다 DB에서 실시간 조회

## API 엔드포인트 (16개)

### Auth (4)
| Method | Path | 설명 |
|--------|------|------|
| POST | `/internal-api/v1/auth/oauth/kakao/login` | 카카오 로그인 (MANAGER+) |
| POST | `/internal-api/v1/auth/oauth/local/login` | 로컬 로그인 (dev) |
| POST | `/internal-api/v1/auth/token/refresh` | 토큰 갱신 |
| GET | `/internal-api/v1/auth/me` | 현재 어드민 정보 |

### Dashboard (1)
| Method | Path | 설명 |
|--------|------|------|
| GET | `/internal-api/v1/dashboard` | 통계 (6개 지표) |

### Users (4)
| Method | Path | 설명 | 권한 |
|--------|------|------|------|
| GET | `/internal-api/v1/users` | 목록 (검색+페이지네이션) | MANAGER+ |
| GET | `/internal-api/v1/users/{id}` | 상세 | MANAGER+ |
| PATCH | `/internal-api/v1/users/{id}/role` | 역할 변경 | SUPER_ADMIN |
| PATCH | `/internal-api/v1/users/{id}/status` | 상태 변경 | ADMIN+ |

### Events (3)
| Method | Path | 설명 | 권한 |
|--------|------|------|------|
| GET | `/internal-api/v1/events` | 목록 (DELETED 포함) | MANAGER+ |
| GET | `/internal-api/v1/events/{id}` | 상세 | MANAGER+ |
| DELETE | `/internal-api/v1/events/{id}` | soft delete | ADMIN+ |

### Orders (3)
| Method | Path | 설명 | 권한 |
|--------|------|------|------|
| GET | `/internal-api/v1/orders` | 목록 (상태 필터) | MANAGER+ |
| GET | `/internal-api/v1/orders/{uuid}` | 상세 | MANAGER+ |
| POST | `/internal-api/v1/orders/{uuid}/cancel` | 강제 취소 | ADMIN+ |

### Comments (2)
| Method | Path | 설명 | 권한 |
|--------|------|------|------|
| GET | `/internal-api/v1/comments` | 목록 (검색) | MANAGER+ |
| DELETE | `/internal-api/v1/comments/{id}` | soft delete | MANAGER+ |

## 배포

| 환경 | URL | API Base |
|------|-----|----------|
| Local | `http://localhost:3100` | Vite proxy → `localhost:8080` |
| Staging | `https://staging.dudoong.com/admin/` | `https://staging.dudoong.com` |
| Production | `https://dudoong.com/admin/` | `https://dudoong.com` |

Nginx: `/admin/*` → `localhost:3100` (path strip)

## 빌드 명령

```bash
npm run dev              # 로컬 개발 (Vite HMR)
npm run build:local      # 로컬 빌드
npm run build:staging    # 스테이징 빌드
npm run build:production # 프로덕션 빌드
```

## 테스트 (미구축 → 이슈 #654)

현재 테스트 없음. 계획:
- Vitest + @testing-library/react + jsdom
- MSW (Mock Service Worker)로 API mocking
- API 클라이언트, 페이지 컴포넌트, ProtectedRoute 테스트

## 관련 이슈

- **#652** — API 클라이언트 X-Admin-Token 전환 + 로그인 엔드포인트 수정
- **#653** — Event Detail / Order Detail 페이지 추가
- **#654** — Vitest + React Testing Library 테스트 환경 구축
