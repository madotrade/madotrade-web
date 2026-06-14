"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Spotlight } from "@/components/ui/spotlight";

const nations = [
  { name: "드래곤 제국", industry: "마법석 정제 · 마도 통신", emoji: "🐉" },
  { name: "엘프 연합", industry: "신목 농업 · 정령 에너지", emoji: "🧝" },
  { name: "드워프 자치령", industry: "광산 조합 · 무기 대장간", emoji: "⛏️" },
  { name: "용린 왕국", industry: "마수 운송 · 연금술 공방", emoji: "🐲" },
];

export function WorldSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <FadeIn>
        <h2 className="mb-3 text-center text-2xl font-bold sm:text-3xl">
          4개 종족이 지배하는 세계
        </h2>
        <p className="mb-14 text-center text-sm text-text-secondary">
          각 종족 국가는 고유한 산업을 보유한다. 뉴스가 시장을 흔든다.
        </p>
      </FadeIn>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {nations.map((n, i) => (
          <FadeIn key={n.name} delay={i * 0.1}>
            <Spotlight>
              <div className="flex flex-col items-center rounded-xl border border-border bg-bg-card p-6 text-center transition-colors hover:border-accent/30">
                <span className="text-3xl">{n.emoji}</span>
                <h3 className="mt-3 text-sm font-semibold text-text-primary">
                  {n.name}
                </h3>
                <p className="mt-1 text-xs text-text-secondary">
                  {n.industry}
                </p>
              </div>
            </Spotlight>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.4}>
        <p className="mt-10 text-center text-sm text-text-muted">
          시즌 1 —{" "}
          <span className="text-accent-light">마나 고갈 사태</span>{" "}
          (1970년대 오일쇼크 모티브)
        </p>
      </FadeIn>
    </section>
  );
}
