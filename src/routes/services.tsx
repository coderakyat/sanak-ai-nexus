import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SANAK.AI" },
      {
        name: "description",
        content:
          "SANAK.AI delivers a modular SCM platform, implementation, onboarding, and operational advisory for distributors and warehousing operations.",
      },
      { property: "og:title", content: "Services — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Platform, implementation, onboarding, and advisory — composed around the operations that hold distribution together.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    t: "Platform",
    headline: "The SANAK SCM platform.",
    d: "A modular product platform composed of independent modules around a single master record. Item master, inventory, orders, warehouse execution, and operational intelligence — composed to your operation, not configured against it.",
    bullets: [
      "Item, partner, and location master data, native",
      "Inventory state and reconciliation, event-sourced",
      "Order capture, allocation, and fulfilment",
      "Warehouse execution (receive, putaway, pick, pack, dispatch)",
      "Operational decision surfaces, not retrofitted reports",
    ],
  },
  {
    n: "02",
    t: "Implementation",
    headline: "Deployment, on operating terms.",
    d: "We deploy the way we build: in deliberate, evidenced increments. Implementation begins with operational diagnosis and ends with the operator owning the system. We do not believe in big bang go-lives.",
    bullets: [
      "Operational diagnosis and module sequencing",
      "Master data establishment and migration",
      "Integration with finance, e-commerce, and partner systems",
      "Pilot release on a defined operational surface",
      "Phased rollout with measurable hand-off",
    ],
  },
  {
    n: "03",
    t: "Onboarding",
    headline: "Discipline transferred deliberately.",
    d: "Our onboarding turns the platform into shared operational vocabulary across the floor, the office, and the executive team. We train your people to own the discipline — not to depend on us.",
    bullets: [
      "Operator-led training tracks",
      "Standard operating procedures co-authored with your team",
      "Floor and supervisor playbooks",
      "Quarterly operating reviews for the first year",
    ],
  },
  {
    n: "04",
    t: "Advisory",
    headline: "Operational advisory, where it earns its place.",
    d: "For operations that need a sharper instrument: a focused engagement on the operating questions that compound — network design, inventory policy, warehouse layout, and SCM architecture.",
    bullets: [
      "Inventory policy and segmentation",
      "Warehouse layout and slotting",
      "Network and DC design",
      "SCM architecture and vendor rationalisation",
    ],
  },
];

function Services() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="[ Services / Scope ]"
        title={<>Four scopes. <br /> One operating discipline.</>}
        intro="We offer the platform, the implementation that lands it, the onboarding that transfers it, and the advisory that sharpens it. Engagements are sequenced to release value early and compound over time."
      />

      <section className="container-edge mx-auto max-w-[1600px]">
        <div className="divide-y divide-[color:var(--color-border-strong)]">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <article className="grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:gap-12 md:py-28">
                <div className="md:col-span-4">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                    {s.n} · {s.t}
                  </p>
                  <h2 className="mt-6 display-lg">{s.headline}</h2>
                </div>
                <div className="md:col-span-8 md:pl-8">
                  <p className="text-lg leading-relaxed text-[color:var(--color-graphite-300)] md:text-xl">
                    {s.d}
                  </p>
                  <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-4 border-t border-[color:var(--color-border)] pt-4 text-sm"
                      >
                        <span className="font-mono text-[color:var(--color-graphite-400)]">
                          —
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 py-24 md:flex-row md:items-end md:py-32">
          <h2 className="display-xl max-w-[18ch]">
            Begin where the hurt is greatest.
          </h2>
          <Link
            to="/contact"
            className="border border-[color:var(--color-paper)]/40 px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
          >
            Speak with us →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
