import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { AnimExpiry } from "@/components/site/AnimExpiry";
import { AnimRealtime } from "@/components/site/AnimRealtime";
import { AnimWorkflow } from "@/components/site/AnimWorkflow";
import { AnimReport } from "@/components/site/AnimReport";
import { AnimAudit } from "@/components/site/AnimAudit";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — SANAK.AI" },
      {
        name: "description",
        content:
          "Not everyone comes to SANAK with the same problem. Find the operational challenge that matches yours — and see exactly how SANAK addresses it.",
      },
      { property: "og:title", content: "Solutions — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Five operational challenges. Five direct solutions. Map your pain to the module that releases the most value first.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: Solutions,
});

const challenges = [
  {
    n: "01",
    q: "\"We don't know our real stock level until someone physically checks.\"",
    root: "Stock records live in Excel spreadsheets updated once a day — or once a week. By the time the data reaches a decision-maker, it's already stale.",
    solution:
      "Every movement — every receiving, every outbound, every adjustment — updates the system in real time. The moment a warehouse worker confirms a GRN, the stock count changes. When a sales rep queries stock from their phone at 2pm, they're seeing what the warehouse actually contains at 2pm.",
    anim: 0, // AnimRealtime
  },
  {
    n: "02",
    q: "\"If our warehouse supervisor is out, everything slows down.\"",
    root: "Operational knowledge — where things are, what to pick first, how to handle exceptions — lives in the heads of one or two people. When they're unavailable, the operation fragments.",
    solution:
      "SANAK encodes operational logic into the system. FEFO enforcement means the system tells staff which batch to pick — they don't need to remember. Approval workflows mean large adjustments go through the right channel automatically. Daily summaries mean owners have context even when they're not on-site. The operation runs on the system, not on any one person.",
    anim: 1, // AnimWorkflow
  },
  {
    n: "03",
    q: "\"We have no idea what's happening until the end of the month.\"",
    root: "Reporting is manual. It takes time to compile, is prone to errors, and by the time it's ready, the decisions it should inform have already been made.",
    solution:
      "SANAK delivers a morning summary automatically, every day. Owners and managers see yesterday's receiving, outbound, and adjustments — along with items approaching expiry and stocks below threshold — before the working day begins. On-demand reporting is available through a simple voice or text query at any time.",
    anim: 2, // AnimReport
  },
  {
    n: "04",
    q: "\"Products keep expiring before we sell them.\"",
    root: "Expiry dates aren't tracked at the system level. Staff rely on memory or periodic stocktakes to catch near-expiry items — often too late.",
    solution:
      "SANAK tracks every perishable item at the batch level from the moment it's received. Automated alerts fire at 60, 30, 14, and 7 days before expiry — with estimated ringgit value at risk, so the business can take action before the loss is locked in. Expired items are blocked from outbound transactions entirely.",
    anim: 3, // AnimExpiry
  },
  {
    n: "05",
    q: "\"We can't tell what happened when something goes wrong.\"",
    root: "No audit trail. When stock doesn't match the system, there's no way to investigate — no record of who did what, when, or why.",
    solution:
      "SANAK maintains a permanent, immutable audit ledger. Every transaction — incoming, outgoing, adjusted — is recorded with the user who performed it, the timestamp, and the document reference. Nothing can be deleted or edited after the fact. When something doesn't add up, the answer is always findable.",
    anim: 4, // AnimAudit
  },
];

const stages = [
  {
    t: "Just starting to digitize",
    d: "If your operation is still running primarily on Excel and WhatsApp, SANAK can go live in a single working day. Import your item master from a template, confirm your opening stock, invite your team, and you're operational.",
  },
  {
    t: "Already have accounting software",
    d: "SANAK is designed to complement existing accounting systems — SQL Accounting, Autocount, QuickBooks, and others — not replace them. We fill the operational gap between the back office and the warehouse floor.",
  },
  {
    t: "Growing fast and losing control",
    d: "Growth amplifies the problems of manual coordination. SANAK scales with your volume without requiring proportional headcount increases in coordination roles.",
  },
];

const anims = [AnimRealtime, AnimWorkflow, AnimReport, AnimExpiry, AnimAudit];

function Solutions() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="[ Solutions / By challenge ]"
        title={<>Find your problem. <br /> See the solution.</>}
        intro="Not everyone comes to SANAK with the same problem. Here's how SANAK addresses the most common operational challenges facing distributors and warehouse operators in Southeast Asia."
      />

      {/* CHALLENGE-SOLUTION FORMAT */}
      <section className="container-edge mx-auto max-w-[1600px]">
        <div className="divide-y divide-[color:var(--color-border-strong)]">
          {challenges.map((c, i) => {
            const Anim = anims[c.anim];
            return (
              <Reveal key={c.n} delay={0.04}>
                <article className="group grid grid-cols-1 gap-10 py-20 transition-colors duration-500 hover:bg-[color:var(--color-paper-2)]/50 md:grid-cols-12 md:gap-12 md:px-8 md:-mx-8 md:py-28">
                  <div className="md:col-span-5">
                    <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-ink)]">
                      Challenge {c.n}
                    </p>
                    <h2 className="mt-6 font-display text-2xl leading-snug italic text-[color:var(--color-graphite-200)] transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                      {c.q}
                    </h2>
                    <div className="mt-8">
                      <Anim />
                    </div>
                  </div>
                  <div className="md:col-span-7 md:pl-8">
                    <div className="border-t border-[color:var(--color-border-strong)] pt-6 transition-colors duration-500 group-hover:border-[color:var(--color-border)]">
                      <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">Root cause</p>
                      <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-graphite-300)]">{c.root}</p>
                    </div>
                    <div className="mt-10 border-t border-[color:var(--color-border-strong)] pt-6 transition-colors duration-500 group-hover:border-[color:var(--color-border)]">
                      <p className="editorial-eyebrow text-[color:var(--color-ink)]">The SANAK solution</p>
                      <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-graphite-200)]">{c.solution}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* BY BUSINESS STAGE */}
      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-28 md:py-36">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              [ Solutions by business stage ]
            </p>
            <h2 className="mt-6 display-xl max-w-[20ch]">Wherever you are, we start there.</h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] md:grid-cols-3">
            {stages.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06}>
                <div className="group flex h-full flex-col bg-[color:var(--color-paper-2)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] md:p-10">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-graphite-500)]">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite-300)] transition-colors duration-500 group-hover:text-[color:var(--color-paper)]/70">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-end">
          <h2 className="display-xl max-w-[20ch]">Discuss your operation.</h2>
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
