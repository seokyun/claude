const https = require('https');

const message = `## 📰 AI 주요 뉴스 요약 (2026년 4월 27일)

---

**1️⃣ OpenAI·Microsoft 파트너십 전면 재편 — 독점 해제·멀티클라우드 시대 개막**
OpenAI와 Microsoft가 기존 독점 계약을 수정, OpenAI가 Azure 외 모든 클라우드 제공업체에 제품을 제공할 수 있게 됐다. Microsoft는 2032년까지 OpenAI IP 라이선스를 유지하지만 독점권은 종료되며 수익 배분 상한액도 설정됐다. Amazon·Google 등과의 협력 확대가 본격화될 전망이다.
• [🔗 Microsoft Blog](https://blogs.microsoft.com/blog/2026/04/27/the-next-phase-of-the-microsoft-openai-partnership/)
• [🔗 CNBC](https://www.cnbc.com/2026/04/27/openai-microsoft-partnership-revenue-cap.html)
• [🔗 OpenAI](https://openai.com/index/next-phase-of-microsoft-partnership/)

---

**2️⃣ 중국, Meta의 AI 스타트업 Manus 20억 달러 인수 전격 차단**
중국 국가발전개혁위원회(NDRC)가 Meta의 Manus AI 인수를 공식 금지했다. 수개월에 걸친 조사 끝에 내린 결정으로, 핵심 AI 기술의 미국 유출을 막으려는 의도로 풀이된다. Meta는 이미 임직원 합류와 자금 이전을 완료한 상태여서 계약 해소가 복잡해질 것으로 보인다.
• [🔗 CNBC](https://www.cnbc.com/2026/04/27/meta-manus-china-blocks-acquisition-ai-startup.html)
• [🔗 TechCrunch](https://techcrunch.com/2026/04/27/china-vetoes-metas-2b-manus-deal-after-months-long-probe/)
• [🔗 Bloomberg](https://www.bloomberg.com/news/articles/2026-04-27/china-blocks-meta-s-2-billion-acquisition-of-ai-startup-manus)

---

**3️⃣ OpenAI, GPT-6 공식 출시 — 200만 토큰·에이전트 작업 완료율 87%**
OpenAI가 4월 14일 GPT-6(코드명 'Spud')를 전 세계에 출시했다. 200만 토큰 컨텍스트 윈도우를 갖추고 코딩·추론·에이전트 작업에서 GPT-5.4 대비 40% 이상 성능이 향상됐다. HumanEval 95% 이상, 에이전트 작업 완료율도 62%에서 87%로 대폭 향상됐다.
• [🔗 Fazm Blog](https://fazm.ai/blog/new-llm-releases-april-2026)
• [🔗 llm-stats.com](https://llm-stats.com/ai-news)

---

**4️⃣ Anthropic, Claude Mythos 프리뷰 한정 공개 — 사이버보안 특화 차세대 모델**
Anthropic이 차세대 플래그십 Claude Mythos 프리뷰를 50개 파트너 기관에 한정 제공 중이다. Claude Opus 4.6 대비 한 단계 도약한 성능으로, 사이버보안 취약점 탐지·추론·코딩에 특화됐다. 가격은 입력 $25 / 출력 $125(백만 토큰당)이며 공개 출시 일정은 미정이다.
• [🔗 Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/claude-mythos-preview-on-vertex-ai)
• [🔗 llm-stats.com](https://llm-stats.com/llm-updates)

---

**5️⃣ 2026년 4월, LLM 역사상 최다 출시 기록 경신**
4월 한 달간 Qwen 3, Llama 4 Scout·Maverick, Mistral Medium 3, Gemma 4(Apache 2.0), GLM-5.1(744B MoE) 등 6개 기관에서 9종 이상의 주요 모델이 출시됐다. 오픈소스와 독점 모델 간 성능 격차가 빠르게 줄고 멀티모달 기능이 사실상 표준이 되고 있다.
• [🔗 Fazm Blog](https://fazm.ai/blog/llm-releases-april-2026)
• [🔗 llm-stats.com](https://llm-stats.com/ai-news)

---

**6️⃣ 알리바바, AI 비디오 생성 모델 HappyHorse API 상용화**
알리바바가 HappyHorse API를 알리바바 클라우드 바이리엔(百炼) 플랫폼에서 정식 출시했다. Artificial Analysis의 Video Arena에서 텍스트-이미지·이미지-이미지 변환 부문 모두 1위를 차지했으며, 10% 할인된 가격으로 기업 고객에게 제공된다.
• [🔗 Apiyi.com Blog](https://help.apiyi.com/ko/happyhorse-api-bailian-launch-apiyi-ko.html)

---

*출처: Microsoft Blog, CNBC, TechCrunch, Bloomberg, Fazm Blog, llm-stats.com, Google Cloud Blog, Apiyi.com*`;

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
      console.log('\n✅ Mattermost 발송 성공!');
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
