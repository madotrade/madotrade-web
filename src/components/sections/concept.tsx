"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { FadeIn } from "@/components/ui/fade-in";

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
    title: "역사를 플레이하라",
    desc: "오일쇼크, 닷컴버블… 실제 경제사를 판타지로 체험",
  },
];

export function ConceptSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <FadeIn>
        <h2 className="mb-14 text-center text-2xl font-bold sm:text-3xl">
          마도거래소는 이런 곳이다
        </h2>
      </FadeIn>
      <div className="grid gap-5 sm:grid-cols-2">
        {concepts.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.1}>
            <Spotlight>
              <div className="rounded-xl border border-border bg-bg-card p-6 transition-colors hover:border-accent/30">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="mt-3 text-base font-semibold text-text-primary">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {c.desc}
                </p>
              </div>
            </Spotlight>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
