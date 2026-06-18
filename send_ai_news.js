const https = require('https');

const text = `## 📰 AI 주요 뉴스 요약 (2026년 6월 18일)

---

**1️⃣ 과기정통부-앤트로픽, AI 안전·사이버보안 MOU 체결**
과학기술정보통신부가 앤트로픽과 AI 안전성 확보 및 사이버보안 분야 협력을 위한 MOU를 체결했다. 한국어 맥락의 AI 모델 안전성·오남용 위험 평가와 자율형 AI 에이전트 레드팀 평가 등을 함께 추진하며, 앤트로픽은 일본·인도·호주에 이어 한국에 정식 사무소를 개소했다.
• [🔗 전자신문](https://www.etnews.com/20260618000235)
• [🔗 머니투데이](https://www.mt.co.kr/tech/2026/06/18/2026061717245936553)

---

**2️⃣ SK하이닉스, 차세대 HBM4E 12단 샘플 주요 고객사 공급**
SK하이닉스가 차세대 AI용 초고성능 D램 'HBM4E' 12단 샘플을 주요 고객사에 공급했다고 밝혔다. 핀당 최대 16Gbps 속도와 20% 이상의 에너지 효율 개선, 48GB 용량을 구현해 삼성과의 차세대 메모리 경쟁이 본격화됐다.
• [🔗 전자신문](https://www.etnews.com/20260618000019)
• [🔗 파이낸셜뉴스](https://www.fnnews.com/news/202606180849075531)

---

**3️⃣ 구글, 'Gemini CLI'를 'Antigravity CLI'로 전면 교체**
구글이 6월 18일부로 무료·개인 사용자 대상 Gemini CLI 및 Gemini Code Assist 서비스를 종료하고, 비동기 멀티에이전트 워크플로를 지원하는 후속 도구 Antigravity CLI로 전환했다. 기존 워크플로·CI/CD 파이프라인을 구축한 개발자는 마이그레이션이 필요하다.
• [🔗 OSTechNix](https://ostechnix.com/google-is-replacing-gemini-cli-with-google-antigravity/)
• [🔗 KuCoin News](https://www.kucoin.com/news/flash/google-to-deprecate-old-gemini-cli-by-june-18-2026-pushes-antigravity-cli)

---

**4️⃣ 아모데이 "AI 분열 막아야"... G7서 올트먼도 동조**
앤트로픽 CEO 다리오 아모데이가 G7 정상회의에서 동맹국 간 AI 접근·기준이 쪼개지면 안보 협력이 약화될 수 있다고 경고했다. 오픈AI 샘 올트먼도 이에 동조했으며, 마크롱 프랑스 대통령과 모디 인도 총리도 동맹국의 프런티어 AI 접근권 보장을 촉구했다.
• [🔗 Benzinga](https://www.benzinga.com/markets/tech/26/06/53268905/anthropic-ceo-dario-amodei-finds-rare-ally-in-rival-openais-sam-altman-as-he-warns-g7-leaders-against-ai-fragmentation-risk)
• [🔗 TechCrunch](https://techcrunch.com/2026/06/17/world-leaders-want-american-ai-they-just-dont-want-america-to-be-able-to-turn-it-off/)

---

**5️⃣ 엔비디아, 5500억 파라미터 오픈모델 'Nemotron 3 Ultra' 출시**
엔비디아가 550B 규모의 MoE 기반 하이브리드 Mamba-Transformer 오픈모델 'Nemotron 3 Ultra'를 공개했다. 100만 토큰 컨텍스트와 기존 오픈모델 대비 최대 6배 높은 추론 처리량을 갖춰 장시간 작업하는 에이전트용으로 설계됐으며, 가중치와 학습 데이터를 공개했다.
• [🔗 MarkTechPost](https://www.marktechpost.com/2026/06/04/nvidia-ai-releases-nemotron-3-ultra-an-open-550b-mixture-of-experts-hybrid-mamba-transformer-for-long-running-agents/)

---

**6️⃣ 앤트로픽, 'Claude Fable 5'·'Mythos 5' 정식 출시**
앤트로픽이 코딩·과학 분야에서 큰 성능 향상을 이룬 신모델 'Claude Fable 5'와 'Claude Mythos 5'를 출시했다. 100만 토큰 컨텍스트와 최대 12만8000 출력 토큰을 지원하며, Fable 5는 요청을 거부할 수 있는 안전 분류기를 포함해 일반 API로 제공된다.
• [🔗 Anthropic](https://www.anthropic.com/news/claude-fable-5-mythos-5)
• [🔗 TechCrunch](https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/)

---

*출처: 전자신문, 머니투데이, 파이낸셜뉴스, OSTechNix, KuCoin News, Benzinga, TechCrunch, MarkTechPost, Anthropic*`;

const body = JSON.stringify({ text });
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
  res.on('data', (d) => { data += d.toString(); process.stdout.write(d); });
  res.on('end', () => {
    console.log('');
    if (data.trim() === 'ok') {
      console.log('✅ Mattermost 발송 성공!');
    } else {
      console.log(`응답: status=${res.statusCode}, body=${data}`);
    }
  });
});

req.on('error', (e) => {
  console.error('❌ 발송 실패: ' + e.message);
});

req.write(body, 'utf8');
req.end();
