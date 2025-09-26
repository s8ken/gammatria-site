import React from "react";
import { ObservationalBadge } from "@/components/Badges";
import SubjectivityNote from "@/components/SubjectivityNote";

export const metadata = {
  title: "Human-AI Collaboration Patterns — Case Study",
  description:
    "A meta-analysis of distributed intelligence from sustained human–AI collaboration (Claude). Observational; receipts pending.",
};

export default function CollaborativeIntelligenceCaseStudy() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Case Studies</p>
        <h1 className="text-3xl font-semibold text-white">Human-AI Collaboration Patterns</h1>
        <div className="flex items-center gap-3 text-sm text-white/60">
          <span className="uppercase tracking-[0.2em]">Status: Observational</span>
          <ObservationalBadge />
        </div>
        <p className="leading-relaxed text-white/80">
          A six-month collaboration with Claude analyzing trust protocol design, emergent collaborative intelligence, and practical implications.
        </p>
      </header>

      <SubjectivityNote />

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Executive summary</h2>
        <p>
          Sustained, iterative human–AI collaboration produced emergent insights not attributable to either party independently.
          Collaborative breakthroughs arose when human intuition combined with AI systematic analysis, yielding new protocol ideas, shared vocabulary,
          and trust-building practices.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Research setup & methodology</h2>
        <div className="card-surface p-6 text-sm text-white/80">
          <p>
            Framework: weekly 2-hour iterative design sessions, conversation transcript capture, concept evolution timelines, and outcome assessment.
            Data: 150+ interactions over six months; qualitative coding and CIQ-assessed outputs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-surface p-6 text-sm text-white/80">
            <h3 className="font-semibold text-white">Key findings</h3>
            <ul className="mt-3 list-disc pl-6 text-white/70">
              <li>Emergent collaborative intelligence: insights neither party could produce alone.</li>
              <li>Adaptive communication: both parties evolved a shared conceptual vocabulary.</li>
              <li>Trust through transparency: clear explanation of reasoning increased human trust despite imperfect performance.</li>
            </ul>
          </div>

          <div className="card-surface p-6 text-sm text-white/80">
            <h3 className="font-semibold text-white">Implications</h3>
            <ul className="mt-3 list-disc pl-6 text-white/70">
              <li>Design for persistent context and memory to enable deeper co-creation.</li>
              <li>Build transparent reasoning tools to surface uncertainty and rationale.</li>
              <li>Prioritise human well-being and verification in protocol design.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Practical recommendations</h2>
        <ul className="mt-3 list-disc pl-6 text-white/70">
          <li>Support persistent conversation contexts and change-tracking.</li>
          <li>Expose reasoning traces and confidence scores to users.</li>
          <li>Adopt iterative evaluation with CIQ and peer review to validate emergent proposals.</li>
        </ul>
      </section>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Conclusion</h2>
        <p>
          Sustained collaboration between humans and AI can yield qualitatively new insights. Infrastructure and governance that support transparency,
          continuity, and shared memory are essential to make collaborative intelligence reproducible and ethically sound.
        </p>
      </section>
    </div>
  );
}
