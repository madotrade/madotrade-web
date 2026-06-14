"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const characters = [
  {
    name: "카이",
    role: "마법석 감정사 견습생",
    tribe: "드래곤 제국",
    quote: "품질은 멀쩡한데 양만 줄었어. 왜?",
    accent: "text-blue-400",
    border: "border-blue-500/40",
    image: "/characters/kai.png",
    desc: "스승의 의뢰로 대륙 각지의 마법석 광맥을 조사하는 여행을 떠난다. 호기심이 강하고 분석적이며, 관찰한 것을 빠짐없이 기록한다.",
    events: ["광맥 품질 감정 → 양만 줄고 질은 정상 발견", "2번 구역 폐쇄 목격", "스승의 진짜 의도를 추적"],
  },
  {
    name: "리나",
    role: "소규모 상단 상인",
    tribe: "용린 왕국",
    quote: "운송비가 저번 달보다 2배야.",
    accent: "text-rose-400",
    border: "border-rose-500/40",
    image: "/characters/rina.png",
    desc: "거래처를 순회하며 물건을 사고파는 상인. 가격 변동에 민감하고 숫자를 놓치지 않는다. 항상 메모장에 뭔가를 적고 있다.",
    events: ["마법석 연료비 상승 체감", "상단 물량 계약 보류 목격", "마을별 가격 차이 추적"],
  },
  {
    name: "도르",
    role: "은퇴 광부 출신 호위",
    tribe: "드워프 자치령",
    quote: "내가 일하던 시절엔 이런 적 없었는데.",
    accent: "text-amber-400",
    border: "border-amber-500/40",
    image: "/characters/dor.png",
    desc: "드워프 자치령에서 30년 광부 생활 후 은퇴. 카이의 보디가드 겸 길 안내를 맡았다. 과묵하지만 핵심을 찌르는 한마디를 한다.",
    events: ["광산 마을의 이상한 정적 감지", "옛 동료 브론의 침묵에서 이상 포착", "'인원 줄이는 건 채굴 안 할 때'라는 핵심 분석"],
  },
  {
    name: "셀레나",
    role: "정령술사 겸 학자",
    tribe: "엘프 연합",
    quote: "이 일대 마나 흐름이 이상해.",
    accent: "text-emerald-400",
    border: "border-emerald-500/40",
    image: "/characters/selena.png",
    desc: "고대 정령 유적을 조사하는 학자. 냉정하고 이상주의적이며, 장기적 흐름을 읽는 눈을 가졌다. 감정적이지 않지만 결정적 순간에 핵심을 짚는다.",
    events: ["마나 농도 하락 관측 (3년 전부터)", "정령 에너지 대체 가능성 제시", "장기적 대륙 변화의 징조 경고"],
  },
  {
    name: "그롬",
    role: "용병 겸 정보꾼",
    tribe: "오크 부족연합",
    quote: "장로회에서 뭔가 큰 거 결정했다더라.",
    accent: "text-red-400",
    border: "border-red-500/40",
    image: "/characters/grom.png",
    desc: "어디서 나타나는지 모르고, 갈 때도 갑자기 간다. 뒷골목 소문에 밝지만 진위는 본인도 모른다. 가끔 정확히 맞힌다.",
    events: ["장로회 비밀 결의 소문 전달", "군사 동향·물자 이동 정보", "검증 안 된 루머 — 믿을지 말지는 유저 판단"],
  },
];

export function CharacterSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="border-y border-border bg-bg-card/20 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="mb-3 text-center text-2xl font-bold sm:text-3xl">
            다섯 여행자, 하나의 진실
          </h2>
          <p className="mb-14 text-center text-sm text-text-secondary">
            그들은 각자의 이유로 대륙을 여행한다. 당신은 그들의 이야기에서 시장의 방향을 읽는다.
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {characters.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.08} className="flex">
              <div
                className={cn(
                  "relative flex-1 cursor-pointer overflow-hidden rounded-xl border bg-bg-card transition-all duration-300",
                  active === i ? `${c.border} ring-1 ring-accent/20` : "border-border hover:border-accent/30 hover:-translate-y-1"
                )}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="relative h-48 w-full overflow-hidden sm:h-56">
                  <img
                    src={c.image}
                    alt={c.name}
                    className={cn(
                      "h-full w-full object-cover object-top transition-all duration-500",
                      active === i ? "scale-105" : "group-hover:scale-110"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />
                </div>
                <div className="relative z-10 px-4 pb-4 pt-2">
                  <h3 className={`text-base font-bold ${c.accent}`}>{c.name}</h3>
                  <p className="mt-0.5 text-[11px] text-text-muted">{c.role} · {c.tribe}</p>
                  <p className="mt-2 text-[11px] italic text-text-secondary">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                </div>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="px-4 py-4">
                        <p className="text-xs leading-relaxed text-text-secondary">
                          {c.desc}
                        </p>
                        <div className="mt-3">
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">관련 사건</p>
                          <ul className="mt-1.5 space-y-1">
                            {c.events.map((e) => (
                              <li key={e} className="flex items-start gap-1.5 text-[11px] text-text-secondary">
                                <span className={`mt-0.5 ${c.accent}`}>›</span>
                                {e}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] text-text-muted">
          캐릭터를 탭하여 상세 정보를 확인하세요
        </p>
      </div>
    </section>
  );
}
