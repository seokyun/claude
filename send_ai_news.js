const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 6월 8일)

---

**1️⃣ Apple WWDC 2026: Gemini 기반 Siri 완전 재탄생, Claude도 iPhone 기본 AI로 선택 가능**
팀 쿡 CEO의 마지막 WWDC 기조연설에서 Apple은 Google Gemini 모델 기반으로 완전 재설계된 Siri AI를 공개했습니다. iOS 27 Extensions를 통해 사용자가 Claude, ChatGPT, Gemini 중 기본 AI 모델을 직접 선택할 수 있으며, Siri는 독립 앱으로 출시되어 멀티스텝 명령, 이미지·문서 첨부를 지원합니다. 팀 쿡은 9월 1일 회장직으로 전환 예정입니다.
• [🔗 TechRadar - WWDC 2026 Live](https://www.techradar.com/news/live/apple-wwdc-2026-live)
• [🔗 TechCrunch - WWDC 2026](https://techcrunch.com/2026/06/08/wwdc-2026-what-to-expect-from-siris-highly-anticipated-revamp-to-apple-intelligence-and-ios-27/)

---

**2️⃣ Anthropic, 연매출 300억 달러 돌파 — Claude Code가 성장 주도**
Anthropic CEO 다리오 아모데이는 Claude의 연매출 환산 실적이 300억 달러에 달했으며, 2026년 1분기에 80배 성장을 기록했다고 밝혔습니다. AI 코딩 도구 Claude Code는 출시 9개월 만에 연환산 매출 25억 달러를 달성하며 기업 코딩 시장의 42~54%를 점유하고 있습니다.
• [🔗 VentureBeat - Anthropic $30B 매출](https://venturebeat.com/technology/anthropic-says-it-hit-a-30-billion-revenue-run-rate-after-crazy-80x-growth)
• [🔗 Anthropic 공식 발표](https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation)

---

**3️⃣ Google Gemini 3.5 Flash 출시 — 플래그십급 성능, 4배 빠른 속도**
Google은 Gemini 3.5 Flash를 출시했으며, Intelligence Index 55점을 기록하고 이전 세대 대비 4배 빠른 초당 284 토큰 속도를 달성했습니다. 코딩 및 에이전트 벤치마크에서 Gemini 3.1 Pro를 능가하며, Gemini 3.5 Pro는 다음 달 출시 예정입니다.
• [🔗 LLM Stats - AI Updates June 2026](https://llm-stats.com/llm-updates)
• [🔗 AI News - June 2026](https://dentro.de/ai/news/)

---

**4️⃣ NVIDIA Nemotron 3 Ultra 550B 출시 — 초대형 오픈 LLM 등장**
NVIDIA가 6월 4일 Nemotron 3 Ultra 550B A55B 모델을 공개했습니다. 현존 최대 규모의 공개 LLM 중 하나로, AI 인프라 제공업체들이 주목하고 있습니다. 현재 AI 모델은 약 2일에 하나씩 신규 출시되는 초고속 사이클이 지속되고 있습니다.
• [🔗 LLM Stats - AI Model Releases](https://llm-stats.com/ai-news)
• [🔗 AI Flash Report - Model Timeline](https://aiflashreport.com/model-releases.html)

---

**5️⃣ Inception Mercury 2 출시 — 확산 아키텍처로 초당 1,000 토큰 돌파**
AI 스타트업 Inception이 트랜스포머가 아닌 확산(Diffusion) 아키텍처 기반의 추론 언어 모델 Mercury 2를 출시했습니다. 병렬 토큰 생성으로 초당 1,000 토큰 이상의 속도를 달성하며 차세대 모델 아키텍처의 가능성을 보여주고 있습니다.
• [🔗 Monthly LLM News June 2026 - Augusto Digital](https://augusto.digital/insights/blogs/monthly-llm-news-june-2026/)

---

**6️⃣ 미국 국방부, AI 공급사 다변화 검토 — OpenAI·Google로 Claude 대체 시험**
미 국방부(Pentagon)가 기밀 시스템에 사용 중인 Anthropic의 Claude를 OpenAI 및 Google 모델로 대체하는 방안을 테스트하고 있다고 밝혔습니다. AI 군사 활용 경쟁이 본격화되고 있는 가운데 공급사 다변화 및 보안 검토가 진행 중입니다.
• [🔗 Build Fast With AI - June 8 News](https://www.buildfastwithai.com/blogs/ai-news-today-june-8-2026)

---

**7️⃣ Google-SpaceX, AI 컴퓨팅 자원 공급 계약 체결**
Google이 SpaceX와 클라우드 서비스 계약을 체결하고 AI 컴퓨팅 용량을 확보했습니다. AI 인프라 수요가 급증하는 가운데 빅테크와 민간 우주 기업 간의 협력이 새로운 AI 인프라 생태계를 형성하고 있습니다.
• [🔗 AI Tools Recap - June 8](https://aitoolsrecap.com/Blog/ai-news-june-8-2026)

---

*출처: TechRadar, TechCrunch, VentureBeat, Anthropic, LLM Stats, Augusto Digital, Build Fast With AI*`;

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
    data += d.toString();
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
