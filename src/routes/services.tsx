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
          "SANAK delivers a modular SCM platform covering inventory, procurement, order management, outbound logistics, and field sales execution — all through a conversational, voice-first interface.",
      },
      { property: "og:title", content: "Services — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Five modules. One conversational interface. Your team learns one way of working, and it applies everywhere.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "https://sanakai.vercel.app/services" }],
  }),
  component: Services,
});

const modules = [
  {
    n: "01",
    t: "Inventory Management",
    headline: "The core. The entry point. The foundation.",
    d: "Real-time inventory visibility is the most universally felt pain across distributors and warehouse operators. SANAK's Inventory Management module solves it completely — and makes everything else possible.",
    bullets: [
      "Real-time stock queries by item, location, batch, or expiry window",
      "Goods Receipt Note (GRN) capture via voice or text — no forms, no laptops",
      "Outbound recording with automatic FEFO (First Expired, First Out) enforcement",
      "Stock adjustments with configurable approval thresholds and owner sign-off",
      "Full, immutable movement history — every transaction recorded with who, when, and why",
      "Expiry alert system: automated notifications at 60, 30, 14, and 7 days before expiry, with estimated financial value at risk",
      "Daily morning summary delivered automatically to owners and managers",
    ],
  },
  {
    n: "02",
    t: "Procurement Management",
    headline: "Connect demand signals to purchasing.",
    d: "Eliminate the guesswork from replenishment decisions and create a structured, traceable path from purchase requisition to goods receipt. No more reactive, gut-feel ordering.",
    bullets: [
      "Purchase Order creation and supplier management",
      "Inbound shipment tracking and Advance Shipment Notice handling",
      "Three-way matching: PO, goods receipt, and supplier invoice reconciliation",
      "Supplier performance visibility",
      "Automatic reorder point alerts and replenishment signal generation",
    ],
  },
  {
    n: "03",
    t: "Order Management",
    headline: "From customer order to confirmed delivery.",
    d: "Structured, traceable, and fully connected to your live inventory position. No more orders buried in WhatsApp, no more commitment without visibility.",
    bullets: [
      "Sales Order creation and validation",
      "Real-time ATP (Available-to-Promise) checking against live inventory",
      "Credit limit and payment terms enforcement",
      "Backorder management and customer communication",
      "Delivery scheduling and route assignment",
    ],
  },
  {
    n: "04",
    t: "Outbound Logistics & Delivery",
    headline: "A system that works in the real world.",
    d: "Give your drivers and delivery coordinators a system that works on the road, on a phone, in a moving vehicle — not one built for a desk-bound operator.",
    bullets: [
      "Delivery manifest generation and route planning",
      "Driver briefing and dispatch coordination",
      "Real-time delivery status updates",
      "Electronic Proof of Delivery (ePOD) capture with customer signature",
      "Exception handling for failed deliveries, partial deliveries, and returns",
      "Delivery reconciliation back to the warehouse and billing system",
    ],
  },
  {
    n: "05",
    t: "Sales Field Execution",
    headline: "Sell confidently without calling the warehouse.",
    d: "Your sales representatives shouldn't need to call the warehouse to confirm availability before committing to a customer. Give them instant access to the information they need, wherever they are.",
    bullets: [
      "Real-time stock availability queries — by item, batch, location, or expiry",
      "On-site order creation from the customer's location",
      "Delivery commitment with ATP confirmation",
      "Customer-facing visibility without exposing internal system data",
      "Route history and visit coordination",
    ],
  },
];

const platformCaps = [
  {
    t: "Voice-First Interface",
    d: "The default mode of interaction is voice. Field workers speak naturally — \"received 50 cartons of Milo from Supplier Budi, batch M2024-12, expiring June 2026\" — and the system captures, validates, and confirms. No typing, no menus, no forms.",
  },
  {
    t: "Mobile-Native",
    d: "Built for Android and iOS. Works on mid-range devices. Requires only a smartphone and an internet connection. No hardware investments needed.",
  },
  {
    t: "Multi-Language Support",
    d: "Fully operational in Bahasa Malaysia and English, including natural code-switching between both — reflecting the way teams in Malaysia and Singapore actually communicate.",
  },
  {
    t: "Role-Based Access Control",
    d: "Every user sees and can do exactly what their role permits — nothing more, nothing less. Configurable per tenant.",
  },
  {
    t: "Immutable Audit Trail",
    d: "Every write operation — every receiving, every outbound, every adjustment — is permanently recorded with the user, timestamp, and document reference. Uneditable. Always findable.",
  },
  {
    t: "Tenant Data Isolation",
    d: "Your data is yours. Completely isolated from other customers at the database level. Encrypted in transit and at rest.",
  },
];

function Services() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="[ Services / Modules ]"
        title={<>Five modules. <br /> One platform.</>}
        intro="SANAK delivers a modular SCM platform that grows with your operation. Each module addresses a specific domain of your supply chain, and they all share the same conversational interface — meaning your team learns one way of working, and it applies everywhere."
      />

      {/* MODULES */}
      <section className="container-edge mx-auto max-w-[1600px]">
        <div className="divide-y divide-[color:var(--color-border-strong)]">
          {modules.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <article className="group grid grid-cols-1 gap-10 py-20 transition-colors duration-500 hover:bg-[color:var(--color-paper-2)]/50 md:grid-cols-12 md:gap-12 md:px-8 md:-mx-8 md:py-28">
                <div className="md:col-span-4">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-ink)]">
                    {s.n} · {s.t}
                  </p>
                  <h2 className="mt-6 display-lg transition-transform duration-500 group-hover:translate-x-1">{s.headline}</h2>
                </div>
                <div className="md:col-span-8 md:pl-8">
                  <p className="text-lg leading-relaxed text-[color:var(--color-graphite-300)] md:text-xl">
                    {s.d}
                  </p>
                  <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="group/bullet flex items-start gap-4 border-t border-[color:var(--color-border)] pt-4 text-sm"
                      >
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[color:var(--color-border-strong)] transition-colors duration-300 group-hover/bullet:bg-[color:var(--color-ink)]">
                           <span className="font-mono text-[10px] text-[color:var(--color-paper)] opacity-0 transition-opacity duration-300 group-hover/bullet:opacity-100">✓</span>
                        </div>
                        <span className="transition-colors duration-300 group-hover/bullet:text-[color:var(--color-ink)] text-[color:var(--color-graphite-300)]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PLATFORM CAPABILITIES */}
      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-36">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              [ Platform Capabilities ]
            </p>
            <h2 className="mt-6 display-xl max-w-[20ch]">Built across every module.</h2>
            <p className="mt-6 max-w-xl text-[color:var(--color-graphite-300)]">
              These capabilities are not add-ons. They are foundational to how SANAK works, available across every module from day one.
            </p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] sm:grid-cols-2 lg:grid-cols-3">
            {platformCaps.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.05}>
                <div className="group flex h-full flex-col bg-[color:var(--color-paper-2)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] md:p-10">
                  <h3 className="font-display text-2xl">{c.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite-300)] transition-colors duration-500 group-hover:text-[color:var(--color-paper)]/70">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
            Book a Demo →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
