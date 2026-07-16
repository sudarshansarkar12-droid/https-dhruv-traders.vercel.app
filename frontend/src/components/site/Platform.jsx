import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "./RevealText";
import { Zap, ShieldCheck, Layers, Radio } from "lucide-react";

const FEATURES = [
  { icon: Zap, label: "38ms average execution" },
  { icon: ShieldCheck, label: "Bank-grade custody" },
  { icon: Layers, label: "8 asset classes, one book" },
  { icon: Radio, label: "Real-time desk signals" },
];

export default function Platform() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="platform"
      ref={ref}
      data-testid="platform-section"
      className="relative py-32 md:py-48 border-b border-white/5"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <div className="overline">§ 03 — Platform</div>
          </div>
          <div className="md:col-span-9">
            <ScrollReveal>
              <h2 className="font-display text-white text-5xl md:text-7xl leading-[0.95] tracking-tighter font-medium">
                A terminal that reads<br />
                the tape <em className="italic text-white/60">before you do.</em>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Left copy */}
          <div className="md:col-span-4 md:pt-8">
            <ScrollReveal>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-sm">
                Multi-chart layouts, algorithmic risk overlays, and an
                on-desk signal feed streamed from our senior traders — all inside
                the same DHRUV terminal. Web, desktop, and native mobile.
              </p>
            </ScrollReveal>

            <div className="space-y-3">
              {FEATURES.map((f, i) => (
                <ScrollReveal
                  key={f.label}
                  delay={i * 0.05}
                  className="flex items-center gap-4 py-3 border-t border-white/10 last:border-b"
                >
                  <f.icon size={18} className="text-[#FF5500]" />
                  <span className="font-mono-utility text-white/80 text-sm">
                    {f.label}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right image - editorial framed */}
          <div className="md:col-span-8 relative">
            <ScrollReveal delay={0.1}>
              <div className="relative overflow-hidden h-[420px] md:h-[620px] border border-white/10">
                <motion.img
                  style={{ y: imgY }}
                  src="https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=2400&q=80"
                  alt="DHRUV Terminal preview"
                  className="absolute inset-0 w-full h-[120%] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#09090b]/60" />
                {/* Corner labels */}
                <div className="absolute top-6 left-6 overline text-white/80">
                  DHRUV.terminal / v4.2
                </div>
                <div className="absolute top-6 right-6 overline text-[#FF5500]">
                  ● live
                </div>

                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:bottom-6 md:w-[320px] bg-[#0b0b0e]/85 backdrop-blur-md border border-white/10 p-5"
                >
                  <div className="overline mb-3">Open positions</div>
                  <div className="space-y-2 font-mono-utility text-sm">
                    <div className="flex justify-between text-white">
                      <span>EUR/USD · Long 2.4L</span>
                      <span className="up">+ $8,412</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>XAU/USD · Long 1.1L</span>
                      <span className="up">+ $12,308</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>USD/JPY · Short 3.0L</span>
                      <span className="down">– $2,140</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex justify-between font-mono-utility text-white">
                    <span className="text-white/70 text-xs">Net PnL 24h</span>
                    <span className="up text-lg">+ $18,580</span>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
