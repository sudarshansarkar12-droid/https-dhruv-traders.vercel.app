import ReactMarquee from "react-fast-marquee";

const WORDS = [
  "Precision",
  "Discipline",
  "Momentum",
  "Legacy",
  "Signal",
  "Silence",
  "Edge",
];

export default function Marquee() {
  return (
    <section
      data-testid="editorial-marquee"
      className="relative py-16 md:py-24 border-b border-white/5"
    >
      <ReactMarquee gradient={false} speed={22} autoFill>
        {WORDS.map((w, i) => (
          <div
            key={`${w}-${i}`}
            className="font-display italic text-white/90 text-[14vw] md:text-[11vw] leading-none tracking-tighter px-8 md:px-14 flex items-baseline gap-8"
          >
            <span>{w}</span>
            <span className="text-[#FF5500] not-italic">✦</span>
          </div>
        ))}
      </ReactMarquee>
    </section>
  );
}
