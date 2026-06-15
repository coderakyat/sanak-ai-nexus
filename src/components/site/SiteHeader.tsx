import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/insights", label: "Insights" },
  { to: "/team", label: "Team" },
  { to: "/careers", label: "Careers" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "border-[color:var(--color-border)] bg-[color:var(--color-paper)]/85 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-edge mx-auto flex h-16 max-w-[1600px] items-center justify-between md:h-20">
        <Link
          to="/"
          className="flex items-baseline gap-2"
          onClick={() => setOpen(false)}
          aria-label="SANAK.AI — home"
        >
          <span className="font-display text-2xl tracking-tight md:text-[1.65rem]">
            SANAK
          </span>
          <span className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
            .AI
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="editorial-eyebrow text-[color:var(--color-graphite-300)] transition-colors hover:text-[color:var(--color-ink)]"
              activeProps={{ className: "text-[color:var(--color-ink)]" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden bg-[color:var(--color-ink)] px-5 py-3 editorial-eyebrow text-[color:var(--color-paper)] transition-opacity hover:opacity-80 md:inline-flex"
          >
            Request a demo
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border border-[color:var(--color-border-strong)] lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-[color:var(--color-ink)] transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full bg-[color:var(--color-ink)] transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-[color:var(--color-ink)] transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-y-auto bg-[color:var(--color-paper)] lg:hidden">
          <div className="container-edge mx-auto flex max-w-[1600px] flex-col gap-1 py-10">
            {NAV.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-[color:var(--color-border)] py-5"
              >
                <span className="font-display text-3xl">{item.label}</span>
                <span className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center bg-[color:var(--color-ink)] px-6 py-4 editorial-eyebrow text-[color:var(--color-paper)]"
            >
              Request a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
