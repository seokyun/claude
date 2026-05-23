const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 23일)

---

**1️⃣ OpenAI, IPO 절차 돌입 — 기업가치 1.75조 달러 목표**
OpenAI가 5월 22일 SEC에 비공개 S-1을 제출하며 IPO 절차에 착수했습니다. 6월 중순 가격 책정, 6월 말 상장을 목표로 하며 예상 기업가치는 약 1조 7,500억 달러(약 2,400조 원)입니다. 다만 수익성은 2030년경에야 달성될 전망입니다.
• [🔗 Medium – IPO Wars](https://medium.com/no-time/openai-spacex-and-anthropic-just-entered-the-ipo-wars-f7ecf4403e72)
• [🔗 NewsBytesApp](https://www.newsbytesapp.com/news/business/spacex-and-openai-plan-ipos-as-anthropic-nears-profit/tldr)

---

**2️⃣ Anthropic, 창사 첫 분기 흑자 임박 — 매출 $10.9B 목표**
Anthropic이 2분기 분기 흑자를 달성할 것으로 보인다고 WSJ가 보도했습니다. 2분기 매출 목표는 109억 달러(약 15조 원)이며, 기업가치 9,000억 달러 평가로 추가 투자를 유치 중입니다.
• [🔗 CNBC](https://www.cnbc.com/2026/05/20/anthropic-revenue-explosive-growth-ipo-profitable-quarter.html)
• [🔗 The Daily Upside](https://www.thedailyupside.com/technology/artificial-intelligence/whats-behind-anthropics-surprise-turn-to-profitability/)

---

**3️⃣ Google I/O 2026 — Gemini 3.5 Flash · AI 에이전트 검색 공개**
Google I/O 2026에서 Gemini 3.5 Flash를 검색 AI 모드의 기본 모델로 탑재하고, 24시간 백그라운드로 동작하는 개인 정보 에이전트를 발표했습니다. 개인 AI 에이전트 'Gemini Spark'도 공개됐으며, AI Ultra 플랜은 월 250달러에서 200달러로 인하됐습니다.
• [🔗 Google Blog – Search I/O 2026](https://blog.google/products-and-platforms/products/search/search-io-2026/)
• [🔗 MacRumors – I/O 2026 Roundup](https://www.macrumors.com/2026/05/19/google-io-2026-roundup/)

---

**4️⃣ OpenAI, 80년 된 수학 난제 자율 증명 — Fields 수상자도 "이정표"**
OpenAI 내부 모델이 80년간 미해결로 남아 있던 기하학 추측을 인간의 개입 없이 독자적으로 증명해냈습니다. 필즈상 수상자 팀 가워스는 "수학에서 AI의 이정표"라고 평가했습니다.
• [🔗 Build Fast With AI – Top Stories](https://www.buildfastwithai.com/blogs/ai-news-today-may-23-2026)

---

**5️⃣ Google Gemini Omni 출시 — 모든 모달리티 입출력 지원**
Google이 5월 19일 Gemini Omni를 공개했습니다. 텍스트·이미지·오디오·비디오 등 모든 입력 모달리티를 지원하며, 비디오 출력을 지원하는 최초의 Gemini 모델입니다.
• [🔗 LLM Stats – AI Model Releases](https://llm-stats.com/ai-news)
• [🔗 WhatLLM – New AI Models May 2026](https://whatllm.org/blog/new-ai-models-may-2026)

---

**6️⃣ Microsoft AI 수장 "화이트칼라 업무 18개월 내 자동화"**
Microsoft AI 사업 총괄 무스타파 수레이만이 대부분의 화이트칼라 업무가 18개월 안에 AI로 자동화될 수 있다고 전망했습니다. 전문직 영역까지 빠르게 AI가 대체할 것이라는 경고로 업계에 큰 반향을 일으키고 있습니다.
• [🔗 Fortune](https://fortune.com/article/why-microsoft-ai-chief-mustafa-suleyman-predicts-ai-automation-18-months/)

---

**7️⃣ Anthropic, SDK 스타트업 Stainless 인수 — 개발자 경험 강화**
Anthropic이 5월 18일 고품질 API SDK를 자동 생성하는 스타트업 Stainless를 인수했습니다. Claude API 개발자 경험 레이어에 대한 전략적 투자로, Claude 생태계 확장을 가속화할 것으로 기대됩니다.
• [🔗 Build Fast With AI – Top Stories](https://www.buildfastwithai.com/blogs/ai-news-today-may-23-2026)

---

*출처: Build Fast With AI, CNBC, Google Blog, Fortune, LLM Stats, MacRumors, The Daily Upside, WhatLLM*`;

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
    if (data.trim() === 'ok') {
      console.log('\n✅ Mattermost 발송 성공! AI 주요 뉴스가 채널에 전송되었습니다.');
    } else {
      console.log('\n⚠️  응답: ' + data);
    }
  });
});

req.on('error', (e) => {
  console.error('❌ 발송 실패: ' + e.message);
});

req.write(body, 'utf8');
req.end();
