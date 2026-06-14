"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const characters = [
  {
    name: "카이",
    role: "마법석 감정사 견습생",
    tribe: "드래곤 제국",
    quote: "품질은 멀쩡한데 양만 줄었어. 왜?",
    accent: "text-blue-400",
    bg: "from-blue-900/40 to-bg-card",
    image: "/characters/kai.png",
    desc: "스승의 의뢰로 대륙 각지의 마법석 광맥을 조사하는 여행을 떠난다.",
    events: ["광맥 품질 감정 → 양만 줄고 질은 정상", "2번 구역 폐쇄 목격", "스승의 진짜 의도 추적"],
  },
  {
    name: "리나",
    role: "상인",
    tribe: "용린 왕국",
    quote: "운송비가 저번 달보다 2배야.",
    accent: "text-rose-400",
    bg: "from-rose-900/40 to-bg-card",
    image: "/characters/rina.png",
    desc: "거래처를 순회하며 물건을 사고파는 상인. 가격 변동에 민감하다.",
    events: ["마법석 연료비 상승 체감", "상단 물량 계약 보류 목격", "마을별 가격 차이 추적"],
  },
  {
    name: "도르",
    role: "은퇴 광부",
    tribe: "드워프 자치령",
    quote: "내가 일하던 시절엔 이런 적 없었는데.",
    accent: "text-amber-400",
    bg: "from-amber-900/40 to-bg-card",
    image: "/characters/dor.png",
    desc: "드워프 자치령에서 30년 광부 생활 후 은퇴. 과묵하지만 핵심을 찌른다.",
    events: ["광산 마을의 이상한 정적 감지", "옛 동료의 침묵에서 이상 포착", "'인원 줄이는 건 채굴 안 할 때'"],
  },
  {
    name: "셀레나",
    role: "정령술사",
    tribe: "엘프 연합",
    quote: "이 일대 마나 흐름이 이상해.",
    accent: "text-emerald-400",
    bg: "from-emerald-900/40 to-bg-card",
    image: "/characters/selena.png",
    desc: "고대 정령 유적을 조사하는 학자. 장기적 흐름을 읽는 눈을 가졌다.",
    events: ["마나 농도 하락 관측", "정령 에너지 대체 가능성 제시", "대륙 변화의 장기 징조 경고"],
  },
  {
    name: "그롬",
    role: "용병",
    tribe: "오크 부족연합",
    quote: "장로회에서 뭔가 큰 거 결정했다더라.",
    accent: "text-red-400",
    bg: "from-red-900/40 to-bg-card",
    image: "/characters/grom.png",
    desc: "어디서 나타나는지 모른다. 뒷골목 소문에 밝지만 진위는 본인도 모른다.",
    events: ["장로회 비밀 결의 소문 전달", "군사 동향 정보", "검증 안 된 루머 — 믿을지는 유저 판단"],
  },
];

export function CharacterSection() {
  const [active, setActive] = useState<number>(0);

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

        {/* 가로 아코디언 — 데스크탑 */}
        <div className="hidden lg:flex h-[380px] gap-2 rounded-2xl overflow-hidden border border-border">
          {characters.map((c, i) => (
            <motion.div
              key={c.name}
              className={cn(
                "relative cursor-pointer overflow-hidden transition-colors",
                active === i ? "border-r border-border" : ""
              )}
              animate={{ flex: active === i ? 2.5 : 1 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              onMouseEnter={() => setActive(i)}
            >
              {/* 배경 이미지 */}
              <img
                src={c.image}
                alt={c.name}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover object-center transition-all duration-500",
                  active === i ? "opacity-100 scale-100" : "opacity-40 scale-100"
                )}
              />
              
              {/* 오버레이 */}
              <div className={cn(
                "absolute inset-0 transition-all duration-500",
                active === i 
                  ? `bg-gradient-to-r ${c.bg}` 
                  : "bg-bg-primary/60"
              )} />

              {/* 비활성 — 세로 이름만 */}
              <div className={cn(
                "absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-300",
                active === i ? "opacity-0" : "opacity-100"
              )}>
                <span className={cn("text-sm font-bold [writing-mode:vertical-rl]", c.accent)}>
                  {c.name}
                </span>
              </div>

              {/* 활성 — 상세 정보 */}
              <motion.div
                className={cn(
                  "absolute inset-0 flex items-end p-6 transition-opacity duration-300",
                  active === i ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                <div className="max-w-sm">
                  <p className="text-[11px] text-text-muted">{c.tribe} · {c.role}</p>
                  <h3 className={cn("mt-1 text-2xl font-bold", c.accent)}>{c.name}</h3>
                  <p className="mt-2 text-sm italic text-text-secondary">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-text-secondary">{c.desc}</p>
                  <div className="mt-3">
                    <ul className="space-y-1">
                      {c.events.map((e) => (
                        <li key={e} className="flex items-start gap-1.5 text-[11px] text-text-muted">
                          <span className={cn("mt-0.5", c.accent)}>›</span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 모바일 — 세로 스택 */}
        <div className="flex flex-col gap-3 lg:hidden">
          {characters.map((c, i) => (
            <div
              key={c.name}
              className="relative overflow-hidden rounded-xl border border-border"
              onClick={() => setActive(active === i ? -1 : i)}
            >
              <div className="relative h-32 w-full overflow-hidden">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/80 to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-center p-4">
                <div>
                  <h3 className={cn("text-base font-bold", c.accent)}>{c.name}</h3>
                  <p className="text-[11px] text-text-muted">{c.role} · {c.tribe}</p>
                  <p className="mt-1 text-[11px] italic text-text-secondary">&ldquo;{c.quote}&rdquo;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
