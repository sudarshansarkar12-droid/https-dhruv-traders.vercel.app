import { ScrollReveal } from "./RevealText";

const CHAPTERS = [
  {
    n: "01",
    title: "Precision.",
    body: "Every entry is a decision made in silence. We do not chase; we compose. Our desk trades what the chart says — not what the crowd screams.",
    tag: "The Method",
  },
  {
    n: "02",
    title: "Discipline.",
    body: "Risk is a religion, not a rumour. Position sizing, drawdown limits, and hard exits — engineered into every campaign we run for our clients.",
    tag: "The Rule",
  },
  {
    n: "03",
    title: "Momentum.",
    body: "The market has a pulse. We listen with volume profiles, order flow and cross-asset context, then move only when the tape gives us its blessing.",
    tag: "The Signal",
  },
  {
    n: "04",
    title: "Legacy.",
    body: "We are not day-traders. We are custodians of capital — for founders, funds, and families that measure returns in years, not tweets.",
    tag: "The Long Game",
  },
];

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      data-testid="manifesto-section"
      className="relative py-32 md:py-48 border-b border-white/5"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-3">
            <div className="overline">§ Manifesto</div>
          </div>
          <div className="md:col-span-9">
            <ScrollReveal>
              <h2 className="font-display text-white text-5xl md:text-7xl leading-[0.95] tracking-tighter font-medium">
                Four laws we <em className="italic text-white/70">never</em> break —
                and one truth the market always keeps.
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* Chapters */}
        <div className="flex flex-col">
          {CHAPTERS.map((c, i) => (
            <ScrollReveal
              key={c.n}
              delay={i * 0.05}
              className="relative border-t border-white/10 py-16 md:py-24"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                {/* Giant chapter number */}
                <div className="md:col-span-5 relative">
                  <div className="chapter-num text-[28vw] md:text-[15vw] font-medium">
                    {c.n}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="overline">{c.tag}</div>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-white text-4xl md:text-6xl leading-[0.95] tracking-tighter font-medium mb-6">
                    {c.title}
                  </h3>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
                    {c.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
