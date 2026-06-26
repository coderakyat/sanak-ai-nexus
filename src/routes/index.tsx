import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { VoiceDemoOverlay } from "@/components/site/VoiceDemoOverlay";
import { InteractiveCapabilities } from "@/components/site/InteractiveCapabilities";
import { Marquee } from "@/components/site/Marquee";
import heroWarehouse from "@/assets/hero-warehouse.webp";
import brandStatement from "@/assets/brand-statement.webp";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "SANAK.AI — Conversational SCM for Mid-Market Distributors" },
      {
        name: "description",
        content:
          "SANAK is the conversational SCM platform built for mid-market distributors and warehouse operators across Southeast Asia. Ask it anything. Tell it what you're doing. It handles the rest.",
      },
      { property: "og:title", content: "SANAK.AI — Conversational SCM for Mid-Market Distributors" },
      {
        property: "og:description",
        content:
          "A conversational SCM platform built for mid-market distributors and warehouse operators across Southeast Asia.",
      },
      { property: "og:url", content: "https://sanak.my.id/" },
      { property: "og:image", content: heroWarehouse },
      { name: "twitter:image", content: heroWarehouse },
    ],
    links: [{ rel: "canonical", href: "https://sanak.my.id/" }],
  }),
  component: Home,
}));

const valueProps = [
  {
    n: "01",
    tKey: "home.vp_1_t",
    dKey: "home.vp_1_d",
  },
  {
    n: "02",
    tKey: "home.vp_2_t",
    dKey: "home.vp_2_d",
  },
  {
    n: "03",
    tKey: "home.vp_3_t",
    dKey: "home.vp_3_d",
  },
];

const statsKeys = [
  { vKey: "home.stat_1_v", lKey: "home.stat_1_l" },
  { vKey: "home.stat_2_v", lKey: "home.stat_2_l" },
  { vKey: "home.stat_3_v", lKey: "home.stat_3_l" },
  { vKey: "home.stat_4_v", lKey: "home.stat_4_l" },
];

const industries = [
  "FMCG Distribution",
  "Pharmaceutical Distribution",
  "Industrial & MRO",
  "Consumer Goods",
  "Building Materials",
  "Food & Beverage",
];

const projectKeys = [
  { img: case1, eyebrowKey: "home.case_1_eyebrow", titleKey: "home.case_1_title", outcomeKey: "home.case_1_outcome" },
  { img: case2, eyebrowKey: "home.case_2_eyebrow", titleKey: "home.case_2_title", outcomeKey: "home.case_2_outcome" },
  { img: case3, eyebrowKey: "home.case_3_eyebrow", titleKey: "home.case_3_title", outcomeKey: "home.case_3_outcome" },
];

const insightKeys = [
  { img: insight1, eyebrowKey: "home.insight_1_eyebrow", titleKey: "home.insight_1_title", readKey: "home.insight_1_read" },
  { img: insight2, eyebrowKey: "home.insight_2_eyebrow", titleKey: "home.insight_2_title", readKey: "home.insight_2_read" },
  { img: insight3, eyebrowKey: "home.insight_3_eyebrow", titleKey: "home.insight_3_title", readKey: "home.insight_3_read" },
];

