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
          아르카 대륙의 투자 길드에 오신 것을 환영합니다
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
          대륙에 위기가 닥치고 있다.
          <br className="hidden sm:block" />
          여행자의 이야기 속에서 진실을 찾아라.
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
