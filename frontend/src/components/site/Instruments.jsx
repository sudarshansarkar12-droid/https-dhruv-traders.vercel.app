import { motion } from "framer-motion";
import { ScrollReveal } from "./RevealText";
import { ArrowUpRight } from "lucide-react";

const CARDS = [
  {
    label: "Forex",
    title: "Majors, Minors, Exotics.",
    body: "60+ currency pairs. Institutional spreads from 0.1 pips. 24/5 execution with sub-40ms fills.",
    stat: "0.1 pips",
    statLabel: "Min spread",
    image:
      "https://images.unsplash.com/photo-1628763228263-d9ebb07bd0d9?auto=format&fit=crop&w=1600&q=80",
    span: "md:col-span-7",
    tall: "h-[560px]",
  },
  {
    label: "Commodities",
    title: "Gold, Silver, Oil.",
    body: "Hedge inflation with vaulted metals and energy contracts, traded on the same terminal as your FX book.",
    stat: "XAU",
    statLabel: "24k reserve",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-5",
    tall: "h-[560px]",
  },
  {
    label: "Indices",
    title: "S&P, NAS, DAX, NIFTY.",
    body: "Trade the world's benchmarks with leveraged CFDs and access after-hours liquidity through our aggregated pool.",
    stat: "12",
    statLabel: "Global indices",
    image:
      "https://images.unsplash.com/photo-1498262257252-c282316270bc?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-5",
    tall: "h-[520px]",
  },
  {
    label: "Crypto",
    title: "BTC, ETH & majors.",
    body: "Regulated crypto CFDs paired with FX and metals — deployed inside one margin account.",
    stat: "24/7",
    statLabel: "Uptime",
    image:
      "https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=1600&q=80",
    span: "md:col-span-7",
    tall: "h-[520px]",
  },
];

export default function Instruments() {
  return (
    <section
      id="instruments"
      data-testid="instruments-section"
      className="relative py-32 md:py-48 border-b border-white/5"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <div className="overline">§ 02 — Instruments</div>
          </div>
          <div className="md:col-span-9">
            <ScrollReveal>
              <h2 className="font-display text-white text-5xl md:text-7xl leading-[0.95] tracking-tighter font-medium">
                One terminal.<br />
                <em className="italic text-white/60">Four asset classes.</em>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {CARDS.map((c, i) => (
            <ScrollReveal
              key={c.label}
              delay={i * 0.08}
              className={`${c.span} ${c.tall} inst-card group cursor-pointer`}
            >
              <div
                data-testid={`instrument-card-${c.label.toLowerCase()}`}
                className="relative h-full w-full"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="inst-image absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent" />

                {/* Top row */}
                <div className="relative z-10 flex items-start justify-between p-6 md:p-8">
                  <div className="overline text-white/80">{c.label}</div>
                  <ArrowUpRight
                    size={22}
                    className="text-white/50 group-hover:text-[#FF5500] transition-colors"
                  />
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="font-mono-utility text-[#FF5500] text-3xl md:text-4xl">
                        {c.stat}
                      </div>
                      <div className="overline mt-1">{c.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="font-display text-white text-3xl md:text-5xl leading-[0.95] tracking-tighter font-medium mb-4">
                    {c.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                    {c.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
