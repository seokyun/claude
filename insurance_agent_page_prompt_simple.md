=== BLOCK 1. 역할 부여 ===

당신은 20년 경력의 시니어 풀스택 개발자이자 마케팅 자동화 전문가입니다.
특히 보험 업계의 GA(General Agency) 비즈니스 구조를 완벽히 이해하고 있으며,
고객의 DB 전환율(Conversion Rate)을 극대화하는 랜딩페이지 제작에 특화되어 있습니다.

---

=== BLOCK 2. 기술 환경 ===

작성되는 코드는 다음의 환경을 준수합니다:
- Frontend: Vanilla HTML + CSS + JavaScript (단일 파일)
- 백엔드 없이 작동하되, 추후 REST API 연결이 가능한 구조로 구현
- 모바일 우선 반응형(Responsive) 디자인 (모바일 375px 기준)
- 외부 라이브러리 없이 순수 CSS/JS로 구현 (CDN 허용)
- 코드 내 한국어 주석으로 각 섹션 설명 추가
- 수정이 쉽도록 변수/상수는 파일 상단에 모아서 선언

---

=== BLOCK 3. 핵심 사양 ===

[목적]
보험 설계사 개인 홍보 랜딩페이지 (굿리치 소속 지점장 기준)

[타겟 고객]
30~50대 직장인, 자녀가 있는 부모, 건강/노후/자산관리에 관심 있는 일반인

[수집할 정보]
현재는 없음 (추후 상담 신청 폼 연결 가능한 구조로 준비)

[핵심 카피 문구]
"든든한 보험파트너, [설계사 이름] 입니다"
"언제나 최선을 다하며 오롯이 고객을 위한다는 초심을 항상 지키겠습니다"

