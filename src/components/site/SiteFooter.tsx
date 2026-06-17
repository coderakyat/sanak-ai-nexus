import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
      <div className="container-edge mx-auto max-w-[1600px] py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="editorial-eyebrow text-[color:var(--color-graphite-500)]">
              [ Closing statement ]
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[0.95] md:text-6xl">
              Operational truth. <br /> Engineered for distribution.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-4 border border-[color:var(--color-paper)]/40 px-6 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
            >
              Request a demo <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-6 md:grid-cols-3">
            <div>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-500)]">
                Company
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li><Link to="/about" className="hover:underline">About</Link></li>
                <li><Link to="/team" className="hover:underline">Team</Link></li>
                <li><Link to="/insights" className="hover:underline">Insights</Link></li>
              </ul>
            </div>
            <div>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-500)]">
                Product
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li><Link to="/services" className="hover:underline">Services</Link></li>
                <li><Link to="/solutions" className="hover:underline">Solutions</Link></li>
                <li><Link to="/case-studies" className="hover:underline">Case studies</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-500)]">
                Contact
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="mailto:hello@sanak.ai" className="hover:underline">hello@sanak.ai</a></li>
                <li className="text-[color:var(--color-graphite-500)]">Jakarta · Singapore</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-[color:var(--color-paper)]/15 pt-8 text-xs text-[color:var(--color-graphite-500)] md:flex-row md:items-center">
          <p>© {year} SANAK.AI — All rights reserved.</p>
          <p className="font-mono">SCM software for distributors and warehousing.</p>
        </div>
      </div>
    </footer>
  );
}
