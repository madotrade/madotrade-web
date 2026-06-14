"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { FadeIn } from "@/components/ui/fade-in";

const concepts = [
  {
    title: "스토리 기반 뉴스",
    desc: "판타지 소설처럼 읽히는 뉴스 속에 투자 단서가 숨어있다. 여행일지와 속보를 교차하며 진실을 추적하라.",
    gradient: "from-indigo-500/20 to-purple-600/5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "분석력 = 실력",
    desc: "운이 아닌 해석력이 승부를 결정한다. 확률형 요소 없음, 배율 베팅 없음. 순수 분석력 경쟁.",
    gradient: "from-violet-500/20 to-fuchsia-600/5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v-5.5" />
      </svg>
    ),
  },
  {
    title: "시즌 경쟁",
    desc: "2달 단위 시즌. 수익률과 예측 적중률로 랭킹을 겨뤄라. 시즌 종료 시 분석 리포트 발급.",
    gradient: "from-amber-500/15 to-orange-600/5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .982-3.172M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
      </svg>
    ),
  },
  {
    title: "역사를 플레이하라",
    desc: "오일쇼크, 닷컴버블, 아시아 금융위기… 실제 경제사 20~30시즌 분량을 판타지로 체험.",
    gradient: "from-emerald-500/15 to-teal-600/5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.73-3.558" />
      </svg>
    ),
  },
];

export function ConceptSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <FadeIn>
        <h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl">
          마도거래소는 이런 곳이다
        </h2>
        <p className="mb-14 text-center text-sm text-text-secondary">
          금융을 공부가 아닌 플레이 경험으로 전환한다
        </p>
      </FadeIn>
      <div className="grid gap-5 sm:grid-cols-2">
        {concepts.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.1} className="h-full">
            <Spotlight className="h-full">
              <div className={`relative h-full overflow-hidden rounded-xl border border-border bg-bg-card p-7 transition-colors hover:border-accent/30`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-60`} />
                <div className="relative z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-primary/80 text-accent-light">
                    {c.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-text-primary">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {c.desc}
                  </p>
                </div>
              </div>
            </Spotlight>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
