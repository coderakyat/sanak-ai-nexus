import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import careers from "@/assets/careers.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — SANAK.AI" },
      {
        name: "description",
        content:
          "Operators and engineers wanted. SANAK.AI hires people who would still notice the problem if no software existed.",
      },
      { property: "og:title", content: "Careers — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Join a small, opinionated, operationally serious team building the SCM platform distribution has been waiting for.",
      },
      { property: "og:url", content: "/careers" },
      { property: "og:image", content: careers },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const culture = [
  {
    n: "01",
    t: "We hire operators and engineers in equal measure.",
    d: "If you have only ever built dashboards or only ever read them, this is not the place. We need both kinds of mind in one room.",
  },
  {
    n: "02",
    t: "We build product, not service hours.",
    d: "Engagements end. The platform compounds. We measure ourselves on what the system does without us in the room.",
  },
  {
    n: "03",
    t: "We default to evidence.",
    d: "A claim without an event is a guess. Strong opinions, loosely held, but always traceable to the floor.",
  },
  {
    n: "04",
    t: "We refuse complexity that does not earn its keep.",
    d: "A feature should release value the week it ships, or it does not ship.",
  },
];

const roles = [
  {
    title: "Senior Product Engineer — Inventory Truth",
    location: "Jakarta · Remote (SEA)",
    type: "Full-time",
    blurb:
      "Lead the engineering of the inventory truth module: event sourcing, reconciliation, variance management. Comfort with both ledger thinking and warehouse operations is essential.",
  },
  {
    title: "Implementation Lead — Distribution",
    location: "Jakarta · Travel within SEA",
    type: "Full-time",
    blurb:
      "Run the operational diagnosis and module deployment for mid-market distributors. You have led implementations of SCM systems and have written your own SOPs at least once.",
  },
  {
    title: "Senior Product Designer — Operational Surfaces",
    location: "Remote (SEA timezones)",
    type: "Full-time",
    blurb:
      "Design decision surfaces that operators reach for at 4 a.m. on a Tuesday. You believe restraint is a design discipline, not a style choice.",
  },
  {
    title: "Founding Account Executive",
    location: "Jakarta · Travel within SEA",
    type: "Full-time",
    blurb:
      "Sell the way we build: deliberately, on evidence. You have closed seven-figure SCM or enterprise software deals and prefer long conversations to short demos.",
  },
];

function Careers() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="[ Careers / Open roles ]"
        title={<>Build the system <br /> we would have wanted.</>}
        intro="A small team. An opinionated platform. A long horizon. We hire people who would still notice the problem if no software existed."
      />

      <section className="container-edge mx-auto grid max-w-[1600px] grid-cols-1 gap-12 py-20 md:grid-cols-12 md:gap-12 md:py-28">
        <Reveal className="md:col-span-5">
          <div className="aspect-[4/5] w-full overflow-hidden border border-[color:var(--color-border)]">
            <img
              src={careers}
              alt="Concrete staircase"
              loading="lazy"
              width={1280}
              height={1600}
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </Reveal>
        <div className="md:col-span-7 md:pl-8">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              [ Culture ]
            </p>
            <h2 className="mt-6 display-lg">Four things we mean.</h2>
          </Reveal>
          <ol className="mt-12 divide-y divide-[color:var(--color-border-strong)]">
            {culture.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.05}>
                <li className="grid grid-cols-12 gap-4 py-8">
                  <span className="col-span-2 editorial-eyebrow text-[color:var(--color-graphite-400)] md:col-span-1">
                    {c.n}
                  </span>
                  <div className="col-span-10 md:col-span-11">
                    <h3 className="font-display text-xl md:text-2xl">{c.t}</h3>
                    <p className="mt-3 text-[color:var(--color-graphite-300)]">{c.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-24 md:py-32">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                [ Open roles ]
              </p>
              <h2 className="mt-6 display-xl">Four positions, open now.</h2>
            </Reveal>
          </div>

          <div className="mt-14 divide-y divide-[color:var(--color-border-strong)] border-y border-[color:var(--color-border-strong)]">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <a
                  href={`mailto:careers@sanak.ai?subject=${encodeURIComponent(
                    "Application — " + r.title,
                  )}`}
                  className="group grid grid-cols-12 gap-6 py-10 transition-colors hover:bg-[color:var(--color-paper)]"
                >
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="font-display text-2xl leading-tight md:text-3xl">
                      {r.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm text-[color:var(--color-graphite-300)]">
                      {r.blurb}
                    </p>
                  </div>
                  <div className="col-span-6 md:col-span-2">
                    <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                      Location
                    </p>
                    <p className="mt-2 text-sm">{r.location}</p>
                  </div>
                  <div className="col-span-6 md:col-span-2">
                    <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                      Type
                    </p>
                    <p className="mt-2 text-sm">{r.type}</p>
                  </div>
                  <div className="col-span-12 flex items-end justify-end md:col-span-1">
                    <span className="font-display text-3xl transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 text-sm text-[color:var(--color-graphite-300)]">
            Not the right role? Write to{" "}
            <a href="mailto:careers@sanak.ai" className="reveal-link">
              careers@sanak.ai
            </a>{" "}
            with a paragraph on the problem you would want to work on here.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
