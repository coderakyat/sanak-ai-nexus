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
    headline: "The SANAK operating system.",
    d: "A complete toolkit for distribution that actually works on the floor. Covers inventory, orders, warehouse movement, and procurement—all designed to be used by voice and natural chat.",
    bullets: [
      "Conversational interface (Voice and Text)",
      "Centralized Item & Partner list",
      "Live inventory tracking and expiry alerts",
      "Floor operations (Receive, Pick, Pack, Dispatch)",
      "Real-time visibility for the management office",
    ],
  },
  {
    n: "02",
    t: "Implementation",
    headline: "Live in weeks, not months.",
    d: "We don't do massive, disruptive IT projects. We identify your most painful bottleneck—like missing stock or delayed orders—and deploy the solution for that specific area first.",
    bullets: [
      "Warehouse floor walkthrough & diagnosis",
      "Cleaning and migrating your messy Excel data",
      "Deploying the highest-value module first",
      "Connecting to your existing accounting tools if needed",
      "Expanding to other areas when your team is ready",
    ],
  },
  {
    n: "03",
    t: "Onboarding",
    headline: "Zero training required.",
    d: "Because SANAK runs on natural conversation, your warehouse staff already know how to use it. If they can use WhatsApp, they can run your warehouse operations on day one.",
    bullets: [
      "No thick training manuals or classroom sessions",
      "Workers use their own language and terminology",
      "Supervisors shift from data-entry to actual managing",
      "Quarterly check-ins to ensure you're getting value",
    ],
  },
  {
    n: "04",
    t: "Advisory",
    headline: "Fixing the physical operation.",
    d: "Software only solves half the problem. If your physical warehouse layout is broken, we help you fix that too, drawing from our team's deep experience running real distribution centers.",
    bullets: [
      "Warehouse layout and shelf organization",
      "Inventory policies (What to stock, what to drop)",
      "Streamlining the physical pick path",
      "Reducing manual touches and double-handling",
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
