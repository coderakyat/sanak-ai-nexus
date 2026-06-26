import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
      { property: "og:url", content: "https://sanak.my.id/contact" },
    ],
    links: [{ rel: "canonical", href: "https://sanak.my.id/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useTranslation();
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
    window.location.href = `mailto:coderakyatofficial@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  function setField<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  const demoItems = [
    "contact.demo_1",
    "contact.demo_2",
    "contact.demo_3",
    "contact.demo_4",
    "contact.demo_5",
  ];

  return (
    <SiteShell>
      <section className="border-b border-[color:var(--color-border)] bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto max-w-[1600px] py-24 md:py-36">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-500)]">
              {t("contact.eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 display-hero max-w-[16ch]">
              {t("contact.hero_h1")}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg text-[color:var(--color-graphite-500)] md:text-xl">
              {t("contact.hero_desc")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-edge mx-auto grid max-w-[1600px] grid-cols-1 gap-16 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-5">
          <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
            {t("contact.direct_eyebrow")}
          </p>
          <div className="mt-10 space-y-12">
            <div className="border-t border-[color:var(--color-border-strong)] pt-6">
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                {t("contact.demo_covers")}
              </p>
              <ul className="mt-6 space-y-3">
                {demoItems.map((key) => (
                  <li key={key} className="group/bullet flex items-start gap-3 text-sm">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-[color:var(--color-graphite-400)] transition-colors duration-300 group-hover/bullet:border-[color:var(--color-ink)] group-hover/bullet:bg-[color:var(--color-ink)] text-[color:var(--color-ink)]">
                       <span className="font-mono text-[10px] opacity-0 transition-opacity duration-300 group-hover/bullet:opacity-100 group-hover/bullet:text-[color:var(--color-paper)]">✓</span>
                    </div>
                    <span className="transition-colors duration-300 group-hover/bullet:text-[color:var(--color-ink)] text-[color:var(--color-graphite-400)]">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-[color:var(--color-border-strong)] pt-6">
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                {t("contact.email_label")}
              </p>
              <a
                href="mailto:coderakyatofficial@gmail.com"
                className="mt-3 inline-block font-display text-2xl reveal-link md:text-3xl"
              >
                coderakyatofficial@gmail.com
              </a>
            </div>

            <div className="border-t border-[color:var(--color-border-strong)] pt-6">
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                {t("contact.press_label")}
              </p>
              <a
                href="mailto:coderakyatofficial@gmail.com"
                className="mt-3 inline-block font-display text-2xl reveal-link md:text-3xl"
              >
                coderakyatofficial@gmail.com
              </a>
            </div>
            <div className="border-t border-[color:var(--color-border-strong)] pt-6">
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                {t("contact.location_label")}
              </p>
              <p className="mt-3 font-display text-2xl">Indonesia</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7 md:pl-8">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] sm:grid-cols-2">
            <FieldShell label={t("contact.field_name")}>
                <input
                  required={true}
                  type="text"
                  value={form["name" as keyof typeof form]}
                  onChange={(e) => setField("name" as keyof typeof form, e.target.value)}
                  className="w-full bg-transparent text-lg outline-none placeholder:text-[color:var(--color-graphite-500)]"
                  placeholder="—"
                />
              </FieldShell>
              <FieldShell label={t("contact.field_company")}>
                <input
                  required={true}
                  type="text"
                  value={form["company" as keyof typeof form]}
                  onChange={(e) => setField("company" as keyof typeof form, e.target.value)}
                  className="w-full bg-transparent text-lg outline-none placeholder:text-[color:var(--color-graphite-500)]"
                  placeholder="—"
                />
              </FieldShell>
              <FieldShell label={t("contact.field_role")}>
                <input
                  required={false}
                  type="text"
                  value={form["role" as keyof typeof form]}
                  onChange={(e) => setField("role" as keyof typeof form, e.target.value)}
                  className="w-full bg-transparent text-lg outline-none placeholder:text-[color:var(--color-graphite-500)]"
                  placeholder="—"
                />
              </FieldShell>
              <FieldShell label={t("contact.field_email")}>
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
              <FieldShell label={t("contact.field_message")}>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  className="w-full resize-none bg-transparent text-lg outline-none placeholder:text-[color:var(--color-graphite-500)]"
                  placeholder={t("contact.field_message_placeholder")}
                />
              </FieldShell>
            </div>
            <div className="bg-[color:var(--color-paper)] p-6 sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-[color:var(--color-ink)] px-8 py-5 editorial-eyebrow text-[color:var(--color-paper)] transition-all duration-500 hover:bg-[color:var(--color-graphite-600)] hover:scale-[1.02]"
              >
                {t("contact.submit_btn")}
              </button>
              <p className="mt-4 text-xs text-[color:var(--color-graphite-400)]">
                {t("contact.submit_note")}
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
    <label className="group flex flex-col gap-3 bg-[color:var(--color-paper)] p-6 transition-all duration-300 focus-within:bg-[color:var(--color-paper-2)] hover:bg-[color:var(--color-paper-2)]/50 focus-within:shadow-[inset_4px_0_0_0_var(--color-ink)]">
      <span className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-300 group-focus-within:text-[color:var(--color-ink)] group-focus-within:font-semibold group-hover:text-[color:var(--color-graphite-600)]">
        {label}
      </span>
      {children}
    </label>
  );
}
