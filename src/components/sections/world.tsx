"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "motion/react";

const nations = [
  {
    name: "드래곤 제국",
    territory: "북부 대륙",
    industries: ["마법석 정제", "마도 통신"],
    desc: "막대한 마법석 매장량과 통신 기술로 대륙의 패권을 쥐고 있다.",
    image: "/worlds/dragon.png",
    borderColor: "hover:border-blue-500/50",
  },
  {
    name: "엘프 연합",
    territory: "서부 삼림",
    industries: ["신목 농업", "정령 에너지"],
    desc: "정령과의 계약을 통해 자연 에너지를 추출한다. 마법석 의존도가 낮다.",
    image: "/worlds/elf.png",
    borderColor: "hover:border-emerald-500/50",
  },
  {
    name: "드워프 자치령",
    territory: "중앙 산맥 지하",
    industries: ["광산 조합", "무기 대장간"],
    desc: "마법석 80%를 산출하는 과점 세력. 가격 결정권을 쥐고 있다.",
    image: "/worlds/dwarf.png",
    borderColor: "hover:border-amber-500/50",
  },
  {
    name: "용린 왕국",
    territory: "동부 해안",
    industries: ["마수 운송", "연금술 공방"],
    desc: "마수를 길들여 대륙 물류를 지배한다. 마법석 전량 수입 의존.",
    image: "/worlds/yongrin.png",
    borderColor: "hover:border-indigo-500/50",
  },
];

export function WorldSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="mb-3 text-center text-2xl font-bold sm:text-3xl">
            아르카 대륙, 4개 종족의 균형
          </h2>
          <p className="mb-14 text-center text-sm text-text-secondary">
            마법석을 둘러싼 이해관계가 대륙의 시장을 만든다. 균형은 언제든 무너질 수 있다.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {nations.map((n, i) => (
            <FadeIn key={n.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`group relative overflow-hidden rounded-xl border border-border transition-all duration-300 ${n.borderColor}`}
              >
                {/* 배경 이미지 */}
                <div className="absolute inset-0">
                  <img
                    src={n.image}
                    alt={n.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/60 to-transparent" />
                </div>

                {/* 콘텐츠 */}
                <div className="relative z-10 flex items-center gap-4 p-5 sm:p-6">
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold text-text-muted">{n.territory}</p>
                    <h3 className="mt-1 text-lg font-bold text-text-primary sm:text-xl">{n.name}</h3>
                    <p className="mt-1.5 text-xs text-text-secondary">{n.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {n.industries.map((ind) => (
                        <span
                          key={ind}
                          className="rounded-md border border-border bg-bg-primary/60 px-2 py-0.5 text-[10px] text-text-muted backdrop-blur-sm"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-bg-card">
            <div className="relative px-6 py-5 sm:px-8">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-light/5" />
              <div className="relative z-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-bg-primary text-accent-light">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    시즌 1 — 마나 고갈 사태
                  </p>
                  <p className="mt-0.5 text-xs text-text-secondary">
                    대륙의 마법석 공급이 끊기기 시작했다. 진실은 시즌 종료 후 밝혀진다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
