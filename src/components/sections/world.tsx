"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Spotlight } from "@/components/ui/spotlight";

const nations = [
  {
    name: "드래곤 제국",
    industry: "마법석 정제 · 마도 통신",
    motif: "반도체 · IT",
    color: "from-red-500/20 via-orange-500/10 to-transparent",
    borderColor: "hover:border-red-500/40",
    accentText: "text-red-400",
    desc: "강력한 마법석 기술을 보유한 패권국. 마도 통신망을 장악하고 있다.",
  },
  {
    name: "엘프 연합",
    industry: "신목 농업 · 정령 에너지",
    motif: "농업/식품 · 에너지",
    color: "from-emerald-500/20 via-green-500/10 to-transparent",
    borderColor: "hover:border-emerald-500/40",
    accentText: "text-emerald-400",
    desc: "자연과 교감하며 정령 에너지를 추출. 지속 가능한 성장을 추구한다.",
  },
  {
    name: "드워프 자치령",
    industry: "광산 조합 · 무기 대장간",
    motif: "자원/광업 · 방산",
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    borderColor: "hover:border-amber-500/40",
    accentText: "text-amber-400",
    desc: "지하 깊은 곳에서 희귀 광물을 채굴. 무기 제조 기술은 대륙 최고.",
  },
  {
    name: "용린 왕국",
    industry: "마수 운송 · 연금술 공방",
    motif: "제조/운송 · 화학",
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderColor: "hover:border-blue-500/40",
    accentText: "text-blue-400",
    desc: "마수를 길들여 대륙 물류를 지배. 연금술로 신소재를 끊임없이 개발한다.",
  },
];

export function WorldSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="mb-3 text-center text-2xl font-bold sm:text-3xl">
            4개 종족이 지배하는 세계
          </h2>
          <p className="mb-14 text-center text-sm text-text-secondary">
            각 종족 국가는 고유한 산업을 보유한다. 뉴스가 시장을 흔든다.
          </p>
        </FadeIn>

        {/* 그리드 - 모바일은 2열, 데스크탑 4열 */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {nations.map((n, i) => (
            <FadeIn key={n.name} delay={i * 0.1} className="h-full">
              <Spotlight className="h-full">
                <div
                  className={`relative h-full rounded-xl border border-border bg-bg-card transition-all duration-200 ${n.borderColor} hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20`}
                >
                  {/* 배경 그라데이션 */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-b ${n.color}`} />

                  <div className="relative z-10 p-5">
                    <span className={`font-[family-name:var(--font-inter)] text-[11px] font-bold tracking-wider ${n.accentText}`}>
                      {n.motif}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold text-text-primary sm:text-base">
                      {n.name}
                    </h3>
                    <p className="mt-1 text-[11px] text-text-muted">{n.industry}</p>
                    <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                      {n.desc}
                    </p>
                  </div>
                </div>
              </Spotlight>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-3 rounded-lg border border-border bg-bg-card/50 px-6 py-4">
            <span className="text-accent-light">▶</span>
            <p className="text-sm text-text-secondary">
              시즌 1 —{" "}
              <span className="font-semibold text-text-primary">마나 고갈 사태</span>
              <span className="ml-2 text-xs text-text-muted">(1970년대 오일쇼크 모티브)</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
