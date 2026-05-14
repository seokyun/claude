const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 14일)

---

**1️⃣ Cerebras, 55억 달러 IPO로 나스닥 데뷔… 주가 ~100% 폭등**
AI 전용 칩 제조사 Cerebras Systems가 55억 5,000만 달러 규모의 IPO를 성공적으로 마무리하며 나스닥에 상장됐습니다. 공모가 185달러에서 시작해 장중 90~100%까지 폭등하며 시가총액 약 950억 달러를 기록, 2026년 최대 기술 IPO로 등극했습니다. 엔비디아 GPU와 달리 단일 웨이퍼 기반 칩 설계로 AI 추론 속도와 비용 경쟁력을 강조합니다.
• [🔗 CNBC](https://www.cnbc.com/2026/05/14/cerebras-cbrs-stock-trade-nasdaq-ipo.html)
• [🔗 TechCrunch](https://techcrunch.com/2026/05/14/cerebras-raises-5-5b-kicking-off-2026s-ipo-season-with-a-bang/)

---

**2️⃣ 미·중 정상회담에서 AI 안전 협의 출범 합의**
트럼프-시진핑 베이징 정상회담(5월 14~15일)을 계기로 미국과 중국이 AI 안전 프로토콜 공식 협의를 시작하기로 합의했습니다. 미 재무장관 베센트는 "미국이 AI 분야에서 앞서 있기 때문에 협상 테이블에 나설 수 있다"고 밝혔으며, 양국은 첨단 AI 모델이 잘못된 곳에 유출되지 않도록 하는 국제 규범 마련을 논의할 예정입니다.
• [🔗 CNBC](https://www.cnbc.com/2026/05/14/us-china-ai-rules-bessent-us-lead.html)
• [🔗 Bloomberg](https://www.bloomberg.com/news/articles/2026-05-13/why-the-us-must-engage-china-on-ai-safety-before-it-s-game-over)

---

**3️⃣ SubQ, 1,200만 토큰 컨텍스트 창 탑재 신규 LLM 출시**
스타트업 Subquadratic이 2,900만 달러 시드 투자를 받아 'SubQ'를 출시했습니다. 표준 트랜스포머가 아닌 서브쿼드라틱 희소 어텐션 아키텍처를 채택해 기존 프런티어 모델 대비 약 1/5 비용, 최대 52배 빠른 긴 문맥 처리 속도를 자랑합니다. 1,200만 토큰 네이티브 컨텍스트 창을 지원하는 첫 상용 LLM입니다.
• [🔗 LLM Stats](https://llm-stats.com/ai-news)
• [🔗 WhatLLM](https://whatllm.org/blog/new-ai-models-may-2026)

---

**4️⃣ Sakana AI, 실시간 지식 주입 음성-음성 AI 아키텍처 'KAME' 공개**
일본 AI 연구소 Sakana AI가 KAME(Knowledge-Access Model Extension)를 발표했습니다. 직접 음성-음성 시스템의 초저지연을 유지하면서 백엔드 LLM의 풍부한 지식을 실시간으로 주입하는 하이브리드 아키텍처로, 기존 음성 AI의 지식 한계와 응답 지연 문제를 동시에 해결하는 새로운 접근 방식입니다.
• [🔗 MarkTechPost](https://www.marktechpost.com/2026/05/03/sakana-ai-introduces-kame-a-tandem-speech-to-speech-architecture-that-injects-llm-knowledge-in-real-time/)

---

**5️⃣ 한국 ICT 수출 역대 최고… AI·반도체 수요 급증**
한국의 2026년 4월 ICT 수출액이 427억 1,000만 달러로 전년 동기 대비 125.9% 증가하며 역대 최고치를 경신했습니다. AI 및 반도체 제품에 대한 글로벌 수요 급증이 주요 원인으로 분석되며, AI 벤처 업스테이지도 국가 AI컴퓨팅센터 연계 5,600억 원 투자 유치를 기록했습니다.
• [🔗 AI타임스](https://www.aitimes.com/)
• [🔗 인공지능신문](https://www.aitimes.kr/)

---

**6️⃣ Cloudflare, 글로벌 네트워크 기반 LLM 고성능 추론 인프라 발표**
Cloudflare가 전 세계 네트워크에서 대형 AI 언어 모델을 실행할 수 있는 새 인프라를 발표했습니다. 모델의 입력 처리와 출력 생성을 최적화된 별도 시스템으로 분리하고, GPU를 효율적으로 관리하는 커스텀 추론 엔진을 적용해 AI 서비스의 성능과 비용 효율을 크게 높일 것으로 기대됩니다.
• [🔗 InfoQ](https://www.infoq.com/news/2026/05/cloudflare-llm-infrastructure/)

---

*출처: CNBC, TechCrunch, Bloomberg, LLM Stats, WhatLLM, MarkTechPost, AI타임스, InfoQ*`;

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
