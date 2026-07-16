import Marquee from "react-fast-marquee";

const PAIRS = [
  { p: "EUR/USD", v: "1.0876", c: 0.42 },
  { p: "GBP/USD", v: "1.2694", c: -0.18 },
  { p: "USD/JPY", v: "156.32", c: 0.31 },
  { p: "XAU/USD", v: "2,384.10", c: 0.86 },
  { p: "AUD/USD", v: "0.6612", c: -0.09 },
  { p: "USD/CAD", v: "1.3712", c: 0.11 },
  { p: "USD/INR", v: "83.44", c: -0.05 },
  { p: "BTC/USD", v: "68,412", c: 1.94 },
  { p: "ETH/USD", v: "3,542", c: 0.72 },
  { p: "SPX500", v: "5,378.20", c: 0.28 },
  { p: "NAS100", v: "18,914.6", c: 0.51 },
  { p: "WTI/USD", v: "77.84", c: -0.42 },
];

export default function Ticker() {
  return (
    <section data-testid="live-ticker" className="marquee-strip">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        autoFill={true}
        className="py-5"
      >
        {PAIRS.map((it, i) => (
          <div
            key={`${it.p}-${i}`}
            className="flex items-baseline gap-4 px-10 border-l border-white/5 first:border-l-0"
          >
            <span className="overline text-white/80">{it.p}</span>
            <span className="font-mono-utility text-white text-lg">{it.v}</span>
            <span
              className={`font-mono-utility text-sm ${it.c >= 0 ? "up" : "down"}`}
            >
              {it.c >= 0 ? "▲" : "▼"} {Math.abs(it.c).toFixed(2)}%
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
