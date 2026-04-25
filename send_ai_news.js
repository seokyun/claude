const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 4월 25일)

---

**1️⃣ DeepSeek V4 공개 — 중국 AI, 오픈소스로 다시 세계 흔들다**
중국 AI 스타트업 DeepSeek이 오픈소스 V4 모델(Pro·Flash 버전)을 공개했습니다. 지식·추론 능력과 복잡한 작업을 자율 수행하는 '에이전틱' 역량이 크게 향상됐으며, 1년 전 글로벌 시장을 흔들었던 DeepSeek의 첫 번째 주요 업데이트로 미·중 AI 경쟁이 다시 가열되고 있습니다.
• [🔗 Bloomberg](https://www.bloomberg.com/news/articles/2026-04-24/deepseek-unveils-newest-flagship-a-year-after-ai-breakthrough)
• [🔗 US News](https://www.usnews.com/news/business/articles/2026-04-24/chinas-deepseek-rolls-out-a-long-anticipated-update-of-its-ai-model)

---

**2️⃣ OpenAI, GPT-5 Turbo 출시 — 텍스트·이미지·오디오 통합 모델**
OpenAI가 GPT-5 Turbo를 출시했습니다. 단일 모델 안에 네이티브 이미지·오디오 생성 기능이 통합된 것이 핵심으로, 멀티모달 AI의 새로운 기준점을 제시합니다.
• [🔗 Fazm Blog](https://fazm.ai/blog/new-llm-releases-april-2026)
• [🔗 LLM Stats](https://llm-stats.com/ai-news)

---

**3️⃣ Anthropic, Claude Mythos Preview 파트너 한정 공개**
Anthropic이 새로운 플래그십 모델 Claude Mythos Preview를 약 50개 파트너 기관에 한정 공개했습니다. Claude Opus 4.6 대비 '한 단계 도약'으로 평가되며, 사이버보안 취약점 탐지·추론·코딩 특화 설계가 특징입니다. 가격은 입력 $25 / 출력 $125(백만 토큰당)로 프리미엄 수준입니다.
• [🔗 What LLM?](https://whatllm.org/blog/new-ai-models-april-2026)

---

**4️⃣ Google, Gemma 4 오픈소스 모델 패밀리 출시**
Google이 Apache 2.0 라이선스로 Gemma 4 패밀리 4종을 정식 출시했습니다. 플래그십인 Gemma 4 31B Dense는 자신보다 20배 큰 모델과 비슷한 벤치마크 성능을 보여 주며, 다양한 배포 환경에 최적화된 오픈소스 선택지를 제공합니다.
• [🔗 Fazm Blog](https://fazm.ai/blog/latest-llm-releases-april-2026)

---

**5️⃣ Google, Anthropic에 최대 400억 달러 투자 확정**
Google이 Anthropic에 최대 400억 달러를 투자하고 5GW 규모의 컴퓨팅 딜을 체결할 계획입니다. Anthropic 기업가치는 3,500억 달러(약 480조 원)로 평가되며, 빅테크 간 AI 인프라 패권 경쟁이 더욱 고조되고 있습니다.
• [🔗 Crescendo AI News](https://www.crescendo.ai/news/latest-ai-news-and-updates)

---

**6️⃣ 교육부·과기정통부, AI 인재양성 전담TF 출범**
한국 교육부와 과학기술정보통신부가 'AI 인재양성 전담팀(TF)'을 공동 출범했습니다. AI 기술의 급속한 발전 속 국가 차원의 인재 부족 문제를 선제적으로 해결하기 위한 범부처 협력 기구로, 정부 차원의 체계적 AI 인재 육성이 본격화될 전망입니다.
• [🔗 보험AI뉴스(다자비)](https://dazabi.com/insurance_magazine/article.php?id=18605)

---

**7️⃣ PwC 보고서: AI 경제 이익의 75%, 상위 20% 기업이 독식**
PwC의 2026 AI 성과 연구에 따르면 AI의 경제적 효과 중 4분의 3이 전체의 20%에 불과한 기업에 집중되고 있습니다. 상위 기업들은 단순 생산성 향상이 아닌 성장에 초점을 맞추고 있다는 점도 주목할 만합니다.
• [🔗 PwC Press Release](https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-performance-study.html)

---

*출처: Bloomberg, US News, Fazm Blog, What LLM?, LLM Stats, 다자비, PwC*`;

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
    if (data.trim() === 'ok') {
      console.log('\n✅ Mattermost 발송 성공!');
    } else {
      console.log('\n응답:', data);
    }
  });
});

req.on('error', (e) => {
  console.error('발송 실패:', e.message);
});

req.write(body, 'utf8');
req.end();
