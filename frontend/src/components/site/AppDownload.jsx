import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "./RevealText";
import { Download, Smartphone, ShieldCheck } from "lucide-react";

export default function AppDownload() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);

  return (
    <section
      id="app"
      ref={ref}
      data-testid="app-download-section"
      className="relative py-32 md:py-48 border-b border-white/5 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left phone image */}
          <div className="md:col-span-5 order-2 md:order-1">
            <ScrollReveal>
              <div className="relative h-[520px] md:h-[640px] overflow-hidden border border-white/10">
                <motion.img
                  style={{ y }}
                  src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?auto=format&fit=crop&w=1600&q=80"
                  alt="DHRUV app on smartphone"
                  className="absolute inset-0 w-full h-[120%] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/70 to-transparent" />
                <div className="absolute top-6 left-6 overline">DHRUV.mobile / v3.9</div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between overline">
                  <span>Android · APK</span>
                  <span className="text-[#FF5500]">● 4.9 ★</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right copy */}
          <div className="md:col-span-7 md:pl-10 order-1 md:order-2">
            <div className="overline mb-6">§ 06 — Mobile Terminal</div>
            <ScrollReveal>
              <h2 className="font-display text-white text-5xl md:text-8xl leading-[0.9] tracking-tighter font-medium mb-8">
                Trade anywhere.<br />
                <em className="italic text-white/70">Anytime.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                The full DHRUV terminal, distilled into a single native app.
                Charts, orders, alerts, and desk signals — direct from your
                pocket. Biometric login, cold-storage vault, and offline mode
                for zero-latency execution when the market moves.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#"
                  data-testid="download-apk-btn"
                  className="cta-primary group"
                >
                  <Download size={14} />
                  Download APK
                </a>
                <a
                  href="#"
                  data-testid="download-playstore-btn"
                  className="cta-ghost"
                >
                  <Smartphone size={14} />
                  Play Store
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="font-display text-white text-3xl md:text-4xl leading-none tracking-tighter">
                    12.4K
                  </div>
                  <div className="overline mt-2">Reviews</div>
                </div>
                <div>
                  <div className="font-display text-white text-3xl md:text-4xl leading-none tracking-tighter">
                    4.9
                  </div>
                  <div className="overline mt-2">Rating</div>
                </div>
                <div>
                  <div className="font-display text-white text-3xl md:text-4xl leading-none tracking-tighter">
                    28 MB
                  </div>
                  <div className="overline mt-2">APK Size</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-8 flex items-center gap-3 overline">
                <ShieldCheck size={14} className="text-[#FF5500]" />
                <span>Verified · Signed by DHRUV Traders Pvt. Ltd.</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
