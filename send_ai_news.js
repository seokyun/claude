const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 16일)

---

**1️⃣ 중국 AI 4개 랩, 오픈소스 코딩 모델 동시 출격**
Z.ai(GLM-5.1), MiniMax(M2.7), Moonshot(Kimi K2.6), DeepSeek(V4) 등 중국 주요 AI 연구소 4곳이 12일 이내에 오픈웨이트 코딩 모델을 잇따라 공개했습니다. 에이전틱 엔지니어링 영역에서 서방 최전선 모델과 유사한 성능을 보이면서도 추론 비용은 Claude Opus 4.7의 1/3 이하 수준으로, 개방형 AI 시장에서 중국의 존재감이 더욱 두드러지고 있습니다.
• [🔗 WhatLLM.org](https://whatllm.org/blog/new-ai-models-may-2026)
• [🔗 LLM Stats](https://llm-stats.com/ai-news)

---

**2️⃣ Anthropic, 연 매출 $300억 돌파 & Google $400억 투자 유치**
Anthropic이 Claude 고객 성장 가속에 힘입어 연환산 매출이 $300억(약 41조 원)을 넘어섰다고 밝혔습니다. 연 100만 달러 이상 지출 기업 고객은 1,000곳을 돌파하며 2개월 만에 2배로 증가했습니다. Google은 현금 및 컴퓨트 형태로 Anthropic에 최대 $400억 규모 투자를 약정했습니다.
• [🔗 TechCrunch](https://techcrunch.com/2026/04/24/google-to-invest-up-to-40b-in-anthropic-in-cash-and-compute/)
• [🔗 CNBC](https://www.cnbc.com/2026/04/24/google-to-invest-up-to-40-billion-in-anthropic-as-search-giant-spreads-its-ai-bets.html)

---

**3️⃣ Google·Microsoft·xAI, 미국 정부에 AI 모델 사전 접근 허용**
Google, Microsoft, xAI가 미국 상무부 AI 표준센터(CASI)에 신제품 출시 전 AI 모델 조기 접근을 허용하기로 합의했습니다. 이미 선행한 OpenAI·Anthropic에 이어 빅테크 전반이 정부 규제 협력 대열에 합류하면서, AI 거버넌스 체계 구축이 더욱 속도를 내고 있습니다.
• [🔗 CNN Business](https://www.cnn.com/2026/05/05/tech/microsoft-google-xai-government-test-ai-models)
• [🔗 Claims Journal](https://www.claimsjournal.com/news/national/2026/05/05/337371.htm)

---

**4️⃣ EU AI Act 간소화 잠정 합의 도달**
EU 이사회와 유럽의회가 5월 7일 AI Act 이행을 간소화하는 'AI 옴니버스' 법안에 잠정 합의했습니다. SME에만 적용되던 규제 면제를 소규모 중견기업(SMC)으로 확대하고, AI 생성 콘텐츠 투명성 규정 유예 기간을 6개월에서 3개월로 단축합니다. 투명성 규정은 2026년 8월부터 발효됩니다.
• [🔗 EU Council](https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/)

---

**5️⃣ GPT-5.5 Instant, ChatGPT 기본 모델 전환 & EU에 사이버 특화 버전 제공**
OpenAI가 GPT-5.5 Instant를 ChatGPT의 새 기본 모델로 설정했습니다. 동시에 EU 사이버보안 팀을 대상으로 GPT-5.5-Cyber의 제한적 프리뷰를 제공하며 규제 기관과의 협력을 강화하고 있습니다. Anthropic의 Mythos 모델은 EU 공개를 아직 보류 중입니다.
• [🔗 CNBC](https://www.cnbc.com/2026/05/11/openai-eu-cyber-model-anthropic-mythos-gpt.html)
• [🔗 LLM Stats](https://llm-stats.com/llm-updates)

---

**6️⃣ Inception, 확산 아키텍처 기반 Mercury 2 추론 LLM 출시**
Inception이 토큰을 병렬로 생성하는 확산(Diffusion) 아키텍처를 활용한 추론 특화 LLM Mercury 2를 공개했습니다. 초당 1,000 토큰 이상의 처리 속도를 달성하며 기존 자동회귀 방식 대비 혁신적인 성능을 보여줍니다. 장기 컨텍스트와 복잡한 추론 작업에서 특히 강점을 발휘합니다.
• [🔗 WhatLLM.org](https://whatllm.org/blog/new-ai-models-may-2026)
• [🔗 Air Street Press](https://press.airstreet.com/p/state-of-ai-may-2026)

---

**7️⃣ Novo Nordisk, OpenAI와 전사적 AI 통합 파트너십 체결**
덴마크 제약 기업 Novo Nordisk가 OpenAI와 전략적 파트너십을 체결하고 신약 개발·임상시험·제조·공급망 전 영역에 AI를 도입하기로 했습니다. 2026년 말까지 완전 배포를 목표로 하며, 비만·당뇨병 신치료제 발굴을 가속화할 계획입니다.
• [🔗 imFounder](https://imfounder.com/science-tech/ai/ai-updates-may-2026/)
• [🔗 Crescendo AI](https://www.crescendo.ai/news/latest-ai-news-and-updates)

---

*출처: WhatLLM.org, LLM Stats, TechCrunch, CNBC, CNN Business, EU Council, imFounder, Air Street Press*`;

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
      console.log('\n✅ 발송 성공: Mattermost 채널에 AI 뉴스가 정상적으로 전송되었습니다.');
    } else {
      console.log('\n응답:', data);
    }
  });
});

req.on('error', (e) => {
  console.error('❌ 발송 실패:', e.message);
});

req.write(body, 'utf8');
req.end();
