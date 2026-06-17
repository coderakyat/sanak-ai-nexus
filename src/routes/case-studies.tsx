import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — SANAK.AI" },
      {
        name: "description",
        content:
          "Real distribution and warehousing operations transformed by SANAK.AI. Problem, approach, solution, results.",
      },
      { property: "og:title", content: "Case Studies — SANAK.AI" },
      {
        property: "og:description",
        content: "Evidence over assertion. Three operations, three operating outcomes.",
      },
      { property: "og:url", content: "/case-studies" },
      { property: "og:image", content: case1 },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudies,
});

const cases = [
  {
    n: "001",
    sector: "National FMCG distributor — 14 branches",
    title: "From spreadsheet reconciliation to a single source of truth.",
    img: case1,
    problem:
      "Three months of close cycles every quarter. Branch-level inventory disagreed with the central ledger by an average of 4.2%, and no two branches recorded movements the same way.",
    approach:
      "We installed the item master and inventory truth modules first. We froze new feature requests for ten weeks and concentrated on the data discipline that would underwrite every later module.",
    solution:
      "An event-sourced inventory state. Cycle counts as scheduled policy, not goodwill. Branch-level variance triaged with provenance, not opinion.",
    metrics: [
      { v: "96%", l: "Reduction in phantom stock" },
      { v: "11 wk", l: "From kickoff to single source of truth" },
      { v: "−74%", l: "Branch reconciliation effort" },
    ],
  },
  {
    n: "002",
    sector: "Cold chain operator — three distribution centres",
    title: "Allocation logic rebuilt around how the floor actually moves.",
    img: case2,
    problem:
      "Order-to-dispatch was averaging 38 hours. Pickers were walking allocation paths designed for a layout that had been changed two years ago.",
    approach:
      "We re-modelled allocation against current pick paths and zone behaviour. We retired four legacy reports that were quietly being followed instead of the live system.",
    solution:
      "Warehouse execution module, with allocation, wave, and dispatch logic that respects real operational geometry — and that can be re-tuned by supervisors without re-implementation.",
    metrics: [
      { v: "9 hr", l: "New order-to-dispatch median" },
      { v: "+22%", l: "Picker productivity" },
      { v: "0", l: "Customer SLA breaches in pilot quarter" },
    ],
  },
  {
    n: "003",
    sector: "Industrial parts distributor — multi-state",
    title: "Financial close shortened from fifteen days to ten.",
    img: case3,
    problem:
      "Every close required a forensic reconciliation between operations and finance. Adjustments were folklore, traceable to no event in particular.",
    approach:
      "We treated inventory as a ledger problem and built the master record to satisfy both functions. Adjustments became events with provenance, not entries.",
    solution:
      "Inventory truth as the substrate. Variance management with audited provenance. A close cycle that operations and finance can both defend on the same evidence.",
    metrics: [
      { v: "5 days", l: "Earlier monthly close, consistently" },
      { v: "99.6%", l: "Inventory accuracy at quarter-end" },
      { v: "1", l: "Source of truth, finally" },
    ],
  },
];

function CaseStudies() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="[ Case studies / Field record ]"
        title={<>Evidence over assertion.</>}
        intro="Three operations, three operating outcomes. The pattern is the same: install the discipline first, deploy the modules second, transfer ownership third."
      />

      <div className="container-edge mx-auto max-w-[1600px]">
        {cases.map((c, i) => (
          <Reveal key={c.n} delay={i * 0.05}>
            <article className="grid grid-cols-1 gap-12 border-b border-[color:var(--color-border)] py-24 md:grid-cols-12 md:gap-12 md:py-32">
              <div className="md:col-span-5">
                <div className="sticky top-28">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                    Case {c.n} · {c.sector}
                  </p>
                  <h2 className="mt-6 display-lg">{c.title}</h2>
                  <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-[color:var(--color-border)]">
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      width={1600}
                      height={1200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 md:pl-8">
                <dl className="space-y-10">
                  {[
                    { k: "Problem", v: c.problem },
                    { k: "Approach", v: c.approach },
                    { k: "Solution", v: c.solution },
                  ].map((row) => (
                    <div key={row.k} className="border-t border-[color:var(--color-border-strong)] pt-6">
                      <dt className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                        {row.k}
                      </dt>
                      <dd className="mt-4 text-lg leading-relaxed text-[color:var(--color-graphite-200)]">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-12 grid grid-cols-3 gap-px bg-[color:var(--color-border-strong)]">
                  {c.metrics.map((m) => (
                    <div key={m.l} className="bg-[color:var(--color-paper)] p-6">
                      <p className="font-display text-4xl md:text-5xl">{m.v}</p>
                      <p className="mt-2 text-xs uppercase tracking-widest text-[color:var(--color-graphite-400)]">
                        {m.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-end">
          <h2 className="display-xl max-w-[20ch]">Discuss your operation.</h2>
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
