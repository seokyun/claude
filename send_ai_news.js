const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 6월 15일)

---

**1️⃣ OpenAI, Sora 서비스 전격 중단**
OpenAI가 동영상 생성 AI 서비스 Sora를 공식 종료했습니다. 하루 운영 비용이 약 1,500만 달러에 달했지만 총 매출은 210만 달러에 불과해 수익성 악화가 주요 원인으로 분석됩니다.
• [🔗 Build Fast with AI](https://www.buildfastwithai.com/blogs/ai-news-today-june-15-2026)
• [🔗 unrot.co](https://unrot.co/blogs/ai-news-today-june-15-2026)

---

**2️⃣ NAVER Cloud & NVIDIA, 기가와트급 AI 팩토리 구축 협약**
NAVER Cloud와 NVIDIA가 한국에 기가와트 규모의 AI 팩토리를 구축하는 전략적 파트너십을 체결했습니다. 2027년 세종 55MW를 시작으로 2028년 200MW까지 확대할 계획이며, NVIDIA DSX 플랫폼 기반의 풀스택 인프라를 적용합니다.
• [🔗 NAVER Corp 공식 발표](https://navercorp.com/en/media/pressReleasesDetail?seq=10034347)
• [🔗 Tech Times](https://www.techtimes.com/articles/318006/20260609/naver-nvidia-seal-1gw-ai-factory-plan-dsx-platform-powers-korea-sovereign-cloud.htm)

---

**3️⃣ Google Gemini 3.5 Pro, 6월 말 출시 임박**
Google의 차세대 모델 Gemini 3.5 Pro가 200만 토큰 컨텍스트 창과 Deep Think 추론 모드를 탑재하고 6월 30일 이전 출시를 앞두고 있습니다.
• [🔗 LLM Stats](https://llm-stats.com/ai-news)
• [🔗 AI News Today](https://www.buildfastwithai.com/blogs/ai-news-today-june-15-2026)

---

**4️⃣ OpenAI, 1억 5,000만 달러 규모 파트너 네트워크 출범**
OpenAI가 글로벌 기업의 AI 도입을 가속화하기 위해 1억 5,000만 달러를 투자하는 파트너 네트워크를 공식 출범했습니다. 전 세계 파트너사와 협력해 엔터프라이즈 AI 전환을 지원할 예정입니다.
• [🔗 Build Fast with AI](https://www.buildfastwithai.com/blogs/ai-news-today-june-15-2026)

---

**5️⃣ MiniMax M3, 오픈웨이트 모델 SWE-Bench Pro 1위 달성**
MiniMax가 오픈웨이트 모델 최초로 프론티어급 코딩, 100만 토큰 컨텍스트, 네이티브 멀티모달리티를 결합한 M3를 출시했습니다. 오픈웨이트 SWE-Bench Pro에서 59.0%로 1위를 기록했습니다.
• [🔗 Morph LLM 코딩 모델 랭킹](https://www.morphllm.com/best-ai-model-for-coding)
• [🔗 Atlas Cloud Blog](https://www.atlascloud.ai/blog/guides/kimi-k2-6-vs-glm-5-1-vs-qwen-3-6-plus-vs-minimax-m2-7-coding-2026)

---

**6️⃣ 미국 HHS, ChatGPT로 메디케이드 부정수급 최대 2,000억 달러 조사**
미국 보건복지부(HHS)가 ChatGPT를 활용해 50개 주 전체 메디케이드 감사 자료를 분석, 최대 2,000억 달러 규모의 부정수급 의혹을 조사하고 있습니다. AI의 정부 업무 활용 사례로 주목받고 있습니다.
• [🔗 unrot.co](https://unrot.co/blogs/ai-news-today-june-15-2026)
• [🔗 Build Fast with AI](https://www.buildfastwithai.com/blogs/ai-news-today-june-15-2026)

---

**7️⃣ 기업 AI 투자 94% 증가, 절반은 "도입 속도 너무 빠르다" 우려**
Logicalis 2026 글로벌 CIO 보고서에 따르면 94%의 기업이 지난 1년간 AI 투자를 늘렸지만, 51%는 이미 도입 속도가 너무 빠르다고 우려하는 것으로 나타났습니다.
• [🔗 LLM Stats](https://llm-stats.com/ai-news)

---

*출처: Build Fast with AI, LLM Stats, NAVER Corp, Tech Times, Morph LLM, unrot.co, Atlas Cloud Blog*`;

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
