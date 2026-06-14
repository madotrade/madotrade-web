"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "motion/react";

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative border-y border-border bg-bg-card/30 px-6 py-28 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.05)_0%,transparent_60%)]" />
      <FadeIn className="relative z-10">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
          대륙의 위기가 시작된다
        </h2>
        <p className="mb-10 text-sm text-text-secondary">
          시즌 1 — 마나 고갈 사태. 출시 알림을 신청하고 첫 번째 분석가가 되세요.
        </p>
        <motion.div
          className="inline-flex flex-col items-center gap-2 rounded-xl border border-accent/20 bg-bg-primary px-10 py-6"
          whileHover={{ borderColor: "rgba(99, 102, 241, 0.4)" }}
        >
          <span className="text-2xl">🔮</span>
          <p className="text-base font-semibold text-accent-light">준비 중</p>
          <p className="text-xs text-text-muted">사전등록은 곧 오픈됩니다</p>
        </motion.div>
      </FadeIn>
    </section>
  );
}
