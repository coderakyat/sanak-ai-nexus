import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import heroWarehouse from "@/assets/hero-warehouse.jpg";
import brandStatement from "@/assets/brand-statement.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SANAK.AI — SCM software for distributors who need operational truth" },
      {
        name: "description",
        content:
          "SANAK.AI builds a modular supply chain platform for distributors and warehousing operations. Inventory clarity. Order flow. Operational truth.",
      },
      { property: "og:title", content: "SANAK.AI — SCM software for distributors" },
      {
        property: "og:description",
        content:
          "A modular supply chain platform built for distributors and warehousing operations.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroWarehouse },
      { name: "twitter:image", content: heroWarehouse },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { n: "01", t: "Inventory truth", d: "Item master and stock state, reconciled and trusted across every operational surface." },
  { n: "02", t: "Order flow", d: "Order capture, allocation, and fulfilment orchestrated end-to-end without lossy hand-offs." },
  { n: "03", t: "Warehouse execution", d: "Putaway, picking, packing, and dispatch logic that respects how the floor actually moves." },
  { n: "04", t: "Distributor intelligence", d: "Decision surfaces built from operational events, not retrofitted reports." },
];

const capabilities = [
  { n: "01", t: "Modular SCM platform", d: "Composed of independent modules around a single master record. Buy what you need. Expand on terms that fit your operation." },
  { n: "02", t: "Embedded MDM", d: "Item, partner, and location masters live inside the platform — not bolted on, not duplicated." },
  { n: "03", t: "Land-and-expand product strategy", d: "Begin in the surface that hurts most. Extend across the operation as confidence compounds." },
  { n: "04", t: "Event-native architecture", d: "Every action is an event. Every reconciliation is auditable. Every report is provable." },
  { n: "05", t: "Built for mid-market distribution", d: "Engineered for businesses past spreadsheets and short of enterprise-grade complexity." },
  { n: "06", t: "Operationally serious", d: "Designed by people who have run warehouses, not by people who have only built dashboards." },
];

const projects = [
  { img: case1, eyebrow: "Case 001 / National FMCG distributor", title: "Reduced phantom stock by 96% across 14 branches", outcome: "From spreadsheet reconciliation to a single item master in 11 weeks." },
  { img: case2, eyebrow: "Case 002 / Cold chain operator", title: "Cut order-to-dispatch cycle from 38 to 9 hours", outcome: "Allocation logic rebuilt against actual pick paths, not theoretical zones." },
  { img: case3, eyebrow: "Case 003 / Industrial parts distributor", title: "Closed the books five days earlier, every month", outcome: "Inventory truth made financial close a procedural exercise, not a forensic one." },
];

