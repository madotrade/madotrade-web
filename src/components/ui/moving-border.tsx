"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function MovingBorderButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-xl p-[1px]",
        className
      )}
    >
      <motion.span
        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#6366f1_360deg)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <span className="relative z-10 inline-flex items-center rounded-[11px] bg-bg-card px-8 py-3 text-sm font-semibold text-text-primary backdrop-blur-sm">
        {children}
      </span>
    </Comp>
  );
}