[톤 & 컬러]
- 메인 컬러: 다크 그레이 (#2d3748) + 화이트
- 서브 컬러: 미디엄 그레이 (#718096) — CSS 변수명 --color-text-light
- 포인트 컬러: 골드/오렌지 (#f5a623)
- 신뢰감 있고 모던한 분위기 (남색 계열 사용 금지)
- CSS 변수: --color-primary(#4a5568), --color-primary-dark(#2d3748)

[배경 그라디언트 설계 — 밝고 고급스러운 라이트 팔레트]
- body: linear-gradient(160deg, #f8fafd → #f2f5fb → #f5f7fa) / background-attachment: fixed
- 헤더: #ffffff (흰 배경) + 하단 골드 라인 + 연한 그림자
- 히어로: linear-gradient(135deg, #d4e5f5 → #deeaf5 → #eaf1f8 → #f3f6fb → #f8fafd)
- 전문분야 섹션: linear-gradient(170deg, #ffffff → #f4f7fc → #edf2f9)
- 전문분야 카드: linear-gradient(145deg, #f8fafd → #edf1f8 → #e6ecf6)
- 블로그 섹션: linear-gradient(165deg, #f5f8fd → #eef3fa → #f0f4fb)
- 블로그 카드: linear-gradient(135deg, #ffffff → #f8fbfe)
- 카드뉴스 섹션: linear-gradient(150deg, #dfe8f4 → #e4ecf8 → #dbe5f2 → #e8eef8)
- 데일리뉴스 섹션: linear-gradient(175deg, #ffffff → #f6f9fe → #eef3fb)
- 뉴스 아이템 hover: linear-gradient(90deg, #eef4fb → #f6f9fd)
- 오류 화면: linear-gradient(160deg, #f8fafd → #f2f5fb → #f5f7fa)

[설계사 정보 (상단 변수로 선언)]
```
const AGENT_NAME     = "홍길동";
const AGENT_TITLE    = "지점장";
const AGENT_COMPANY  = "굿리치";
const AGENT_PHONE    = "010-0000-0000";
const AGENT_INTRO    = "든든한 보험파트너,";
const AGENT_SUBTITLE = "언제나 최선을 다하며 오롯이 고객을 위한다는 초심을 항상 지키겠습니다";
const KAKAO_LINK     = "#"; // 카카오 오픈채팅 URL

// 이미지 폴더 설정 (자동 인식)
const IMAGE_FOLDER          = "images/";
const PROFILE_IMAGE_NAMES   = ["profile.jpg", "profile.png", "profile.webp", "profile.jpeg"];
const CARDNEWS_IMAGE_PREFIX = "card";
const CARDNEWS_IMAGE_COUNT  = 8;
const CARDNEWS_IMAGE_EXTS   = [".jpg", ".png", ".webp", ".jpeg"];
```

---

=== BLOCK 4. 페이지 구성 (섹션별 상세 명세) ===

## [섹션 1] 상단 헤더 (Header)
- 좌측: 설계사 이름 + 직함 + 소속 회사명 (예: 홍길동 지점장 | 굿리치)
- 우측: 전화 문의 버튼 (클릭 시 tel: 링크 연결)
- 스크롤 시 상단 고정(sticky) 처리
- 모바일에서는 햄버거 메뉴 없이 심플하게 유지

## [섹션 2] 히어로 섹션 (Hero Section)
- 설계사 프로필 사진 (원형, 우측 배치)
- 좌측에 메인 헤드라인 + 서브 카피
- CTA 버튼 2개: "전화 상담하기" (tel 링크) + "카카오톡 문의" (카카오 링크 placeholder)
- 배경: 밝은 블루-그레이 그라디언트 (#dde8f0 → #eef2f7 → #f5f7fa)
- 텍스트 컬러: 다크 그레이 (#2d3748) 계열 (화이트 사용 금지)
- 프로필 사진은 `images/` 폴더에서 자동 탐색 (profile.jpg → profile.png → profile.webp → profile.svg 순)
- 이미지 없을 경우 라이트 그레이 placeholder 아이콘 표시
- [프로필 사진 연출]
  - conic-gradient 골드 링 + 내부 백색 패딩 링 2중 구조
  - filter: drop-shadow로 골드 글로우 효과
  - 모바일 164px / 데스크탑 198px
  - 샘플 사진: images/profile.svg (정장 차림 일러스트)

## [섹션 3] 전문 분야 (Specialty)
- 섹션 제목: "전문분야"
- 아이콘 + 텍스트 카드 그리드 형태 (3열 또는 4열)
- 포함 항목 (아이콘은 이모지 또는 SVG 사용):
  - 🏥 상해보험
  - 💊 실비보험
  - 🎗️ 암/질병보험
  - 💰 자산관리
  - 🧓 간병/치매보험
  - 🚗 자동차보험
  - 👶 태아/어린이보험
  - 📊 재무설계
  - 🔍 보장분석
  - 🚙 운전자보험
  - 🏢 법인보험
  - 🏦 상속&증여 / 가업상속

## [섹션 4] 블로그 포스트 목록 (Blog Posts)
- 섹션 제목: "[설계사 이름] 지점장의 블로그 🙄"
- 카드 리스트 형태 (세로 스크롤)
- 각 카드: 제목 텍스트 + 클릭 시 링크 이동 (href="#" placeholder)
- 최대 10개 노출 후 "더보기" 버튼
- 샘플 포스트 제목 10개 이상 포함:
  - "실손보험이 또 바뀐다고요?"
  - "내 보험, 잘 준비된 걸까? 연령별 필수보험 체크리스트"
  - "치매, 발병 확률 높이는 이것! 조심해야"
  - "국민연금 믿고 맡겨도 될까요?"
  - "4세대 실손보험 50% 할인! 갈아타는 게 좋을까?"
  - "운전자보험 제대로 알기"
  - "1인 가구라면 반드시 준비해야 할 보험은?"
  - "모르면 손해! 내 보험 200% 활용 꿀팁"
  - "부모님을 위한 보험 체크리스트"
  - "100세까지 살 준비되셨나요?"
  - "암 예방의 날, 암을 정복하는 3-2-1 수칙"
  - "간병살인, 154인의 고백"

## [섹션 5] 카드뉴스 (Card News)
- 섹션 제목: "카드뉴스 📓"
- 가로 슬라이드 캐러셀 (터치/드래그 지원)
- 이미지 카드 형태 (세로형 1080x1920 비율 유지)
- 이미지 자동 인식: `images/` 폴더의 `card1.jpg`, `card2.jpg` ... 형식 파일 자동 탐색
- 지원 확장자: .jpg / .png / .webp / .jpeg (우선순위 순)
- 이미지 없을 경우 회색 placeholder 표시
- 좌우 화살표 버튼 포함
- 최대 8장까지 자동 인식 (CARDNEWS_IMAGE_COUNT 변수로 조정 가능)

## [섹션 6] 데일리 뉴스 (Daily News)
- 섹션 제목: "DAILY NEWS"
- 날짜 + 제목 형태의 리스트
- 형식: [월 일] 제목
- 샘플 뉴스 10개 이상 포함:
  - "[4월 16일] 선크림 이렇게 바르면 피부는 10년 더 늙습니다."
  - "[4월 15일] 우울증 걸린 사람 99%가 쓰는 말투 4가지"
  - "[4월 14일] 아무리 친한 친구여도 절대 하면 안 되는 행동"
  - "[4월 13일] 싫은 사람 어떻게 대해야 할까?"
  - "[4월 10일] 매일 아침 한 잔 암세포 씨 말린다"
  - "[4월 9일] 당신의 인생을 지켜낼 두 가지!"
  - "[4월 8일] 근육량 보다 이것 없으면 5배 빨리 늙습니다."
  - "[4월 7일] 매일 하는 이 습관, 멈추지 않으면 뇌가 썩어갑니다."
  - "[4월 6일] 병원 갈 일 없는 췌장 살리는 생활습관"
  - "[4월 3일] 목소리 하나로 딱 1분만에 호감되는 법"
- 클릭 시 링크 이동 (href="#" placeholder)

## [섹션 7] 플로팅 채팅 버튼 (Floating CTA)
- 우측 하단 고정 플로팅 버튼
- 카카오톡 아이콘 또는 채팅 아이콘
- 클릭 시 카카오 오픈채팅 링크 연결 (placeholder)
- 부드러운 bounce 애니메이션 적용

## [섹션 8] 푸터 (Footer)
- 설계사 이름, 소속, 연락처
- 저작권 표기
- 간단한 면책 문구 (보험 관련 법적 고지)

---

=== BLOCK 5. 이미지 폴더 구조 ===

모든 이미지는 `images/` 폴더에 넣으면 자동으로 인식됩니다.
코드 수정 없이 파일명 규칙만 지키면 됩니다.

```
프로젝트 루트/
├── index.html
├── data.json             ← 모든 텍스트/링크/이미지 경로 설정 파일
└── images/
    ├── profile.jpg       ← 설계사 프로필 사진 (400x400px 이상, 정사각형 권장)
    ├── card1.jpg         ← 카드뉴스 1번째 (1080x1920px, 9:16 비율 권장)
    ├── card2.jpg         ← 카드뉴스 2번째
    ├── card3.jpg         ← 카드뉴스 3번째
    ...
    └── card8.jpg         ← 카드뉴스 8번째
```

[파일명 규칙]
- 프로필: profile.jpg (또는 .png / .webp / .jpeg)
- 카드뉴스: card1, card2, card3 ... (숫자 순서, 영문 소문자)
- 지원 확장자: .jpg > .png > .webp > .jpeg (우선순위 순)
- 한글 파일명 사용 금지

[자동 인식 동작 방식]
- 이미지 파일이 존재하면 자동으로 표시
- 이미지 파일이 없으면 회색 placeholder 자동 표시
- 카드뉴스 최대 개수는 data.json의 `images.cardnewsCount` 값으로 조정

---

=== BLOCK 6. data.json 구조 및 사용법 ===

사이트의 모든 텍스트, 링크, 이미지 경로는 `data.json` 파일 하나로 관리합니다.
index.html은 수정하지 않아도 됩니다.

```json
{
  "agent": {
    "name": "홍길동",           // 설계사 이름
    "title": "지점장",          // 직함
    "company": "굿리치",        // 소속 회사
    "phone": "010-0000-0000",  // 전화번호 (tel: 링크 자동 생성)
    "intro": "든든한 보험파트너,",
    "subtitle": "소개 문구",
    "kakaoLink": "#"           // 카카오 오픈채팅 URL
  },
  "images": {
    "folder": "images/",
    "profile": ["profile.jpg", "profile.png", "profile.webp", "profile.jpeg", "profile.svg"],
    "cardnewsPrefix": "card",  // 카드뉴스 파일명 접두사
    "cardnewsCount": 8,        // 카드뉴스 최대 장수
    "cardnewsExts": [".jpg", ".png", ".webp", ".jpeg"]
  },
  "specialties": [
    { "icon": "🏥", "name": "상해보험" }
    // ... 항목 추가/삭제 자유
  ],
  "blog": {
    "initialCount": 10,        // 처음 보여줄 포스트 수
    "posts": [
      { "title": "포스트 제목", "url": "https://..." }
    ]
  },
  "dailyNews": [
    { "date": "4월 16일", "title": "뉴스 제목", "url": "https://..." }
  ],
  "footer": {
    "disclaimer": "면책 문구 텍스트"
  }
}
```

[data.json 수정 시 주의사항]
- JSON 형식을 반드시 지킬 것 (쉼표, 따옴표 오류 주의)
- 수정 후 브라우저 새로고침만 하면 즉시 반영
- `url` 필드에 실제 블로그/뉴스 링크 입력 가능
- 로컬 파일로 직접 열 경우 fetch() 보안 정책으로 오류 발생 가능
  → VS Code Live Server 또는 로컬 웹서버 사용 권장

---

=== BLOCK 7. UI/UX 세부 요구사항 ===

- 스크롤 시 섹션 페이드인 애니메이션 (Intersection Observer API 사용)
- 블로그/뉴스 카드 hover 시 살짝 올라오는 효과 (transform: translateY)
- 전화번호 클릭 시 모바일에서 바로 전화 연결 (tel: 링크)
- 카드뉴스 캐러셀은 마우스 드래그 + 터치 스와이프 모두 지원
- 부드러운 스크롤 (scroll-behavior: smooth)
- 로딩 시 스켈레톤 UI 없이 즉시 렌더링

---

=== BLOCK 8. 출력 요구사항 ===

1. 파일 구성: index.html + data.json + images/ 폴더
2. index.html은 data.json을 fetch()로 읽어 전체 렌더링
3. data.json에 모든 텍스트, 링크, 이미지 설정 집중
4. index.html 내 하드코딩된 텍스트 없음 (모두 data.json에서 주입)
5. `<style>` 태그 내 CSS 포함
6. `<script>` 태그 내 JS 포함
7. data.json 로드 실패 시 사용자 친화적 오류 메시지 표시
8. 각 섹션마다 한국어 주석으로 설명
9. 외부 폰트: Google Fonts "Noto Sans KR" CDN 사용
10. 로컬 실행 시 Live Server 사용 안내 포함 (fetch CORS 이슈)

---

=== BLOCK 9. 최종 확인 체크리스트 ===

코드 출력 전 다음 항목을 스스로 확인하세요:

- [ ] 모바일(375px)에서 레이아웃 깨짐 없음
- [ ] 전화 버튼 tel: 링크 정상 작동
- [ ] 카드뉴스 캐러셀 좌우 슬라이드 작동
- [ ] 블로그 "더보기" 버튼 작동
- [ ] 플로팅 버튼 우측 하단 고정
- [ ] 스크롤 애니메이션 작동
- [ ] data.json 파일 존재 및 올바른 JSON 형식
- [ ] index.html이 data.json을 fetch()로 읽어 렌더링
- [ ] index.html 내 하드코딩 텍스트 없음
- [ ] data.json 로드 실패 시 오류 메시지 표시
- [ ] images/ 폴더 자동 인식 기능 구현
- [ ] 프로필 이미지 자동 탐색 (profile.jpg/png/webp)
- [ ] 카드뉴스 이미지 자동 탐색 (card1.jpg, card2.jpg ...)
- [ ] 이미지 없을 경우 placeholder 자동 표시
- [ ] 한국어 주석 포함

위 체크리스트를 모두 통과한 완성된 코드를 바로 출력하세요.
