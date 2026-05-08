const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 8일)

---

**1️⃣ Anthropic, Akamai와 18억 달러 컴퓨팅 계약 + SpaceX 데이터센터 파트너십**
Anthropic이 클라우드 기업 Akamai와 18억 달러(약 2.5조 원) 규모의 컴퓨팅 공급 계약을 체결했습니다. 동시에 SpaceX의 Colossus 1 데이터센터 전체 용량(300MW 이상, GPU 22만+ 개)을 활용하는 협약도 맺었습니다. Anthropic은 단 한 분기 만에 매출이 80배 증가한 것으로 전해집니다.
• [🔗 Bloomberg](https://www.bloomberg.com/news/articles/2026-05-08/anthropic-inks-1-8-billion-computing-deal-with-akamai)
• [🔗 Fortune](https://fortune.com/2026/05/08/anthropic-80fold-growth-quarter-renting-elon-musk-data-center/)

---

**2️⃣ Anthropic, 500억 달러 펀딩 추진 · 기업가치 1조 달러 근접**
Anthropic이 이번 여름 약 500억 달러(약 70조 원) 규모의 신규 투자 유치를 검토 중이며, 기업가치가 1조 달러에 육박할 것으로 예상됩니다. Blackstone, Hellman & Friedman, Goldman Sachs 지원 아래 금융·의료·제조 등 중견기업 대상 엔터프라이즈 AI 서비스 회사도 신설 예정입니다.
• [🔗 TechFundingNews](https://techfundingnews.com/anthropic-nears-1t-valuation-as-claude-gains-ground-in-enterprise-race-with-openai/)
• [🔗 Solutions Review](https://solutionsreview.com/ai-news-for-the-week-of-may-8-updates-from-anthropic-cribl-ibm-more/)

---

**3️⃣ OpenAI, GPT-5.5 Instant 출시 및 1,220억 달러 자금 조달 완료**
OpenAI가 GPT-5.5 Instant를 포함한 신규 음성 AI 모델과 API 업데이트를 공개했습니다. Amazon, Nvidia, SoftBank, Microsoft 등이 참여한 8,520억 달러 기업가치 기준으로 1,220억 달러 규모의 자금 조달도 완료한 것으로 알려졌습니다.
• [🔗 OpenAI News](https://openai.com/news/)
• [🔗 LLM Stats](https://llm-stats.com/llm-updates)

---

**4️⃣ 중국 AI 4사, 오픈소스 코딩 LLM 잇따라 공개**
12일 사이에 Z.ai(GLM-5.1), MiniMax(M2.7), Moonshot(Kimi K2.6), DeepSeek(V4) 등 중국 4개 AI 기업이 오픈웨이트 코딩 특화 모델을 연이어 출시했습니다. 이들 모델 가격은 Claude Opus 4.7의 3분의 1 이하로, 고성능 모델의 접근성을 크게 높였다는 평가를 받고 있습니다.
• [🔗 Air Street Press - State of AI May 2026](https://press.airstreet.com/p/state-of-ai-may-2026)

---

**5️⃣ 미국 정부, Google·Microsoft·xAI AI 모델 공개 전 사전 심사 협약**
미국 상무부 산하 CAISI가 Google DeepMind, Microsoft, xAI와 AI 모델 공개 전 정부 사전 평가 협약을 체결했습니다. 기존 OpenAI·Anthropic과의 협약을 갱신한 이번 조치는 트럼프 행정부의 AI 감독 강화 기조를 반영합니다.
• [🔗 CNBC](https://www.cnbc.com/2026/05/05/ai-oversight-trump-google-microsoft-xai.html)
• [🔗 The Hill](https://thehill.com/homenews/5863937-google-microsoft-xai-ai-testing/)

---

**6️⃣ Anthropic, AI 내부 작동을 자연어로 설명하는 NLA 기술 공개**
Anthropic이 AI 모델의 내부 활성화(activations)를 사람이 읽을 수 있는 자연어 텍스트로 직접 변환하는 'Natural Language Autoencoders(NLA)' 기술을 발표했습니다. AI 해석 가능성(interpretability) 연구의 새로운 이정표로 평가받고 있습니다.
• [🔗 MarkTechPost](https://www.marktechpost.com/2026/05/08/anthropic-introduces-natural-language-autoencoders-that-convert-claudes-internal-activations-directly-into-human-readable-text-explanations/)

---

**7️⃣ Cloudflare, 글로벌 네트워크 기반 LLM 고성능 인프라 발표**
Cloudflare가 전 세계 네트워크에서 LLM을 실행하기 위한 새로운 고성능 인프라를 공개했습니다. 모델의 입력 처리와 출력 생성을 분리된 최적화 시스템으로 운영하고, 맞춤형 추론 엔진으로 GPU를 효율적으로 관리하는 방식이 특징입니다.
• [🔗 InfoQ](https://www.infoq.com/news/2026/05/cloudflare-llm-infrastructure/)

---

*출처: Bloomberg, Fortune, TechFundingNews, Solutions Review, OpenAI, LLM Stats, Air Street Press, CNBC, The Hill, MarkTechPost, InfoQ*`;

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
