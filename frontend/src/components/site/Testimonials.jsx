import { ScrollReveal } from "./RevealText";

const QUOTES = [
  {
    q: "The DHRUV desk taught me that discipline scales further than any indicator. Two years in, my drawdowns are half of what they used to be.",
    n: "R. Iyer",
    r: "Portfolio manager, Mumbai",
  },
  {
    q: "The Telegram signals are the only feed I still keep in my phone. Precise, honest, and — critically — silent when there is nothing to say.",
    n: "S. Al-Farsi",
    r: "Prop trader, Dubai",
  },
  {
    q: "The app is beautifully quiet. It gets out of my way and lets me trade the tape.",
    n: "M. Delacroix",
    r: "Systematic FX, Paris",
  },
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="relative py-32 md:py-44 border-b border-white/5"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <div className="overline">§ 04 — Voices</div>
          </div>
          <div className="md:col-span-9">
            <ScrollReveal>
              <h2 className="font-display text-white text-5xl md:text-7xl leading-[0.95] tracking-tighter font-medium">
                Traders don't lie.<br />
                <em className="italic text-white/60">Their journals do.</em>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {QUOTES.map((t, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.08}
              className="border border-white/10 bg-[#0d0d10] p-8 md:p-10 min-h-[380px] flex flex-col justify-between"
            >
              <div>
                <div className="font-display text-[#FF5500] text-6xl leading-none tracking-tighter mb-6">
                  &ldquo;
                </div>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  {t.q}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="font-display text-white text-xl">{t.n}</div>
                <div className="overline mt-1 normal-case tracking-[0.16em]">{t.r}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
