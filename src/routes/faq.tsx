import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";

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
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQ,
});

const faqs = [
  {
    q: "How long does it take to go live?",
    a: "For most operations, a single working day. The onboarding process covers warehouse setup, item master import from an Excel template, opening stock confirmation, user invitations, and a guided first transaction. Customers with straightforward operations — one warehouse, fewer than 200 SKUs — can be fully operational in three to four hours.",
  },
  {
    q: "Do we need an IT team or technical staff?",
    a: "No. SANAK is designed specifically for businesses that don't have dedicated IT resources. Configuration is handled by the SANAK team during onboarding. Ongoing use requires only a smartphone and an internet connection.",
  },
  {
    q: "How does voice input work? What if there's background noise?",
    a: "SANAK uses a speech-to-text engine optimised for accuracy in real-world conditions — including warehouse environments with ambient noise. The system supports both Bahasa Malaysia and English, including the natural code-switching between the two that's common in Malaysian and Singaporean workplaces. For input that requires high precision — batch numbers, expiry dates, specific quantities — the system presents an editable confirmation card before any data is committed, so users can verify and correct before confirming.",
  },
  {
    q: "What happens if a team member makes a mistake?",
    a: "SANAK requires confirmation before executing any operation that changes data. A summary card is shown first; the user must actively confirm before anything is written. All write operations create a permanent, immutable audit record. If a mistake is made, it can be corrected through a reversal entry — and both the original transaction and the correction remain in the audit history.",
  },
  {
    q: "Does SANAK replace our accounting software?",
    a: "No. SANAK is designed to complement your existing accounting system — SQL Accounting, Autocount, QuickBooks, or others — not replace it. We operate in the operational layer: receiving, inventory, outbound, delivery. We connect to your accounting system where it makes sense, and leave financial ledger management where it belongs.",
  },
  {
    q: "Can we use SANAK if we have multiple warehouses?",
    a: "Yes. SANAK supports multi-warehouse operations, with stock tracked separately per location and cross-location visibility available through queries.",
  },
  {
    q: "How is our data protected?",
    a: "Your data is completely isolated from other customers at the database level — we use strict per-tenant data isolation. All data is encrypted in transit (HTTPS/TLS 1.3) and at rest. No credentials or sensitive data are stored in our application code. We use industry-standard tools for secret management, error tracking, and infrastructure security.",
  },
  {
    q: "What languages does SANAK support?",
    a: "SANAK is fully operational in Bahasa Malaysia and English, including mixed-language input. System responses follow the language of the user's input.",
  },
  {
    q: "Can field workers use SANAK without a training program?",
    a: "This is by design. SANAK is built so that the system adapts to the user — not the other way around. Warehouse staff can perform a goods receipt on their first day by speaking naturally: \"Received from Supplier Ahmad, 50 cartons Milo, batch M2024-11, expiring March 2026.\" The system guides them through confirmation rather than requiring them to learn a workflow. In practice, most field workers are productive within minutes of their first interaction.",
  },
  {
    q: "What is your pricing model?",
    a: "SANAK is available as an annual subscription, with pricing structured around company size, user volume, and AI usage. Contact us for a proposal tailored to your operation.",
  },
];

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
  return (
    <SiteShell>
      <PageHeader
        eyebrow="[ FAQ / Your questions ]"
        title={<>Your questions, <br /> answered directly.</>}
        intro="No marketing language. If something isn't clear after reading this, email us at hello@sanak.ai and we'll respond within one business day."
      />

      <section className="container-edge mx-auto max-w-[1600px] py-20 md:py-28">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.03}>
                <FaqItem q={item.q} a={item.a} />
              </Reveal>
            ))}
            <div className="border-t border-[color:var(--color-border-strong)] pt-8">
              <p className="text-[color:var(--color-graphite-400)]">
                Have a question that isn't covered here?{" "}
                <a
                  href="mailto:hello@sanak.ai"
                  className="reveal-link text-[color:var(--color-ink)]"
                >
                  Email us directly →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
