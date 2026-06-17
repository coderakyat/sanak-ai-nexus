import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import imgCeo from "@/assets/ceo.jpeg";
import imgCpo from "@/assets/cpo.jpeg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — SANAK.AI" },
      {
        name: "description",
        content:
          "The founders and operators behind SANAK.AI — engineers and supply chain leaders building a serious SCM platform.",
      },
      { property: "og:title", content: "Team — SANAK.AI" },
      {
        property: "og:description",
        content:
          "Operators and engineers in equal measure. Meet the people behind the platform.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

const people = [
  {
    img: imgCeo,
    name: "Hanif Alfa Rizky",
    role: "Co-founder · CEO",
    bio: "Hanif leads SANAK's business strategy, go-to-market execution, and customer relationships. His background combines commercial leadership with deep domain expertise in supply chain and distribution — giving him a grounded understanding of both what customers need and how to reach them. He has spent years studying the operational realities of mid-market distributors in Malaysia and Singapore, and brings that context directly into how SANAK is positioned and sold.",
  },
  {
    img: imgCpo,
    name: "Fakhrel Aziz Maarif",
    role: "Co-founder · CPO",
    bio: "Farel is responsible for SANAK's product vision, user experience, and the technical systems that bring it to life — including the mobile application, AI orchestration layer, and backend services. He approaches product development from the perspective of the people who will actually use it: field workers who need systems that work in real conditions, not ideal ones. His background spans product design, software engineering, and conversational AI implementation.",
  },
  {
    img: null,
    name: "Said Fairuz Zacky",
    role: "Co-founder · CTO",
    bio: "Said owns SANAK's infrastructure, data architecture, security, and deployment reliability. His work ensures that the system is not only functional but trustworthy — that data is isolated by tenant, that audit logs are immutable, that backups are tested, and that the platform meets the reliability expectations of businesses that cannot afford downtime. He brings a pragmatic, security-first approach to building systems that mid-market operators can depend on.",
  },
];

const principles = [
  "Operators and engineers in equal measure.",
  "We build product, not service hours.",
  "The system is the deliverable.",
  "If we cannot explain it on the floor, we cannot ship it.",
];

function Team() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="[ Team / People ]"
        title={<>Operators and engineers, <br /> in equal measure.</>}
        intro="SANAK is built by people who have run warehouses and people who have shipped software. The team is small, opinionated, and operationally serious."
      />

      <section className="container-edge mx-auto max-w-[1600px] py-20 md:py-28">
        <div className="grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] lg:grid-cols-3">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="group flex h-full flex-col bg-[color:var(--color-paper)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-paper-2)]/50 md:p-10 lg:p-12">
                <div className="aspect-[4/5] w-full overflow-hidden border border-[color:var(--color-border)] bg-[color:var(--color-paper-2)] flex items-center justify-center">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <span className="editorial-eyebrow text-[color:var(--color-graphite-400)]">Photo Unavailable</span>
                  )}
                </div>
                <div className="mt-8 flex-1">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-ink)]">
                    {p.role}
                  </p>
                  <h2 className="mt-4 font-display text-3xl leading-tight transition-transform duration-500 group-hover:translate-x-1">
                    {p.name}
                  </h2>
                  <p className="mt-5 text-[color:var(--color-graphite-300)]">{p.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-24 md:py-32">
          <Reveal>
            <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
              [ Operating principles ]
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px bg-[color:var(--color-border-strong)] sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p} delay={i * 0.06}>
                <div className="group flex h-full flex-col justify-between bg-[color:var(--color-paper-2)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] md:p-10">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)] transition-colors duration-500 group-hover:text-[color:var(--color-graphite-500)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-12 font-display text-2xl leading-snug transition-transform duration-500 group-hover:translate-x-1">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING WITH US */}
      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-paper-2)]">
        <div className="container-edge mx-auto max-w-[1600px] py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">[ Working with us ]</p>
              <h2 className="mt-6 display-xl">You work with the people who built it.</h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7 md:pl-8">
              <p className="text-lg leading-relaxed text-[color:var(--color-graphite-300)]">
                SANAK operates as a lean, deeply committed team. When you work with us, you work with the people who built the product — not with a support tier or a reseller layer. In our early customer relationships, implementation is handled directly by our founding team. This isn't a compromise; it's how we learn, and how we ensure every customer gets a system that genuinely works for their operation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-end">
          <h2 className="display-xl max-w-[18ch]">Speak with the founders.</h2>
          <Link
            to="/contact"
            className="border border-[color:var(--color-paper)]/40 px-7 py-4 editorial-eyebrow text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)]"
          >
            Arrange a conversation →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
