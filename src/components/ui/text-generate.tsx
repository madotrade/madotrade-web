"use client";

import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({
  words,
  className,
}: {
  words: string;
  className?: string;
}) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: 1, filter: "blur(0px)" },
        { duration: 0.4, delay: stagger(0.05) }
      );
    }
  }, [isInView, animate]);

  return (
    <motion.div ref={scope} className={cn(className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={idx}
          className="inline-block opacity-0"
          style={{ filter: "blur(8px)" }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
}
