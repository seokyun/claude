const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 29일)

---

**1️⃣ Anthropic, Claude Opus 4.8 출시 및 65억 달러 추가 투자 유치**
Anthropic이 최신 모델 Claude Opus 4.8을 공개했습니다. 이전 모델 대비 코딩 점수(64.3% → 69.2%), 멀티모달 추론(54.7% → 57.9%) 등이 향상되며, Claude Code에 '동적 워크플로(Dynamic Workflows)' 기능이 연구 프리뷰로 추가됐습니다. 가격은 이전과 동일하게 유지되며, 이날 65억 달러 규모의 추가 투자도 함께 발표됐습니다.
• [🔗 TechCrunch](https://techcrunch.com/2026/05/28/anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool/)
• [🔗 SiliconANGLE](https://siliconangle.com/2026/05/28/anthropic-launches-claude-opus-4-8-raises-65b-new-funding/)
• [🔗 MacRumors](https://www.macrumors.com/2026/05/28/anthropic-claude-opus-4-8/)

---

**2️⃣ Google, Gemini 3.5 Flash 정식 출시(GA)**
Google의 Gemini 3.5 Flash가 일반 공개(GA) 단계에 돌입했습니다. 동급 모델 대비 4배 빠른 속도로 프론티어급 지능을 제공하며, 비용 효율적인 추론 및 에이전트 작업에 최적화된 모델로 평가받고 있습니다.
• [🔗 LLM Stats](https://llm-stats.com/ai-news)
• [🔗 WhatLLM](https://whatllm.org/blog/new-ai-models-may-2026)

---

**3️⃣ SubQ, 트랜스포머 아닌 최초 상용 LLM 출시 — 1,200만 토큰 컨텍스트**
스타트업 SubQ가 2,900만 달러 시드 투자를 바탕으로 최초의 비(非)트랜스포머 상용 LLM을 선보였습니다. 네이티브 1,200만 토큰 컨텍스트 윈도우를 지원하며, 장문 컨텍스트 작업에서 기존 프론티어 모델 대비 1/5 비용, 최대 52배 빠른 어텐션 처리 속도를 달성했다고 밝혔습니다.
• [🔗 WhatLLM 리포트](https://whatllm.org/blog/new-ai-models-may-2026)

---

**4️⃣ OpenAI, '배포 회사' 설립 — 19개 투자사와 40억 달러 초기 자본**
OpenAI가 19개 글로벌 투자사·컨설팅·시스템통합사와 협력해 'OpenAI Deployment Company'를 출범했습니다. TPG가 리드 파트너로 참여하고 Advent, Bain Capital, Brookfield가 공동 창립 파트너로 나섰으며, 초기 자본 40억 달러 이상으로 기업 AI 도입 가속화를 목표로 합니다.
• [🔗 OpenAI 공식 발표](https://openai.com/index/openai-launches-the-deployment-company/)

---

**5️⃣ NVIDIA·IREN, 5기가와트 AI 인프라 구축 전략적 파트너십 체결**
NVIDIA와 AI 데이터센터 기업 IREN이 최대 5GW 규모의 AI 팩토리 구축을 위한 전략적 파트너십을 발표했습니다. IREN은 NVIDIA에게 5년간 3,000만 주 매수권(행사가 주당 70달러, 최대 21억 달러 규모)을 부여하며, 텍사스 스위트워터 캠퍼스 2GW 부지를 주요 거점으로 활용할 예정입니다.
• [🔗 NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-and-iren-announce-strategic-partnership-to-accelerate-deployment-of-up-to-5-gigawatts-of-ai-infrastructure)

---

**6️⃣ Anysphere(Cursor), 23억 달러 시리즈 D 유치 — 기업가치 293억 달러**
AI 코딩 도구 Cursor의 개발사 Anysphere가 23억 달러 규모의 시리즈 D 투자를 유치했습니다. 5개월 만에 기업가치가 세 배 가까이 상승해 293억 달러에 달하며, AI 개발 도구 시장의 급성장세를 반영하고 있습니다.
• [🔗 Crescendo AI 뉴스](https://www.crescendo.ai/news/latest-vc-investment-deals-in-ai-startups)

---

**7️⃣ 퓨리오사 AI, 브로드콤과 차세대 AI 추론 플랫폼 공동 개발 파트너십**
국내 AI 반도체 스타트업 퓨리오사 AI가 글로벌 반도체 기업 브로드콤(Broadcom)과 차세대 AI 추론 플랫폼 공동 개발을 위한 전략적 파트너십을 체결했습니다. 이번 협력은 국산 AI 반도체의 글로벌 경쟁력 강화에 기여할 것으로 기대됩니다.
• [🔗 클릭투데이](https://www.cliktoday.com/2026/05/20260529-today-news.html)

---

*출처: TechCrunch, SiliconANGLE, MacRumors, LLM Stats, WhatLLM, OpenAI, NVIDIA Newsroom, Crescendo AI, 클릭투데이*`;

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
