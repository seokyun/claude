const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 13일)

---

**1️⃣ Google·SpaceX, 우주 오비털 AI 데이터센터 구축 논의**
Google이 SpaceX와 협력해 AI 처리용 위성을 구도에 발사하는 오비털 데이터센터 구축을 협의 중입니다. Google의 '프로젝트 선캐처' 일환으로, Google Tensor Processing Unit(AI 칩)을 탑재한 위성을 2027년부터 발사할 계획입니다. SpaceX는 FCC에 최대 100만 기 위성으로 구성된 AI 우주 인프라 네트워크 구축을 신청한 상태입니다.
• [🔗 TechCrunch](https://techcrunch.com/2026/05/12/report-google-and-spacex-in-talks-to-put-data-centers-into-orbit/)
• [🔗 Bloomberg](https://www.bloomberg.com/news/articles/2026-05-12/google-in-talks-to-use-spacex-to-launch-space-data-centers-wsj)

---

**2️⃣ AWS Kiro, 에이전트 개발 플랫폼 3가지 신기능 추가**
AWS가 자사 에이전트 IDE 플랫폼 Kiro에 세 가지 기능을 추가했습니다: ① 병렬 태스크 실행(Parallel Task Execution), ② 한 번에 요구사항·설계·작업 목록을 생성하는 Quick Plan, ③ 코드 작성 전 요구사항의 비일관성을 찾는 Requirements Analysis(신경기호학적 AI 활용). 프롬프트를 자동으로 사양서로 변환하고, 작동 코드·문서·테스트까지 생성해주는 통합 개발 에이전트 플랫폼입니다.
• [🔗 SD Times](https://sdtimes.com/ai/news-roundup-may-13-2026-aws-kiro-uipath-signadot/)
• [🔗 SiliconANGLE](https://siliconangle.com/2026/05/12/aws-kiro-accelerates-software-development-proving-code-correctness-gets-work/)

---

**3️⃣ Palo Alto 경고: AI 주도 사이버 공격, 몇 달 안에 '일반화'될 것**
Palo Alto Networks의 기술 책임자 Lee Klarich가 3~5개월 안에 AI 주도 사이버 공격이 '새로운 표준'이 될 것이라 경고했습니다. Anthropic Mythos, OpenAI GPT-5.5-Cyber 등 신규 AI 모델이 미알려진 소프트웨어 취약점 발견 및 익스플로잇 생성을 빠르게 하고 있어 기업들의 시급한 대비가 필요합니다.
• [🔗 CNBC](https://www.cnbc.com/2026/05/13/palo-alto-ai-cyberattacks-mythos-gpt.html)

---

**4️⃣ 알리바바, 순익 감소에도 AI · 클라우드 투자 기조 유지**
알리바바가 순익 감소에도 AI 반도체 및 데이터센터 투자, Qwen 모델 시리즈 개발 등에 적극적인 입장을 유지하고 있습니다. 클라우드 컴퓨팅 부문에서 AI 투자가 확실한 수익으로 연결되면서 투자자들에게 긴긴한 반응을 얻고 있습니다.
• [🔗 CNBC](https://www.cnbc.com/2026/05/13/alibaba-earnings-march-quarter-ai-cloud-growth.html)

---

**5️⃣ OpenAI GPT-5.5 출시 — 역대 최강 에이전트 기능 탑재**
OpenAI가 4월 23일 GPT-5.5 및 GPT-5.5 Pro(병렬 컴퓨트 부스트 버전)를 출시했습니다. 기업 지식 업무·코딩 자동화를 타겟으로 역대 최강의 에이전트 기능이 탑재되었습니다. Anthropic 역시 Claude Opus 4.6·Sonnet 4.6·Haiku 4.5를 정식 릴리즈하며 LLM 경쟁이 고조되고 있습니다.
• [🔗 LLM Stats](https://llm-stats.com/ai-news)
• [🔗 AI Flash Report](https://aiflashreport.com/model-releases.html)

---

**6️⃣ Cloudflare, 글로벌 LLM 실행 고성능 인프라 발표**
Cloudflare가 전 세계 네트워크에서 대형 AI 언어 모델을 실행할 수 있는 새로운 인프라를 발표했습니다. 모델의 입력 처리와 출력 생성을 별도의 최적화 시스템으로 분리하여 추론 성능과 비용 효율성을 동시에 높인 것이 특징입니다.
• [🔗 InfoQ](https://www.infoq.com/news/2026/05/cloudflare-llm-infrastructure/)

---

**7️⃣ 미 의회, 대중국 AI 반도체 수출통제 강화 법안 추진**
미국 의회가 중국에 대한 AI 반도체 수출통제를 더욱 강화하는 법안을 추진 중입니다. 한국 반도체 기업 등 관련 업체들의 신속한 대응이 요구됩니다. 미중 기술 패권이 글로벌 AI 공급망에 미치는 영향력이 확대되고 있습니다.
• [🔗 전국인력신문](https://www.kjob.news/news/487805)

---

*출처: TechCrunch, Bloomberg, CNBC, SD Times, SiliconANGLE, InfoQ, LLM Stats, AI Flash Report, 전국인력신문*`;

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
