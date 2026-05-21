const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 21일)

---

**1️⃣ Google I/O 2026: Gemini 3.5 Flash·Omni·Spark 공개**
Google이 I/O 2026에서 플래그십 수준 성능을 Flash 속도로 제공하는 Gemini 3.5 Flash를 정식 출시했습니다. 영상 포함 모든 멀티모달 콘텐츠를 생성하는 Gemini Omni, 사용자 대신 디지털 작업을 처리하는 개인 에이전트 Gemini Spark도 함께 발표됐습니다. 검색 내 정보 에이전트, Universal Cart 등 AI 에이전트 기반 기능도 대거 공개됐습니다.
• [🔗 Google Blog](https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/)
• [🔗 9to5Google](https://9to5google.com/2026/05/19/google-io-2026-news/)

---

**2️⃣ 구글·삼성 AI 스마트 글래스 '인텔리전트 아이웨어' 실물 최초 공개**
Google I/O 2026에서 삼성전자와 공동 개발 중인 AI 스마트 글래스 '인텔리전트 아이웨어(Intelligent Eyewear)'의 실물 디자인이 처음 공개됐습니다. Android XR 플랫폼 기반으로 실시간 번역·AI 어시스턴트 기능을 갖추며 가을 출시를 목표로 합니다.
• [🔗 Tom's Guide](https://www.tomsguide.com/news/live/google-io-2026-live-news-updates)
• [🔗 아주경제](https://www.ajunews.com/view/20260521080240253)

---

**3️⃣ Meta, AI 투자 확대 위해 8,000명 해고 단행**
Meta가 전체 인력의 약 10%인 8,000명 규모 구조조정을 시작했습니다. 채용·고객지원·콘텐츠 모더레이션 등 AI 비관련 직군이 주 대상이며, 약 7,000명은 AI 중심 팀으로 재배치됩니다. Meta는 2026년 자본 지출 목표를 최대 1,450억 달러로 상향 조정하며 AI 인프라에 집중하고 있습니다.
• [🔗 NPR](https://www.npr.org/2026/05/20/nx-s1-5826917/meta-layoffs-ai-jobs)
• [🔗 CNBC](https://www.cnbc.com/2026/05/18/metas-layoffs-starting-this-week-underscore-zuckerbergs-ai-reality-.html)

---

**4️⃣ GPT-5.5 Instant, ChatGPT 기본 모델로 전환**
OpenAI가 ChatGPT의 기본 모델을 GPT-5.5 Instant로 교체했습니다. 4월의 대형 모델 경쟁 이후 5월에는 스케일보다 아키텍처 혁신에 집중하는 분위기가 형성되고 있으며, xAI Grok 4.3도 같은 기간 더 넓은 사용자층에 공개됐습니다.
• [🔗 WhatLLM.org](https://whatllm.org/blog/new-ai-models-may-2026)
• [🔗 LLM Stats](https://llm-stats.com/ai-news)

---

**5️⃣ SubQ, 트랜스포머 탈피 상용 LLM 최초 출시·2,900만 달러 투자 유치**
SubQ가 트랜스포머가 아닌 서브쿼드라틱(subquadratic) 아키텍처 기반의 첫 상용 LLM을 출시하며 2,900만 달러 시드 투자를 유치했습니다. 1,200만 토큰 컨텍스트를 지원하며 기존 프런티어 모델 대비 장문 처리 비용 및 속도에서 이점을 주장합니다.
• [🔗 WhatLLM.org](https://whatllm.org/blog/new-ai-models-may-2026)
• [🔗 AI Flash Report](https://aiflashreport.com/model-releases.html)

---

**6️⃣ 중국 AI 4개사, 12일 만에 오픈소스 코딩 모델 일제 출시**
Z.ai(GLM-5.1), MiniMax(M2.7), Moonshot(Kimi K2.6), DeepSeek(V4) 등 중국 AI 연구소 4곳이 12일 간격으로 오픈웨이트 코딩 특화 모델을 잇달아 공개했습니다. 오픈소스 AI 분야에서 중국 기업들의 존재감이 한층 강해지고 있습니다.
• [🔗 WhatLLM.org](https://whatllm.org/blog/new-ai-models-may-2026)
• [🔗 AI Flash Report](https://aiflashreport.com/model-releases.html)

---

**7️⃣ 미국 백악관, AI 모델 공개 전 정부 검토 행정명령 추진**
미국 백악관이 새로운 AI 모델을 공개하기 전 정부 차원의 검토를 의무화하는 행정명령을 조만간 발동할 것으로 알려졌습니다. AI 안전성 강화와 규제를 위한 움직임이 본격화되는 신호로 해석됩니다.
• [🔗 CNN](https://www.cnn.com/2026/05/21/us/5-things-to-know-for-may-21-ai-compensation-fund-irans-weapons-california-wildfires-food-preservatives)

---

*출처: Google Blog, 9to5Google, Tom's Guide, 아주경제, NPR, CNBC, WhatLLM.org, LLM Stats, AI Flash Report, CNN*`;

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
