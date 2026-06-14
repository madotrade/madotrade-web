"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "motion/react";

const nations = [
  {
    name: "드래곤 제국",
    industry: "마법석 정제 · 마도 통신",
    motif: "반도체 · IT",
    color: "from-red-500/20 via-orange-500/10 to-transparent",
    borderColor: "hover:border-red-500/40",
    accentText: "text-red-400",
    symbol: "◆",
    desc: "강력한 마법석 기술을 보유한 패권국. 마도 통신망을 장악하고 있다.",
  },
  {
    name: "엘프 연합",
    industry: "신목 농업 · 정령 에너지",
    motif: "농업/식품 · 에너지",
    color: "from-emerald-500/20 via-green-500/10 to-transparent",
    borderColor: "hover:border-emerald-500/40",
    accentText: "text-emerald-400",
    symbol: "◇",
    desc: "자연과 교감하며 정령 에너지를 추출. 지속 가능한 성장을 추구한다.",
  },
  {
    name: "드워프 자치령",
    industry: "광산 조합 · 무기 대장간",
    motif: "자원/광업 · 방산",
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    borderColor: "hover:border-amber-500/40",
    accentText: "text-amber-400",
    symbol: "■",
    desc: "지하 깊은 곳에서 희귀 광물을 채굴. 무기 제조 기술은 대륙 최고.",
  },
  {
    name: "용린 왕국",
    industry: "마수 운송 · 연금술 공방",
    motif: "제조/운송 · 화학",
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderColor: "hover:border-blue-500/40",
    accentText: "text-blue-400",
    symbol: "●",
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
      </div>

      {/* 가로 스크롤 슬라이더 */}
      <FadeIn>
        <div className="scrollbar-hide overflow-x-auto px-6">
          <div className="mx-auto flex max-w-6xl gap-4 pb-4 sm:grid sm:grid-cols-4 sm:overflow-visible">
            {nations.map((n, i) => (
              <motion.div
                key={n.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative min-w-[260px] flex-shrink-0 overflow-hidden rounded-xl border border-border bg-bg-card transition-colors sm:min-w-0 ${n.borderColor}`}
              >
                {/* 배경 그라데이션 */}
                <div className={`absolute inset-0 bg-gradient-to-b ${n.color}`} />

                {/* 심볼 워터마크 */}
                <div className="absolute right-3 top-3 text-4xl font-bold text-white/5">
                  {n.symbol}
                </div>

                <div className="relative z-10 p-5">
                  <span className={`font-[family-name:var(--font-inter)] text-xs font-bold tracking-wider ${n.accentText}`}>
                    {n.motif}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-text-primary">
                    {n.name}
                  </h3>
                  <p className="mt-1 text-xs text-text-muted">{n.industry}</p>
                  <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                    {n.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mx-auto mt-12 max-w-6xl px-6">
          <div className="flex items-center justify-center gap-3 rounded-lg border border-border bg-bg-card/50 px-6 py-4">
            <span className="text-accent-light">▶</span>
            <p className="text-sm text-text-secondary">
              시즌 1 —{" "}
              <span className="font-semibold text-text-primary">마나 고갈 사태</span>
              <span className="ml-2 text-xs text-text-muted">(1970년대 오일쇼크 모티브)</span>
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
