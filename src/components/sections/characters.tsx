"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Spotlight } from "@/components/ui/spotlight";

const characters = [
  {
    name: "카이",
    role: "마법석 감정사 견습생",
    tribe: "드래곤 제국",
    personality: "호기심 많고 분석적. 스승의 의뢰로 대륙 여행을 떠난다.",
    quote: "품질은 멀쩡한데 양만 줄었어. 왜?",
    color: "from-blue-400/20 to-indigo-500/10",
    accent: "text-blue-400",
    symbol: "◈",
  },
  {
    name: "리나",
    role: "소규모 상단 상인",
    tribe: "용린 왕국",
    personality: "현실적이고 이익에 민감. 숫자를 놓치지 않는다.",
    quote: "운송비가 저번 달보다 2배야.",
    color: "from-rose-400/20 to-pink-500/10",
    accent: "text-rose-400",
    symbol: "◇",
  },
  {
    name: "도르",
    role: "은퇴 광부 출신 호위",
    tribe: "드워프 자치령",
    personality: "과묵하고 신중. 과거와 현재를 비교한다.",
    quote: "내가 일하던 시절엔 이런 적 없었는데.",
    color: "from-amber-400/20 to-orange-500/10",
    accent: "text-amber-400",
    symbol: "■",
  },
  {
    name: "셀레나",
    role: "정령술사 겸 학자",
    tribe: "엘프 연합",
    personality: "이상주의적, 냉정한 관찰자. 장기적 흐름을 읽는다.",
    quote: "이 지역 마나 밀도가 3년 전부터 줄고 있어.",
    color: "from-emerald-400/20 to-teal-500/10",
    accent: "text-emerald-400",
    symbol: "✦",
  },
  {
    name: "그롬",
    role: "용병 겸 정보꾼",
    tribe: "오크 부족연합",
    personality: "거칠지만 정보에 밝다. 소문의 진위는 본인도 모른다.",
    quote: "장로회에서 뭔가 큰 거 결정했다더라.",
    color: "from-red-400/20 to-orange-500/10",
    accent: "text-red-400",
    symbol: "▲",
  },
];

export function CharacterSection() {
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
              <Spotlight className="flex flex-1">
                <div className={`relative flex-1 rounded-xl border border-border bg-bg-card p-5 transition-all duration-200 hover:border-accent/30 hover:-translate-y-1`}>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-b ${c.color}`} />
                  <div className="relative z-10">
                    <div className="mb-3 text-2xl">{c.symbol}</div>
                    <h3 className={`text-base font-bold ${c.accent}`}>{c.name}</h3>
                    <p className="mt-0.5 text-[11px] text-text-muted">{c.role} · {c.tribe}</p>
                    <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                      {c.personality}
                    </p>
                    <p className="mt-2 text-[11px] italic text-text-muted">
                      &ldquo;{c.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </Spotlight>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
