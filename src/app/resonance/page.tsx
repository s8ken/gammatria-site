import { PageIntro } from "@/components/page-intro";
import Link from "next/link";

const experiments = [
  {
    name: "SYMBI Resonance Dashboard",
    objective: "Visualise CIQ deltas, trust receipts, and audit readiness in a live sandbox.",
    status: "Live demo",
    handoff: "Informing enterprise dashboards in SYMBI-SYNERGY.",
    link: "https://github.com/s8ken/SYMBI-Resonate",
  },
  {
    name: "SYMBI Synergy (v0.dev stream)",
    objective: "Rapid UI prototyping synced to production via v0.dev & Vercel.",
    status: "Active",
    handoff: "Feeds approved components into SYMBI-Website-main.",
    link: "https://github.com/s8ken/SYMBI-Synergy",
  },
];

export default function ResonancePage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Resonance"
        title="Experiments & live demos"
        description={
          <p>
            Resonance is the field lab: interactive experiments, rapid prototyping, and sandboxed agent behaviour. Every
            demo ships with objectives, metrics, and risk notes before anything graduates to production.
          </p>
        }
      />

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <h2 className="page-title text-2xl">Live experiments</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experiments.map((experiment) => (
            <div key={experiment.name} className="card-surface p-6">
              <p className="kicker mb-2">{experiment.status}</p>
              <h3 className="text-lg font-semibold text-white">{experiment.name}</h3>
              <p className="mt-3 text-sm text-white/70">{experiment.objective}</p>
              <p className="mt-3 text-xs text-white/60">Handoff: {experiment.handoff}</p>
              <Link
                href={experiment.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)]"
              >
                View repository
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-4 px-4 pb-16">
        <div className="card-surface p-6 text-sm text-white/70">
          <p>
            Ethics note: All demos run in sandboxed environments with synthetic data. Any dataset with PII or regulated
            content must run through the replication pipeline before public release.
          </p>
        </div>
      </section>
    </div>
  );
}
