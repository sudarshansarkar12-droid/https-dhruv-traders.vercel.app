import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Markets", href: "#instruments" },
    { label: "Platform", href: "#platform" },
    { label: "Academy", href: "#manifesto" },
    { label: "Community", href: "#community" },
  ];

  return (
    <motion.header
      data-testid="site-nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? "nav-glass" : ""}`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 flex items-center justify-between h-[72px]">
        <a
          href="#top"
          data-testid="nav-logo"
          className="font-display text-[22px] md:text-[26px] font-semibold tracking-tighter text-white flex items-baseline gap-2"
        >
          <span>DHRUV</span>
          <span className="text-[#FF5500]">.</span>
          <span className="hidden sm:inline text-white/70 font-normal italic text-[18px]">
            Traders
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="overline hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="nav-signin"
            className="hidden sm:inline-flex overline hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href="#app"
            data-testid="nav-cta"
            className="cta-primary group"
          >
            Open Account
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
