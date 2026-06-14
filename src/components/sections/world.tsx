"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Spotlight } from "@/components/ui/spotlight";

const nations = [
  {
    name: "드래곤 제국",
    territory: "북부 대륙",
    industries: ["마법석 정제", "마도 통신"],
    color: "from-red-500/20 via-orange-500/10 to-transparent",
    borderColor: "hover:border-red-500/40",
    accentText: "text-red-400",
    desc: "막대한 마법석 매장량과 통신 기술로 대륙의 패권을 쥐고 있다. 그러나 최근 광맥에서 이상 징후가 보고되고 있다.",
  },
  {
    name: "엘프 연합",
    territory: "서부 삼림",
    industries: ["신목 농업", "정령 에너지"],
    color: "from-emerald-500/20 via-green-500/10 to-transparent",
    borderColor: "hover:border-emerald-500/40",
    accentText: "text-emerald-400",
    desc: "정령과의 계약을 통해 자연 에너지를 추출한다. 마법석 의존도가 낮아 위기에 강하다는 평가를 받는다.",
  },
  {
    name: "드워프 자치령",
    territory: "중앙 산맥",
    industries: ["광산 조합", "무기 대장간"],
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    borderColor: "hover:border-amber-500/40",
    accentText: "text-amber-400",
    desc: "지하 깊은 곳에서 희귀 광물을 채굴하며, 대륙 최고의 무기를 단조한다. 자원 가격에 민감하게 반응한다.",
  },
  {
    name: "용린 왕국",
    territory: "동부 평원",
    industries: ["마수 운송", "연금술 공방"],
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderColor: "hover:border-blue-500/40",
    accentText: "text-blue-400",
    desc: "길들인 마수로 대륙 물류를 지배한다. 연금술 기반 신소재 개발에 막대한 투자를 이어가고 있다.",
  },
];

export function WorldSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="mb-3 text-center text-2xl font-bold sm:text-3xl">
            4개 종족이 경쟁하는 대륙
          </h2>
          <p className="mb-14 text-center text-sm text-text-secondary">
            종족 간의 이해관계가 시장을 만든다. 뉴스 하나가 대륙 전체를 뒤흔든다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 items-stretch gap-4 lg:grid-cols-4">
          {nations.map((n, i) => (
            <FadeIn key={n.name} delay={i * 0.1} className="flex">
              <Spotlight className="flex flex-1">
                <div
                  className={`relative flex-1 rounded-xl border border-border bg-bg-card transition-all duration-200 ${n.borderColor} hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20`}
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-b ${n.color}`} />
                  <div className="relative z-10 p-5">
                    <span className={`text-[11px] font-semibold ${n.accentText}`}>
                      {n.territory}
                    </span>
                    <h3 className="mt-1.5 text-sm font-bold text-text-primary sm:text-base">
                      {n.name}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {n.industries.map((ind) => (
                        <span
                          key={ind}
                          className="rounded-md bg-bg-primary/60 px-2 py-0.5 text-[10px] text-text-muted"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                      {n.desc}
                    </p>
                  </div>
                </div>
              </Spotlight>
            </FadeIn>
          ))}
        </div>

        {/* 시즌 1 티저 - 현실 모티브 숨김, 세계관 서사로만 */}
        <FadeIn delay={0.4}>
          <div className="mt-14 overflow-hidden rounded-xl border border-border bg-bg-card">
            <div className="relative px-6 py-6 sm:px-8">
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
