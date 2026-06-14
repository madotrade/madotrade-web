export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ConceptSection />
      <GameplaySection />
      <WorldSection />
      <CTASection />
      <Footer />
    </main>
  );
}

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)]" />
      <p className="mb-4 text-sm tracking-widest text-accent uppercase">
        시즌형 모의투자 서비스
      </p>
      <h1 className="glow-gold mb-6 text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
        뉴스를 읽고,
        <br />
        시장을 예측하라.
      </h1>
      <p className="mb-10 max-w-xl text-lg text-text-secondary">
        실제 역사적 경제 사건을 판타지 세계관으로 재해석한
        <br className="hidden sm:block" />
        스토리 기반 분석력 경쟁 서비스
      </p>
      <a
        href="#cta"
        className="rounded-lg bg-accent px-8 py-3 font-semibold text-bg-primary transition hover:bg-accent-dim"
      >
        사전등록 알림 받기
      </a>
      <div className="absolute bottom-10 animate-bounce text-text-secondary">
        ↓
      </div>
    </section>
  );
}

/* ─── Concept ─── */
const concepts = [
  {
    icon: "📖",
    title: "스토리 기반 뉴스",
    desc: "판타지 소설처럼 읽히는 뉴스 속에 투자 단서가 숨어있다",
  },
  {
    icon: "🧠",
    title: "분석력 = 실력",
    desc: "운이 아닌 해석력이 승부를 결정한다. 사행성 제로",
  },
  {
    icon: "🏆",
    title: "시즌 경쟁",
    desc: "2달 단위 시즌. 수익률과 예측 적중률로 랭킹을 겨뤄라",
  },
  {
    icon: "⚔️",
    title: "역사를 체험하라",
    desc: "오일쇼크, 닷컴버블... 실제 경제사를 판타지로 플레이",
  },
];

function ConceptSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">
        마도거래소는 이런 곳이다
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {concepts.map((c) => (
          <div
            key={c.title}
            className="card-hover rounded-xl border border-border bg-bg-card p-6"
          >
            <span className="text-3xl">{c.icon}</span>
            <h3 className="mt-3 text-lg font-semibold text-accent">
              {c.title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Gameplay ─── */
const steps = [
  { num: "01", label: "뉴스 발행", desc: "여행일지 + 속보가 도착한다" },
  { num: "02", label: "단서 해석", desc: "숨겨진 투자 단서를 찾아라" },
  { num: "03", label: "예측 & 매매", desc: "방향을 예측하고 포지션을 잡아라" },
  { num: "04", label: "결과 확인", desc: "적중 여부 + 수익률 + 랭킹 업데이트" },
];

function GameplaySection() {
  return (
    <section className="border-y border-border bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          하루의 플레이 루프
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-accent text-accent font-mono text-sm">
                {s.num}
              </div>
              <h3 className="font-semibold">{s.label}</h3>
              <p className="mt-1 text-sm text-text-secondary">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── World ─── */
const nations = [
  { name: "드래곤 제국", industry: "마법석 정제 · 마도 통신", emoji: "🐉" },
  { name: "엘프 연합", industry: "신목 농업 · 정령 에너지", emoji: "🧝" },
  { name: "드워프 자치령", industry: "광산 조합 · 무기 대장간", emoji: "⛏️" },
  { name: "용린 왕국", industry: "마수 운송 · 연금술 공방", emoji: "🐲" },
];

function WorldSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-4 text-center text-3xl font-bold">
        4개 종족이 지배하는 세계
      </h2>
      <p className="mb-12 text-center text-text-secondary">
        각 종족 국가는 고유한 산업을 보유한다. 뉴스가 시장을 흔든다.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {nations.map((n) => (
          <div
            key={n.name}
            className="card-hover rounded-lg border border-border bg-bg-card p-5 text-center"
          >
            <span className="text-4xl">{n.emoji}</span>
            <h3 className="mt-2 font-semibold text-accent">{n.name}</h3>
            <p className="mt-1 text-xs text-text-secondary">{n.industry}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-text-secondary">
        시즌 1 — <span className="text-accent">마나 고갈 사태</span> (1970년대
        오일쇼크 모티브)
      </p>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section
      id="cta"
      className="border-y border-border bg-bg-secondary px-6 py-24 text-center"
    >
      <h2 className="mb-4 text-3xl font-bold">출시 알림을 받으세요</h2>
      <p className="mb-8 text-text-secondary">
        마도거래소는 현재 개발 중입니다. 곧 찾아갑니다.
      </p>
      <div className="inline-block rounded-lg border border-accent/30 bg-bg-card px-8 py-4">
        <p className="text-lg font-semibold text-accent">🔮 준비 중</p>
        <p className="mt-1 text-sm text-text-secondary">
          사전등록은 곧 오픈됩니다
        </p>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="px-6 py-12 text-center text-sm text-text-secondary">
      <p className="font-semibold text-text-primary">마도거래소</p>
      <p className="mt-2">© 2026 Madotrade. All rights reserved.</p>
      <p className="mt-4">
        <a href="mailto:contact@madotrade.com" className="hover:text-accent">
          contact@madotrade.com
        </a>
      </p>
    </footer>
  );
}
