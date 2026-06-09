const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 6월 9일)

---

**1️⃣ OpenAI, 미국 증시 IPO 기밀 신청**
ChatGPT 개발사 OpenAI가 미국 증시 상장을 위한 기밀 서류를 제출했습니다. 예상 기업가치는 최대 1조 달러 수준으로, Anthropic·SpaceX와 함께 AI 업계 최대 IPO 중 하나로 주목받고 있습니다.
• [🔗 JDSupra - AI Today in 5: The OpenAI Files to go Public Edition](https://www.jdsupra.com/legalnews/ai-today-in-5-june-9-2026-the-openai-06014/)

---

**2️⃣ Apple WWDC 2026: Siri AI 업그레이드, Google과 파트너십**
Apple이 WWDC 2026에서 Google과의 파트너십으로 강화된 'Siri AI'를 발표했습니다. 자연스러운 대화, 화면 맥락 인식, 이미지 편집, 작문 도구를 지원하며 대화 기록 기능을 갖춘 전용 앱으로 출시됩니다.
• [🔗 Build Fast with AI - June 8 News](https://www.buildfastwithai.com/blogs/ai-news-today-june-8-2026)
• [🔗 TechStartups - Top Tech News June 9](https://techstartups.com/2026/06/09/top-tech-news-today-june-9-2026/)

---

**3️⃣ 중국, 2,950억 달러 AI 인프라 투자 계획 추진**
중국이 글로벌 AI 패권 경쟁에서 주도권을 확보하기 위해 약 2,950억 달러 규모의 AI 인프라 구축 계획을 발표했습니다. 데이터센터, 전력망, 위성 네트워크 등 핵심 인프라 전반에 걸친 대규모 투자입니다.
• [🔗 TechStartups - Top Tech News June 9](https://techstartups.com/2026/06/09/top-tech-news-today-june-9-2026/)

---

**4️⃣ NVIDIA Nemotron 3 Ultra 550B 및 MiniMax M3 출시**
NVIDIA가 5,500억 파라미터 규모의 Nemotron 3 Ultra 550B를 공개했으며, MiniMax도 M2.5 Highspeed·M2.7·M3 등 여러 모델을 6월 초 연속 출시했습니다. Google Gemma 4 12B, Alibaba Qwen3.7 Plus도 이달 공개되며 LLM 경쟁이 가속화되고 있습니다.
• [🔗 LLM Stats - AI Model Releases](https://llm-stats.com/ai-news)
• [🔗 AI Flash Report - Model Timeline](https://aiflashreport.com/model-releases.html)

---

**5️⃣ Inception Mercury 2 출시 — 확산 아키텍처로 초당 1,000 토큰 돌파**
AI 스타트업 Inception이 트랜스포머가 아닌 확산(Diffusion) 아키텍처 기반의 추론 언어 모델 Mercury 2를 출시했습니다. 토큰을 병렬 생성해 초당 1,000 토큰 이상의 속도를 달성하며 차세대 모델 아키텍처 가능성을 보여줬습니다.
• [🔗 LLM Updates - June 2026](https://llm-stats.com/llm-updates)

---

**6️⃣ GitHub Copilot, 요청제에서 종량제 과금으로 전환**
Microsoft의 GitHub이 Copilot 과금 방식을 기존 요청 기반에서 사용량 기반 종량제(metered billing)로 변경합니다. 추론 비용 급증으로 무제한 구독 모델의 수익성이 어려워진 것이 주된 이유입니다.
• [🔗 Build MVP Fast - Best AI Models June 2026](https://www.buildmvpfast.com/articles/best-llms-2026-guide)

---

**7️⃣ OpenAI, AI 경제 영향 연구 플랫폼 'Economic Research Exchange' 출시**
OpenAI가 AI가 노동자·기업·경제에 미치는 영향을 연구하는 외부 연구자 지원 플랫폼을 론치했습니다. 프라이버시 보호 협업을 통해 실증적 증거를 쌓는 것이 목적으로, AI의 경제적 파급력 투명화를 추구합니다.
• [🔗 JDSupra - AI Today in 5](https://www.jdsupra.com/legalnews/ai-today-in-5-june-9-2026-the-openai-06014/)

---

*출처: JDSupra, TechStartups, Build Fast with AI, LLM Stats, AI Flash Report, Build MVP Fast*`;

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
