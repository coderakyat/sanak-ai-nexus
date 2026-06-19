import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — SANAK.AI" },
      {
        name: "description",
        content:
          "Frequently asked questions about SANAK.AI — the conversational SCM platform for mid-market distributors and warehouse operators in Southeast Asia.",
      },
      { property: "og:title", content: "FAQ — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Your questions, answered directly. No marketing language.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "https://sanakai.vercel.app/faq" }],
  }),
  component: FAQ,
});

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[color:var(--color-border-strong)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-8 py-8 text-left transition-colors duration-300"
        aria-expanded={open}
      >
        <span className={`font-display text-xl leading-snug md:text-2xl transition-all duration-300 group-hover:translate-x-2 ${open ? 'text-[color:var(--color-ink)]' : 'text-[color:var(--color-graphite-600)]'}`}>
          {q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 font-mono text-lg ${open ? 'border-[color:var(--color-ink)] bg-[color:var(--color-ink)] text-[color:var(--color-paper)] rotate-45' : 'border-[color:var(--color-border-strong)] bg-transparent text-[color:var(--color-graphite-400)] group-hover:border-[color:var(--color-ink)] group-hover:bg-[color:var(--color-paper-2)] group-hover:text-[color:var(--color-ink)]'}`}
        >
          <span className="mb-0.5">+</span>
        </span>
      </button>
      <div 
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-8 pr-12 text-lg leading-relaxed text-[color:var(--color-graphite-300)]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const { t } = useTranslation();

  const faqKeys = [
    { qKey: "faq.q1", aKey: "faq.a1" },
    { qKey: "faq.q2", aKey: "faq.a2" },
    { qKey: "faq.q3", aKey: "faq.a3" },
    { qKey: "faq.q4", aKey: "faq.a4" },
    { qKey: "faq.q5", aKey: "faq.a5" },
    { qKey: "faq.q6", aKey: "faq.a6" },
    { qKey: "faq.q7", aKey: "faq.a7" },
    { qKey: "faq.q8", aKey: "faq.a8" },
    { qKey: "faq.q9", aKey: "faq.a9" },
    { qKey: "faq.q10", aKey: "faq.a10" },
  ];

  return (
    <SiteShell>
      <PageHeader
        eyebrow={t("faq.eyebrow")}
        title={<>{t("faq.title_1")} <br /> {t("faq.title_2")}</>}
        intro={t("faq.intro")}
      />

      <section className="container-edge mx-auto max-w-[1600px] py-20 md:py-28">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3">
            {faqKeys.map((item, i) => (
              <Reveal key={item.qKey} delay={i * 0.03}>
                <FaqItem q={t(item.qKey)} a={t(item.aKey)} />
              </Reveal>
            ))}
            <div className="border-t border-[color:var(--color-border-strong)] pt-8">
              <p className="text-[color:var(--color-graphite-400)]">
                {t("faq.more_questions")}{" "}
                <a
                  href="mailto:hello@sanak.ai"
                  className="reveal-link text-[color:var(--color-ink)]"
                >
                  {t("faq.email_us")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
