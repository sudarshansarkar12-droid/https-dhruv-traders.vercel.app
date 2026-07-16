import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 87400, prefix: "", suffix: "+", label: "Active Traders" },
  { value: 2.4, prefix: "$", suffix: "B", label: "Volume Traded / mo", decimals: 1 },
  { value: 92, prefix: "", suffix: "%", label: "Signal Accuracy Q4" },
  { value: 46, prefix: "", suffix: "", label: "Countries Served" },
];

function Counter({ value, decimals = 0, prefix = "", suffix = "", start }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const dur = 2000;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);
  const formatted = decimals > 0
    ? n.toFixed(decimals)
    : Math.round(n).toLocaleString("en-US");
  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      data-testid="stats-section"
      className="relative py-24 md:py-32 border-b border-white/5"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`p-6 md:p-10 ${i < 3 ? "md:border-r" : ""} ${i < 2 ? "border-r border-white/10 md:border-r" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""} border-white/10`}
              data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="font-display text-white text-5xl md:text-7xl leading-none tracking-tighter font-medium">
                <Counter
                  value={s.value}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  start={inView}
                />
              </div>
              <div className="overline mt-4">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
