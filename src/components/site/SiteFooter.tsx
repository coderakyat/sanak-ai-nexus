import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
      <div className="container-edge mx-auto max-w-[1600px] py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="editorial-eyebrow text-[color:var(--color-graphite-700)]">
              [ Closing statement ]
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl text-[color:var(--color-graphite-600)]">
              Operational truth. <br /> Engineered for distribution.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-6 md:grid-cols-3">
            <div>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-700)]">
                Company
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[color:var(--color-graphite-600)]">
                <li><Link to="/about" className="hover:text-[color:var(--color-paper)] transition-colors">About</Link></li>
                <li><Link to="/team" className="hover:text-[color:var(--color-paper)] transition-colors">Team</Link></li>
                <li><Link to="/insights" className="hover:text-[color:var(--color-paper)] transition-colors">Insights</Link></li>
              </ul>
            </div>
            <div>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-700)]">
                Product
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[color:var(--color-graphite-600)]">
                <li><Link to="/services" className="hover:text-[color:var(--color-paper)] transition-colors">Services</Link></li>
                <li><Link to="/solutions" className="hover:text-[color:var(--color-paper)] transition-colors">Solutions</Link></li>
                <li><Link to="/case-studies" className="hover:text-[color:var(--color-paper)] transition-colors">Case studies</Link></li>
                <li><Link to="/faq" className="hover:text-[color:var(--color-paper)] transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-[color:var(--color-paper)] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-700)]">
                Contact
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[color:var(--color-graphite-600)]">
                <li><a href="mailto:hello@sanak.ai" className="hover:text-[color:var(--color-paper)] transition-colors">hello@sanak.ai</a></li>
                <li className="text-[color:var(--color-graphite-700)]">Malaysia · Singapore</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-[color:var(--color-paper)]/15 pt-8 text-xs text-[color:var(--color-graphite-700)] md:flex-row md:items-center">
          <p>© {year} SANAK.AI — All rights reserved.</p>
          <p className="font-mono">SCM software for distributors and warehousing.</p>
        </div>

        {/* MASSIVE BRAND WATERMARK */}
        <div className="mt-16 w-full overflow-hidden select-none pointer-events-none" aria-hidden="true">
          <h1 className="text-[15vw] leading-none font-display text-[color:var(--color-paper)]/5 text-center tracking-tighter">
            SANAK.AI
          </h1>
        </div>
      </div>
    </footer>
  );
}
