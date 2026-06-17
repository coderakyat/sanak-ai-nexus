import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { AnimExpiry } from "@/components/site/AnimExpiry";
import { AnimSync } from "@/components/site/AnimSync";
import { AnimVoiceWave } from "@/components/site/AnimVoiceWave";
import { AnimDispatch } from "@/components/site/AnimDispatch";

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
    t: "Stop losing stock & tracking expires",
    sub: "Resolves dependency on manual memory and visual checks. Establishes system-enforced FIFO/FEFO.",
    points: [
      "Know exactly what is in your warehouse right now, from any phone.",
      "Get automatic alerts before goods expire, preventing costly write-offs.",
      "Force First-Expired-First-Out (FEFO) rules without manual checks.",
      "Track every stock movement to eliminate unexplained shrinkage.",
    ],
    metric: "Outcome: Elimination of expired goods write-offs and zero phantom stock reporting.",
  },
  {
    n: "02",
    t: "Centralize scattered operations",
    sub: "Replaces distributed spreadsheets with a single, synchronized item master across all zones and branches.",
    points: [
      "One single list of items across all your branches and zones.",
      "No more duplicate items or confusing codes between teams.",
      "Reconcile stock without shutting down the warehouse for days.",
      "Make stock adjustments directly from the floor with approval workflows.",
    ],
    metric: "Outcome: Near-zero stockout incidents caused by unsynchronized data between commercial and operational teams.",
  },
  {
    n: "03",
    t: "Empower the floor workers",
    sub: "Natural language and conversational interfaces designed specifically for noisy, high-movement environments.",
    points: [
      "Log receipts and pick orders just by speaking or typing naturally.",
      "No laptops, no scanning guns, no two-week training programs.",
      "The system handles the complexity; the worker just confirms the action.",
      "Errors are caught before they are saved, not during the monthly audit.",
    ],
    metric: "Outcome: New operators reach full system competency within their first shift.",
  },
  {
    n: "04",
    t: "Fulfillment without WhatsApp chaos",
    sub: "Direct system-to-floor dispatching. Eliminates manual re-entry and informal chat groups for critical operations.",
    points: [
      "Sales reps can check real-time stock before making a promise.",
      "Orders flow directly to the floor without manual re-entry.",
      "Track order status from picked to packed to delivered.",
      "Stop losing orders in group chats or paper trails.",
    ],
    metric: "Outcome: Significant reduction in order-to-dispatch cycles and complete auditability of hand-offs.",
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
                {i === 0 && <AnimExpiry />}
                {i === 1 && <AnimSync />}
                {i === 2 && <AnimVoiceWave />}
                {i === 3 && <AnimDispatch />}
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
