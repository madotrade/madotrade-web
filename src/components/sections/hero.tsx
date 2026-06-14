"use client";

import { StarsBackground } from "@/components/ui/stars-background";
import { TextGenerateEffect } from "@/components/ui/text-generate";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <StarsBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08)_0%,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <span className="mb-6 inline-block rounded-full border border-border bg-bg-card/50 px-4 py-1.5 text-xs tracking-wider text-accent-light">
          시즌형 모의투자 서비스
        </span>

        <TextGenerateEffect
          words="뉴스를 읽고, 시장을 예측하라."
          className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 max-w-md text-base text-text-secondary sm:text-lg"
        >
          역사적 경제 사건을 판타지 세계관으로 체험하는
          <br className="hidden sm:block" />
          분석력 중심 경쟁 서비스
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-10"
        >
          <MovingBorderButton href="#cta">출시 알림 받기</MovingBorderButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 text-text-muted"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-block text-lg"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
