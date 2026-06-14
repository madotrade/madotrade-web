"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { motion } from "motion/react";

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative border-y border-border bg-bg-card/30 px-6 py-28 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.06)_0%,transparent_60%)]" />
      <FadeIn className="relative z-10 flex flex-col items-center">
        <span className="mb-6 text-4xl">⚔️</span>
        <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
          대륙의 위기가 시작된다
        </h2>
        <p className="mb-4 text-sm text-text-secondary">
          시즌 1 — 마나 고갈 사태
        </p>
        <p className="mb-10 max-w-md text-xs leading-relaxed text-text-muted">
          마법석 공급이 끊기고, 종족 간 긴장이 고조된다.
          여행자들의 이야기를 따라가며 시장을 예측하라.
          당신의 분석이 증명되는 순간을 기다려라.
        </p>

        <MovingBorderButton href="#cta">
          사전알림 신청하기
        </MovingBorderButton>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-[11px] text-text-muted"
        >
          시즌 1 오픈 시 가장 먼저 알려드립니다
        </motion.p>
      </FadeIn>
    </section>
  );
}
