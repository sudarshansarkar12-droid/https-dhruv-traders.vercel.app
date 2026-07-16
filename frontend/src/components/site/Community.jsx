import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./RevealText";

const CHANNELS = [
  {
    name: "YouTube",
    handle: "@dhruvtraders",
    body: "Live desk breakdowns, weekly market letters, and long-form trade autopsies.",
    stat: "142K subs",
    href: "https://youtube.com",
    testid: "community-youtube",
  },
  {
    name: "Telegram",
    handle: "t.me/dhruvtraders",
    body: "Real-time signals from our senior desk. Entries, stops, targets. No noise.",
    stat: "68K members",
    href: "https://telegram.org",
    testid: "community-telegram",
  },
  {
    name: "Facebook",
    handle: "/dhruvtraders",
    body: "Community discussion, macro digests, and trader-of-the-month features.",
    stat: "91K followers",
    href: "https://facebook.com",
    testid: "community-facebook",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      data-testid="community-section"
      className="relative py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <div className="overline">§ 05 — Community</div>
          </div>
          <div className="md:col-span-9">
            <ScrollReveal>
              <h2 className="font-display text-white text-5xl md:text-7xl leading-[0.95] tracking-tighter font-medium">
                Follow the desk<br />
                <em className="italic text-white/60">wherever you scroll.</em>
              </h2>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] border-b border-white/10">
        {CHANNELS.map((ch, i) => (
          <a
            key={ch.name}
            href={ch.href}
            target="_blank"
            rel="noreferrer noopener"
            data-testid={ch.testid}
            className="community-block group block"
          >
            <div className="px-6 md:px-10 py-10 md:py-14">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-1 overline">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-4">
                  <div className="font-display text-white text-5xl md:text-7xl leading-none tracking-tighter font-medium group-hover:text-[#FF5500] transition-colors">
                    {ch.name}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="overline text-white/60">{ch.handle}</div>
                  <div className="font-mono-utility text-white/80 text-sm mt-2">
                    {ch.stat}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {ch.body}
                  </p>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <div className="community-arrow">
                    <ArrowUpRight size={44} className="text-[#FF5500]" strokeWidth={1.2} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
