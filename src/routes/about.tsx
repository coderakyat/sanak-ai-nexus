import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useTranslation } from "react-i18next";
import aboutHero from "@/assets/about-hero.jpg";
import texture from "@/assets/texture-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SANAK.AI" },
      {
        name: "description",
        content:
          "SANAK.AI is a mobile-first, conversational SCM platform built for distributors and warehouse operators in Southeast Asia who have outgrown manual coordination but aren't ready for enterprise ERP.",
      },
      { property: "og:title", content: "About — SANAK.AI" },
      {
        property: "og:description",
        content:
          "A product company building the SCM platform distributors and warehousing operations in Southeast Asia have been quietly waiting for.",
      },
      { property: "og:url", content: "https://sanak.my.id/about" },
      { property: "og:image", content: aboutHero },
    ],
    links: [{ rel: "canonical", href: "https://sanak.my.id/about" }],
  }),
  component: About,
});

function About() {
  const { t } = useTranslation();

  const valueKeys = [
    { tKey: "about.val_01_t", dKey: "about.val_01_d" },
    { tKey: "about.val_02_t", dKey: "about.val_02_d" },
    { tKey: "about.val_03_t", dKey: "about.val_03_d" },
    { tKey: "about.val_04_t", dKey: "about.val_04_d" },
    { tKey: "about.val_05_t", dKey: "about.val_05_d" },
  ];

  const visionMissionKeys = [
    { n: "01", tKey: "about.vm_01_t", dKey: "about.vm_01_d" },
    { n: "02", tKey: "about.vm_02_t", dKey: "about.vm_02_d" },
    { n: "03", tKey: "about.vm_03_t", dKey: "about.vm_03_d" },
    { n: "04", tKey: "about.vm_04_t", dKey: "about.vm_04_d" },
  ];

  const doKeys = ["about.do_1", "about.do_2", "about.do_3", "about.do_4"];
  const dontKeys = ["about.dont_1", "about.dont_2", "about.dont_3", "about.dont_4"];

  return (
    <SiteShell>
      <PageHeader
        eyebrow={t("about.eyebrow")}
        title={
          <>
            {t("about.title_1")}
            <br /> {t("about.title_2")}
          </>
        }
        intro={t("about.intro")}
      />

      {/* MISSION + HERO IMAGE */}
      <section className="container-edge mx-auto grid max-w-[1600px] grid-cols-1 gap-12 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-7">
          <div className="group aspect-[16/10] w-full overflow-hidden border border-[color:var(--color-border)]">
            <img
              src={aboutHero}
              alt="Loading dock at first light"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
            />
          </div>
        </Reveal>
        <div className="md:col-span-5 md:pl-8">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              {t("about.mission_eyebrow")}
            </p>
            <h2 className="mt-6 display-lg">{t("about.mission_h2")}</h2>
            <div className="mt-8 space-y-6 text-[color:var(--color-graphite-300)]">
              <p>{t("about.mission_p1")}</p>
              <p className="font-semibold font-display text-xl text-[color:var(--color-ink)]">
                {t("about.mission_p2")}
              </p>
              <p>{t("about.mission_p3")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-36">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              {t("about.story_eyebrow")}
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <h2 className="display-xl">{t("about.story_h2")}</h2>
            </Reveal>
            <div className="md:col-span-7 md:pl-8 space-y-6 text-lg leading-relaxed text-[color:var(--color-graphite-300)]">
              <Reveal delay={0.1}><p>{t("about.story_p1")}</p></Reveal>
              <Reveal delay={0.15}><p>{t("about.story_p2")}</p></Reveal>
              <Reveal delay={0.2}>
                <p className="font-display text-xl text-[color:var(--color-ink)]">
                  {t("about.story_p3")}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION BLOCKS */}
      <section className="border-b border-[color:var(--color-border)]">
        <div className="container-edge mx-auto grid max-w-[1600px] grid-cols-1 gap-12 py-28 md:grid-cols-12 md:py-32">
          {visionMissionKeys.map((b, i) => (
            <Reveal key={b.n} delay={i * 0.05} className="md:col-span-6">
              <div className="group flex h-full flex-col border-t border-[color:var(--color-border-strong)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)]">
                <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-graphite-500)]">
                  {b.n} · {t(b.tKey)}
                </p>
                <p className="mt-8 font-display text-2xl leading-snug md:text-3xl transition-transform duration-500 group-hover:translate-x-2">
                  {t(b.dKey)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="editorial-eyebrow text-[color:var(--color-graphite-500)]">
                  {t("about.values_eyebrow")}
                </p>
                <h2 className="mt-6 display-xl">{t("about.values_h2")}</h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={0.1}>
                <ul className="space-y-0">
                  {valueKeys.map((v, i) => (
                    <li key={v.tKey} className="group grid grid-cols-12 gap-6 border-b border-[color:var(--color-paper)]/15 py-10 transition-colors hover:bg-[color:var(--color-paper)]/5">
                      <div className="col-span-12 md:col-span-2">
                        <span className="font-display text-3xl text-[color:var(--color-graphite-500)] transition-colors group-hover:text-[color:var(--color-paper)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="col-span-12 md:col-span-10">
                        <p className="font-display text-2xl leading-snug">{t(v.tKey)}</p>
                        <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite-400)]">{t(v.dKey)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO & DON'T */}
      <section className="border-y border-[color:var(--color-border)]">
        <div className="container-edge mx-auto grid max-w-[1600px] grid-cols-1 gap-16 py-28 md:grid-cols-12 md:py-32">
          <div className="md:col-span-6">
            <Reveal>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">{t("about.do_eyebrow")}</p>
              <ul className="mt-8 space-y-4">
                {doKeys.map((key) => (
                  <li key={key} className="group flex items-start gap-6 border-t border-[color:var(--color-border)] pt-6 text-sm leading-relaxed">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-paper)] transition-transform duration-300 group-hover:scale-110">
                      <span className="font-mono text-xs">+</span>
                    </div>
                    <span className="pt-0.5 text-base">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <Reveal delay={0.1}>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">{t("about.dont_eyebrow")}</p>
              <ul className="mt-8 space-y-4">
                {dontKeys.map((key) => (
                  <li key={key} className="group flex items-start gap-6 border-t border-[color:var(--color-border)] pt-6 text-sm leading-relaxed text-[color:var(--color-graphite-300)]">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] text-[color:var(--color-graphite-400)] transition-colors duration-300 group-hover:border-[color:var(--color-ink)] group-hover:text-[color:var(--color-ink)]">
                      <span className="font-mono text-xs">×</span>
                    </div>
                    <span className="pt-0.5 text-base">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                  {t("about.team_eyebrow")}
                </p>
                <h2 className="mt-6 display-xl">{t("about.team_h2")}</h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="md:col-span-7">
              <div className="group relative aspect-[3/4] w-full overflow-hidden border border-[color:var(--color-border)]">
                <img
                  src={texture}
                  alt="Industrial cladding"
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[color:var(--color-ink)]/0 transition-colors duration-500 group-hover:bg-[color:var(--color-ink)]/10" />
              </div>
              <div className="mt-10">
                <Link to="/team" className="editorial-eyebrow reveal-link">
                  {t("about.team_link")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
