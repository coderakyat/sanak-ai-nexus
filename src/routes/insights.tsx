import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useTranslation } from "react-i18next";
import insight1 from "@/assets/insight-1.webp";
import insight2 from "@/assets/insight-2.webp";
import insight3 from "@/assets/insight-3.webp";
import texture from "@/assets/texture-1.webp";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — SANAK.AI" },
      {
        name: "description",
        content:
          "Field notes, position papers, and operating briefs on supply chain, inventory truth, and the discipline of distribution operations.",
      },
      { property: "og:title", content: "Insights — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Thinking from the floor. Position papers and field notes on the operating discipline of distribution.",
      },
      { property: "og:url", content: "https://sanak.my.id/insights" },
      { property: "og:image", content: insight1 },
    ],
    links: [{ rel: "canonical", href: "https://sanak.my.id/insights" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "SANAK.AI Insights",
          description: "Field notes, position papers, and operating briefs on supply chain.",
          url: "https://sanak.my.id/insights",
        }),
      },
    ],
  }),
  component: Insights,
});

const featured = {
  img: insight1,
  eyebrow: "Position paper · 09 min read",
  date: "May 2026",
  title: "Why inventory truth is a discipline, not a feature.",
  dek: "If the system is not the source of truth, no module that sits on top of it will save the operation. A reading of where SCM stacks fail and what to put in their place.",
};

const articles = [
  {
    img: insight2,
    eyebrow: "Field note · 07 min read",
    date: "April 2026",
    title: "Item master as the foundation of distribution operations.",
    dek: "Every operational deficiency we have diagnosed in distribution returns, eventually, to a master record problem. A walk-through of why the item master must come first.",
  },
  {
    img: insight3,
    eyebrow: "Operating brief · 06 min read",
    date: "March 2026",
    title: "The case against the report-first SCM stack.",
    dek: "Reports describe. Systems decide. When the description and the decision live in different places, the operation pays the difference.",
  },
  {
    img: texture,
    eyebrow: "Essay · 11 min read",
    date: "February 2026",
    title: "What a warehouse teaches a software company.",
    dek: "Notes from twelve weeks spent on the floor of a mid-market distributor — and the product choices that came out of it.",
  },
  {
    img: insight1,
    eyebrow: "Field note · 05 min read",
    date: "January 2026",
    title: "Land-and-expand, the operating version.",
    dek: "A defence of starting narrow and expanding deliberately. Why we refuse big-bang implementations and what we deploy instead.",
  },
];

function Insights() {
  const { t } = useTranslation();

  return (
    <SiteShell>
      <PageHeader
        eyebrow={t("insights.eyebrow")}
        title={<>{t("insights.title_1")} <br /> {t("insights.title_2")}</>}
        intro={t("insights.intro")}
      />

      <section className="container-edge mx-auto max-w-[1600px] py-20 md:py-28">
        <Reveal>
          <article className="group grid grid-cols-1 gap-12 border-y border-[color:var(--color-border-strong)] py-14 transition-colors duration-500 hover:bg-[color:var(--color-paper-2)]/50 md:grid-cols-12 md:py-20 md:px-8 md:-mx-8 cursor-pointer">
            <div className="md:col-span-7">
              <div className="aspect-[5/3] w-full overflow-hidden border border-[color:var(--color-border)]">
                <img
                  src={featured.img}
                  alt={featured.title}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="md:col-span-5 md:pl-8">
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                {t("insights.featured_label")} · {featured.eyebrow} · {featured.date}
              </p>
              <h2 className="mt-6 display-xl transition-transform duration-500 group-hover:translate-x-1">{featured.title}</h2>
              <p className="mt-8 text-[color:var(--color-graphite-300)]">{featured.dek}</p>
              <p className="mt-10 editorial-eyebrow reveal-link inline-block transition-transform duration-500 group-hover:translate-x-2">
                {t("insights.read_paper")}
              </p>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="container-edge mx-auto max-w-[1600px] pb-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <article className="group flex flex-col cursor-pointer">
                <div className="aspect-[5/3] overflow-hidden border border-[color:var(--color-border)]">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    width={1600}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-6 editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-ink)]">
                  {a.eyebrow} · {a.date}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight transition-transform duration-500 group-hover:translate-x-1">{a.title}</h3>
                <p className="mt-4 text-[color:var(--color-graphite-300)]">{a.dek}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
