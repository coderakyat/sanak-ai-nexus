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
              [ Contact / Begin a conversation ]
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 display-hero max-w-[14ch]">
              Begin where the hurt is greatest.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg text-[color:var(--color-graphite-500)] md:text-xl">
              Tell us where the operation is breaking down. We will respond within one
              business day with either a question or a meeting — never a brochure.
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
                Demos and sales
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
                Careers
              </p>
              <a
                href="mailto:careers@sanak.ai"
                className="mt-3 inline-block font-display text-2xl reveal-link md:text-3xl"
              >
                careers@sanak.ai
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
                Studios
              </p>
              <p className="mt-3 font-display text-2xl">Jakarta · Singapore</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7 md:pl-8">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] sm:grid-cols-2">
            {[
              { k: "name", label: "Name", type: "text", required: true, full: false },
              { k: "company", label: "Company", type: "text", required: true, full: false },
              { k: "role", label: "Role", type: "text", required: false, full: false },
              { k: "email", label: "Email", type: "email", required: true, full: false },
            ].map((f) => (
              <FieldShell key={f.k} label={f.label}>
                <input
                  required={f.required}
                  type={f.type}
                  value={form[f.k as keyof typeof form]}
                  onChange={(e) => setField(f.k as keyof typeof form, e.target.value)}
                  className="w-full bg-transparent text-lg outline-none placeholder:text-[color:var(--color-graphite-500)]"
                  placeholder="—"
                />
              </FieldShell>
            ))}
            <div className="sm:col-span-2">
              <FieldShell label="Where is the operation breaking down?">
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
                className="w-full bg-[color:var(--color-ink)] px-8 py-5 editorial-eyebrow text-[color:var(--color-paper)] transition-opacity hover:opacity-80"
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
    <label className="flex flex-col gap-3 bg-[color:var(--color-paper)] p-6">
      <span className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
        {label}
      </span>
      {children}
    </label>
  );
}
