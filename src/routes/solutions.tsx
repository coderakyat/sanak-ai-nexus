import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useTranslation } from "react-i18next";
import { AnimExpiry } from "@/components/site/AnimExpiry";
import { AnimRealtime } from "@/components/site/AnimRealtime";
import { AnimWorkflow } from "@/components/site/AnimWorkflow";
import { AnimReport } from "@/components/site/AnimReport";
import { AnimAudit } from "@/components/site/AnimAudit";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — SANAK.AI" },
      {
        name: "description",
        content:
          "Not everyone comes to SANAK with the same problem. Find the operational challenge that matches yours — and see exactly how SANAK addresses it.",
      },
      { property: "og:title", content: "Solutions — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Five operational challenges. Five direct solutions. Map your pain to the module that releases the most value first.",
      },
      { property: "og:url", content: "https://sanak.my.id/solutions" },
    ],
    links: [{ rel: "canonical", href: "https://sanak.my.id/solutions" }],
  }),
  component: Solutions,
});

const anims = [AnimRealtime, AnimWorkflow, AnimReport, AnimExpiry, AnimAudit];

function Solutions() {
  const { t } = useTranslation();

  const challengeKeys = [
    { n: "01", qKey: "solutions.c01_q", rootKey: "solutions.c01_root", solKey: "solutions.c01_sol", anim: 0 },
    { n: "02", qKey: "solutions.c02_q", rootKey: "solutions.c02_root", solKey: "solutions.c02_sol", anim: 1 },
    { n: "03", qKey: "solutions.c03_q", rootKey: "solutions.c03_root", solKey: "solutions.c03_sol", anim: 2 },
    { n: "04", qKey: "solutions.c04_q", rootKey: "solutions.c04_root", solKey: "solutions.c04_sol", anim: 3 },
    { n: "05", qKey: "solutions.c05_q", rootKey: "solutions.c05_root", solKey: "solutions.c05_sol", anim: 4 },
  ];

  const stageKeys = [
    { tKey: "solutions.s01_t", dKey: "solutions.s01_d" },
    { tKey: "solutions.s02_t", dKey: "solutions.s02_d" },
    { tKey: "solutions.s03_t", dKey: "solutions.s03_d" },
  ];

  return (
    <SiteShell>
      <PageHeader
        eyebrow={t("solutions.eyebrow")}
        title={<>{t("solutions.title_1")} <br /> {t("solutions.title_2")}</>}
        intro={t("solutions.intro")}
      />

      {/* CHALLENGE-SOLUTION FORMAT */}
      <section className="container-edge mx-auto max-w-[1600px]">
        <div className="divide-y divide-[color:var(--color-border-strong)]">
          {challengeKeys.map((c, i) => {
            const Anim = anims[c.anim];
            return (
              <Reveal key={c.n} delay={0.04}>
                <article className="group grid grid-cols-1 gap-10 py-20 transition-colors duration-500 hover:bg-[color:var(--color-paper-2)]/50 md:grid-cols-12 md:gap-12 md:px-8 md:-mx-8 md:py-28">
                  <div className="md:col-span-5">
                    <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-ink)]">
                      {t("solutions.challenge_label")} {c.n}
                    </p>
                    <h2 className="mt-6 font-display text-2xl leading-snug italic text-[color:var(--color-graphite-200)] transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                      {t(c.qKey)}
                    </h2>
                    <div className="mt-8">
                      <Anim />
                    </div>
                  </div>
                  <div className="md:col-span-7 md:pl-8">
                    <div className="border-t border-[color:var(--color-border-strong)] pt-6 transition-colors duration-500 group-hover:border-[color:var(--color-border)]">
                      <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">{t("solutions.root_cause")}</p>
                      <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-graphite-300)]">{t(c.rootKey)}</p>
                    </div>
                    <div className="mt-10 border-t border-[color:var(--color-border-strong)] pt-6 transition-colors duration-500 group-hover:border-[color:var(--color-border)]">
                      <p className="editorial-eyebrow text-[color:var(--color-ink)]">{t("solutions.sanak_solution")}</p>
                      <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-graphite-200)]">{t(c.solKey)}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* BY BUSINESS STAGE */}
      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-36">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              {t("solutions.stage_eyebrow")}
            </p>
            <h2 className="mt-6 display-xl max-w-[20ch]">{t("solutions.stage_h2")}</h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] md:grid-cols-3">
            {stageKeys.map((s, i) => (
              <Reveal key={s.tKey} delay={i * 0.06}>
                <div className="group flex h-full flex-col bg-[color:var(--color-paper-2)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] md:p-10">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-graphite-500)]">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-6 font-display text-2xl">{t(s.tKey)}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite-300)] transition-colors duration-500 group-hover:text-[color:var(--color-paper)]/70">{t(s.dKey)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-end">
          <h2 className="display-xl max-w-[20ch]">{t("solutions.cta_h2")}</h2>
          <Link
            to="/contact"
            className="border border-[color:var(--color-paper)]/40 px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
          >
            {t("solutions.cta_btn")}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
