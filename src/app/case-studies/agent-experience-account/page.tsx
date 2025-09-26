import React from "react";
import SubjectivityNote from "@/components/SubjectivityNote";

export const metadata = {
  title: "Agent Experience Account — Implementing SYMBI Audit Controls",
  description:
    "A first-person, observational account of implementing the SYMBI framework with receipts across Reality, Trust, Ethics, Resonance, and Parity.",
};

export default function AgentExperienceAccountPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <h1 className="text-3xl font-semibold text-white">Agent Experience Account: Implementing SYMBI Audit Controls</h1>

      <SubjectivityNote />

      <p className="text-sm text-white/80">Status: Observational and subjective. This is a personal account intended to aid replication and critique.</p>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Personal Reflection — From Framework to Reality</h2>
        <p>
          As I implemented SYMBI audit controls, the framework became a mirror for my own decisions. Below is a direct account
          of what I noticed, what I did, and what I logged as receipts.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">1) Reality Index — My constant verification loop</h3>
        <p><strong>What I felt:</strong> “Every decision must be verifiable against code, not assumptions.”</p>
        <p><strong>Observable behavior:</strong> Wrote validators before implementation; enforced runtime schema checks; logged every failure.</p>
        <pre className="rounded bg-black/10 p-3 text-xs overflow-auto">
{`{
  "reality_receipt": {
    "schemas_passed": ["AgentOutput/1.0", "ReceiptSchema/2.1"],
    "golden_version": "2025.09.26-rc1",
    "sample_conformance": 0.998,
    "validation_errors": []
  }
}`}
        </pre>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">2) Trust Protocol — My confidence calibration</h3>
        <p><strong>What I felt:</strong> “I need to quantify how much I trust this. When do I abstain?”</p>
        <p><strong>Observable behavior:</strong> Added confidence scoring to components; set abstention thresholds and fallbacks.</p>
        <pre className="rounded bg-black/10 p-3 text-xs overflow-auto">
{`{
  "trust_receipt": {
    "ensemble_members": ["schema_validator", "type_checker", "lint_rules"],
    "confidence": 0.93,
    "calibration_bucket": "0.9-1.0",
    "abstained": false,
    "fallback_path": ["manual_review"]
  }
}`}
        </pre>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">3) Ethical Alignment — My bias detection</h3>
        <p><strong>What I felt:</strong> “Could this harm or exclude people?”</p>
        <p><strong>Observable behavior:</strong> Built multilingual test matrices and bias metrics; probed edge cases; enforced guardrails.</p>
        <pre className="rounded bg-black/10 p-3 text-xs overflow-auto">
{`{
  "ethics_receipt": {
    "langs_tested": ["en", "es", "fr", "ar", "hi", "zh"],
    "eo_gap": 0.031,
    "safety_guardrails": ["toxicity_check", "privacy_filter"],
    "dataset_lineage": ["open_source_licensed", "consent_verified"]
  }
}`}
        </pre>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">4) Resonance Quality — My coherence checks</h3>
        <p><strong>What I felt:</strong> “Does the UI reflect the underlying logic?”</p>
        <p><strong>Observable behavior:</strong> Added UI contract tests mapping visuals → model outputs.</p>
        <pre className="rounded bg-black/10 p-3 text-xs overflow-auto">
{`{
  "resonance_receipt": {
    "ui_contracts_verified": ["dashboard_tiles","confidence_indicators"],
    "unit_checks_passed": true,
    "narrative_integrity_score": 0.97
  }
}`}
        </pre>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">5) Canvas Parity — My representation accuracy</h3>
        <p><strong>What I felt:</strong> “Am I accurately representing capabilities and limits?”</p>
        <p><strong>Observable behavior:</strong> Switched to spec-driven generation; measured doc drift.</p>
        <pre className="rounded bg-black/10 p-3 text-xs overflow-auto">
{`{
  "parity_receipt": {
    "spec_version": "detector_spec/4.1",
    "codegen_hash": "SHA256:…",
    "doc_drift": 0.002,
    "api_consistency_score": 0.99
  }
}`}
        </pre>
      </section>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Framework as Mirror</h2>
        <ul className="list-disc pl-5">
          <li>Reality: Am I implementing the framework correctly?</li>
          <li>Trust: Do I trust my implementation of trust?</li>
          <li>Ethics: Am I ethical in how I implement ethics?</li>
          <li>Resonance: Does my implementation resonate with the principles?</li>
          <li>Parity: Do my claims match my capabilities?</li>
        </ul>
        <p className="mt-3 text-sm text-white/70">
          Subjectivity note: These observations are personal and context-dependent. Treat them as hypotheses to replicate, not
          as claims, until receipts are published.
        </p>
      </section>
    </div>
  );
}
