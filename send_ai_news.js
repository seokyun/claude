const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 22일)

---

**1️⃣ OpenAI, 9월 기업공개(IPO) 목표로 S-1 제출 추진**
OpenAI가 9월 상장을 목표로 SEC에 기밀 S-1을 제출할 예정이며, 기업 가치는 약 8,520억~1조 달러 규모로 평가됩니다. Anthropic도 10월 상장을 목표로 9,000억 달러 가치로 투자자들과 논의 중이며, SpaceX까지 포함하면 세 기업이 공개시장에서 약 2,000억 달러 조달을 시도합니다.
• [🔗 Euronews](https://www.euronews.com/business/2026/05/22/5-things-to-know-about-openais-potentially-record-breaking-ipo-plans)
• [🔗 Yahoo Finance](https://finance.yahoo.com/markets/article/spacex-openai-and-anthropic-here-are-the-most-anticipated-ipos-in-2026-114439441.html)

---

**2️⃣ Anthropic, 사상 첫 분기 영업흑자 달성 전망**
Anthropic이 2026년 2분기(Q2) 사상 첫 분기 영업이익 달성을 눈앞에 두고 있으며, 2분기 예상 매출은 109억 달러(약 15조 원)에 달합니다. AI 스타트업이 빠르게 수익 궤도에 진입하면서 투자자들의 기대도 높아지고 있습니다.
• [🔗 Build Fast with AI](https://www.buildfastwithai.com/blogs/ai-news-today-may-22-2026)
• [🔗 NeuralBuddies](https://www.neuralbuddies.com/p/ai-news-recap-may-22-2026)

---

**3️⃣ Andrej Karpathy, Anthropic 합류 — AI 인재 전쟁 가속화**
OpenAI 공동창업자이자 AI계 최고 권위자 중 한 명인 Andrej Karpathy가 Anthropic 사전 훈련(Pre-training) 팀에 합류했습니다. 그는 Claude를 이용해 Claude의 훈련을 고도화하는 팀을 이끌 예정이며, 2025년 중반부터 2026년 초 사이 빅테크 CTO 6명이 Anthropic 연구직으로 이직한 사례가 이어지고 있습니다.
• [🔗 IndMoney](https://www.indmoney.com/blog/us-stocks/andrej-karpathy-joins-anthropic-the-ai-talent-war-investors-must-understand)
• [🔗 Hacker News](https://news.ycombinator.com/item?id=48194352)

---

**4️⃣ Meta, 전 세계 직원 10% 감원 — 7,000명은 AI 업무로 전환**
Meta가 전 세계 직원의 약 10%에 해당하는 8,000여 명을 감원하고, 6,000명 신규 채용 계획도 취소했습니다. 동시에 기존 직원 7,000명을 AI 워크플로우 관련 업무로 전환 배치하며 AI 중심 조직 재편을 가속화합니다.
• [🔗 Sherwood News](https://sherwood.news/tech/meta-to-lay-off-8-000-employees-move-7-000-to-new-initiatives-related-to-ai/)
• [🔗 The Creators AI](https://thecreatorsai.com/p/google-io-drops-100-things-karpathy)

---

**5️⃣ Google, Gemini 3.5 Flash 정식 출시 — 동급 최고 속도**
Google이 I/O 2026에서 Gemini 3.5 Flash를 정식 출시했습니다. 동급 모델 대비 4배 빠른 속도를 자랑하며, 100만 토큰 컨텍스트 지원, 코딩 및 에이전트 벤치마크에서 Gemini 3.1 Pro를 능가합니다. 가격은 입력 100만 토큰당 $1.50, 출력 $9입니다.
• [🔗 WhatLLM](https://whatllm.org/blog/new-ai-models-may-2026)
• [🔗 Google Blog](https://blog.google/products-and-platforms/products/search/search-io-2026/)

---

**6️⃣ Microsoft AI 수장 "18개월 내 화이트칼라 업무 전면 자동화"**
Microsoft AI 최고경영자 Mustafa Suleyman이 앞으로 18개월 내에 모든 화이트칼라 업무가 AI에 의해 자동화될 것이라는 파격적인 전망을 내놓았습니다. AI 에이전트의 급속한 발전과 함께 기업들의 업무 자동화 도입이 가파르게 증가하고 있습니다.
• [🔗 Fortune](https://fortune.com/article/why-microsoft-ai-chief-mustafa-suleyman-predicts-ai-automation-18-months/)

---

**7️⃣ 세계 최초 서브쿼드라틱 상업용 LLM 'SubQ 1M-Preview' 출시**
스타트업 Subquadratic이 기존 트랜스포머 구조를 넘어서는 서브쿼드라틱(Subquadratic) 아키텍처 기반의 첫 상업용 LLM 'SubQ 1M-Preview'를 출시했습니다. 1,200만 토큰이라는 초대형 컨텍스트를 지원하며, 효율적 추론이 가능한 차세대 LLM 구조로 주목받고 있습니다.
• [🔗 WhatLLM](https://whatllm.org/blog/new-ai-models-may-2026)
• [🔗 LLM Stats](https://llm-stats.com/ai-news)

---

*출처: Build Fast with AI, NeuralBuddies, Euronews, Yahoo Finance, IndMoney, Sherwood News, Fortune, Google Blog, WhatLLM, LLM Stats*`;

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
  res.on('data', (d) => {
    data += d.toString('utf8');
    process.stdout.write(d);
  });
  res.on('end', () => {
    if (data.trim() === 'ok') {
      console.log('\n✅ Mattermost 발송 성공!');
    } else {
      console.log('\n⚠️ 응답:', data);
    }
  });
});

req.on('error', (e) => {
  console.error('❌ 오류 발생:', e.message);
});

req.write(body, 'utf8');
req.end();
