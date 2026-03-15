# 의사결정 로그 (Decision Log)

프로덕트/정책 결정 사항을 기록합니다.
결정의 맥락과 이유를 남겨서 나중에 "왜 이렇게 했지?" 할 때 찾을 수 있게 합니다.

## 포맷

```markdown
## DEC-NNN: 제목

- **일자**: YYYY-MM-DD
- **결정**: (결정 내용)
- **이유**: (왜 이렇게 결정했는지)
- **대안**: (검토했지만 선택 안 한 것)
- **영향**: (이 결정에 영향받는 태스크)
- **참여자**: (결정에 참여한 사람)
```

---

## DEC-001: 카카오 단독 OAuth 지원

- **일자**: 2026-03-15
- **결정**: 소셜 로그인은 카카오(Kakao)만 지원한다. 다른 OAuth 제공자(구글, 네이버 등)는 지원하지 않는다.
- **이유**: `OauthProvider` enum에 `KAKAO` 값만 존재하며, `KakaoOauthHelper`, `KakaoUserInfoDto` 등 카카오 전용 구현체만 존재한다. 서비스 타겟(국내 대학생/공연 관객)을 고려할 때 카카오만으로 충분하다고 판단한 것으로 보인다.
- **대안**: 구글 OAuth 추가, 네이버 OAuth 추가 — 현재 구현 없음
- **영향**: domain/user/정책.md, EP02 관련 인증 태스크
- **참여자**: 코드 분석 기반 (Claude)

---

## DEC-002: 두둥 플랫폼 중개 수수료 0원 (초기 정책)

- **일자**: 2026-03-15
- **결정**: 두둥 플랫폼이 가져가는 중개 수수료(dudoongFee)는 현재 0원으로 고정한다. 정산 시 PG사(토스페이먼츠) 수수료와 VAT만 차감하여 호스트에게 지급한다.
- **이유**: `EventSettlementDomainService`에서 `.dudoongFee(Money.ZERO)`로 명시적으로 0원을 설정하고 있으며, `SettlementPdfHelper`에 "초기 두둥 자체 수수료 없음" 주석이 존재한다. 서비스 초기 성장을 위해 수수료를 받지 않는 전략으로 보인다.
- **대안**: 판매금액의 일정 % 수수료 부과 — 코드에 구조(dudoongFee 필드)는 준비되어 있으나 현재 미사용
- **영향**: domain/settlement/정책.md
- **참여자**: 코드 분석 기반 (Claude)

---

## DEC-003: MASTER 호스트 역할 이전 미지원 (현재)

- **일자**: 2026-03-15
- **결정**: 현재 구현에서 MASTER 역할은 호스트 생성자에게 고정되며, 다른 멤버에게 이전하는 기능은 없다. MASTER의 역할(권한 등급)은 변경 불가이며 이전 API도 존재하지 않는다.
- **이유**: `Host.setHostUserRole()`에서 `masterUserId`인 경우 `CannotModifyMasterHostRoleException`을 던져 역할 변경 자체를 막는다. `UpdateHostUserRoleUseCase`는 MASTER가 아닌 멤버(MANAGER/GUEST)의 역할만 변경 가능하다. MASTER→다른 유저 이전 엔드포인트가 없다.
- **대안**: MASTER 이전 API 추가 — 구조적으로 `masterUserId` 필드를 변경하면 가능하나 현재 미구현
- **영향**: domain/host/정책.md, 향후 EP04 등 신규 에픽 검토 대상
- **참여자**: 코드 분석 기반 (Claude)

---

## DEC-004: OUTDATED 주문 상태는 배치 없이 조회 시 필터링 방식으로 처리

- **일자**: 2026-03-15
- **결정**: 결제 시간 초과 주문(`OUTDATED`)은 별도 배치 Job으로 상태를 전환하지 않고, `OrderCustomRepositoryImpl`에서 조회 조건으로 `OUTDATED` 상태를 필터링하는 방식으로 처리한다. 정확한 타임아웃 기준 시간(분)은 코드에서 명시적으로 확인되지 않았다.
- **이유**: DuDoong-Batch 모듈에 OUTDATED 전환 Job이 존재하지 않는다. 조회 쿼리(`OrderCustomRepositoryImpl`)에서 OUTDATED 상태를 직접 참조하는 방식으로 운영 중이다. 타임아웃 기준 시간은 토스페이먼츠 결제 세션 만료 정책에 위임한 것으로 추정된다.
- **대안**: 주기적 배치로 PENDING→OUTDATED 전환 — 현재 미구현. 명시적 타임아웃 기준 상수화 — 미확인
- **영향**: domain/order/정책.md — 타임아웃 기준 시간 별도 확인 필요 (미결 사항 부분 해소)
- **참여자**: 코드 분석 기반 (Claude)

---

## DEC-005: 쿠폰 캠페인 생성은 SUPER_ADMIN 전용, 일반 사용자 쿠폰 발급은 활성화

- **일자**: 2026-03-15
- **결정**: 쿠폰 캠페인 생성(`POST /v1/coupons/campaigns`)은 `SUPER_ADMIN` 역할만 가능하다. 쿠폰 시스템 자체는 활성화되어 있으며 API 엔드포인트(`CouponController`)가 구현되어 있다. 단, 캠페인 생성 권한을 SUPER_ADMIN으로 제한하여 무분별한 쿠폰 발행을 방지한다.
- **이유**: `SecurityConfig`에서 `.mvcMatchers(HttpMethod.POST, "/v1/coupons/campaigns").hasRole("SUPER_ADMIN")`으로 명시적으로 제한하고 있다. 역할 계층은 `SUPER_ADMIN > ADMIN > MANAGER > USER` 순이다.
- **대안**: 모든 관리자에게 캠페인 생성 허용 — 현재 미채택. 쿠폰 시스템 전체 비활성화 — 현재 미채택(시스템은 활성 상태)
- **영향**: domain/coupon/정책.md
- **참여자**: 코드 분석 기반 (Claude)

---

## 미결 사항

- [ ] 공연 기본정보 등록 후 수정 허용 범위 (EP02-T06) — 정책 논의 필요
- [x] 두둥 중개 수수료 정책 → DEC-002: 현재 0원 확정
- [x] MASTER 역할 이전 가능 여부 → DEC-003: 현재 미지원
- [x] OUTDATED 주문 결제 시간 초과 기준 → DEC-004: 배치 없음, 기준 시간 미확인 (부분 해소)
- [ ] 탈퇴 유저 데이터 보관 기간 (user 도메인) — 코드에서 AccountState.DELETED로 소프트 삭제 처리, 물리적 삭제 정책 미확인, 법적 요건 검토 필요
- [x] 쿠폰 시스템 활성화 조건 → DEC-005: 시스템 활성화, 캠페인 생성은 SUPER_ADMIN 전용
