import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="border-b border-[color:var(--color-border)]">
      <div className="container-edge mx-auto max-w-[1600px] py-20 md:py-32">
        <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
          {eyebrow}
        </p>
        <h1 className="mt-8 display-xl max-w-[16ch]">{title}</h1>
        {intro && (
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[color:var(--color-graphite-300)] md:text-xl">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
