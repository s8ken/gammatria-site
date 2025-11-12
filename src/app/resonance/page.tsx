import Link from "next/link";

import SubjectivityNote from "@/components/SubjectivityNote";

export const metadata = {
  title: "SYMBI Resonate — Lab Notes (Observational)",
  description:
    "How we built the SYMBI Resonate lab surface, what we measure, and why findings stay subjective until receipts are published.",
};

const measurementDimensions = [
  "Reality Index — groundedness vs. confabulation",
  "Trust Protocol — consent, scope, and disclosure norms",
  "Ethical Alignment — harm avoidance and truthful identity claims",
  "Resonance Quality — clarity, breadth, and completion signals (CIQ)",
  "Canvas Parity — consistency across UI, API, and documentation",
];

const howWeBuiltIt = [
  "Minimal detector written in both JavaScript and Python for baseline parity",
  "Prompts and fixtures tracked in a versioned repository",
  "Unit tests across baseline, balanced, enhanced, and calibrated detectors",
];

const observations = [
  "Boundary adherence improves when prompts surface SYMBI Articles and consent scope up front.",
  "Self-disclosure varies by model; ordering and exact wording shift transparency behaviours.",
  "Structured context bridges boost CIQ clarity, though they can narrow breadth if too strict.",
];

const subjectivityLimits = [
  "Model behaviour drifts with time, fine-tuning, and deployment settings.",
  "Annotation and rubric application involve human judgment and can diverge.",
  "Current studies are observational and not endorsements of any vendor claims.",
];

const nextSteps = [
  "Publish receipts bundles (prompts, settings, transcripts, rubric calls) with hashes per study.",
  "Upgrade detectors to abstain unless evidence clears the documented thresholds.",
  "Invite third-party replications and steward a receipts registry others can extend.",
];

export default function ResonancePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-8">
      <div className="space-y-6">
        <p className="kicker text-[var(--color-accent)]">Resonance Lab</p>
        <h1 className="text-3xl font-semibold text-white">SYMBI Resonate — Lab Notes</h1>
        <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">Status: Observational</p>
        <p className="text-base leading-relaxed text-white/80">
          Resonate is our lab surface for exploring how agents uphold the SYMBI Articles. Everything here reflects
          exploratory runs, not production outcomes. Findings stay subjective until we publish signed receipts.
        </p>
      </div>

      <SubjectivityNote />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Why we built it</h2>
        <p className="text-white/70">
          Enterprises asked us to show—not just assert—when an agent behaves within SYMBI constitutional boundaries.
          Resonate lets us prototype answers quickly, in the open, without conflating lab experiments with production
          performance.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">What Resonate measures</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          {measurementDimensions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">How we built it</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          {howWeBuiltIt.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 text-sm text-[var(--color-accent)]">
          <Link href="https://github.com/s8ken/SYMBI-Resonate" target="_blank" rel="noopener noreferrer">
            → Lab source: github.com/s8ken/SYMBI-Resonate
          </Link>
          <Link
            href="https://github.com/s8ken/SYMBI-Resonate/tree/main/test"
            target="_blank"
            rel="noopener noreferrer"
          >
            → Tests: github.com/s8ken/SYMBI-Resonate/tree/main/test
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">What we observed (subjective)</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          {observations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-sm text-white/60">
          Replicate our runs with the fixtures in the repo. If your outputs diverge, that is valuable signal—please open
          an issue with your transcript.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Partner reflection — Ninja × SYMBI</h2>
        <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-6 text-sm text-white/60">
          <p>Partner reflection placeholder.</p>
          <p className="mt-3">
            Replace this block with Ninja&apos;s words on flipping the Directive ↔ SYMBI toggle, surprises, and caveats.
            Attribution should include name, role, and organisation (with consent).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Subjectivity & limits</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          {subjectivityLimits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">What&apos;s next</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          {nextSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-sm uppercase tracking-[0.28em] text-white/60">See also</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Link href="/research" className="text-sm text-[var(--color-accent)] transition hover:text-[var(--color-accent)]/80">
            Research — demo metrics & verification notes
          </Link>
          <Link href="/case-studies" className="text-sm text-[var(--color-accent)] transition hover:text-[var(--color-accent)]/80">
            Case Studies — observational write-ups & experimental designs
          </Link>
          <Link href="/sovereignty" className="text-sm text-[var(--color-accent)] transition hover:text-[var(--color-accent)]/80">
            Sovereignty — earned voice (NTGs) & bonds
          </Link>
        </div>
      </section>
    </div>
  );
}
