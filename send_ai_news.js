const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 18일)

---

**1️⃣ Google I/O 2026 내일 개막 — Gemini 4.0 공개 예정**
Google I/O 2026 키노트가 5월 19일(PT 오전 10시) 캘리포니아 Mountain View에서 개최된다. Google은 공식적으로 "최신 Gemini 모델 업데이트와 에이전틱 코딩" 세션을 예고했으며, 업계는 Gemini 4.0의 첫 공개가 이루어질 것으로 전망하고 있다.
• [🔗 Build Fast With AI](https://www.buildfastwithai.com/blogs/ai-news-today-may-18-2026)

---

**2️⃣ Anthropic, 기업가치 9,000억 달러 투자 라운드 마무리 중**
Anthropic이 9,000억 달러(약 1,260조 원) 평가를 받는 신규 투자 라운드를 진행 중이다. 2026년 1분기 연환산 매출(ARR)은 전년 대비 80배 성장해 440억 달러를 돌파했으며, PwC·Blackstone·Goldman Sachs 등 연 100만 달러 이상 지출 기업 고객이 1,000개사를 넘어섰다.
• [🔗 Build Fast With AI](https://www.buildfastwithai.com/blogs/ai-news-today-may-18-2026)

---

**3️⃣ GPT-5.5 Instant, ChatGPT 기본 모델로 교체 — xAI Grok 4.3도 확대 배포**
OpenAI가 5월 5일 GPT-5.5 Instant를 ChatGPT의 새 기본 모델로 전환했다. 속도·효율 면에서 이전 모델 대비 크게 개선되었으며, xAI의 Grok 4.3도 5월 6일부터 더 넓은 사용자층에 공개되고 있다.
• [🔗 LLM Stats - AI News](https://llm-stats.com/ai-news)
• [🔗 WhatLLM.org](https://whatllm.org/blog/new-ai-models-may-2026)

---

**4️⃣ 최초 상용 서브쿼드래틱 LLM 'SubQ 1M' 출시 — 1,200만 토큰 컨텍스트 지원**
스타트업 Subquadratic이 트랜스포머 구조를 대체하는 서브쿼드래틱 아키텍처 기반의 LLM 'SubQ 1M-Preview'를 출시했다. 최대 1,200만 토큰 컨텍스트를 지원하며, 초대형 문서 분석·법률·계약서 처리 등 롱 컨텍스트 활용 사례에 새 지평을 열었다는 평가다.
• [🔗 WhatLLM.org](https://whatllm.org/blog/new-ai-models-may-2026)
• [🔗 AI Flash Report](https://aiflashreport.com/model-releases.html)

---

**5️⃣ Cloudflare, 전 세계 엣지 네트워크에 LLM 추론 인프라 구축**
Cloudflare가 글로벌 네트워크에서 대형 언어 모델을 실행하기 위한 고성능 추론 인프라를 발표했다. 입력 처리와 출력 생성을 별도 최적화 시스템으로 분리하고, 자체 개발 추론 엔진으로 GPU를 효율적으로 관리한다.
• [🔗 InfoQ](https://www.infoq.com/news/2026/05/cloudflare-llm-infrastructure/)

---

**6️⃣ Microsoft AI 수장 "18개월 내 화이트칼라 업무 AI 자동화"**
Microsoft AI 수장 Mustafa Suleyman이 사무직 업무 대부분이 18개월 안에 AI에 의해 자동화될 것이라 예측했다. 생산성 혁신 기대와 함께 일자리 대체, 전환 관리에 대한 논란이 뜨겁다.
• [🔗 Fortune](https://fortune.com/article/why-microsoft-ai-chief-mustafa-suleyman-predicts-ai-automation-18-months/)

---

**7️⃣ Anthropic, Claude Code 요청 한도 전 유료 플랜에서 즉시 2배 상향**
Anthropic이 Claude Code의 모든 유료 플랜에서 Rate Limit을 즉시 효력으로 2배 확대했다. 빠르게 보급되고 있는 코딩 에이전트 사용 환경에서 개발자 생산성 향상에 직결되는 조치로 환영받고 있다.
• [🔗 Build Fast With AI](https://www.buildfastwithai.com/blogs/ai-news-today-may-18-2026)

---

*출처: Build Fast With AI, Fortune, LLM Stats, WhatLLM.org, InfoQ, AI Flash Report*`;

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
