const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 25일)

---

**1️⃣ Anthropic, 9,000억 달러 기업가치로 300억 달러 투자 유치 임박**
Anthropic이 Sequoia, Dragoneer, Greenoaks, Altimeter 등이 공동 주도하는 300억 달러 규모의 투자 라운드를 이번 주 마감할 예정입니다. 이번 평가 가치는 9,000억 달러 이상으로 OpenAI의 8,520억 달러를 능가하며, Anthropic 역사상 처음으로 분기 흑자도 전망됩니다.
• [🔗 BuildFastWithAI](https://www.buildfastwithai.com/blogs/ai-news-today-may-25-2026)

---

**2️⃣ 교황 레오 14세, AI 관련 첫 회칙 '마그니피카 후마니타스' 발표**
교황 레오 14세가 AI 시대의 인간 보호를 주제로 한 235페이지 분량의 첫 회칙을 발표했습니다. AI 통제권이 소수에게 집중되어서는 안 된다고 경고하며, Anthropic 공동창립자 Chris Olah와 함께 공개했습니다.
• [🔗 TechCrunch](https://techcrunch.com/2026/05/25/the-popes-ai-encyclical-isnt-really-about-ai/)
• [🔗 CNN](https://www.cnn.com/2026/05/25/europe/pope-leo-ai-encyclical-magnifica-humanitas-intl)

---

**3️⃣ Andrej Karpathy, Anthropic 합류해 사전학습 팀 재건**
OpenAI 공동 창업자이자 전 테슬라 오토파일럿 책임자인 Andrej Karpathy가 Anthropic에 합류하여 사전학습(pretraining) 연구팀을 내부에서 재건할 예정입니다. AI 연구 역량 강화 차원에서 주목받는 인재 영입입니다.
• [🔗 BuildFastWithAI](https://www.buildfastwithai.com/blogs/ai-news-today-may-25-2026)

---

**4️⃣ Google, Gemini 3.5 Flash를 검색 AI 모드 기본 모델로 채택**
Google이 최신 Flash 모델인 Gemini 3.5 Flash를 전 세계 사용자의 AI 검색 모드 기본 모델로 적용했습니다. 에이전트 및 코딩 작업에서 프론티어 수준의 성능을 4배 빠른 속도로 제공하며 100만 토큰 컨텍스트를 지원합니다.
• [🔗 Google Blog](https://blog.google/products-and-platforms/products/search/search-io-2026/)
• [🔗 LLM Stats](https://llm-stats.com/ai-news)

---

**5️⃣ 최초의 상용 서브쿼드래틱 LLM 'SubQ' 출시**
트랜스포머 아키텍처를 사용하지 않는 최초의 상용 서브쿼드래틱 LLM 'SubQ'가 2,900만 달러 시드 투자와 함께 출시됩니다. 1,200만 토큰 기본 컨텍스트를 지원하며 장문 처리 비용이 기존 대비 1/5, 어텐션 속도는 최대 52배 빠릅니다.
• [🔗 WhatLLM](https://whatllm.org/blog/new-ai-models-may-2026)
• [🔗 LLM Stats](https://llm-stats.com/llm-updates)

---

**6️⃣ Anthropic, Google·Broadcom과 기가와트 규모 컴퓨트 파트너십 체결**
Anthropic이 급증하는 고객 수요를 감당하기 위해 Google과 Broadcom과 기가와트 규모의 차세대 컴퓨팅 인프라 파트너십을 체결했습니다. 연간 100만 달러 이상 지출 기업 수가 2개월 만에 1,000개를 초과하며 두 배로 늘었습니다.
• [🔗 Anthropic](https://www.anthropic.com/news/google-broadcom-partnership-compute)
• [🔗 Axios](https://www.axios.com/2026/05/21/google-ai-anthropic-openai-war)

---

**7️⃣ 에이전틱 AI, 기업 전반으로 본격 확산 — 96% 기업이 이미 도입**
OutSystems 조사에 따르면 96%의 기업이 이미 AI 에이전트를 사용 중이며, ServiceNow-Accenture 파트너십 및 Cognizant Secure AI 서비스 출시 등 기업용 AI 거버넌스 솔루션 경쟁이 치열해지고 있습니다. 다만 94%는 AI 스프롤에 따른 복잡성과 보안 리스크를 우려하고 있습니다.
• [🔗 BusinessWire](https://www.businesswire.com/news/home/20260407749542/en/Agentic-AI-Goes-Mainstream-in-the-Enterprise-but-94-Raise-Concern-About-Sprawl-OutSystems-Research-Finds)
• [🔗 Accenture Newsroom](https://newsroom.accenture.com/news/2026/servicenow-and-accenture-launch-forward-deployed-engineering-program-to-scale-agentic-ai-across-the-enterprise)

---

*출처: BuildFastWithAI, TechCrunch, CNN, Google Blog, LLM Stats, WhatLLM, Anthropic, Axios, BusinessWire, Accenture*`;

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
