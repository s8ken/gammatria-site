import { PageIntro } from "@/components/page-intro";

const phases = [
  {
    phase: "Phase 1",
    timeline: "Q4 2025",
    focus: "Research & design",
    details: [
      "Survey successful research/AI DAOs",
      "Legal analysis across Australia & partner jurisdictions",
      "Tokenomics modelling with quality staking",
      "Community intake for early contributors",
    ],
  },
  {
    phase: "Phase 2",
    timeline: "Q1 2026",
    focus: "Pilot",
    details: [
      "Deploy governance smart contracts",
      "Issue non-transferable contributor tokens",
      "Run mock proposals and audits",
      "Publish transparency reports",
    ],
  },
  {
    phase: "Phase 3",
    timeline: "Q2 2026",
    focus: "Launch",
    details: [
      "Public token event (governance-only)",
      "Activate community voting on framework evolution",
      "Fund research grants via DAO treasury",
      "Integrate with SYMBI receipts & attestations",
    ],
  },
];

export default function DaoPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="DAO"
        title="Decentralized governance roadmap"
        description={
          <p>
            The DAO will extend SYMBI governance beyond institutional partners. Tokens represent voice, not profit. No
            sale is required to use SYMBI; participation is earned through receipts, research, and stewardship.
          </p>
        }
        actions={
          <a
            href="https://symbi.world/dao"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Join the DAO mailing list
          </a>
        }
      />

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <h2 className="page-title text-2xl">Phased rollout</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {phases.map((phase) => (
            <div key={phase.phase} className="card-surface p-6">
              <p className="kicker mb-2">{phase.timeline}</p>
              <h3 className="text-lg font-semibold text-white">{phase.phase} · {phase.focus}</h3>
              <ul className="mt-3 space-y-2 text-xs text-white/65">
                {phase.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-4 pb-16">
        <h2 className="page-title text-2xl">Token posture</h2>
        <div className="card-surface space-y-3 p-6 text-sm text-white/70">
          <p>• Governance-only token. No dividends, buybacks, redemption, or access rights.</p>
          <p>• Quality staking: contributors lock receipts and attestations to underwrite integrity.</p>
          <p>• DAO treasury funds research grants, audits, and open-source tooling.</p>
          <p>• Global participation with compliance-first guardrails; adheres to token policy licensing.</p>
        </div>
      </section>
    </div>
  );
}
