const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 6월 4일)

---

**1️⃣ OpenAI, GPT-Rosalind 글로벌 접근 확대 및 바이오방어 프로그램 출범**
OpenAI가 생명과학 특화 추론 모델 GPT-Rosalind의 대규모 업데이트를 발표했습니다. 약물 발견·유전체학·실험실 연구 성능이 대폭 향상됐으며, 처음으로 전 세계 적격 기관에 리서치 프리뷰를 개방했습니다. 미국 정부 및 동맹 공중보건 파트너와 협력하는 '로절린드 바이오디펜스' 프로그램도 공식 출범해 AI의 바이오 안보 분야 진출이 본격화되고 있습니다.
• [🔗 OpenAI - GPT-Rosalind 신규 기능 소개](https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/)
• [🔗 OpenAI - Rosalind Biodefense 프로그램](https://openai.com/index/strengthening-societal-resilience-with-rosalind-biodefense/)
• [🔗 TechTimes - GPT-Rosalind 업데이트 상세](https://www.techtimes.com/articles/317754/20260604/gpt-rosalind-drug-discovery-update-openai-cuts-genomics-compute-expands-global-access.htm)

---

**2️⃣ Google, Gemini 3.5 Flash 정식 공개 및 Managed Agents API 출시**
Google이 Gemini 3.5 Flash를 정식 공개했습니다. 대형 플래그십 모델 수준의 지능을 갖추면서 빠른 응답 속도를 자랑하며, 코딩·에이전틱 벤치마크에서 Gemini 3.1 Pro를 능가했습니다. 단일 API 호출로 격리된 Linux 환경에서 에이전트를 실행하는 Managed Agents API도 함께 출시되어 개발자들의 에이전트 구축이 더욱 쉬워졌습니다.
• [🔗 Google Blog - I/O 2026 주요 발표 100선](https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/)
• [🔗 Tosea.ai - Google I/O 2026 총정리](https://tosea.ai/blog/google-io-2026-announcements-recap)

---

**3️⃣ MiniMax, 신규 고속 LLM 3종 연달아 출시**
중국 AI 스타트업 MiniMax가 6월 3일 M2.5 Highspeed, M2.7 Highspeed, M2.7 모델 3종을 동시 출시했습니다. 알리바바의 Qwen3 Coder Next도 함께 공개됐습니다. 현재 AI 모델은 평균 3일마다 새로 출시되며, 전 세계에 500종 이상의 LLM이 경쟁 중인 격변의 시대가 이어지고 있습니다.
• [🔗 LLM Stats - 최신 AI 모델 업데이트](https://llm-stats.com/llm-updates)
• [🔗 Price Per Token - 오늘의 신규 모델](https://pricepertoken.com/news/model-releases)

---

**4️⃣ Broadcom, AI 호실적에도 주가 12% 급락… 과열된 기대치가 문제**
Broadcom이 분기 최대 매출·수익 기록을 달성하고 AI 부문 84% 연간 성장률을 전망했음에도, 이미 고공행진한 주가 대비 기대를 충족하지 못해 6월 4일 주가가 12.59% 급락했습니다. AI 인프라 투자 과열에 대한 시장의 경계심을 보여주는 사례로 주목받고 있습니다.
• [🔗 Motley Fool - 6월 4일 주식 시장 동향](https://www.fool.com/coverage/stock-market-today/2026/06/04/stock-market-today-june-4-broadcom-shares-plunge-after-ai-outlook-misses-high-investor-expectations/)

---

**5️⃣ 에이전틱 AI 스타트업 투자 급증 — 평균 라운드 규모 $155M 기록**
2026년 에이전틱 AI 시장이 폭발적으로 성장하며 최근 투자 라운드 평균 규모가 1억 5,500만 달러로 전년 대비 약 2배 증가했습니다. ElevenLabs는 시리즈 D에서 5억 달러를 조달해 기업 가치 110억 달러를 달성했습니다. 투자자들은 이제 단순한 자율성보다 안전성·가관측성·엔터프라이즈 호환성을 핵심 평가 기준으로 삼고 있습니다.
• [🔗 AI Funding Tracker - 에이전틱 AI 상위 스타트업](https://aifundingtracker.com/top-ai-agent-startups/)
• [🔗 New Market Pitch - 에이전틱 AI 투자 트렌드](https://newmarketpitch.com/blogs/news/agentic-ai-funding-trends)

---

**6️⃣ Anthropic Claude Opus 4.8 공개 (5월 28일 출시)**
Anthropic이 Claude 4.X 시리즈 최상위 모델 Claude Opus 4.8을 출시했습니다. 추론·코딩·복잡한 작업 처리 능력이 대폭 향상됐으며, Claude Code의 기본 모델로도 채택되어 개발자 생산성 향상에 기여하고 있습니다. 모델은 현재 Anthropic API를 통해 접근 가능합니다.
• [🔗 LLM Stats - AI 모델 최신 릴리즈 정보](https://llm-stats.com/ai-news)

---

**7️⃣ 한국 중기부, 2026년 AI 예산 약 8천억 원 투입**
대한민국 중소벤처기업부가 2026년도 AI 관련 예산으로 약 8천억 원을 편성했습니다. 중소기업과 스타트업의 AI 전환을 적극 지원하며, AI 에이전트·핀테크 AI 등 다양한 분야에서 정부 주도 투자가 확대되고 있습니다.
• [🔗 대한민국 정책브리핑 - 중기부 AI 예산](https://www.korea.kr/multi/visualNewsView.do?newsId=148957419&pWise=sub&pWiseSub=C1)

---

*출처: OpenAI, Google Blog, LLM Stats, Motley Fool, AI Funding Tracker, Anthropic, 대한민국 정책브리핑*`;

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
