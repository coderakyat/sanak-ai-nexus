import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { VoiceDemoOverlay } from "@/components/site/VoiceDemoOverlay";
import { InteractiveCapabilities } from "@/components/site/InteractiveCapabilities";
import { Marquee } from "@/components/site/Marquee";
import heroWarehouse from "@/assets/hero-warehouse.jpg";
import brandStatement from "@/assets/brand-statement.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

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
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroWarehouse },
      { name: "twitter:image", content: heroWarehouse },
    ],
    links: [{ rel: "canonical", href: "https://sanakai.vercel.app/" }],
  }),
  component: Home,
}));

const valueProps = [
  {
    n: "01",
    t: "Real-Time Inventory Visibility",
    d: "Know exactly what you have, where it is, and when it expires — without calling anyone or waiting for a report. Query by voice or text, get answers in seconds.",
  },
  {
    n: "02",
    t: "Voice-First for Field Workers",
    d: "Your warehouse staff shouldn't need a laptop or training to update a system. SANAK works the way they already communicate — speak naturally, get the right input captured instantly.",
  },
  {
    n: "03",
    t: "Audit Trail, Automatically",
    d: "Every receiving, every outbound, every stock adjustment is logged with who did it, when, and why. No more guessing when something doesn't add up.",
  },
];

const stats = [
  { v: "< 1 day", l: "to go live — full onboarding in a single working day" },
  { v: "2 sec", l: "average response time for stock queries" },
  { v: "Zero", l: "IT department required" },
  { v: "5", l: "modules covering inventory, procurement, sales, logistics, and delivery" },
];

const industries = [
  "FMCG Distribution",
  "Pharmaceutical Distribution",
  "Industrial & MRO",
  "Consumer Goods",
  "Building Materials",
  "Food & Beverage",
];

const projects = [
  {
    img: case1,
    eyebrow: "FMCG Distributor — Selangor",
    title: "Stopped stockouts and cleared phantom inventory",
    outcome: "Sales team queries stock in real time during customer visits. First expiry alert fired within the first week.",
  },
  {
    img: case2,
    eyebrow: "Industrial Distributor — Johor",
    title: "Solved the key person dependency problem",
    outcome: "Operational knowledge encoded into the system. The operation runs on the system, not on any one person.",
  },
  {
    img: case3,
    eyebrow: "F&B Distributor — Kuala Lumpur",
    title: "Met full traceability requirements in two weeks",
    outcome: "Batch tracking from supplier receipt to customer delivery, queryable from a phone in seconds.",
  },
];

const insights = [
  { img: insight1, eyebrow: "Field note", title: "Why inventory truth is a discipline, not a feature", read: "6 min read" },
  { img: insight2, eyebrow: "Position paper", title: "The case against the report-first SCM stack", read: "9 min read" },
  { img: insight3, eyebrow: "Operating brief", title: "Item master as the foundation of distribution operations", read: "7 min read" },
];

