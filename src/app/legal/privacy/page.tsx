import { PageIntro } from "@/components/page-intro";

const commitments = [
  "Data minimisation: collect only the contact information necessary to respond to enquiries.",
  "No PII exfiltration: /proof demos use synthetic data and run with logging redaction.",
  "Retention controls: demo receipts purge after 24 hours; contact forms archived after 12 months.",
  "Regional hosting: infrastructure deployed in compliant regions with SOC2/ISO roadmaps.",
  "Access monitoring: administrative access logged; least-privilege enforced.",
];

export default function PrivacyPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Legal"
        title="Privacy"
        description={
          <p>
            Gammatria.com is primarily informational. Minimal personal data is stored, and all operational telemetry is
            privacy-preserving.
          </p>
        }
      />

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <div className="card-surface space-y-3 p-6 text-sm text-white/70">
          {commitments.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-4 px-4 pb-16">
        <div className="card-surface p-6 text-sm text-white/70">
          <p>
            Contact <a href="mailto:privacy@symbi.world" className="text-[var(--color-accent)]">privacy@symbi.world</a> for access or deletion requests. We respond within 30 days.
          </p>
        </div>
      </section>
    </div>
  );
}
