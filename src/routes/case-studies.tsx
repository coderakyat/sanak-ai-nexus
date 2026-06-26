import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useTranslation } from "react-i18next";
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
          "Real distribution and warehousing operations in Malaysia transformed by SANAK.AI. Three situations, three outcomes — evidence over assertion.",
      },
      { property: "og:title", content: "Case Studies — SANAK.AI" },
      {
        property: "og:description",
        content: "Evidence over assertion. Three operations, three operating outcomes.",
      },
      { property: "og:url", content: "https://sanak.my.id/case-studies" },
      { property: "og:image", content: case1 },
    ],
    links: [{ rel: "canonical", href: "https://sanak.my.id/case-studies" }],
  }),
  component: CaseStudies,
});

const cases = [
  {
    n: "001",
    sector: "FMCG Distributor — Selangor",
    title: "From stockout surprises to real-time visibility.",
    img: case1,
    situation:
      "A Selangor-based FMCG distributor with 45 staff and around 800 active SKUs was managing inventory through a combination of Excel spreadsheets and daily WhatsApp updates from the warehouse team. Stock queries from the sales team required a chain of three to four messages before an answer came back — often 30 minutes to an hour after the question was asked. By that time, the customer had already called another supplier. Near-expiry products were only discovered during quarterly stocktakes. On two occasions in the preceding year, significant quantities of perishable goods had to be written off at a combined loss exceeding RM 40,000.",
    changed: [
      "Within 48 hours of going live, the sales team was querying stock directly from their phones during customer visits — real-time, without involving admin",
      "The morning summary gave the owner daily visibility into expiry risk, stock positions, and transaction volume before 8am",
      "The first near-expiry alert fired within the first week — flagging 45 cartons expiring in 8 days, giving the sales team time to clear it through a targeted promotion",
      "Warehouse staff were using voice input for GRN recording within the first day, without a formal training session",
    ],
    outcome:
      "The communication chain for stock queries was reduced from 3–4 steps to zero. Expiry management became proactive rather than reactive. The owner described it as the first time in eight years they could see what was happening in the business without calling anyone.",
    metrics: [
      { v: "< 48 hrs", l: "To full real-time visibility" },
      { v: "RM 40k+", l: "Annual write-offs addressed" },
      { v: "0", l: "Steps for sales stock queries" },
    ],
  },
  {
    n: "002",
    sector: "Industrial Distributor — Johor",
    title: "Solving the key person dependency problem.",
    img: case2,
    situation:
      "A Johor-based distributor of industrial parts and MRO supplies had grown to 65 staff across one main warehouse and two satellite locations. The operations manager — who had been with the company for eleven years — was the single point of knowledge for how the warehouse ran. Inventory positions, where items were stored, how exceptions were handled, which suppliers to call for urgent replenishment: it all lived in one person's head. When that person went on two weeks of medical leave, the warehouse throughput dropped by over 30% as staff constantly stopped to ask each other questions that should have been answerable by a system.",
    changed: [
      "Item location, batch information, and put-away logic were encoded into the system during onboarding",
      "Adjustment approval thresholds were configured so that routine corrections could be processed by the admin team, while significant adjustments required owner sign-off — automatically",
      "The returning operations manager found that new staff had adapted to the system's guidance rather than waiting for verbal instructions",
    ],
    outcome:
      "The business now has documented operational knowledge that doesn't leave when one person goes on leave. The operations manager's role shifted from \"the person who knows everything\" to \"the person who oversees the system that knows everything\" — a shift they described as a significant improvement in their own working day.",
    metrics: [
      { v: "−30%+", l: "Throughput drop eliminated" },
      { v: "1 system", l: "Replacing one indispensable person" },
      { v: "Day 1", l: "New staff operational without verbal handoff" },
    ],
  },
  {
    n: "003",
    sector: "Food & Beverage Distributor — Kuala Lumpur",
    title: "Met full traceability requirements in two weeks.",
    img: case3,
    situation:
      "A KL-based F&B distributor began onboarding a large supermarket chain as a new customer — a contract that came with strict traceability requirements. The retailer required confirmation of batch numbers and expiry dates for every inbound delivery, along with delivery audit trails for every outbound shipment. The distributor had no system that could provide this. Batch tracking was done manually on paper, and delivery records existed only as signed physical forms that were scanned and stored inconsistently.",
    changed: [
      "From day one of onboarding, every GRN captured batch number and expiry date as mandatory fields for perishable items",
      "Every outbound shipment generated an electronic Delivery Order tied to specific batches, with FEFO enforcement ensuring the correct stock was picked",
      "The full movement history — from supplier receipt to customer delivery — was queryable from a phone in seconds",
    ],
    outcome:
      "The distributor was able to meet the retailer's traceability requirements within two weeks of going live on SANAK. What had seemed like a potentially disqualifying gap in their systems became a resolved capability. The contract proceeded.",
    metrics: [
      { v: "2 weeks", l: "From gap to full traceability compliance" },
      { v: "100%", l: "Batch tracking from receipt to delivery" },
      { v: "Secured", l: "Major retail contract that was at risk" },
    ],
  },
];

