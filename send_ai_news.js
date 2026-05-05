const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 5월 5일)

---

**1️⃣ Anthropic, Project Glasswing 출범 — Claude Mythos Preview로 사이버 보안 강화**
Anthropic이 미공개 최신 모델 'Claude Mythos Preview'를 AWS, Apple, Google, Microsoft 등 핵심 기업에 제한 공개하는 'Project Glasswing'을 발표했습니다. Mythos Preview는 모든 주요 OS와 브라우저에서 수천 건의 제로데이 취약점을 자율적으로 탐지했으며, 17년 된 FreeBSD 원격 코드 실행 취약점(CVE-2026-4747)을 인간 개입 없이 발견·악용하는 데 성공했습니다. Anthropic은 보안 강화를 위해 1억 달러 상당의 모델 사용 크레딧을 지원합니다.
• [🔗 Anthropic 공식 발표](https://www.anthropic.com/glasswing)
• [🔗 Fortune 보도](https://fortune.com/2026/04/07/anthropic-claude-mythos-model-project-glasswing-cybersecurity/)

---

**2️⃣ DeepSeek V4 출시 — 화웨이 칩과 결합해 美 AI에 도전**
중국 AI 기업 DeepSeek가 4월 24일 V4 시리즈를 공개했습니다. 1.6조 파라미터의 V4-Pro와 2,840억 파라미터의 V4-Flash로 구성되며, 100만 토큰 컨텍스트 윈도우를 지원합니다. 코딩 벤치마크 최고 성능을 기록했고, 화웨이의 'Ascend 950' 칩 기반 수퍼노드 기술과 연동해 중국 국산 AI 인프라 의존도를 높이고 있습니다.
• [🔗 CNBC 보도](https://www.cnbc.com/2026/04/24/deepseek-v4-llm-preview-open-source-ai-competition-china.html)
• [🔗 Fortune 분석](https://fortune.com/2026/04/24/deepseek-v4-ai-model-price-performance-china-open-source/)

---

**3️⃣ OpenAI GPT-5.5 출시 — Amazon Bedrock 연동 확장**
OpenAI가 GPT-5.5를 ChatGPT Plus, Pro, Business, Enterprise 사용자에게 순차 배포 중입니다. 동시에 GPT-5.5 및 기타 프론티어 모델을 Amazon Bedrock에 출시하고, Codex를 AWS와 통합하며 Bedrock Managed Agents 협력도 발표했습니다. Claude Opus 4.6에 이어 주요 모델들의 클라우드 네이티브 확장이 가속화되고 있습니다.
• [🔗 OpenAI 뉴스](https://openai.com/news/)
• [🔗 Releasebot 업데이트](https://releasebot.io/updates/openai)

---

**4️⃣ 중국 AI 4사, 12일 안에 오픈웨이트 코딩 모델 동시 출격**
Z.ai의 GLM-5.1, MiniMax M2.7, Moonshot의 Kimi K2.6, DeepSeek V4 등 중국 AI 기업 4곳이 불과 12일 간격으로 오픈웨이트 코딩 모델을 잇달아 공개했습니다. 이 모델들은 서방 최신 모델과 유사한 성능을 훨씬 낮은 추론 비용으로 제공하며, 글로벌 AI 경쟁에 새로운 압력을 가하고 있습니다.
• [🔗 LLM-Stats 분석](https://llm-stats.com/ai-news)
• [🔗 Air Street Press 동향](https://press.airstreet.com/p/state-of-ai-may-2026)

---

**5️⃣ Novo Nordisk × OpenAI, 신약 개발부터 공급망까지 AI 전면 통합**
덴마크 제약 기업 Novo Nordisk가 OpenAI와 전략적 파트너십을 체결하고, 신약 개발·임상시험·제조·공급망·상업 운영 전 분야에 AI를 통합하는 프로젝트를 발표했습니다. 2026년 말까지 완전 배포를 목표로 하며, 비만·당뇨 신약 후보 발굴 가속화를 주요 과제로 삼고 있습니다.
• [🔗 Crescendo AI 보도](https://www.crescendo.ai/news/latest-ai-news-and-updates)

---

**6️⃣ Samsung × Google, Gemini AI 탑재 기기 8억 대 목표**
삼성전자가 Google Gemini AI를 탑재한 모바일 기기를 2026년 말까지 8억 대로 두 배 확대하는 계획을 발표했습니다. 중·저가 스마트폰까지 생성 AI 기능을 확산하는 이번 협력은 삼성-구글 파트너십의 새로운 이정표가 될 전망입니다.
• [🔗 최신 AI 뉴스](https://www.crescendo.ai/news/latest-ai-news-and-updates)

---

**7️⃣ Anthropic, 금융 부문 전용 AI 에이전트 10종 출시**
Anthropic이 투자은행·자산운용사·보험사 등 금융 기관의 일반 업무 자동화를 위한 사전 구성 AI 에이전트 10종을 공개했습니다. 금융 산업 특화 LLM 제품에 대한 수요가 높아지는 추세를 반영하며, JPMorgan Chase도 AI 투자를 핵심 인프라로 공식 재분류하는 등 금융권의 AI 도입이 가속화되고 있습니다.
• [🔗 LLM Stats 동향](https://llm-stats.com/ai-news)

---

*출처: Anthropic, CNBC, Fortune, OpenAI, LLM-Stats, Air Street Press, Crescendo AI*`;

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
      console.log('\n발송 성공: Mattermost 채널에 AI 뉴스가 정상적으로 전송되었습니다.');
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
