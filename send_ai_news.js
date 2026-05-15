const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 15일)

---

**1️⃣ OpenAI · NVIDIA, 역대급 전략적 파트너십 체결 — $1,000억 투자·10GW 배포**
OpenAI와 NVIDIA가 차세대 AI 인프라 구축을 위한 대규모 전략적 파트너십을 발표했습니다. NVIDIA는 OpenAI에 최대 $1,000억을 투자하며, 2026년 하반기부터 NVIDIA Vera Rubin 플랫폼 기반 10기가와트 규모 AI 시스템을 단계적으로 배포합니다. 수퍼인텔리전스 구현을 위한 인프라 투자로 업계의 이목이 집중되고 있습니다.
• [🔗 NVIDIA Newsroom](https://nvidianews.nvidia.com/news/openai-and-nvidia-announce-strategic-partnership-to-deploy-10gw-of-nvidia-systems)

---

**2️⃣ Cerebras, 나스닥 상장 첫날 70% 급등 — 기업가치 $950억 돌파**
AI 추론 전용 반도체 스타트업 Cerebras가 나스닥에 상장하며 첫날 주가가 70% 급등하는 블록버스터 IPO를 기록했습니다. OpenAI와의 대형 파트너십이 투자자들의 높은 기대를 이끌었고, 기업가치는 $950억에 달했습니다. 웨이퍼 규모 AI 칩 시장의 새로운 국면을 알리는 사건으로 평가됩니다.
• [🔗 Fortune](https://fortune.com/2026/05/15/cerebras-soars-almost-70-by-market-close-in-a-true-blockbuster-ipo/)

---

**3️⃣ Anthropic, Claude Opus 4 공식 출시 — 역대 가장 강력한 Claude**
Anthropic이 Claude 모델 패밀리 사상 가장 강력한 Claude Opus 4를 공식 출시했습니다. 실질적인 AI 에이전트 활용에 초점을 맞춘 이번 모델은 복잡한 멀티스텝 업무와 고난도 추론 작업에서 탁월한 성능을 발휘하며, Anthropic의 에이전트 중심 전략을 집약한 플래그십 모델입니다.
• [🔗 WhatLLM](https://whatllm.org/blog/new-ai-models-may-2026)

---

**4️⃣ MiniMax M2.5 · M2.7 신규 모델군 일괄 출시 (5월 15일)**
중국 AI 스타트업 MiniMax가 오늘 M2.5 Highspeed, M2.7 Highspeed, M2.7 등 3종 모델을 동시 출시했습니다. 빠른 추론 속도와 비용 효율성에 특화된 상용 모델로, 프론티어 모델 수준의 성능을 낮은 비용으로 제공한다는 점에서 주목받고 있습니다.
• [🔗 LLM Stats](https://llm-stats.com/llm-updates)

---

**5️⃣ OpenAI, AI 기업 전문 자회사 'Deployment Company' 출범 · Tomoro 인수**
OpenAI가 기업 AI 도입 가속화를 목표로 'OpenAI Deployment Company'를 $40억 초기 투자로 출범했습니다. 동시에 AI 컨설팅 업체 Tomoro를 인수해 150여 명의 AI 엔지니어를 확보하며 엔터프라이즈 고객 지원 역량을 대폭 강화합니다.
• [🔗 OpenAI Blog](https://openai.com/index/openai-launches-the-deployment-company/)

---

**6️⃣ GPT-5.5 Instant, ChatGPT 기본 모델로 적용 — 고위험 도메인 할루시네이션 감소**
OpenAI의 경량 추론 모델 GPT-5.5 Instant가 5월 5일부터 ChatGPT 기본 모델로 채택됐습니다. 법률·의료·금융 등 고위험 분야에서 환각(hallucination)을 줄이고 응답 속도를 높인 것이 특징으로, 실용적인 ChatGPT 사용 환경을 한층 개선합니다.
• [🔗 LLM Stats](https://llm-stats.com/ai-news)

---

**7️⃣ HubSpot, AI 답변 엔진 가시성 추적 대시보드 'AEO Sensor' 출시**
HubSpot이 ChatGPT·Gemini·Perplexity 등 주요 AI 답변 엔진에서 자사 브랜드 언급도와 인용 패턴을 추적하는 공개 대시보드 'AEO Sensor'를 선보였습니다. AI가 검색을 대체하는 시대에 브랜드 노출 전략을 재정의하는 새로운 마케팅 도구로 평가됩니다.
• [🔗 Marketing Profs](https://www.marketingprofs.com/opinions/2026/54786/ai-update-may-15-2026-ai-news-and-views-from-the-past-week)

---

*출처: NVIDIA Newsroom, Fortune, WhatLLM, LLM Stats, OpenAI Blog, Marketing Profs*`;

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
