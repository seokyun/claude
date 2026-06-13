const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 6월 13일)

---

**1️⃣ Anthropic, 미국 기업 AI 시장에서 처음으로 OpenAI 추월**
Ramp AI 인덱스에 따르면 Anthropic이 미국 기업 AI 지출 점유율에서 처음으로 OpenAI를 앞질렀습니다. 4월부터 시작된 이 역전은 Claude 모델의 기업 수요 급증이 배경이며, Claude Opus 4.8 출시 이후 더욱 가속화되었습니다.
• [🔗 buildfastwithai.com](https://www.buildfastwithai.com/blogs/ai-news-today-june-13-2026)

---

**2️⃣ Claude Opus 4.8, AI 성능 벤치마크 세계 1위 달성**
5월 28일 출시된 Anthropic의 Claude Opus 4.8이 Artificial Analysis Intelligence Index에서 61점으로 1위에 올랐습니다. GPT-5.5(59점)와 Gemini 3.1 Pro(57점)를 제치며 Anthropic 모델로서는 처음으로 종합 1위를 기록했습니다.
• [🔗 llm-stats.com](https://llm-stats.com/ai-news)
• [🔗 felloai.com](https://felloai.com/best-ai-models/)

---

**3️⃣ DXC Technology & Anthropic, 기업 핵심 인프라 AI 전환 다년 파트너십 체결**
6월 11일 DXC Technology와 Anthropic이 멀티년 글로벌 동맹을 발표했습니다. DXC는 수만 명의 Claude 인증 엔지니어를 양성하여 주요 은행, 항공사, 보험사, 제조업체, 정부기관의 미션 크리티컬 IT 시스템에 Claude를 도입할 예정입니다.
• [🔗 dxc.com](https://dxc.com/newsroom/06112026-dxc-and-anthropic-announce-multi-year-global-alliance-to-bring-ai-into-mission-critical-enterprise-systems)

---

**4️⃣ TCS, Anthropic과 전략적 파트너십 체결 — 5만 직원에 Claude 도입**
타타 컨설팅 서비스(TCS)가 Anthropic과 글로벌 전략적 파트너십을 맺고, 엔지니어링·재무·법무·마케팅·영업 등 5만 명 직원에게 Claude 접근 권한을 부여합니다. TCS는 Claude 모델 기반 산업별 솔루션 개발을 위한 전담 사업부를 설립할 예정입니다.
• [🔗 verdict.co.uk](https://www.verdict.co.uk/tcs-partners-with-anthropic/)
• [🔗 w.media](https://w.media/tcs-partners-with-anthropic-to-drive-enterprise-ai-adoption/)

---

**5️⃣ Inception, 초당 1,000토큰 생성 가능한 확산 아키텍처 추론 모델 'Mercury 2' 출시**
Inception이 확산(Diffusion) 아키텍처를 기반으로 하는 추론 언어 모델 Mercury 2를 출시했습니다. 토큰을 병렬로 생성해 초당 1,000토큰 이상의 속도를 달성하며, 에이전틱 루프 및 실시간 음성 인터랙션 같은 지연 시간이 중요한 프로덕션 환경을 겨냥합니다.
• [🔗 llm-stats.com](https://llm-stats.com/llm-updates)

---

**6️⃣ Moonshot AI, Kimi K2.7-Code 공개 — 추론 효율 30% 개선**
중국 AI 스타트업 Moonshot AI가 Kimi K2.7-Code를 MIT 라이선스로 공개했습니다. 이전 버전 K2.6 대비 추론 토큰 사용량을 30% 절감한 코딩 특화 모델로, 오픈소스 커뮤니티의 주목을 받고 있습니다.
• [🔗 llm-stats.com](https://llm-stats.com/ai-news)

---

**7️⃣ Anthropic, IPO를 위해 SEC에 S-1 초안 기밀 제출**
Anthropic이 6월 1일 미국 증권거래위원회(SEC)에 S-1 초안을 기밀 제출하며 IPO 절차를 공식 시작했습니다. SpaceX의 나스닥 상장 성공 이후 AI 인프라 기업 밸류에이션에 대한 시장의 관심이 높아진 가운데, Anthropic의 기업가치는 수천억 달러에 달할 것으로 예상됩니다.
• [🔗 buildfastwithai.com](https://www.buildfastwithai.com/blogs/ai-news-today-june-13-2026)
• [🔗 useluminix.com](https://www.useluminix.com/reports/company-overviews/what-do-we-know-about-the-anthropic-ipo/source/3)

---

*출처: buildfastwithai.com, llm-stats.com, dxc.com, verdict.co.uk, felloai.com, w.media, useluminix.com*`;

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
