import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SANAK.AI" },
      {
        name: "description",
        content:
          "SANAK delivers a modular SCM platform covering inventory, procurement, order management, outbound logistics, and field sales execution — all through a conversational, voice-first interface.",
      },
      { property: "og:title", content: "Services — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Five modules. One conversational interface. Your team learns one way of working, and it applies everywhere.",
      },
      { property: "og:url", content: "https://sanak.my.id/services" },
    ],
    links: [{ rel: "canonical", href: "https://sanak.my.id/services" }],
  }),
  component: Services,
});

function Services() {
  const { t } = useTranslation();

  const moduleKeys = [
    {
      n: "01",
      tKey: "services.m01_t",
      hKey: "services.m01_h",
      dKey: "services.m01_d",
      bulletKeys: ["services.m01_b1","services.m01_b2","services.m01_b3","services.m01_b4","services.m01_b5","services.m01_b6","services.m01_b7"],
    },
    {
      n: "02",
      tKey: "services.m02_t",
      hKey: "services.m02_h",
      dKey: "services.m02_d",
      bulletKeys: ["services.m02_b1","services.m02_b2","services.m02_b3","services.m02_b4","services.m02_b5"],
    },
    {
      n: "03",
      tKey: "services.m03_t",
      hKey: "services.m03_h",
      dKey: "services.m03_d",
      bulletKeys: ["services.m03_b1","services.m03_b2","services.m03_b3","services.m03_b4","services.m03_b5"],
    },
    {
      n: "04",
      tKey: "services.m04_t",
      hKey: "services.m04_h",
      dKey: "services.m04_d",
      bulletKeys: ["services.m04_b1","services.m04_b2","services.m04_b3","services.m04_b4","services.m04_b5","services.m04_b6"],
    },
    {
      n: "05",
      tKey: "services.m05_t",
      hKey: "services.m05_h",
      dKey: "services.m05_d",
      bulletKeys: ["services.m05_b1","services.m05_b2","services.m05_b3","services.m05_b4","services.m05_b5"],
    },
  ];

  const platformCapKeys = [
    { tKey: "services.pc_01_t", dKey: "services.pc_01_d" },
    { tKey: "services.pc_02_t", dKey: "services.pc_02_d" },
    { tKey: "services.pc_03_t", dKey: "services.pc_03_d" },
    { tKey: "services.pc_04_t", dKey: "services.pc_04_d" },
    { tKey: "services.pc_05_t", dKey: "services.pc_05_d" },
    { tKey: "services.pc_06_t", dKey: "services.pc_06_d" },
  ];

  return (
    <SiteShell>
      <PageHeader
        eyebrow={t("services.eyebrow")}
        title={<>{t("services.title_1")} <br /> {t("services.title_2")}</>}
        intro={t("services.intro")}
      />

      {/* MODULES */}
      <section className="container-edge mx-auto max-w-[1600px]">
        <div className="divide-y divide-[color:var(--color-border-strong)]">
          {moduleKeys.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <article className="group grid grid-cols-1 gap-10 py-20 transition-colors duration-500 hover:bg-[color:var(--color-paper-2)]/50 md:grid-cols-12 md:gap-12 md:px-8 md:-mx-8 md:py-28">
                <div className="md:col-span-4">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-ink)]">
                    {s.n} · {t(s.tKey)}
                  </p>
                  <h2 className="mt-6 display-lg transition-transform duration-500 group-hover:translate-x-1">{t(s.hKey)}</h2>
                </div>
                <div className="md:col-span-8 md:pl-8">
                  <p className="text-lg leading-relaxed text-[color:var(--color-graphite-300)] md:text-xl">
                    {t(s.dKey)}
                  </p>
                  <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
                    {s.bulletKeys.map((bKey) => (
                      <li
                        key={bKey}
                        className="group/bullet flex items-start gap-4 border-t border-[color:var(--color-border)] pt-4 text-sm"
                      >
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-[color:var(--color-graphite-400)] transition-colors duration-300 group-hover/bullet:border-[color:var(--color-ink)] group-hover/bullet:bg-[color:var(--color-ink)] text-[color:var(--color-ink)]">
                           <span className="font-mono text-[10px] opacity-0 transition-opacity duration-300 group-hover/bullet:opacity-100 group-hover/bullet:text-[color:var(--color-paper)]">✓</span>
                        </div>
                        <span className="transition-colors duration-300 group-hover/bullet:text-[color:var(--color-ink)] text-[color:var(--color-graphite-300)]">{t(bKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PLATFORM CAPABILITIES */}
      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-36">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              {t("services.platform_eyebrow")}
            </p>
            <h2 className="mt-6 display-xl max-w-[20ch]">{t("services.platform_h2")}</h2>
            <p className="mt-6 max-w-xl text-[color:var(--color-graphite-300)]">
              {t("services.platform_desc")}
            </p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] sm:grid-cols-2 lg:grid-cols-3">
            {platformCapKeys.map((c, i) => (
              <Reveal key={c.tKey} delay={i * 0.05}>
                <div className="group flex h-full flex-col bg-[color:var(--color-paper-2)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] md:p-10">
                  <h3 className="font-display text-2xl">{t(c.tKey)}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite-300)] transition-colors duration-500 group-hover:text-[color:var(--color-paper)]/70">{t(c.dKey)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 py-24 md:flex-row md:items-end md:py-32">
          <h2 className="display-xl max-w-[18ch]">
            {t("services.cta_h2")}
          </h2>
          <Link
            to="/contact"
            className="border border-[color:var(--color-paper)]/40 px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
          >
            {t("services.cta_btn")}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
