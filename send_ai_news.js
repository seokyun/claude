const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 6월 5일)

---

**1️⃣ 미국 '위대한 미국 AI법' 초안 공개 — 주(州) AI 규제 3년간 동결**
미 하원의원 Jay Obernolte(공화당)와 Lori Trahan(민주당)이 269페이지 분량의 '위대한 미국 인공지능법(GAAIA)' 초안을 공개했습니다. 핵심 조항은 프런티어 AI 모델 관련 모든 주 AI 규제를 3년간 연방 차원에서 동결하는 것으로, 캘리포니아와 콜로라도 주 등의 AI 법안이 영향을 받을 전망입니다.
• 🔗 [buildfastwithai.com](https://www.buildfastwithai.com/blogs/ai-news-today-june-5-2026)
• 🔗 [JDSupra](https://www.jdsupra.com/legalnews/ai-today-in-5-june-5-2026-the-tech-re-46958/)

---

**2️⃣ OpenAI, ChatGPT 역대 최대 메모리 업그레이드 'Dreaming V3' 출시**
OpenAI가 ChatGPT에 'Dreaming V3' 아키텍처 기반의 메모리 시스템을 적용했습니다. 이 업그레이드는 오래되거나 상충하는 정보를 자동으로 정리하고 사용자 행동에 맞게 동적으로 적응하며, 프리미엄 티어의 메모리 저장 용량을 2배로 확대합니다.
• 🔗 [buildfastwithai.com](https://www.buildfastwithai.com/blogs/ai-news-today-june-5-2026)
• 🔗 [NeuralBuddies](https://www.neuralbuddies.com/p/ai-news-recap-june-5-2026)

---

**3️⃣ Anthropic, 기업 가치 수조 원대 IPO 비공개 신청**
Anthropic이 미국 증권거래위원회(SEC)에 S-1 등록 신청서를 비공개로 제출했습니다. 2026년 5월 기준 연간 매출 런레이트가 약 470억 달러(약 65조 원)에 달해 전년 대비 5배 성장한 것으로 알려졌습니다.
• 🔗 [buildfastwithai.com](https://www.buildfastwithai.com/blogs/ai-news-today-june-5-2026)
• 🔗 [theaitrack.com](https://theaitrack.com/ai-news-june-2026-in-depth-and-concise/)

---

**4️⃣ Qwen3 Coder Next·MiniMax 신모델 3종 동시 출시**
알리바바의 Qwen3 Coder Next가 오늘 출시됨과 동시에, MiniMax도 M2.5 Highspeed, M2.7 Highspeed, M2.7 등 3개 모델을 공개했습니다. 2026년 현재 새 AI 모델이 평균 3일에 한 번꼴 출시되는 초고속 사이클이 지속되고 있습니다.
• 🔗 [llm-stats.com](https://llm-stats.com/ai-news)
• 🔗 [llm-stats.com (updates)](https://llm-stats.com/llm-updates)

---

**5️⃣ 구글, Gemini 2.0 API 전면 종료 — Gemini 3.5로 전환 완료**
구글이 Gemini 2.0 Flash, Gemini 2.0 Flash-Lite 등 Gemini 2.0 API 전 라인업의 서비스를 공식 종료하고, 모든 API 호출을 Gemini 3.5 Flash 및 3.1 Flash-Lite로 강제 마이그레이션했습니다.
• 🔗 [buildfastwithai.com](https://www.buildfastwithai.com/blogs/ai-news-today-june-5-2026)

---

**6️⃣ 젠슨 황 엔비디아 CEO, 한국 AI 생태계 탐방 방한**
젠슨 황 엔비디아 CEO가 6월 5일 김포공항을 통해 한국에 입국했습니다. 나흘간의 방한 일정에서 LG, 현대차그룹, 네이버 등 주요 기업 총수와 회동하고, AI·로봇 스타트업 및 대학 연구진과 협력 방안을 논의할 예정입니다.
• 🔗 [AI타임스](https://www.aitimes.com/)
• 🔗 [인공지능신문](https://www.aitimes.kr/)

---

**7️⃣ AI로 에너지 소비 100분의 1 절감하면서 정확도 향상 — Tufts대 연구**
Tufts 대학교 연구팀이 기존 AI 대비 에너지 사용량을 100배 절감하면서도 정확도를 높인 새로운 AI 기술을 발표했습니다. 이 연구는 AI의 급증하는 전력 수요 문제를 해결할 돌파구로 주목받고 있습니다.
• 🔗 [ScienceDaily](https://www.sciencedaily.com/releases/2026/04/260405003952.htm)

---

*출처: buildfastwithai.com, NeuralBuddies, JDSupra, llm-stats.com, theaitrack.com, aitimes.com, aitimes.kr, sciencedaily.com*`;

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