function Home() {
  const { t } = useTranslation();
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto grid min-h-[92vh] max-w-[1600px] grid-cols-1 gap-12 pb-16 pt-28 md:grid-cols-12 md:pt-40">
          <div className="md:col-span-7 md:pr-8">
            <Reveal>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-700)]">
                {t("home.eyebrow")}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-10 display-hero" dangerouslySetInnerHTML={{ __html: t("home.hero_title") }}>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-[color:var(--color-graphite-600)]">
                {t("home.hero_subtitle")}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link
                  to="/contact"
                  className="bg-[color:var(--color-paper)] px-7 py-4 editorial-eyebrow text-[color:var(--color-ink)] transition-opacity hover:opacity-80"
                >
                  {t("home.request_demo")}
                </Link>
                <Link
                  to="/solutions"
                  className="border border-[color:var(--color-paper)]/40 px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
                >
                  {t("home.view_capabilities")}
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.35} y={28} className="md:col-span-5">
            <div className="relative aspect-[4/5] h-full w-full overflow-hidden border border-[color:var(--color-paper)]/15">
              <img
                src={heroWarehouse}
                alt="Industrial warehouse aisle with skylight"
                width={1920}
                height={1280}
                className="h-full w-full object-cover opacity-80"
              />
              {/* Voice Demo Chat Overlay */}
              <VoiceDemoOverlay />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-[color:var(--color-paper)]">
                <p className="editorial-eyebrow">[ Plate 001 / Operational floor ]</p>
                <p className="editorial-eyebrow">SANAK / 26</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM BANNER */}
      <section className="border-b border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-20 md:py-28">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              {t("home.problem_eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-4xl font-display text-2xl leading-relaxed text-[color:var(--color-graphite-200)] md:text-3xl">
              {t("home.problem_desc")}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 border-l-4 border-[color:var(--color-ink)] pl-6 md:pl-10">
              <p className="font-display text-3xl leading-snug text-[color:var(--color-ink)] md:text-5xl" dangerouslySetInnerHTML={{ __html: t("home.problem_highlight") }}>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="border-b border-[color:var(--color-border)]">
        <div className="container-edge mx-auto grid max-w-[1600px] grid-cols-1 gap-16 py-28 md:grid-cols-12 md:gap-12 md:py-40">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[color:var(--color-border)] bg-[color:var(--color-ink)]">
                <img
                  src={brandStatement}
                  alt="Worker in a distribution centre"
                  loading="lazy"
                  width={1080}
                  height={1440}
                  className="h-full w-full object-cover"
                />
            </div>
          </Reveal>
          <div className="md:col-span-7 md:pl-8">
            <Reveal>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                {t("home.brand_eyebrow")}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 display-xl">
                {t("home.brand_title")}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid gap-6 text-lg leading-relaxed text-[color:var(--color-graphite-300)] md:grid-cols-2">
                <p>
                  {t("home.brand_desc_1")}
                </p>
                <p>
                  {t("home.brand_desc_2")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                  {t("home.why_eyebrow")}
                </p>
                <h2 className="mt-8 display-lg">
                  {t("home.why_title")}
                </h2>
                <p className="mt-8 max-w-md text-[color:var(--color-graphite-300)]">
                  {t("home.why_desc")}
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-1">
                {valueProps.map((s, i) => (
                  <Reveal
                    key={s.n}
                    delay={i * 0.06}
                    className="group border-t border-[color:var(--color-border-strong)] p-8 transition-colors hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] sm:p-10"
                  >
                    <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] group-hover:text-[color:var(--color-graphite-500)]">
                      {s.n}
                    </p>
                    <h3 className="mt-6 font-display text-3xl leading-tight">
                      {t(s.tKey)}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite-300)] group-hover:text-[color:var(--color-graphite-600)]">
                      {t(s.dKey)}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[color:var(--color-border)]">
        <div className="container-edge mx-auto max-w-[1600px] py-20 md:py-28">
          <div className="grid grid-cols-2 gap-px bg-[color:var(--color-border-strong)] md:grid-cols-4">
            {statsKeys.map((s, i) => (
              <Reveal key={s.vKey} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col justify-center bg-[color:var(--color-paper)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] md:p-10">
                  <p className="font-display text-4xl md:text-5xl transition-transform duration-500 group-hover:scale-105 origin-left">{t(s.vKey)}</p>
                  <p className="mt-4 text-xs leading-relaxed text-[color:var(--color-graphite-400)] uppercase tracking-widest transition-colors duration-500 group-hover:text-[color:var(--color-paper)]/70">{t(s.lKey)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-b border-[color:var(--color-border)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <InteractiveCapabilities />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-700)]">
                {t("home.case_eyebrow")}
              </p>
              <h2 className="mt-6 display-xl max-w-[18ch]">
                {t("home.case_title")}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/case-studies" className="editorial-eyebrow reveal-link text-[color:var(--color-paper)]">
                {t("home.case_link")}
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {projectKeys.map((p, i) => (
              <Reveal key={p.titleKey} delay={i * 0.08}>
                <article className="group flex h-full flex-col">
                  <div className="aspect-[4/5] overflow-hidden border border-[color:var(--color-paper)]/10">
                    <img
                      src={p.img}
                      alt={t(p.titleKey)}
                      loading="lazy"
                      width={1600}
                      height={2000}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-6 editorial-eyebrow text-[color:var(--color-graphite-700)]">
                    {t(p.eyebrowKey)}
                  </p>
                  <h3 className="mt-4 font-display text-2xl leading-tight">{t(p.titleKey)}</h3>
                  <p className="mt-3 text-sm text-[color:var(--color-graphite-700)]">
                    {t(p.outcomeKey)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)] overflow-hidden">
        <div className="container-edge mx-auto max-w-[1600px] pt-16 pb-8 md:pt-20 md:pb-10">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              {t("home.industries_eyebrow")}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="mb-10 md:mb-16">
            <Marquee items={industries} />
          </div>
        </Reveal>
      </section>

      {/* INSIGHTS */}
      <section className="border-b border-[color:var(--color-border)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                {t("home.insights_eyebrow")}
              </p>
              <h2 className="mt-6 display-xl max-w-[16ch]">
                {t("home.insights_title")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/insights" className="editorial-eyebrow reveal-link">
                {t("home.insights_link")}
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {insightKeys.map((p, i) => (
              <Reveal key={p.titleKey} delay={i * 0.07}>
                <article className="flex flex-col">
                  <div className="aspect-[5/3] overflow-hidden border border-[color:var(--color-border)]">
                    <img
                      src={p.img}
                      alt={t(p.titleKey)}
                      loading="lazy"
                      width={1600}
                      height={1000}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-6 editorial-eyebrow text-[color:var(--color-graphite-400)]">
                    {t(p.eyebrowKey)} · {t(p.readKey)}
                  </p>
                  <h3 className="mt-4 font-display text-2xl leading-tight">{t(p.titleKey)}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-end">
          <Reveal>
            <h2 className="display-xl max-w-[20ch]">{t("home.cta_title")}</h2>
            <p className="mt-6 max-w-md text-lg text-[color:var(--color-graphite-600)]">
              {t("home.cta_desc")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="border border-[color:var(--color-paper)]/40 px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
            >
              {t("home.cta_button")}
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
