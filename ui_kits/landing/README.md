# UI Kit — 형사 전문 랜딩 (Landing)

법무법인 온강 메인 사이트(onganglawyer.co.kr)의 톤과 정보 구조를 재현한 랜딩 화면입니다.

## 구성 (`Landing.jsx`)
- **NAV** — G 심볼 + 워드마크, 메뉴, 상담 신청 버튼
- **HERO** — 잉크 배경 + 배한진 대표 컷아웃 + 배지 + 핵심 메시지 + CTA
- **BUSINESS AREA** — 크림 배경, 업무분야 칩 (마약 active 강조)
- **CTA** — 레드 풀블리드 + G 심볼 워터마크
- **FOOTER** — 로고 + 연락처

## 사용 컴포넌트
`Button` · `Badge` · `Chip` (components/core)

정보 흐름: 히어로 → 업무분야 → (해결사례·변호인단·후기) → CTA. 본 킷은 핵심 3섹션으로 축약했습니다.
