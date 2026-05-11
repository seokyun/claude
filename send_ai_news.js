const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 11일)

---

**1️⃣ OpenAI, 기업용 AI 구축 전문 'OpenAI Deployment Company' 공식 출범**
OpenAI가 기업들이 AI를 중심으로 비즈니스를 구축할 수 있도록 지원하는 'OpenAI Deployment Company'를 공식 출범했습니다. 19개 투자사로부터 100억 달러 기업가치 기준 40억 달러를 조달한 별도 엔터프라이즈 합작법인입니다.
• [🔗 OpenAI News](https://openai.com/news/)
• [🔗 TechCrunch](https://techcrunch.com/2026/05/04/anthropic-and-openai-are-both-launching-joint-ventures-for-enterprise-ai-services/)

---

**2️⃣ Anthropic, Google·Broadcom과 대규모 컴퓨트 인프라 파트너십 체결**
Anthropic이 Google 및 Broadcom과 역대 최대 규모의 컴퓨트 파트너십을 체결해 AI 인프라를 대폭 확장한다고 발표했습니다. Anthropic의 연간 반복 매출(ARR)은 300억 달러를 돌파해 2025년 말 대비 3배 이상 성장했습니다.
• [🔗 Anthropic](https://www.anthropic.com/news/google-broadcom-partnership-compute)

---

**3️⃣ 중국 AI 4개 랩, 12일 새 오픈웨이트 코딩 모델 잇따라 공개**
Z.ai의 GLM-5.1, MiniMax M2.7, Moonshot의 Kimi K2.6, DeepSeek V4 등 중국 AI 4개 랩이 단 12일 사이에 오픈웨이트 코딩 모델을 연속 출시했습니다. 모두 Claude Opus 4.7 대비 3분의 1 이하의 비용으로 이용 가능해 경쟁 구도를 크게 뒤흔들고 있습니다.
• [🔗 LLM Stats](https://llm-stats.com/ai-news)
• [🔗 Air Street Press](https://press.airstreet.com/p/state-of-ai-may-2026)

---

**4️⃣ 미국 정부, Microsoft·Google·xAI AI 모델 사전 평가 협약 체결**
미국 상무부 산하 AI표준혁신센터(CAISI)가 Google DeepMind, Microsoft, xAI와 AI 모델 출시 전 사전 평가를 실시하는 협약을 체결했습니다. 기존 OpenAI·Anthropic 협약을 갱신한 이번 조치는 트럼프 행정부의 AI 거버넌스 강화 기조를 반영합니다.
• [🔗 CNN Business](https://www.cnn.com/2026/05/05/tech/microsoft-google-xai-government-test-ai-models)
• [🔗 CNBC](https://www.cnbc.com/2026/05/05/ai-oversight-trump-google-microsoft-xai.html)

---

**5️⃣ Cloudflare, 글로벌 네트워크 기반 LLM 고성능 추론 인프라 공개**
Cloudflare가 전 세계 네트워크에서 대형 AI 언어 모델을 실행할 수 있는 새로운 인프라를 발표했습니다. 입력 처리와 출력 생성을 별도의 최적화 시스템으로 분리해 추론 성능과 비용 효율성을 동시에 높인 것이 특징입니다.
• [🔗 InfoQ](https://www.infoq.com/news/2026/05/cloudflare-llm-infrastructure/)

---

**6️⃣ 업스테이지, 포털 '다음' 인수 확정…한국형 AI 검색 생태계 구축 선언**
국내 AI 스타트업 업스테이지가 포털 다음 운영사 AXZ 인수를 최종 확정했습니다. 자체 개발 LLM '솔라'를 다음에 접목해 네이버·구글에 맞서는 AI 검색 포털로 재탄생시킬 계획으로, 국내 AI 생태계의 판도 변화가 예상됩니다.
• [🔗 Aboda](https://aboda.kr/entry/%EC%97%85%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80-%EB%8B%A4%EC%9D%8C-%EC%9D%B8%EC%88%98)

---

**7️⃣ SI 업계, AI·클라우드 바람 타고 1분기 호실적 달성**
CJ올리브네트웍스 등 국내 시스템통합(SI) 업체들이 AI·클라우드 수요 급증에 힘입어 1분기 두 자릿수 매출 성장과 수익성 개선을 동시에 달성했습니다. CJ올리브네트웍스는 매출 2,118억원(+12.1%), 영업이익(+31.4%)을 기록했습니다.
• [🔗 뉴스핌](https://www.newspim.com/news/view/20260511001205)

---

*출처: OpenAI, TechCrunch, Anthropic, LLM Stats, Air Street Press, CNN Business, CNBC, InfoQ, Aboda, 뉴스핌*`;

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