const method = [
  { n: "01", t: "Operational diagnosis", d: "We spend time on your floor before we spend time on your screens. Decisions follow evidence." },
  { n: "02", t: "Master record establishment", d: "We build the item master first. Everything else inherits its discipline." },
  { n: "03", t: "Module deployment", d: "We deploy the module that releases the most value first, then expand on a defined cadence." },
  { n: "04", t: "Operational ownership", d: "We transfer the system to your people deliberately. Software that no one owns is software that decays." },
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
                [ SCM software · Est. operations ]
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-10 display-hero">
                SCM software <br /> for distributors <br />
                <span className="text-[color:var(--color-graphite-500)]">who need operational truth.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link
                  to="/contact"
                  className="bg-[color:var(--color-paper)] px-7 py-4 editorial-eyebrow text-[color:var(--color-ink)] transition-opacity hover:opacity-80"
                >
                  Request a demo
                </Link>
                <Link
                  to="/solutions"
                  className="border border-[color:var(--color-paper)]/40 px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
                >
                  Explore the platform
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
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-[color:var(--color-paper)]">
                <p className="editorial-eyebrow">[ Plate 001 / Operational floor ]</p>
                <p className="editorial-eyebrow">SANAK / 26</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* marquee row */}
        <div className="border-t border-[color:var(--color-paper)]/15">
          <div className="container-edge mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-y-4 py-6 editorial-eyebrow text-[color:var(--color-graphite-500)]">
            <span>Modular SCM platform</span>
            <span>Embedded MDM</span>
            <span>Built for distributors</span>
            <span>Warehouse execution</span>
            <span>Operational truth</span>
          </div>
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
                className="h-full w-full object-cover grayscale"
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
                We build software for the operations that hold distribution together.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid gap-6 text-lg leading-relaxed text-[color:var(--color-graphite-300)] md:grid-cols-2">
                <p>
                  SANAK.AI is a product platform, not a project. We build modular supply chain
                  software designed around the discipline distributors and warehousing
                  businesses already keep — and refuse the parts they have rightly come to
                  distrust.
                </p>
                <p>
                  Our work is opinionated. The item master is the foundation. Operational
                  events are the substrate. Reports are an output, not an objective. What
                  you measure is what you can move.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                  [ Services / 02 ]
                </p>
                <h2 className="mt-8 display-lg">
                  Four surfaces. <br /> One platform.
                </h2>
                <p className="mt-8 max-w-md text-[color:var(--color-graphite-300)]">
                  Each module stands alone and composes with the others. Land where the
                  hurt is greatest. Expand on your terms.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {services.map((s, i) => (
                  <Reveal
                    key={s.n}
                    delay={i * 0.06}
                    className={`group border-t border-[color:var(--color-border-strong)] p-8 transition-colors hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] sm:p-10 ${
                      i % 2 === 0 ? "sm:border-r" : ""
                    } ${i >= services.length - 2 ? "sm:border-b-0" : ""}`}
                  >
                    <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] group-hover:text-[color:var(--color-graphite-500)]">
                      {s.n}
                    </p>
                    <h3 className="mt-6 font-display text-3xl font-light leading-tight">
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

      {/* CAPABILITIES */}
      <section className="border-y border-[color:var(--color-border)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                  [ Capabilities / 03 ]
                </p>
                <h2 className="mt-8 display-xl">
                  Built for inventory clarity. <br />
                  <span className="text-[color:var(--color-graphite-500)]">Designed for execution.</span>
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <ol className="divide-y divide-[color:var(--color-border-strong)]">
                {capabilities.map((c, i) => (
                  <Reveal key={c.n} delay={i * 0.04}>
                    <li className="grid grid-cols-12 gap-6 py-8">
                      <span className="col-span-2 editorial-eyebrow text-[color:var(--color-graphite-400)] md:col-span-1">
                        {c.n}
                      </span>
                      <h3 className="col-span-10 font-display text-2xl md:col-span-4">
                        {c.t}
                      </h3>
                      <p className="col-span-12 text-[color:var(--color-graphite-300)] md:col-span-7">
                        {c.d}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="editorial-eyebrow text-[color:var(--color-graphite-500)]">
                [ Featured / 04 ]
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
                      className="h-full w-full object-cover grayscale transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
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

      {/* METHODOLOGY */}
      <section className="border-b border-[color:var(--color-border)] bg-[color:var(--color-paper)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                  [ Methodology / 05 ]
                </p>
                <h2 className="mt-8 display-lg">How we work.</h2>
                <p className="mt-8 max-w-sm text-[color:var(--color-graphite-300)]">
                  A four-part operating discipline. Linear, deliberate, transferable.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {method.map((m, i) => (
                  <Reveal key={m.n} delay={i * 0.06}>
                    <div className="border border-[color:var(--color-border-strong)] p-8 md:p-10">
                      <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                        {m.n}
                      </p>
                      <h3 className="mt-6 font-display text-2xl">{m.t}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite-300)]">
                        {m.d}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-40">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              [ In their words / 06 ]
            </p>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
            {[
              {
                q: "We stopped arguing about the numbers. The system became the source of truth, and everyone returned to running the business.",
                a: "Director of Operations · National FMCG distributor",
              },
              {
                q: "SANAK is the first vendor we have worked with who understood a warehouse before they opened a laptop.",
                a: "Head of Supply Chain · Cold chain operator",
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <figure className="border-t border-[color:var(--color-border-strong)] pt-10">
                  <blockquote className="font-display text-2xl leading-snug md:text-3xl">
                    “{t.q}”
                  </blockquote>
                  <figcaption className="mt-8 editorial-eyebrow text-[color:var(--color-graphite-400)]">
                    {t.a}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="border-y border-[color:var(--color-border)]">
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
                      className="h-full w-full object-cover grayscale"
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
    </SiteShell>
  );
}
