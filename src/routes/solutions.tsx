import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — SANAK.AI" },
      {
        name: "description",
        content:
          "Distribution and warehousing solutions: distributor operations, warehouse execution, inventory truth, and order flow — engineered for mid-market scale.",
      },
      { property: "og:title", content: "Solutions — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Four operating surfaces, one platform. Map your pain to the module that releases the most value first.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: Solutions,
});

const solutions = [
  {
    n: "01",
    t: "Distributor operations",
    sub: "For the business that has outgrown its spreadsheet and resents its ERP.",
    points: [
      "Single source of truth across branches, channels, and partners",
      "Order capture from sales, e-commerce, and trade",
      "Pricing, discounting, and credit policy enforcement",
      "Visibility from quote to cash without copy-pasting",
    ],
    metric: "On average, distributors who land on SANAK reduce branch-level reconciliation effort by more than 70% in the first quarter.",
  },
  {
    n: "02",
    t: "Warehouse execution",
    sub: "For operations that need the system to respect how the floor actually moves.",
    points: [
      "Receive, putaway, pick, pack, dispatch — modelled on real pick paths",
      "Wave and zone strategies that can be re-tuned without re-implementation",
      "Supervisor exception handling, not supervisor fire-fighting",
      "Equipment, labour, and dock-door orchestration",
    ],
    metric: "Average reduction in order-to-dispatch cycle: 58% within twelve weeks of go-live.",
  },
  {
    n: "03",
    t: "Inventory truth",
    sub: "For the finance function that has stopped trusting the operations function.",
    points: [
      "Embedded MDM with a governed item master",
      "Event-sourced stock movements, fully auditable",
      "Cycle counting policy as code, not as memory",
      "Variance management with provenance for every adjustment",
    ],
    metric: "Phantom-stock incidents typically fall by 90%+ within two reconciliation cycles.",
  },
  {
    n: "04",
    t: "Order flow",
    sub: "For commercial teams who refuse to lose orders to internal hand-offs.",
    points: [
      "Allocation logic aware of channel, customer, and SLA",
      "Backorder and partial-fulfilment policy made explicit",
      "Returns, refusals, and damages handled as first-class events",
      "Notifications and SLAs tracked against the actual order, not the avatar of one",
    ],
    metric: "Fill-rate improvements of 6–12 percentage points are typical at the end of pilot.",
  },
];

function Solutions() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="[ Solutions / By operation ]"
        title={<>See your operation. <br /> Match it to a module.</>}
        intro="Four solution surfaces, modelled on the actual operating pains of distributors and warehousing businesses. Begin where the hurt is greatest. Compose outward as the operation earns it."
      />

      <section className="container-edge mx-auto max-w-[1600px] py-20 md:py-28">
        <div className="grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] md:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <article className="flex h-full flex-col bg-[color:var(--color-paper)] p-10 md:p-14">
                <div className="flex items-baseline justify-between">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                    {s.n}
                  </p>
                  <span className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                    Module
                  </span>
                </div>
                <h2 className="mt-8 display-lg">{s.t}</h2>
                <p className="mt-4 text-[color:var(--color-graphite-300)]">
                  {s.sub}
                </p>
                <ul className="mt-10 space-y-3 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 border-t border-[color:var(--color-border)] pt-3">
                      <span className="font-mono text-[color:var(--color-graphite-400)]">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-10 border-t border-[color:var(--color-border-strong)] pt-6 font-display text-xl leading-snug text-[color:var(--color-graphite-200)]">
                  {s.metric}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-end">
          <h2 className="display-xl max-w-[20ch]">
            Find the surface. Begin the operation.
          </h2>
          <Link
            to="/contact"
            className="bg-[color:var(--color-ink)] px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-opacity hover:opacity-80"
          >
            Discuss your operation
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
