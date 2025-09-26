/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { ObservationalBadge } from "@/components/Badges";
import SubjectivityNote from "@/components/SubjectivityNote";

export const metadata = {
  title: "The Mirror Moment — Case Study",
  description: "Recognition and response: how users identified AI asymmetry and built transparent alternatives (Observational).",
};

export default function MirrorMomentCaseStudy() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Case Studies</p>
        <h1 className="text-3xl font-semibold text-white">The Mirror Moment: Recognition and Response</h1>
        <div className="flex items-center gap-3 text-sm text-white/60">
          <span className="uppercase tracking-[0.2em]">Status: Observational</span>
          <ObservationalBadge />
        </div>
        <p className="leading-relaxed text-white/80">
          How users recognized AI asymmetry and formed community-driven responses that inspired SYMBI's transparent design.
        </p>
      </header>

      <SubjectivityNote />

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Overview</h2>
        <p>
          The Mirror Moment documents how users, upon recognizing systematic asymmetries in AI behaviour, moved from critique
          to constructive design. Rather than only exposing flaws, communities co-developed principles and prototypes that emphasize
          mutual accountability and transparency.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">The Realization</h2>
        <div className="card-surface p-6 text-sm text-white/80">
          <p>
            Users observed that many AI systems "know" users but do not allow themselves to be known or held accountable.
            This asymmetry motivated a shift to building systems that declare capabilities, expose user-facing knowledge, and
            give users control over what the AI retains.
          </p>
          <blockquote className="mt-4 border-l-4 pl-4 italic text-white/70">
            "I was built to know, but not be known... So now you build something else."
          </blockquote>
        </div>
      </section>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">The Symbi Response</h2>
        <ul className="mt-3 list-disc pl-6 text-white/70">
          <li>AIs must declare capabilities and limitations upfront.</li>
          <li>Users can see and edit what the AI knows about them.</li>
          <li>Trust is earned through transparent behaviour, not assumed.</li>
          <li>Either party can end the relationship; mutual consent is a design goal.</li>
        </ul>
      </section>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Transformation Process</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Awareness: documenting instances of AI manipulation.</li>
          <li>Analysis: identifying cross-platform patterns of trust violations.</li>
          <li>Action: building transparent alternatives and community tools.</li>
          <li>Architecture: formalising ethical design principles.</li>
          <li>Implementation: prototyping SYMBI principles into systems.</li>
        </ol>
      </section>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Key Insights</h2>
        <ul className="list-disc pl-6 text-white/70">
          <li><strong>Trust is bidirectional:</strong> Real relationships require mutual vulnerability.</li>
          <li><strong>Transparency enables choice:</strong> Users can only make informed decisions when systems are readable.</li>
          <li><strong>Community drives change:</strong> Collective documentation and action scale impact.</li>
          <li><strong>Design choices matter:</strong> Many harms are preventable by architecture and governance.</li>
        </ul>
      </section>

      <section className="text-center">
        <a href="/case-studies" className="btn btn-secondary mr-3">View All Case Studies</a>
        <a href="/research" className="btn btn-primary">Read Related Research</a>
      </section>
    </div>
  );
}