function Home() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto grid min-h-[92vh] max-w-[1600px] grid-cols-1 gap-12 pb-16 pt-28 md:grid-cols-12 md:pt-40">
          <div className="md:col-span-7 md:pr-8">
            <Reveal>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-500)]">
                [ SCM software for Mid-Market Distributors ]
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-10 display-hero">
                Your Supply Chain,{" "}
                <br />
                Spoken Into Existence.{" "}
                <br />
                <span className="text-[color:var(--color-graphite-500)]">No IT team required.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-[color:var(--color-graphite-400)]">
                The conversational SCM platform built for mid-market distributors and warehouse operators across Southeast Asia. Ask it anything. Tell it what you're doing. It handles the rest — in real time, from your phone.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link
                  to="/contact"
                  className="bg-[color:var(--color-paper)] px-7 py-4 editorial-eyebrow text-[color:var(--color-ink)] transition-opacity hover:opacity-80"
                >
                  Book a Demo
                </Link>
                <Link
                  to="/solutions"
                  className="border border-[color:var(--color-paper)]/40 px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
                >
                  See How It Works
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
              [ The Problem We Solve ]
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-4xl font-display text-2xl leading-relaxed text-[color:var(--color-graphite-200)] md:text-3xl">
              Mid-market distributors in Malaysia and Singapore are running real businesses — moving real inventory, coordinating real teams — on Excel, WhatsApp, and verbal handoffs. Not because they don't want better tools. Because every SCM system ever built assumed they had an IT department, a long implementation runway, and a warehouse team that can sit through training.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 border-l-4 border-[color:var(--color-ink)] pl-6 md:pl-10">
              <p className="font-display text-3xl leading-snug text-[color:var(--color-ink)] md:text-5xl">
                SANAK was built for the gap <br className="hidden md:block" />
                that everyone else ignored.
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
                [ Brand statement / 01 ]
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 display-xl">
                We build software for the people actually doing the work on the floor.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid gap-6 text-lg leading-relaxed text-[color:var(--color-graphite-300)] md:grid-cols-2">
                <p>
                  Every SCM software ever built assumes something you don't have: an IT team, a long implementation runway, and a workforce that can sit through weeks of training. SANAK changes that.
                </p>
                <p>
                  We built a system that floor workers can operate just by speaking or typing naturally. When the system is simple enough for the floor worker to use, the data becomes accurate, and the chaos stops.
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
                  [ Why SANAK / 02 ]
                </p>
                <h2 className="mt-8 display-lg">
                  Three things that change everything.
                </h2>
                <p className="mt-8 max-w-md text-[color:var(--color-graphite-300)]">
                  Each module stands alone and composes with the others. Land where the hurt is greatest. Expand on your terms.
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
                      {s.t}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite-300)] group-hover:text-[color:var(--color-graphite-600)]">
                      {s.d}
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
            {stats.map((s, i) => (
              <Reveal key={s.v} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col justify-center bg-[color:var(--color-paper)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] md:p-10">
                  <p className="font-display text-4xl md:text-5xl transition-transform duration-500 group-hover:scale-105 origin-left">{s.v}</p>
                  <p className="mt-4 text-xs leading-relaxed text-[color:var(--color-graphite-400)] uppercase tracking-widest transition-colors duration-500 group-hover:text-[color:var(--color-paper)]/70">{s.l}</p>
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
              <p className="editorial-eyebrow text-[color:var(--color-graphite-500)]">
                [ Case Studies / 04 ]
              </p>
              <h2 className="mt-6 display-xl max-w-[18ch]">
                Evidence over assertion.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/case-studies" className="editorial-eyebrow reveal-link text-[color:var(--color-paper)]">
                All case studies →
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col">
                  <div className="aspect-[4/5] overflow-hidden border border-[color:var(--color-paper)]/10">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1600}
                      height={2000}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-6 editorial-eyebrow text-[color:var(--color-graphite-500)]">
                    {p.eyebrow}
                  </p>
                  <h3 className="mt-4 font-display text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-3 text-sm text-[color:var(--color-graphite-500)]">
                    {p.outcome}
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
              [ Industries we serve ]
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
                [ Insights / 07 ]
              </p>
              <h2 className="mt-6 display-xl max-w-[16ch]">
                Thinking from the floor.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/insights" className="editorial-eyebrow reveal-link">
                All insights →
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {insights.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <article className="flex flex-col">
                  <div className="aspect-[5/3] overflow-hidden border border-[color:var(--color-border)]">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1600}
                      height={1000}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-6 editorial-eyebrow text-[color:var(--color-graphite-400)]">
                    {p.eyebrow} · {p.read}
                  </p>
                  <h3 className="mt-4 font-display text-2xl leading-tight">{p.title}</h3>
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
            <h2 className="display-xl max-w-[20ch]">Ready to see it in action?</h2>
            <p className="mt-6 max-w-md text-lg text-[color:var(--color-graphite-400)]">
              Book a 30-minute demo. We'll show you SANAK running on real data, for an operation that looks like yours.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="border border-[color:var(--color-paper)]/40 px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
            >
              Book a Demo →
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
