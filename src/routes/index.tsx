import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { VoiceDemoOverlay } from "@/components/site/VoiceDemoOverlay";
import { InteractiveCapabilities } from "@/components/site/InteractiveCapabilities";
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
  { n: "01", t: "Inventory visibility", d: "Know exactly what's on your racks. No more phantom stock or frantic WhatsApp checks." },
  { n: "02", t: "Order fulfillment", d: "From order received to loaded on the truck, without missing a beat or duplicating an entry." },
  { n: "03", t: "Warehouse control", d: "Receive, putaway, and pick with a system that actually matches how your floor workers move." },
  { n: "04", t: "Expiry management", d: "Catch expiring goods before they turn into write-offs. Enforce First-Expired-First-Out automatically." },
];



const projects = [
  { img: case1, eyebrow: "Jaringan Distribusi FMCG 24 Cabang di Jawa", title: "Stopped stockouts and cleared phantom inventory", outcome: "Moved from 14 messy spreadsheets to a single, trusted stock list in weeks." },
  { img: case2, eyebrow: "Jaringan Cold Chain 5.000 sqm di Surabaya", title: "Orders out the door 4x faster", outcome: "Workers stopped searching for items. The system tells them exactly where to go." },
  { img: case3, eyebrow: "Distributor Suku Cadang Industri Nasional", title: "Caught RM 2,000 in near-expired goods weekly", outcome: "Automated alerts replaced manual stock checks, saving thousands in write-offs." },
];

const method = [
  { n: "01", t: "Start on the floor", d: "We spend time in your warehouse before we look at any screens. We build for the people doing the work." },
  { n: "02", t: "Clean the item list", d: "We establish a single, clean list of items. A messy stock list means a messy operation." },
  { n: "03", t: "Deploy the most painful part", d: "We launch the feature that solves your biggest headache first, so your team feels the value immediately." },
  { n: "04", t: "Hand over the keys", d: "We train your people to own the system natively. Software that workers don't use is software that dies." },
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
                The warehouse system <br /> that runs on conversation. <br />
                <span className="text-[color:var(--color-graphite-500)]">No IT team required.</span>
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

      {/* CAPABILITIES */}
      <section className="border-y border-[color:var(--color-border)]">
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
    </SiteShell>
  );
}