function CaseStudies() {
  const { t } = useTranslation();
  return (
    <SiteShell>
      <PageHeader
        eyebrow={t("case_studies.eyebrow")}
        title={<>{t("case_studies.title_1")}</>}
        intro={t("case_studies.intro")}
      />

      <div className="container-edge mx-auto max-w-[1600px]">
        {cases.map((c, i) => (
          <Reveal key={c.n} delay={i * 0.05}>
            <article className="group grid grid-cols-1 gap-12 border-b border-[color:var(--color-border)] py-24 md:grid-cols-12 md:gap-12 md:py-32">
              <div className="md:col-span-5">
                <div className="sticky top-28">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-ink)]">
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
                      className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  {/* Metrics */}
                  <div className="mt-8 grid grid-cols-3 gap-px bg-[color:var(--color-border-strong)]">
                    {c.metrics.map((m) => (
                      <div key={m.l} className="group/metric flex flex-col justify-center bg-[color:var(--color-paper)] p-4 transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)]">
                        <p className="font-display text-2xl md:text-3xl transition-transform duration-500 group-hover/metric:scale-105 origin-left">{m.v}</p>
                        <p className="mt-2 text-[10px] uppercase tracking-widest text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover/metric:text-[color:var(--color-paper)]/70">
                          {m.l}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 md:pl-8">
                <dl className="space-y-10">
                  <div className="border-t border-[color:var(--color-border-strong)] pt-6">
                    <dt className="editorial-eyebrow text-[color:var(--color-graphite-400)]">{t("case_studies.situation_label")}</dt>
                    <dd className="mt-4 text-lg leading-relaxed text-[color:var(--color-graphite-200)]">
                      {c.situation}
                    </dd>
                  </div>
                  <div className="border-t border-[color:var(--color-border-strong)] pt-6">
                    <dt className="editorial-eyebrow text-[color:var(--color-graphite-400)]">{t("case_studies.changed_label")}</dt>
                    <dd className="mt-4">
                      <ul className="space-y-4">
                        {c.changed.map((item) => (
                          <li key={item} className="group/bullet flex items-start gap-4 text-[color:var(--color-graphite-200)]">
                            <div className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-[color:var(--color-graphite-400)] transition-colors duration-300 group-hover/bullet:border-[color:var(--color-ink)] group-hover/bullet:bg-[color:var(--color-ink)] text-[color:var(--color-ink)]">
                               <span className="font-mono text-[10px] opacity-0 transition-opacity duration-300 group-hover/bullet:opacity-100 group-hover/bullet:text-[color:var(--color-paper)]">✓</span>
                            </div>
                            <span className="text-lg leading-relaxed transition-colors duration-300 group-hover/bullet:text-[color:var(--color-ink)] text-[color:var(--color-graphite-300)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div className="border-t border-[color:var(--color-border-strong)] pt-6">
                     <dt className="editorial-eyebrow text-[color:var(--color-graphite-400)]">{t("case_studies.outcome_label")}</dt>
                    <dd className="mt-4 font-display text-xl leading-snug text-[color:var(--color-graphite-200)]">
                      {c.outcome}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-end">
          <h2 className="display-xl max-w-[20ch]">{t("case_studies.cta_h2")}</h2>
          <Link
            to="/contact"
            className="border border-[color:var(--color-paper)]/40 px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
          >
            {t("case_studies.cta_btn")}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
