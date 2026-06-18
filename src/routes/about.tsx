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
          "SANAK.AI is a mobile-first, conversational SCM platform built for distributors and warehouse operators in Southeast Asia who have outgrown manual coordination but aren't ready for enterprise ERP.",
      },
      { property: "og:title", content: "About — SANAK.AI" },
      {
        property: "og:description",
        content:
          "A product company building the SCM platform distributors and warehousing operations in Southeast Asia have been quietly waiting for.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: aboutHero },
    ],
    links: [{ rel: "canonical", href: "https://sanakai.vercel.app/about" }],
  }),
  component: About,
});

const values = [
  {
    n: "01",
    t: "Start from the floor, not the boardroom.",
    d: "We build for the people doing the actual work. The warehouse staff, the ops coordinator, the driver on the road. If they can't use it naturally from day one, we haven't solved the problem. Every product decision is pressure-tested from the ground up.",
  },
  {
    n: "02",
    t: "The intelligence belongs in the system, not in people's heads.",
    d: "Operations shouldn't collapse when one key person is out. When a problem is brewing, the system should catch it first. We build systems that carry operational knowledge so people don't have to.",
  },
  {
    n: "03",
    t: "Simple to use is the hardest thing to build.",
    d: "Effort and complexity are not the same thing. If a feature requires explanation, it needs more work. Simplicity is a product requirement, not a design preference.",
  },
  {
    n: "04",
    t: "Earn trust before asking for it.",
    d: "Most of our customers have experienced software that promised transformation and delivered frustration. We show up with things that work, ship incrementally, and are honest about what isn't ready yet.",
  },
  {
    n: "05",
    t: "Reliability is the baseline, not a differentiator.",
    d: "Supply chains don't pause. Our customers can't afford downtime, slow systems, or data they can't trust. We treat reliability the way our customers treat keeping the lights on — non-negotiable.",
  },
];

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
        intro="SANAK.AI is a mobile-first, conversational SCM platform built for distributors and warehouse operators in Southeast Asia who have outgrown manual coordination but aren't ready — or the right fit — for enterprise ERP."
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
              [ Mission ]
            </p>
            <h2 className="mt-6 display-lg">Stop the operational chaos.</h2>
            <div className="mt-8 space-y-6 text-[color:var(--color-graphite-300)]">
              <p>
                Most growth-stage distributors in Southeast Asia run on WhatsApp, Excel, and the memory of one or two senior staff. When they resign, the operation breaks.
              </p>
              <p className="font-semibold font-display text-xl text-[color:var(--color-ink)]">
                You are too big to stay manual, but too lean for SAP.
              </p>
              <p>
                We exist to bridge that gap — to give you a system that runs the business without requiring an IT team or months of implementation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-36">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              [ Our Story ]
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <h2 className="display-xl">Built to close a gap nobody else would.</h2>
            </Reveal>
            <div className="md:col-span-7 md:pl-8 space-y-6 text-lg leading-relaxed text-[color:var(--color-graphite-300)]">
              <Reveal delay={0.1}>
                <p>
                  SANAK was founded by a team that spent years watching mid-market distributors run genuinely sophisticated operations on tools that were never designed for them. The problem wasn't that these businesses lacked ambition or capability — it's that every available option was built for either a two-person operation or a Fortune 500 company with a dedicated IT team.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  We set out to close that gap. Not by building a cheaper version of SAP. By rethinking the interface entirely — starting from how field workers actually communicate, and working backward into the system architecture that makes it reliable, auditable, and ERP-grade.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-display text-xl text-[color:var(--color-ink)]">
                  SANAK is the result: conversational at the front, enterprise-grade at the back, intelligent throughout.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION BLOCKS */}
      <section className="border-b border-[color:var(--color-border)]">
        <div className="container-edge mx-auto grid max-w-[1600px] grid-cols-1 gap-12 py-28 md:grid-cols-12 md:py-32">
          {[
            {
              n: "01",
              t: "Vision",
              d: "Every distributor and warehouse operator in Southeast Asia runs their supply chain with full visibility and control — no matter the size of their team.",
            },
            {
              n: "02",
              t: "Mission",
              d: "We build the SCM operating system for growth-stage distributors and warehouse operators in Southeast Asia, where anyone on the team can manage inventory, coordinate operations, and track every movement — simply by speaking their intent, from day one, without an implementation project.",
            },
            {
              n: "03",
              t: "Product logic",
              d: "Conversational at the front. ERP-grade at the back. Intelligence belongs in the system, not in people's heads.",
            },
            {
              n: "04",
              t: "Team ethos",
              d: "We don't mistake complexity for capability. Simple to use is the hardest thing to build, and we demand simplicity.",
            },
          ].map((b, i) => (
            <Reveal key={b.n} delay={i * 0.05} className="md:col-span-6">
              <div className="group flex h-full flex-col border-t border-[color:var(--color-border-strong)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)]">
                <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-graphite-500)]">
                  {b.n} · {b.t}
                </p>
                <p className="mt-8 font-display text-2xl leading-snug md:text-3xl transition-transform duration-500 group-hover:translate-x-2">
                  {b.d}
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
                  [ Our Values ]
                </p>
                <h2 className="mt-6 display-xl">How we build and operate.</h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={0.1}>
                <ul className="space-y-0">
                  {values.map((v, i) => (
                    <li key={v.n} className="group grid grid-cols-12 gap-6 border-b border-[color:var(--color-paper)]/15 py-10 transition-colors hover:bg-[color:var(--color-paper)]/5">
                      <div className="col-span-12 md:col-span-2">
                        <span className="font-display text-3xl text-[color:var(--color-graphite-500)] transition-colors group-hover:text-[color:var(--color-paper)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="col-span-12 md:col-span-10">
                        <p className="font-display text-2xl leading-snug">{v.t}</p>
                        <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite-400)]">{v.d}</p>
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
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">[ What we do ]</p>
              <ul className="mt-8 space-y-4">
                {[
                  "Build end-to-end SCM operations software covering inventory, procurement, inbound logistics, order management, outbound delivery, and field sales execution",
                  "Make that software accessible to everyone on the team — field workers, supervisors, and management alike — through voice, conversational input, and mobile UI",
                  "Serve growth-stage distributors and warehouse operators in Malaysia and Singapore who are digitizing their operations for the first time",
                  "Surface operational intelligence proactively, reducing the daily decision load on people",
                ].map((item) => (
                  <li key={item} className="group flex items-start gap-6 border-t border-[color:var(--color-border)] pt-6 text-sm leading-relaxed">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-paper)] transition-transform duration-300 group-hover:scale-110">
                      <span className="font-mono text-xs">+</span>
                    </div>
                    <span className="pt-0.5 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <Reveal delay={0.1}>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">[ What we don't do ]</p>
              <ul className="mt-8 space-y-4">
                {[
                  "Build accounting or financial ERP — we complement the systems you already have",
                  "Require IT departments, implementation consultants, or months-long deployment timelines",
                  "Force teams to change how they communicate — we work with the way they already operate",
                  "Overpromise what AI can do — our AI understands intent and routes action, while business logic stays deterministic and auditable",
                ].map((item) => (
                  <li key={item} className="group flex items-start gap-6 border-t border-[color:var(--color-border)] pt-6 text-sm leading-relaxed text-[color:var(--color-graphite-300)]">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] text-[color:var(--color-graphite-400)] transition-colors duration-300 group-hover:border-[color:var(--color-ink)] group-hover:text-[color:var(--color-ink)]">
                      <span className="font-mono text-xs">×</span>
                    </div>
                    <span className="pt-0.5 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OPERATING PRINCIPLES */}
      <section className="bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                  [ The Team ]
                </p>
                <h2 className="mt-6 display-xl">Practical over sophisticated.</h2>
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
                <Link
                  to="/team"
                  className="editorial-eyebrow reveal-link"
                >
                  Meet the team →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
