import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import aboutHero from "@/assets/about-hero.jpg";
import texture from "@/assets/texture-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SANAK.AI" },
      {
        name: "description",
        content:
          "SANAK.AI is a product company building modular SCM software for distributors and warehousing operations. Operational truth is our discipline.",
      },
      { property: "og:title", content: "About — SANAK.AI" },
      {
        property: "og:description",
        content:
          "A product company building the supply chain platform distributors and warehousing operations have been quietly waiting for.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: aboutHero },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="[ About / Company ]"
        title={
          <>
            A product company,
            <br /> not a software house.
          </>
        }
        intro="SANAK.AI is building the supply chain platform distributors and warehousing operations have been quietly waiting for: modular, opinionated, and built around operational truth."
      />

      <section className="container-edge mx-auto grid max-w-[1600px] grid-cols-1 gap-12 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-7">
          <div className="aspect-[16/10] w-full overflow-hidden border border-[color:var(--color-border)]">
            <img
              src={aboutHero}
              alt="Loading dock at first light"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </Reveal>
        <div className="md:col-span-5 md:pl-8">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              [ Mission ]
            </p>
            <h2 className="mt-6 display-lg">Restore truth to the operation.</h2>
            <p className="mt-8 text-[color:var(--color-graphite-300)]">
              Distribution has been over-served by reporting tools and under-served by
              operational systems. We exist to invert that asymmetry — to give distributors
              a platform that runs the business, not one that merely describes it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto grid max-w-[1600px] grid-cols-1 gap-12 py-28 md:grid-cols-12 md:py-32">
          {[
            {
              n: "01",
              t: "Vision",
              d: "A category of distribution operations where inventory is provable, orders are deterministic, and the floor and the ledger never disagree.",
            },
            {
              n: "02",
              t: "Philosophy",
              d: "Software is a discipline. We build slowly, in public, with operators in the room. We refuse features that look correct and behave incorrectly.",
            },
            {
              n: "03",
              t: "Product logic",
              d: "One master record. One event stream. One platform that composes outward. Modules earn their place by improving the operation, not the demo.",
            },
            {
              n: "04",
              t: "Team ethos",
              d: "We hire operators and engineers in equal measure. The best products are built by people who would still notice the problem if no software existed.",
            },
          ].map((b, i) => (
            <Reveal key={b.n} delay={i * 0.05} className="md:col-span-6">
              <div className="border-t border-[color:var(--color-border-strong)] pt-8">
                <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                  {b.n} · {b.t}
                </p>
                <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">
                  {b.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto grid max-w-[1600px] grid-cols-1 gap-16 py-28 md:grid-cols-12 md:py-40">
          <div className="md:col-span-7">
            <Reveal>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-500)]">
                [ Operating principles ]
              </p>
              <h2 className="mt-6 display-xl">Restraint over ornament.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-12 space-y-6 text-lg">
                {[
                  "We default to evidence. A claim without an event is a guess.",
                  "We refuse complexity that does not earn its keep.",
                  "We build product, not service hours. The platform is the deliverable.",
                  "We do not compete on features. We compete on operational outcomes.",
                ].map((p, i) => (
                  <li key={i} className="grid grid-cols-12 gap-4 border-b border-[color:var(--color-paper)]/15 pb-6">
                    <span className="col-span-2 editorial-eyebrow text-[color:var(--color-graphite-500)] md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 md:col-span-11">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="md:col-span-5">
            <div className="aspect-[3/4] w-full overflow-hidden border border-[color:var(--color-paper)]/10">
              <img
                src={texture}
                alt="Industrial cladding"
                loading="lazy"
                width={1280}
                height={1600}
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="mt-10">
              <Link
                to="/team"
                className="editorial-eyebrow reveal-link text-[color:var(--color-paper)]"
              >
                Meet the team →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
