const https = require('https');

const body = JSON.stringify({"text": "## 📰 AI 주요 뉴스 요약 (2026년 5월 24일)\n\n---\n\n**1️⃣ Anthropic, $900B 밸류에이션 펀딩 & 게이츠 재단과 $2억 파트너십**\nAnthropic이 $30B 이상의 Series G 펀딩을 $900B 이상의 기업가치로 마감 예정이라고 Bloomberg가 보도했습니다. OpenAI를 제치고 세계 최고 가치 AI 스타트업이 되는 규모이며, 게이츠 재단과 $2억·4년 파트너십으로 저개발 지역 헬스케어·교육·농업 분야 AI 도구도 개발합니다.\n• [🔗 TechTimes](https://www.techtimes.com/articles/317066/20260523/anthropic-funding-round-top-30b-900b-valuation-would-surpass-openai-most-valuable-ai-startup.htm)\n• [🔗 MobiHealthNews](https://www.mobihealthnews.com/news/anthropic-partners-gates-foundation-amid-reported-30b-investment)\n\n---\n\n**2️⃣ Google I/O 2026 — Gemini Omni 공개: 대화형 영상 생성 AI**\n구글이 5월 19일 Google I/O 2026에서 Gemini Omni를 발표했습니다. 텍스트·이미지·오디오·영상 복합 입력으로 고품질 영상을 생성하고 대화로 편집하는 멀티모달 모델입니다. YouTube Shorts 및 Google Flow에 무료 제공되며, 생성 영상에는 SynthID 워터마크가 자동 삽입됩니다.\n• [🔗 Cybernews](https://cybernews.com/ai-news/google-io-2026-gemini-omni-antigravity-agentic-ai/)\n• [🔗 Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/)\n\n---\n\n**3️⃣ OpenAI GPT-5.5 API 정식 출시 & NVIDIA 차세대 인프라 협력**\nOpenAI의 GPT-5.5 및 GPT-5.5 Pro가 API를 통해 공개됩니다. 코딩·추론·멀티모달에서 강점을 보이며 NVIDIA GB200/GB300 NVL72 시스템에 최적화해 학습·서빙됩니다. OpenAI는 차세대 AI 인프라에 NVIDIA 시스템 10기가와트 이상 배포를 약속했습니다.\n• [🔗 OpenAI](https://openai.com/index/introducing-gpt-5-5/)\n• [🔗 NVIDIA Blog](https://blogs.nvidia.com/blog/openai-codex-gpt-5-5-ai-agents/)\n\n---\n\n**4️⃣ Google Gemini 3.5 Flash GA — 프런티어 지능을 4배 빠르게**\nGemini 3.5 Flash가 일반 제공(GA)으로 전환됩니다. 동급 모델 대비 4배 빠른 속도에 100만 토큰 컨텍스트 윈도우를 지원하며, Terminal-Bench 2.1에서 76.2%로 Gemini 3.1 Pro를 코딩·에이전트 부문에서 앞질렀습니다. 가격은 입력 $1.50 / 출력 $9 (1M 토큰 기준)입니다.\n• [🔗 CNBC](https://www.cnbc.com/2026/05/19/google-ai-ultra-gemini-spark-omni.html)\n• [🔗 LLM Stats](https://llm-stats.com/ai-news)\n\n---\n\n**5️⃣ Sakana AI, KAME 아키텍처 — 실시간 LLM 지식 주입 음성-음성 시스템**\n일본 Sakana AI가 KAME(Knowledge-Access Model Extension)를 발표했습니다. 직접 음성-음성 시스템의 거의 제로 응답 지연을 유지하면서 LLM 지식을 실시간으로 주입하는 하이브리드 탠덤 아키텍처입니다. 음성 AI의 품질과 속도를 동시에 달성하는 새로운 접근법입니다.\n• [🔗 MarkTechPost](https://www.marktechpost.com/2026/05/03/sakana-ai-introduces-kame-a-tandem-speech-to-speech-architecture-that-injects-llm-knowledge-in-real-time/)\n\n---\n\n**6️⃣ Subquadratic, 비(非)트랜스포머 LLM 'SubQ' 출시 — 1,200만 토큰 컨텍스트**\n$2,900만 시드 투자를 유치한 Subquadratic이 최초의 상업용 서브쿼드라틱 LLM 'SubQ 1M-Preview'를 공개했습니다. 트랜스포머가 아닌 신규 아키텍처를 채용하며 1,200만 토큰의 초장문 컨텍스트를 지원합니다. 5월은 스케일보다 아키텍처 혁신이 주목받은 달로 평가됩니다.\n• [🔗 WhatLLM](https://whatllm.org/blog/new-ai-models-may-2026)\n• [🔗 LLM Stats](https://llm-stats.com/llm-updates)\n\n---\n\n**7️⃣ EU AI Act, 2026년 8월까지 각국 AI 규제 샌드박스 설치 의무화**\nEU AI Act 제57조에 따라 모든 EU 회원국은 8월 2일까지 국가 AI 규제 샌드박스를 최소 1개 구축해야 합니다. 세계 최초의 포괄적 AI 법적 프레임워크 시행이 가속화되며, 혁신 기업들이 당국 감독 하에 새 AI 시스템을 안전하게 테스트할 수 있는 환경을 제공합니다.\n• [🔗 Build Fast With AI](https://www.buildfastwithai.com/blogs/ai-news-today-may-23-2026)\n\n---\n\n*출처: TechTimes, MobiHealthNews, Cybernews, Google Blog, OpenAI, NVIDIA Blog, CNBC, MarkTechPost, WhatLLM, Build Fast With AI*"});

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
    data += d.toString('utf8');
    process.stdout.write(d);
  });
  res.on('end', () => {
    if (data.trim() === 'ok') {
      console.log('\n✅ Mattermost 발송 성공! AI 뉴스가 채널에 전달되었습니다.');
    } else {
      console.log('\n⚠️ 서버 응답:', data);
    }
  });
});

req.on('error', (e) => {
  console.error('❌ 발송 오류:', e.message);
  process.exit(1);
});

req.write(body, 'utf8');
req.end();
