const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 6일)

---

**1️⃣ OpenAI, GPT-5.5 Instant를 ChatGPT 기본 모델로 배포**
OpenAI가 5월 5일 GPT-5.5 Instant를 ChatGPT의 새 기본 모델로 출시했습니다. 법률·의료·금융 등 고위험 분야에서의 환각(Hallucination)을 줄이는 기술을 중점 적용하면서, 낮은 응답 지연 시간을 유지하는 것이 특징입니다. 기존 GPT-5.3 Instant를 대체하며 전체 ChatGPT 사용자에게 순차 적용됩니다.
• [🔗 LLM Stats - AI News](https://llm-stats.com/ai-news)

---

**2️⃣ NASA 퍼서비어런스, 최초로 AI가 계획한 화성 탐사 주행 성공**
NASA의 퍼서비어런스 로버가 Anthropic의 Claude 비전-언어 모델을 활용해 궤도 이미지와 지형 데이터를 분석, 인류 역사상 최초로 AI가 계획한 화성 주행을 성공적으로 완수했습니다. 이는 행성 탐사에서 AI 자율 제어가 실질적으로 활용된 새로운 이정표로 평가받고 있습니다.
• [🔗 Crescendo AI News](https://www.crescendo.ai/news/latest-ai-news-and-updates)

---

**3️⃣ IBM·RIKEN·클리브랜드 클리닉, 양자컴퓨터로 1만 2천 원자 단백질 시뮬레이션 성공**
IBM, 일본 이화학연구소(RIKEN), 클리브랜드 클리닉이 양자 시스템과 일본 슈퍼컴퓨터를 연결해 12,000개 이상의 원자로 구성된 생물학적 단백질 복합체 시뮬레이션에 성공했습니다. 양자 우위를 주장하진 않았으나, 향후 신약 개발 분야 활용 가능성을 열었다는 평가를 받고 있습니다.
• [🔗 Tech Startups](https://techstartups.com/2026/05/06/top-tech-news-today-may-6-2026/)

---

**4️⃣ Google, 오픈소스 AI 모델 Gemma 4 공개 — 에이전틱 추론 특화**
Google이 고급 추론 및 에이전틱 워크플로우에 특화된 새 오픈소스 AI 모델 시리즈 Gemma 4를 Apache 2.0 라이선스로 출시했습니다. 오픈소스 AI 경쟁이 한층 치열해질 전망이며, Llama·Mistral 등 기존 오픈소스 모델들과 벤치마크 경쟁이 기대됩니다.
• [🔗 LLM Stats - LLM Updates](https://llm-stats.com/llm-updates)
• [🔗 Crescendo AI Breakthroughs](https://www.crescendo.ai/news/latest-ai-news-and-updates)

---

**5️⃣ AMD CEO "에이전틱 AI 수요 폭발"…나스닥 신고가 경신**
AMD의 리사 수 CEO가 에이전틱 AI의 급성장으로 CPU 수요가 폭발적으로 증가했다며 실적 전망을 대폭 상향 조정했습니다. 나스닥은 2% 이상 상승하며 25,838 신고가를 기록했고, AI 데이터센터 관련주 Super Micro Computer도 하루 만에 24.5% 급등했습니다.
• [🔗 CNBC](https://www.cnbc.com/2026/05/05/stock-market-today-live-updates.html)
• [🔗 Motley Fool](https://www.fool.com/coverage/stock-market-today/2026/05/06/stock-market-today-may-6-super-micro-computer-surges-after-earnings-beat-and-strong-ai-data-center-demand/)

---

**6️⃣ G7, 'AI 책임 혁신 허브' 출범 추진…한국 스타트업도 참여 기회**
G7이 AI의 책임 있는 혁신을 지원하는 'AI 책임 혁신 허브(AI Responsible Innovation Hub)' 출범을 구상 중입니다. 한국 스타트업도 국제 AI 표준 수립에 참여할 기회가 생길 전망이며, AI 거버넌스 분야에서 한국의 글로벌 입지 강화가 기대됩니다.
• [🔗 아이티인사이트](https://www.itinsight.kr/news/456468)

---

**7️⃣ Anthropic, 데스크톱-스마트폰 연속 대화 'OpenClaw' 기능 공개**
Anthropic이 데스크톱 Claude와 스마트폰 간 지속적인 대화를 가능하게 하는 'OpenClaw' 기능을 선보였습니다. Meta도 유사한 크로스디바이스 AI 에이전트 'Hatch'와 인스타그램용 에이전틱 쇼핑 도구를 개발 중으로 알려져, 크로스디바이스 AI 에이전트 경쟁이 본격화되고 있습니다.
• [🔗 The Decoder](https://the-decoder.com/google-and-meta-race-to-build-personal-ai-agents-as-anthropic-and-openai-pull-further-ahead/)

---

*출처: LLM Stats, Crescendo AI, Tech Startups, CNBC, Motley Fool, 아이티인사이트, The Decoder*`;

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
