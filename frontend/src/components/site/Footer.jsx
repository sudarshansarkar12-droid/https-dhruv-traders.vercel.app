import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative pt-24 pb-10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Column links */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <div className="overline mb-6">§ Est. 2019</div>
            <p className="font-display text-white text-3xl md:text-4xl leading-[1.05] tracking-tighter max-w-md">
              Custody of capital. <em className="italic text-white/60">Curation of edge.</em>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#brokers" data-testid="footer-cta" className="cta-primary group">
                Open Account
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <FooterCol
            title="Markets"
            links={["Forex", "Commodities", "Indices", "Crypto"]}
            span="md:col-span-2"
          />
          <FooterCol
            title="Platform"
            links={["Terminal", "Mobile APK", "API", "Signals"]}
            span="md:col-span-2"
          />
          <FooterCol
            title="Company"
            links={["About", "Careers", "Press", "Contact"]}
            span="md:col-span-3"
          />
        </div>

        {/* Massive brand */}
        <div className="relative overflow-hidden">
          <div className="font-display italic text-white/95 text-[24vw] leading-[0.85] tracking-tighter font-medium select-none">
            Dhruv.
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline mt-6" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
          <div className="md:col-span-8">
            <p className="overline normal-case tracking-[0.14em] text-white/40 leading-relaxed">
              Risk disclaimer — Trading foreign exchange, commodities, indices, and
              cryptocurrencies on margin carries a high level of risk and may not be
              suitable for all investors. Past performance is not indicative of future
              results. DHRUV TRADERS is a demonstrative brand identity. All market
              data shown is illustrative.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <div className="overline">© {new Date().getFullYear()} DHRUV TRADERS PVT LTD.</div>
            <div className="overline mt-2 text-white/40">CIN — U67190MH2019PTC001042</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, span = "md:col-span-2" }) {
  return (
    <div className={span}>
      <div className="overline mb-5">{title}</div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="font-display text-white text-lg md:text-xl leading-tight tracking-tight hover:text-[#FF5500] transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
