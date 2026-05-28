const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 28일)

---

**1️⃣ Google I/O 2026: Gemini 3.5 Flash & Gemini Omni 공식 출시**
Google이 I/O 2026에서 두 개의 신규 모델을 발표했습니다. Gemini 3.5 Flash는 대형 플래그십 모델 수준의 성능을 빠른 속도로 제공하며 코딩·에이전트 벤치마크에서 이전 세대를 크게 앞섰습니다. Gemini Omni는 비디오를 포함한 모든 입력 형식에서 콘텐츠를 생성하는 멀티모달 혁신 모델입니다. Managed Agents API, Gemini Spark 개인 에이전트도 함께 공개됐습니다.
• [🔗 Google 공식 블로그](https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/)
• [🔗 9to5Google 상세 정리](https://9to5google.com/2026/05/19/google-io-2026-news/)

---

**2️⃣ KPMG, 전 세계 27만 6천 명 직원에 Claude AI 전면 도입**
글로벌 컨설팅 기업 KPMG가 138개국 276,000명 임직원 전체에 Anthropic의 Claude를 배포했습니다. 역대 최대 규모의 엔터프라이즈 AI 도입 사례 중 하나로, OpenAI도 별도로 40억 달러 규모의 AI 컨설팅 자회사 DeployCo를 출범하며 기업 시장 공략을 가속화하고 있습니다.
• [🔗 Build Fast With AI](https://www.buildfastwithai.com/blogs/ai-news-today-may-28-2026)

---

**3️⃣ Anthropic, SDK 자동생성 스타트업 Stainless를 3억 달러에 인수**
Anthropic이 주요 AI 기업들의 SDK를 자동으로 생성해주던 스타트업 Stainless를 3억 달러 이상에 인수했습니다. OpenAI와 Google에 직접적인 타격을 주는 전략적 M&A로, Anthropic의 개발자 생태계 주도권 확보 전략이 본격화되고 있습니다.
• [🔗 The New Stack](https://thenewstack.io/anthropic-stainless-sdk-acquisition/)

---

**4️⃣ OpenAI vs Anthropic 매출 경쟁 — Anthropic Q2 역전 임박**
OpenAI의 2026년 1분기 매출은 57억 달러로 Anthropic(48억 달러)를 앞서고 있지만, Anthropic의 2분기 매출 전망치가 109억 달러에 달하며 역전이 유력합니다. Anthropic은 첫 분기 흑자 달성도 눈앞에 두고 있으며, AI 3강(Google·OpenAI·Anthropic) 간 경쟁은 모델 성능을 넘어 생태계 통합 전쟁으로 진화하고 있습니다.
• [🔗 에콘밍글](https://econmingle.com/economy/openai-anthropic-revenue-reversal-ipo-2026/)
• [🔗 Axios](https://www.axios.com/2026/05/21/google-ai-anthropic-openai-war)

---

**5️⃣ NVIDIA, 대만 AI 인프라에 연 1,500억 달러 투자 공식화**
NVIDIA가 대만을 AI 혁명의 중심지로 유지하기 위해 연간 1,500억 달러 규모의 투자를 공식 발표했습니다. AI 반도체 공급망 강화와 함께 글로벌 AI 인프라 구축 경쟁이 한층 가열되고 있습니다.
• [🔗 Build Fast With AI](https://www.buildfastwithai.com/blogs/ai-news-today-may-28-2026)

---

**6️⃣ AI 에너지 효율 100배 향상 — 광-물질 하이브리드 기술로 돌파구**
펜실베이니아 대학 연구팀이 하이브리드 광-물질 입자 기반 기술을 개발해 AI 컴퓨팅 에너지를 최대 100배 절감하면서 정확도까지 향상시켰습니다. Google도 대형 컨텍스트 창 모델을 더 효율적으로 실행하는 TurboQuant 알고리즘을 공개하며 AI 에너지 문제 해결에 나섰습니다.
• [🔗 ScienceDaily](https://www.sciencedaily.com/releases/2026/04/260405003952.htm)
• [🔗 InfoWorld](https://www.infoworld.com/article/4108092/6-ai-breakthroughs-that-will-define-2026.html)

---

**7️⃣ Google SynthID 워터마크 5천만 건 돌파 — OpenAI·카카오 등도 채택**
Google의 AI 생성 콘텐츠 워터마킹 기술 SynthID 적용 건수가 5천만 건을 넘어섰으며, OpenAI·카카오·Eleven Labs가 추가로 채택했습니다. Google은 C2PA 콘텐츠 인증 검증을 Gemini 앱에 오늘부터 시작하고, 검색·크롬으로도 확장할 예정입니다.
• [🔗 Google 공식 블로그](https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/)

---

*출처: Google Blog, Build Fast With AI, The New Stack, 에콘밍글, Axios, ScienceDaily, InfoWorld, 9to5Google*`;

const body = JSON.stringify({ text: message });

const options = {
  hostname: 'matter.goodrich.kr',
  path: '/hooks/g9uigh6xyfgm7nkp8ogitwod4w',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body, 'utf8')
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', d => {
    data += d;
    process.stdout.write(d);
  });
  res.on('end', () => {
    console.log('');
    if (data.trim() === 'ok') {
      console.log('✅ Mattermost 발송 성공!');
    } else {
      console.log('응답: ' + data);
    }
  });
});

req.on('error', (e) => {
  console.error('❌ 발송 실패: ' + e.message);
});

req.write(body, 'utf8');
req.end();
