const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 6월 11일)

---

**1️⃣ OpenAI·Anthropic, 잇따라 IPO 비밀 신청**
Anthropic이 6월 1일 약 9,650억 달러 가치로 IPO를 비밀 신청한 데 이어, OpenAI도 6월 8일 약 8,520억 달러 가치로 IPO를 비밀 신청했습니다. AI 업계 양대 선두주자의 동시 상장 움직임으로 업계의 이목이 집중되고 있습니다.
• [🔗 TechCrunch](https://techcrunch.com/2026/06/08/following-anthropic-openai-files-confidentially-for-ipo/)

---

**2️⃣ Anthropic, 프론티어 AI 개발 글로벌 일시 중단 촉구**
Anthropic이 6월 4일 "When AI builds itself"를 발표하며, AI 시스템이 자체 개발 속도를 가속화하고 있어 기존 안전·거버넌스 프레임워크를 초과할 위험이 있다고 경고했습니다. 프론티어 AI 개발의 국제적 조율 및 일시 중단을 제안했습니다.
• [🔗 Anthropic Newsroom](https://www.anthropic.com/news)
• [🔗 Shumaker Law Alert](https://www.shumaker.com/insight/client-alert-anthropics-call-for-a-global-ai-pause-what-businesses-need-to-know-about-the-governance-landscape/)

---

**3️⃣ Apple iOS 27, Gemini 기반 Siri 및 Claude 연동 공개**
6월 8일 팀 쿡이 Gemini로 구동되는 새로운 Siri와 다중 AI 확장(Extensions) 시스템을 발표했습니다. Claude가 iPhone에서 직접 사용할 수 있는 AI 옵션으로 처음 추가되었으며, iOS 27 베타 1도 같은 날 출시되었습니다.
• [🔗 LLM Updates (llm-stats.com)](https://llm-stats.com/llm-updates)

---

**4️⃣ OpenAI, Oracle Cloud를 통한 엔터프라이즈 모델 공급 확대**
OpenAI가 엔터프라이즈 고객들이 기존 Oracle Universal Credits(UCM)으로 OpenAI 프론티어 모델과 Codex에 접근할 수 있도록 공식 발표했습니다. Oracle Cloud Infrastructure 고객은 별도 계약 없이 OpenAI 기술을 바로 활용할 수 있게 됩니다.
• [🔗 BuildFastWithAI](https://www.buildfastwithai.com/blogs/ai-news-today-june-11-2026)

---

**5️⃣ Inception, 초당 1,000토큰 이상 처리하는 'Mercury 2' 출시**
Inception이 확산(Diffusion) 아키텍처 기반의 추론 언어 모델 Mercury 2를 공개했습니다. 토큰을 병렬로 생성해 초당 1,000토큰 이상의 속도를 달성하며, 에이전틱 루프 및 실시간 음성 인터랙션 등 프로덕션 환경을 겨냥한 모델입니다.
• [🔗 LLM Stats AI News](https://llm-stats.com/ai-news)

---

**6️⃣ KPMG·Microsoft, 글로벌 엔터프라이즈 AI 에이전트 대규모 배포 발표**
KPMG와 Microsoft가 6월 9일 협력 확대를 발표했습니다. KPMG는 Microsoft Agent 365를 도입해 고객사의 AI 에이전트 관리·모니터링·보안을 지원하고, 전 글로벌 인력에 Microsoft 365 Copilot을 배포하는 계획입니다.
• [🔗 Microsoft Source](https://news.microsoft.com/source/2026/06/09/kpmg-and-microsoft-scale-trusted-enterprise-ai-agents-globally-through-deployment-of-agent-365-and-copilot/)

---

**7️⃣ 성인 85%, AI 생성 콘텐츠와 실제 구별 못해**
최신 조사에 따르면 AI 생성 콘텐츠를 실제와 구별할 수 없다고 답한 성인 비율이 2025년 66%에서 2026년 85%로 급증했습니다. AI 딥페이크와 사기 문제가 사회 전반에 걸쳐 심각한 우려로 부상하고 있습니다.
• [🔗 Help Net Security](https://www.helpnetsecurity.com/2026/06/11/ai-scams-deepfakes-survey/)

---

*출처: BuildFastWithAI, TechCrunch, Anthropic, LLM Stats, Microsoft Source, Help Net Security*`;

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
