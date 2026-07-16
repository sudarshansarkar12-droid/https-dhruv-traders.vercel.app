import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LineReveal } from "./RevealText";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const veilOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100vh] w-full overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1506606401543-2e73709cebb4?auto=format&fit=crop&w=2400&q=80"
          alt="Night city skyline"
          className="w-full h-full object-cover"
        />
        <motion.div
          style={{ opacity: veilOpacity }}
          className="absolute inset-0 bg-black"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#09090b]" />
      </motion.div>

      {/* Frame borders */}
      <div className="absolute top-[72px] left-6 right-6 md:left-10 md:right-10 border-t border-white/10 pointer-events-none" />
      <div className="absolute bottom-0 left-6 right-6 md:left-10 md:right-10 border-b border-white/10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 pt-[140px] md:pt-[180px] pb-24 min-h-[100vh] flex flex-col">
        {/* Top row overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex items-center justify-between mb-8 md:mb-12"
        >
          <div className="overline">
            <span className="text-[#FF5500]">●</span>&nbsp;&nbsp;LIVE FROM THE FLOOR — EST. 2019
          </div>
          <div className="overline hidden md:block">
            N 28.61° &nbsp;/&nbsp; E 77.20°
          </div>
        </motion.div>

        {/* Kinetic display headline */}
        <motion.div style={{ y: textY }} className="flex-1 flex flex-col justify-center">
          <LineReveal
            className="font-display text-white text-[16vw] md:text-[13vw] leading-[0.86] tracking-tighter font-medium select-none"
            lines={["Master", <em key="e" className="italic text-white/80 font-normal">the untamed</em>, "Market."]}
            delay={0.3}
            stagger={0.14}
          />

          <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="md:col-span-5 text-white/70 text-base md:text-lg max-w-md leading-relaxed"
            >
              DHRUV TRADERS is a private forex desk built for the disciplined
              few. Institutional depth, editorial clarity, and a signal that
              refuses to sleep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.9 }}
              className="md:col-span-4 md:col-start-8 flex flex-wrap gap-3"
            >
              <a href="#brokers" data-testid="hero-cta-primary" className="cta-primary group">
                Open Account
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#platform" data-testid="hero-cta-secondary" className="cta-ghost">
                See Platform
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="mt-10 flex items-end justify-between"
        >
          <div className="flex items-center gap-3 overline">
            <ArrowDown size={14} />
            <span>Scroll to explore</span>
          </div>
          <div className="hidden md:flex items-baseline gap-4">
            <span className="overline">Volume 24h</span>
            <span className="font-mono-utility text-white text-lg">$2.4B</span>
            <span className="up font-mono-utility text-sm">+3.42%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
