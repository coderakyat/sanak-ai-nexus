import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SANAK.AI" },
      {
        name: "description",
        content:
          "Request a demo or start a conversation with SANAK.AI. SCM software for distributors and warehousing operations.",
      },
      { property: "og:title", content: "Contact — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Request a demo or speak with us about your distribution operation.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    message: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `New enquiry — ${form.company || form.name || "SANAK.AI"}`;
    const body =
      `Name: ${form.name}\nCompany: ${form.company}\nRole: ${form.role}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:hello@sanak.ai?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  function setField<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  return (
    <SiteShell>
      <section className="border-b border-[color:var(--color-border)] bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto max-w-[1600px] py-24 md:py-36">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-500)]">
              [ Contact / Book a demo ]
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 display-hero max-w-[16ch]">
              See SANAK in action.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg text-[color:var(--color-graphite-500)] md:text-xl">
              Book a 30-minute demo. We'll show you SANAK running on real data, for an operation that looks like yours. No slides. No generic product tour.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-edge mx-auto grid max-w-[1600px] grid-cols-1 gap-16 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-5">
          <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
            [ Direct ]
          </p>
          <div className="mt-10 space-y-12">
            <div className="border-t border-[color:var(--color-border-strong)] pt-6">
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                What a 30-min demo covers
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Live stock query by voice and text",
                  "Goods receipt recording — from speech to confirmed GRN",
                  "Expiry alert and FEFO enforcement in action",
                  "Movement history and audit trail walkthrough",
                  "Owner dashboard and morning summary",
                ].map((item) => (
                  <li key={item} className="group/bullet flex items-start gap-3 text-sm">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[color:var(--color-border-strong)] transition-colors duration-300 group-hover/bullet:bg-[color:var(--color-ink)]">
                       <span className="font-mono text-[10px] text-[color:var(--color-paper)] opacity-0 transition-opacity duration-300 group-hover/bullet:opacity-100">✓</span>
                    </div>
                    <span className="transition-colors duration-300 group-hover/bullet:text-[color:var(--color-ink)] text-[color:var(--color-graphite-400)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-[color:var(--color-border-strong)] pt-6">
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                Email
              </p>
              <a
                href="mailto:hello@sanak.ai"
                className="mt-3 inline-block font-display text-2xl reveal-link md:text-3xl"
              >
                hello@sanak.ai
              </a>
            </div>

            <div className="border-t border-[color:var(--color-border-strong)] pt-6">
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                Press and partnerships
              </p>
              <a
                href="mailto:press@sanak.ai"
                className="mt-3 inline-block font-display text-2xl reveal-link md:text-3xl"
              >
                press@sanak.ai
              </a>
            </div>
            <div className="border-t border-[color:var(--color-border-strong)] pt-6">
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                Location
              </p>
              <p className="mt-3 font-display text-2xl">Malaysia · Singapore</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7 md:pl-8">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] sm:grid-cols-2">
            <FieldShell label="Your name">
                <input
                  required={true}
                  type="text"
                  value={form["name" as keyof typeof form]}
                  onChange={(e) => setField("name" as keyof typeof form, e.target.value)}
                  className="w-full bg-transparent text-lg outline-none placeholder:text-[color:var(--color-graphite-500)]"
                  placeholder="—"
                />
              </FieldShell>
              <FieldShell label="Company">
                <input
                  required={true}
                  type="text"
                  value={form["company" as keyof typeof form]}
                  onChange={(e) => setField("company" as keyof typeof form, e.target.value)}
                  className="w-full bg-transparent text-lg outline-none placeholder:text-[color:var(--color-graphite-500)]"
                  placeholder="—"
                />
              </FieldShell>
              <FieldShell label="Your role">
                <input
                  required={false}
                  type="text"
                  value={form["role" as keyof typeof form]}
                  onChange={(e) => setField("role" as keyof typeof form, e.target.value)}
                  className="w-full bg-transparent text-lg outline-none placeholder:text-[color:var(--color-graphite-500)]"
                  placeholder="—"
                />
              </FieldShell>
              <FieldShell label="Email">
                <input
                  required={true}
                  type="email"
                  value={form["email" as keyof typeof form]}
                  onChange={(e) => setField("email" as keyof typeof form, e.target.value)}
                  className="w-full bg-transparent text-lg outline-none placeholder:text-[color:var(--color-graphite-500)]"
                  placeholder="—"
                />
              </FieldShell>
            <div className="sm:col-span-2">
              <FieldShell label="What is the operation challenge you want to solve?">
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  className="w-full resize-none bg-transparent text-lg outline-none placeholder:text-[color:var(--color-graphite-500)]"
                  placeholder="Tell us what you are seeing on the floor and on the ledger."
                />
              </FieldShell>
            </div>
            <div className="bg-[color:var(--color-paper)] p-6 sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-[color:var(--color-ink)] px-8 py-5 editorial-eyebrow text-[color:var(--color-paper)] transition-all duration-500 hover:bg-[color:var(--color-graphite-600)] hover:scale-[1.02]"
              >
                Send enquiry →
              </button>
              <p className="mt-4 text-xs text-[color:var(--color-graphite-400)]">
                Your submission will open your default email client. We respond within
                one business day.
              </p>
            </div>
          </form>
        </Reveal>
      </section>
    </SiteShell>
  );
}

function FieldShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="group flex flex-col gap-3 bg-[color:var(--color-paper)] p-6 transition-colors duration-300 focus-within:bg-[color:var(--color-paper-2)]/50 hover:bg-[color:var(--color-paper-2)]/30">
      <span className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-300 group-focus-within:text-[color:var(--color-ink)] group-hover:text-[color:var(--color-graphite-600)]">
        {label}
      </span>
      {children}
    </label>
  );
}
