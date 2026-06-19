import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useTranslation } from "react-i18next";
import imgCeo from "@/assets/ceo.jpeg";
import imgCpo from "@/assets/cpo.jpeg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — SANAK.AI" },
      {
        name: "description",
        content:
          "The founders and operators behind SANAK.AI — engineers and supply chain leaders building a serious SCM platform.",
      },
      { property: "og:title", content: "Team — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Operators and engineers in equal measure. Meet the people behind the platform.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "https://sanakai.vercel.app/team" }],
  }),
  component: Team,
});

function Team() {
  const { t } = useTranslation();

  const people = [
    {
      img: imgCeo,
      name: "Hanif Alfa Rizky",
      role: "Co-founder · CEO",
      bioKey: "team.ceo_bio",
    },
    {
      img: imgCpo,
      name: "Fakhrel Aziz Maarif",
      role: "Co-founder · CPO",
      bioKey: "team.cpo_bio",
    },
    {
      img: null,
      name: "Said Fairuz Zacky",
      role: "Co-founder · CTO",
      bioKey: "team.cto_bio",
    },
  ];

  const principleKeys = ["team.p1", "team.p2", "team.p3", "team.p4"];

  return (
    <SiteShell>
      <PageHeader
        eyebrow={t("team.eyebrow")}
        title={<>{t("team.title_1")} <br /> {t("team.title_2")}</>}
        intro={t("team.intro")}
      />

      <section className="container-edge mx-auto max-w-[1600px] py-20 md:py-28">
        <div className="grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] lg:grid-cols-3">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="group flex h-full flex-col bg-[color:var(--color-paper)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-paper-2)]/50 md:p-10 lg:p-12">
                <div className="aspect-[4/5] w-full overflow-hidden border border-[color:var(--color-border)] bg-[color:var(--color-paper-2)] flex items-center justify-center">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <span className="editorial-eyebrow text-[color:var(--color-graphite-400)]">{t("team.photo_unavailable")}</span>
                  )}
                </div>
                <div className="mt-8 flex-1">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-ink)]">
                    {p.role}
                  </p>
                  <h2 className="mt-4 font-display text-3xl leading-tight transition-transform duration-500 group-hover:translate-x-1">
                    {p.name}
                  </h2>
                  <p className="mt-5 text-[color:var(--color-graphite-300)]">{t(p.bioKey)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-24 md:py-32">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              {t("team.principles_eyebrow")}
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] sm:grid-cols-2 lg:grid-cols-4">
            {principleKeys.map((pKey, i) => (
              <Reveal key={pKey} delay={i * 0.06}>
                <div className="group flex h-full flex-col justify-between bg-[color:var(--color-paper-2)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] md:p-10">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-graphite-500)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-12 font-display text-2xl leading-snug transition-transform duration-500 group-hover:translate-x-1">{t(pKey)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING WITH US */}
      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">{t("team.working_eyebrow")}</p>
              <h2 className="mt-6 display-xl">{t("team.working_h2")}</h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7 md:pl-8">
              <p className="text-lg leading-relaxed text-[color:var(--color-graphite-300)]">
                {t("team.working_desc")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-end">
          <h2 className="display-xl max-w-[18ch]">{t("team.cta_h2")}</h2>
          <Link
            to="/contact"
            className="border border-[color:var(--color-paper)]/40 px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
          >
            {t("team.cta_btn")}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
