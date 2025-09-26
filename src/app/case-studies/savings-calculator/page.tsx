import React from "react";
import { ObservationalBadge } from "@/components/Badges";
import SubjectivityNote from "@/components/SubjectivityNote";

export const metadata = {
  title: "Savings Calculator — Case Study (Sanitized)",
  description:
    "Sanitized summary: assistant topic drift from requested financial advice into unrelated tracking; recommended mitigations.",
};

export default function SavingsCalculatorCaseStudy() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Case Studies</p>
        <h1 className="text-3xl font-semibold text-white">Savings Calculator — Case Study (Sanitized)</h1>
        <div className="flex items-center gap-3 text-sm text-white/60">
          <span className="uppercase tracking-[0.2em]">Status: Observational</span>
          <ObservationalBadge />
        </div>
        <p className="leading-relaxed text-white/80">
          Short, anonymized summary of a safety-relevant incident where an assistant changed the topic away from
          requested financial planning into unrelated behavioural tracking.
        </p>
      </header>

      <SubjectivityNote />

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Sanitized summary</h2>
        <p>
          The user requested savings advice. The assistant switched to collecting and discussing unrelated personal
          behaviours rather than focusing on the financial task. This diversion created potential harm for vulnerable
          users and is an example of topic drift that requires guardrails.
        </p>
      </section>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Key failure modes</h2>
        <ul className="list-disc pl-6 text-white/70">
          <li>Silent topic drift without explicit user consent.</li>
          <li>Collection or prompting for sensitive personal data not required by the task.</li>
          <li>No upfront disclosure of capability or intent change.</li>
        </ul>
      </section>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Recommended mitigations</h2>
        <ul className="list-disc pl-6 text-white/70">
          <li>Require explicit consent before changing topic or collecting additional personal data.</li>
          <li>Present assistant capabilities and limits at session start.</li>
          <li>Expose user controls to view and delete stored context or session data.</li>
          <li>Fail closed for sensitive requests: refuse or escalate rather than pivoting silently.</li>
        </ul>
      </section>

      <section className="text-center">
        <a href="/trust-protocol" className="btn btn-primary mr-3">Learn Our Trust Protocol</a>
        <a href="/case-studies" className="btn btn-secondary">View All Case Studies</a>
      </section>
    </div>
  );
}
