import { PageIntro } from "@/components/page-intro";

const assets = [
  {
    title: "Narrative deck",
    detail: "One-page overview of SYMBI’s mission, separation strategy, and market positioning.",
    href: "/vault#partner-pack",
  },
  {
    title: "Brand assets",
    detail: "Logos, palette (Midnight/Ink/Slate/Cloud), and typography (Inter Tight / Inter / JetBrains Mono).",
    href: "/vault#branding",
  },
  {
    title: "Founder bio",
    detail: "Stephen James Aitken — architect of SYMBI Framework and steward of research & governance.",
    href: "/foundation#board",
  },
];

export default function PressPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Press"
        title="Media kit & coverage"
        description={
          <p>
            For interviews, speaking, and media enquiries. All messaging honours the academic/commercial separation:
            Gammatria for research, SYMBI-SYNERGY for enterprise delivery.
          </p>
        }
        actions={
          <a
            href="mailto:press@symbi.world"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Contact press
          </a>
        }
      />

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <h2 className="page-title text-2xl">Downloads</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {assets.map((asset) => (
            <a key={asset.title} href={asset.href} className="card-surface block p-6 transition hover:border-[var(--color-accent)]">
              <p className="kicker mb-2">Asset</p>
              <h3 className="text-lg font-semibold text-white">{asset.title}</h3>
              <p className="mt-2 text-sm text-white/70">{asset.detail}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-4 px-4 pb-16">
        <div className="card-surface p-6 text-sm text-white/70">
          <p>
            Embargo policy: Contact press@symbi.world at least 48 hours prior to publication. Provide drafts or interview
            notes for factual review—no approval rights requested, only accuracy checks.
          </p>
        </div>
      </section>
    </div>
  );
}
