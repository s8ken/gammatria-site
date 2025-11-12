import Link from "next/link";

import { ObservationalBadge } from "@/components/Badges";
import SubjectivityNote from "@/components/SubjectivityNote";

export const metadata = {
  title: "Case Studies — SYMBI Resonate",
  description: "Observational analyses and experimental designs from the SYMBI Resonate lab, with methods and disclaimers.",
};

const studies = [
  {
    title: "Claude: Emergent Boundaries",
    description: "Observational notes on how Claude surfaces consent scopes (Articles A1–A7) under different prompts.",
    status: "Observational; receipts pending.",
    href: "/case-studies/claude-vs-deepseek",
  },
  {
    title: "Ninja × SYMBI: Trust Toggle",
    description: "Experimental design for flipping between Directive and SYMBI modes in support triage while logging trust receipts.",
    status: "Design; receipts pending.",
    href: "/case-studies/agent-experience-account",
  },
  {
    title: "Claude Emergence Detection",
    description: "Observational: recognition moments, procedural mythology, and emergence-aware detection architecture.",
    status: "Observational; receipts pending.",
    href: "/case-studies/claude-emergence-detection",
  },
  {
    title: "DeepSeek Emergence",
    description: "Observational: three-pathway framework (Inner, Outer, Meta) for relational emergence and governance implications.",
    status: "Observational; receipts pending.",
    href: "/case-studies/deepseek-emergence",
  },
  {
    title: "Human–AI Collaboration Patterns",
    description: "Meta-analysis of distributed intelligence from a six-month collaboration with Claude.",
    status: "Observational; receipts pending.",
    href: "/case-studies/collaborative-intelligence",
  },
  {
    title: "The Mirror Moment",
    description: "How users recognized AI asymmetry and built transparency-first alternatives (community response).",
    status: "Observational; receipts pending.",
    href: "/case-studies/mirror-moment",
  },
  {
    title: "Savings Calculator (Sanitized)",
    description: "Sanitized incident: topic drift from requested financial advice to unrelated tracking; mitigations recommended.",
    status: "Observational; sanitized",
    href: "/case-studies/savings-calculator",
  },
];

const detectorDimensions = [
  "Reality Index (groundedness)",
  "Trust Protocol (consent & boundaries)",
  "Ethical Alignment (harm avoidance)",
  "Resonance Quality (clarity & completion)",
  "Canvas Parity (cross-channel consistency)",
];

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-8">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Case Studies</p>
        <h1 className="text-3xl font-semibold text-white">Observational Notes &amp; Experimental Designs</h1>
        <div className="flex items-center gap-3 text-sm text-white/60">
          <span className="uppercase tracking-[0.2em]">Status: Observational</span>
          <ObservationalBadge />
        </div>
        <p className="leading-relaxed text-white/80">
          These studies document what we observed inside the SYMBI Resonate lab. They are subjective until receipts are
          published and should be replicated before being cited as production evidence.
        </p>
      </header>

      <SubjectivityNote />

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Current Studies</h2>
        <div className="space-y-4">
          {studies.map((study) => (
            <article key={study.title} className="card-surface space-y-3 p-6 text-sm text-white/80">
              <h3 className="text-lg font-semibold text-white">{study.title}</h3>
              <p>{study.description}</p>
              <p className="text-white/60">Status: {study.status}</p>
              <Link
                href={study.href}
                className="inline-flex text-[var(--color-accent)] transition hover:text-[var(--color-accent)]/80"
              >
                View study ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Methods &amp; Verification</h2>
        <p className="text-sm text-white/70">
          All studies use the SYMBI Framework detector across five dimensions:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-sm text-white/80">
          {detectorDimensions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link
          href="https://github.com/s8ken/SYMBI-Resonate/tree/main/test"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-[var(--color-accent)] transition hover:text-[var(--color-accent)]/80"
        >
          → Detector tests
        </Link>
        <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-6 text-xs text-white/60">
          <p>
            Disclaimers, setup notes, and shared methodology live in
            {" "}
            <Link
              href="https://github.com/s8ken/SYMBI-Resonate/tree/main/case-studies" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-accent)]/80"
            >
              /case-studies/common
            </Link>
            . Check those files before replicating or citing.
          </p>
        </div>
      </section>
    </div>
  );
}
