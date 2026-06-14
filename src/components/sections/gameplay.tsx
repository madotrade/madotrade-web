"use client";

import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  { num: "01", label: "뉴스 발행", desc: "여행일지 + 속보가 도착한다" },
  { num: "02", label: "단서 해석", desc: "숨겨진 투자 단서를 찾아라" },
  { num: "03", label: "예측 & 매매", desc: "방향을 예측하고 포지션을 잡아라" },
  { num: "04", label: "결과 확인", desc: "적중 여부 + 수익률 + 랭킹" },
];

export function GameplaySection() {
  return (
    <section className="border-y border-border bg-bg-card/30 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="mb-14 text-center text-2xl font-bold sm:text-3xl">
            하루의 플레이 루프
          </h2>
        </FadeIn>
        <div className="relative">
          {/* 연결선 */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent/40 via-accent-light/20 to-transparent sm:block" />

          <div className="flex flex-col gap-10 sm:gap-12">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.15}>
                <div className="flex items-start gap-5 sm:pl-14">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-bg-primary font-[family-name:var(--font-inter)] text-xs font-bold text-accent sm:absolute sm:left-0">
                    {s.num}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{s.label}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
