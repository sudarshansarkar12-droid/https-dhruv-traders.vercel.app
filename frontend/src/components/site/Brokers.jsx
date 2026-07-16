import { ScrollReveal } from "./RevealText";
import { ArrowUpRight, Shield, Zap, Globe2 } from "lucide-react";

const BROKERS = [
  {
    name: "XM",
    tagline: "Regulated · CySEC, ASIC, IFSC",
    body: "Trade FX, indices, commodities and crypto CFDs with tight spreads and 1000+ instruments. Preferred for new traders — micro accounts from $5.",
    highlights: [
      { icon: Zap, k: "0 pips", v: "on Zero account" },
      { icon: Shield, k: "5+", v: "regulators" },
      { icon: Globe2, k: "196", v: "countries" },
    ],
    accent: "#25c26b",
    href: "https://www.xm.com/",
    testid: "broker-xm",
    tag: "Best for beginners",
  },
  {
    name: "Exness",
    tagline: "Regulated · FCA, CySEC, FSA",
    body: "Institutional-grade execution with unlimited leverage on Standard, instant withdrawals and industry-leading raw spreads for scalpers.",
    highlights: [
      { icon: Zap, k: "0.0 pips", v: "raw spread" },
      { icon: Shield, k: "$3.7B", v: "monthly volume" },
      { icon: Globe2, k: "Instant", v: "withdrawals" },
    ],
    accent: "#f5c518",
    href: "https://www.exness.com/",
    testid: "broker-exness",
    tag: "Best for scalpers",
  },
];

export default function Brokers() {
  return (
    <section
      id="brokers"
      data-testid="brokers-section"
      className="relative py-32 md:py-48 border-b border-white/5"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <div className="overline">§ 08 — Our Brokers</div>
          </div>
          <div className="md:col-span-9">
            <ScrollReveal>
              <h2 className="font-display text-white text-5xl md:text-7xl leading-[0.95] tracking-tighter font-medium">
                Two brokers.<br />
                <em className="italic text-white/60">One desk. Zero excuses.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mt-8 max-w-2xl">
                DHRUV traders execute exclusively through two globally-regulated
                brokers. Open a live account under our partner link — deposits,
                leverage, and payouts stay fully in your name.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Broker cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {BROKERS.map((b, i) => (
            <ScrollReveal
              key={b.name}
              delay={i * 0.1}
              className="group relative border border-white/10 bg-[#0d0d10] p-8 md:p-12 flex flex-col justify-between min-h-[560px] hover:border-white/30 transition-colors"
            >
              {/* Tag */}
              <div className="absolute top-8 right-8 overline text-[#FF5500]">
                {b.tag}
              </div>

              {/* Top */}
              <div>
                <div
                  className="font-display text-[9rem] md:text-[11rem] leading-[0.85] tracking-tighter font-medium"
                  style={{ color: b.accent }}
                >
                  {b.name}
                </div>
                <div className="overline mt-4 normal-case tracking-[0.16em] text-white/70">
                  {b.tagline}
                </div>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mt-8 max-w-md">
                  {b.body}
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-10">
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 mb-8">
                  {b.highlights.map((h) => (
                    <div key={h.k}>
                      <h.icon
                        size={16}
                        className="mb-3"
                        style={{ color: b.accent }}
                      />
                      <div className="font-display text-white text-2xl md:text-3xl leading-none tracking-tighter">
                        {h.k}
                      </div>
                      <div className="overline mt-2 normal-case tracking-[0.14em]">
                        {h.v}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`${b.testid}-cta`}
                  className="cta-primary group inline-flex w-full sm:w-auto justify-center"
                >
                  Open {b.name} Account
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer line */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex items-start gap-3 overline normal-case tracking-[0.14em] text-white/40 max-w-3xl leading-relaxed">
            <span className="text-[#FF5500] mt-1">*</span>
            <span>
              DHRUV TRADERS earns a partner commission from the broker at zero
              cost to you. All trading capital, deposits and withdrawals remain
              fully under your control.
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
