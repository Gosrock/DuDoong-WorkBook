# Admin 프론트엔드 기술 스택

---

## 프레임워크

| 항목 | 선택 | 이유 |
|------|------|------|
| Framework | **Next.js** | 기존 DuDoong-Front와 동일 스택, SSR 지원 |
| UI Library | **shadcn/ui** | 어드민 특화 (테이블, 폼, 모달, 드롭다운), 복붙 방식으로 커스텀 자유 |
| Styling | **Tailwind CSS** | shadcn/ui 기본, 유틸리티 퍼스트 |
| 상태관리 | TBD | React Query (서버 상태) + zustand (클라이언트 상태) 후보 |
| API Client | **자동 생성** | OpenAPI → openapi-typescript-codegen |

## 핵심 컴포넌트 (shadcn/ui)

| 컴포넌트 | 용도 |
|---------|------|
| DataTable | 유저/이벤트/주문/댓글 목록 (정렬, 필터, 페이지네이션) |
| Dialog | 확인 모달 (삭제, 역할 변경, 환불) |
| Form + Input | 검색, 필터 입력 |
| Badge | 상태 표시 (ACTIVE, DELETED, CONFIRM 등) |
| Card | 대시보드 지표 카드 |
| Command | 검색 팔레트 (Cmd+K) |
| DropdownMenu | 액션 메뉴 (상세보기, 수정, 삭제) |
| Tabs | 상세 페이지 탭 (정보, 주문, 통계) |

## 인증

- 어드민 전용 토큰 사용 (일반 유저 토큰과 분리)
- 카카오 로그인 → MANAGER+ 체크 → admin 토큰 발급
- 토큰 저장: httpOnly 쿠키 (또는 별도 헤더)

## OpenAPI → TypeScript 타입 자동 생성

```
Backend (SpringDoc) → openapi.json → openapi-typescript-codegen → types.ts + apiClient.ts
```

- `npm run sync-types` 로 로컬에서 수동 실행
- 나중에 GitHub Actions로 자동화 가능
