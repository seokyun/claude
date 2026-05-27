const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 27일)

---

**1️⃣ Anthropic, $300억 펀딩 마감 — 기업가치 $9,000억으로 세계 최고가 비상장 AI 기업 등극**
Anthropic이 Sequoia, Dragoneer, Altimeter, Greenoaks 주도로 300억 달러 이상의 펀딩 라운드를 공식 마감했습니다. 사전 기업가치 9,000억 달러 이상으로 OpenAI(8,520억 달러)를 제치고 세계 최고가 비상장 AI 스타트업이 됐습니다. Microsoft, NVIDIA, Founders Fund도 참여했으며, 2026년 10월 IPO를 목표로 하고 있습니다.
• [🔗 TechTimes](https://www.techtimes.com/articles/317066/20260523/anthropic-funding-round-top-30b-900b-valuation-would-surpass-openai-most-valuable-ai-startup.htm)
• [🔗 TechCrunch](https://techcrunch.com/2026/04/30/anthropic-potential-900b-valuation-round-could-happen-within-two-weeks/)

---

**2️⃣ Google I/O 2026: 검색 AI 에이전트 시대 개막, 25년 만의 검색창 전면 개편**
Google이 I/O 2026에서 검색 에이전트 시대를 선언했습니다. 사용자가 여러 AI 에이전트를 직접 생성·관리할 수 있으며, 24시간 백그라운드로 동작하는 정보 에이전트가 아파트 매물, 운동선수 소식 등을 자동 모니터링해 알려줍니다. Gemini 3.5 Flash가 AI Mode 기본 모델로 채택되며 검색창도 25년 만에 전면 개편됩니다.
• [🔗 Google 공식 블로그](https://blog.google/products-and-platforms/products/search/search-io-2026/)
• [🔗 Analytics Vidhya](https://www.analyticsvidhya.com/blog/2026/05/google-i-o-2026-updates/)

---

**3️⃣ SubQ, 트랜스포머 탈피한 서브쿼드래틱 모델 공개 — 컨텍스트 1,200만 토큰**
SubQ가 2,900만 달러 시드 투자와 함께 트랜스포머 구조를 사용하지 않는 서브쿼드래틱 어텐션 모델을 출시했습니다. 기본으로 1,200만 토큰 컨텍스트 윈도우를 지원하며, 장문 처리 비용은 기존 프론티어 모델의 1/5, 어텐션 속도는 최대 52배 빠른 것으로 알려졌습니다.
• [🔗 WhatLLM.org](https://whatllm.org/blog/new-ai-models-may-2026)
• [🔗 LLM Stats](https://llm-stats.com/llm-updates)

---

**4️⃣ Inception, 디퓨전 LLM 'Mercury 2' 발표 — 초당 1,000토큰 이상 추론**
Inception이 디퓨전 아키텍처 기반 추론 언어 모델 Mercury 2를 발표했습니다. 토큰을 병렬로 생성해 초당 1,000토큰 이상의 속도를 구현하며, 에이전틱 루프와 실시간 음성 인터랙션 같은 저지연 환경에서도 추론급 품질을 제공하는 것이 목표입니다.
• [🔗 LLM Stats News](https://llm-stats.com/ai-news)
• [🔗 AI Flash Report](https://aiflashreport.com/model-releases.html)

---

**5️⃣ GPT-5.5 Instant, ChatGPT 기본 모델로 전환**
OpenAI가 GPT-5.5 Instant를 ChatGPT 서비스의 새로운 기본 모델로 설정했습니다. 속도와 품질을 동시에 끌어올린 이 모델은 수억 명의 일반 사용자가 일상적으로 접하는 AI 경험의 중심축이 됩니다.
• [🔗 AI Release Tracker](https://aireleasetracker.com/)
• [🔗 Evertune AI Tracker](https://www.evertune.ai/resources/ai-model-tracker)

---

**6️⃣ 생성형 AI, 창의력 테스트에서 인간 평균 능가 — 10만 명 대상 연구**
10만 명을 대상으로 한 대규모 연구에서 생성형 AI가 표준화 창의력 테스트 전반에서 평균적인 인간을 능가했습니다. AI의 창의적 영역 진입을 알리는 이정표적 결과로, AI가 단순 반복 업무를 넘어 창작 직군에도 영향을 미칠 수 있다는 논의를 다시 촉발하고 있습니다.
• [🔗 BuildFastWithAI](https://www.buildfastwithai.com/blogs/ai-news-today-may-27-2026)

---

**7️⃣ Snowflake, AI 에이전트 플랫폼 인수·AWS $60억 딜로 장 마감 후 35% 급등**
Snowflake가 기업용 MCP(Model Context Protocol) 플랫폼 Natoma 인수 계획 및 AWS와의 60억 달러 규모 계약, 33% 매출 성장을 담은 1분기 실적을 발표하며 장 마감 후 주가가 35% 이상 급등했습니다. 데이터 웨어하우스 강자가 AI 에이전트 인프라 업체로 빠르게 전환하고 있음을 보여주는 사례입니다.
• [🔗 BuildFastWithAI](https://www.buildfastwithai.com/blogs/ai-news-today-may-27-2026)
• [🔗 JD Supra](https://www.jdsupra.com/legalnews/ai-today-in-5-may-27-2026-the-clock-i-77471/)

---

*출처: TechTimes, TechCrunch, Google Blog, Analytics Vidhya, WhatLLM.org, LLM Stats, AI Flash Report, AI Release Tracker, BuildFastWithAI, JD Supra*`;

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
