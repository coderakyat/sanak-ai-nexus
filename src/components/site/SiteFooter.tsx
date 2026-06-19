import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export function SiteFooter() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
      <div className="container-edge mx-auto max-w-[1600px] py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="editorial-eyebrow text-[color:var(--color-graphite-700)]">
              {t("footer.closing_statement")}
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl text-[color:var(--color-graphite-600)]" dangerouslySetInnerHTML={{ __html: t("footer.operational_truth") }}>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-6 md:grid-cols-3">
            <div>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-700)]">
                {t("footer.company")}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[color:var(--color-graphite-600)]">
                <li><Link to="/about" className="hover:text-[color:var(--color-paper)] transition-colors">{t("footer.about")}</Link></li>
                <li><Link to="/team" className="hover:text-[color:var(--color-paper)] transition-colors">{t("footer.team")}</Link></li>
                <li><Link to="/insights" className="hover:text-[color:var(--color-paper)] transition-colors">{t("footer.insights")}</Link></li>
              </ul>
            </div>
            <div>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-700)]">
                {t("footer.product")}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[color:var(--color-graphite-600)]">
                <li><Link to="/services" className="hover:text-[color:var(--color-paper)] transition-colors">{t("footer.services")}</Link></li>
                <li><Link to="/solutions" className="hover:text-[color:var(--color-paper)] transition-colors">{t("footer.solutions")}</Link></li>
                <li><Link to="/case-studies" className="hover:text-[color:var(--color-paper)] transition-colors">{t("footer.case_studies")}</Link></li>
                <li><Link to="/faq" className="hover:text-[color:var(--color-paper)] transition-colors">{t("footer.faq")}</Link></li>
                <li><Link to="/contact" className="hover:text-[color:var(--color-paper)] transition-colors">{t("footer.contact")}</Link></li>
              </ul>
            </div>
            <div>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-700)]">
                {t("footer.contact")}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[color:var(--color-graphite-600)]">
                <li><a href="mailto:hello@sanak.ai" className="hover:text-[color:var(--color-paper)] transition-colors">hello@sanak.ai</a></li>
                <li className="text-[color:var(--color-graphite-700)]">Malaysia · Singapore</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-[color:var(--color-paper)]/15 pt-8 text-xs text-[color:var(--color-graphite-700)] md:flex-row md:items-center">
          <p>{t("footer.rights_reserved", { year })}</p>
          <p className="font-mono">{t("footer.footer_mono")}</p>
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
