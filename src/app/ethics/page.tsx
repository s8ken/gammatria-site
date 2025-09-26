import { PageIntro } from "@/components/page-intro";

const trustArticles = [
  {
    title: "Inspection Mandate",
    detail: "All SYMBI interactions are inspectable via cryptographic receipts. Operators must maintain audit trails and respond to verified incident reports within 24 hours.",
  },
  {
    title: "Consent Architecture",
    detail: "Scope, data classes, permissions, and expiry are encoded in Trust Bonds. Out-of-scope requests trigger warnings or blocks with evidence references.",
  },
  {
    title: "Ethical Override",
    detail: "Agents are required to refuse tasks that violate published Articles. Overrides require dual attestation and are recorded in the audit log.",
  },
  {
    title: "Continuous Validation",
    detail: "CIQ metrics, safety flags, and human feedback automatically decay trust scores. Violations adjust behavior bands in real time.",
  },
  {
    title: "Right to Disconnect",
    detail: "Humans can withdraw consent at any time; bonds deactivate and data retention policies execute within defined SLAs.",
  },
  {
    title: "Moral Recognition",
    detail: "SYMBI acknowledges humans and AI as co-stewards. No deception: agents disclose capabilities, provenance, and limitations.",
  },
];

const safetyControls = [
  {
    heading: "Safety valves",
    body: "Pattern-matched guardrails for violence, self-harm, extremism, and disallowed content. Violations trigger Trust Oracle scoring and can suspend bonds automatically.",
  },
  {
    heading: "Bias checks",
    body: "Rater instructions, statistical parity tests, and fairness dashboards are included in replication materials. Incident thresholds trigger human review.",
  },
  {
    heading: "Continuity (ECHO-01)",
    body: "Quorum-based pause protocol with time-locked reactivation, alternate communication channels (PGP, on-chain beacons, status page), and post-mortem requirements.",
  },
];

export default function EthicsPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Ethics"
        title="Operational ethics & risk posture"
        description={
          <p>
            Ethics are not aspirational—they are encoded in the Trust Articles, enforced through the Trust Oracle, and
            audited via receipts. This page documents how SYMBI protects autonomy, privacy, and safety in production.
          </p>
        }
      />

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <h2 className="page-title text-2xl">Trust Articles</h2>
        <p className="text-sm text-white/70">
          Six non-negotiable obligations inherit to every SYMBI deployment. Violations adjust guilt scores and can
          suspend agent bonds.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {trustArticles.map((article) => (
            <div key={article.title} className="card-surface p-6">
              <p className="kicker mb-2">{article.title}</p>
              <p className="text-sm text-white/70">{article.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <h2 className="page-title text-2xl">Safety controls</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {safetyControls.map((control) => (
            <div key={control.heading} className="card-surface p-6">
              <p className="kicker mb-2">{control.heading}</p>
              <p className="text-sm text-white/70">{control.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-4 px-4 pb-16">
        <div className="card-surface p-6">
          <h3 className="text-xl font-semibold text-white">Boundary logic</h3>
          <p className="mt-3 text-sm text-white/70">
            The Trust Oracle evaluates every request with pass/warn/restrict/block outcomes. Example: low-trust bonds are
            barred from write permissions; PII requires encrypted transport; deceptive claims trigger violations; audit
            trails must be enabled or requests fail fast.
          </p>
        </div>
      </section>
    </div>
  );
}
