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
    bio: "Bertanggung jawab atas strategi perusahaan, arsitektur pendapatan, dan pertumbuhan bisnis. Mengelola akuisisi pelanggan tingkat enterprise, kemitraan strategis, serta memastikan arah produk selalu sejalan dengan kebutuhan bisnis supply chain.",
  },
  {
    img: imgCpo,
    name: "Fakhrel Aziz Maarif",
    role: "Co-founder · CPO",
    bio: "Memimpin pengembangan produk dari penemuan masalah hingga solusi siap pakai. Merancang antarmuka dan alur kerja (UX) yang sangat mudah dioperasikan oleh pekerja lapangan, memastikan perangkat lunak menjembatani operasi gudang fisik dengan data digital secara mulus.",
  },
  {
    img: null,
    name: "Said Fairuz Zacky",
    role: "Co-founder · CTO",
    bio: "Mengendalikan arsitektur teknis, keamanan, dan skalabilitas platform. Memimpin tim *engineering* dalam merilis fitur dan memastikan proses integrasi dengan sistem klien (ERP/WMS eksisting) berjalan lancar tanpa membebani tim IT internal mereka.",
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
              <article className="flex h-full flex-col bg-[color:var(--color-paper)] p-8 md:p-10 lg:p-12">
                <div className="aspect-[4/5] w-full overflow-hidden border border-[color:var(--color-border)] bg-[color:var(--color-paper-2)] flex items-center justify-center">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="editorial-eyebrow text-[color:var(--color-graphite-400)]">Photo Unavailable</span>
                  )}
                </div>
                <div className="mt-8 flex-1">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                    {p.role}
                  </p>
                  <h2 className="mt-4 font-display text-3xl leading-tight">
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
                <div className="flex h-full flex-col justify-between bg-[color:var(--color-paper-2)] p-8 md:p-10">
                  <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-12 font-display text-2xl leading-snug">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
        <div className="container-edge mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-end">
          <h2 className="display-xl max-w-[18ch]">Meet the founders.</h2>
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
