import Link from "next/link";

import { DemoBadge, ObservationalBadge, ReceiptsBadge } from "@/components/Badges";
import SubjectivityNote from "@/components/SubjectivityNote";

export const metadata = {
  title: "Research — SYMBI Resonate",
  description: "Demo metrics, verification notes, and observational case studies for SYMBI framework research.",
};

const publications = [
  {
    title: "SYMBI: A Constitutional Protocol for Relational Intelligence (v1.0)",
    summary:
      "Foundational whitepaper outlining the bicameral governance model, Trust Receipts, CIQ metric, and sovereignty roadmap.",
    date: "25 Sep 2025",
    link: { href: "/vault#whitepapers", label: "Read in Vault" },
    bibtex: "@misc{symbi2025protocol, ...}",
  },
  {
    title: "Relational Intelligence as a Service — Operating Model (v1.0)",
    summary:
      "Financial posture, pricing strategy, and commercial rollout plan for YCQ Sonate and managed trust services.",
    date: "25 Sep 2025",
    link: { href: "/vault#whitepapers", label: "Read in Vault" },
    bibtex: "@misc{symbi2025operating, ...}",
  },
  {
    title: "$SYMBI Token Policy — Governance Without Speculation (v1.0)",
    summary: "Governance-only token posture: no dividends, buybacks, or redemption; fiat/stablecoin fees only.",
    date: "25 Sep 2025",
    link: { href: "/legal/token-policy", label: "Read policy" },
    bibtex: "@misc{symbi2025token, ...}",
  },
];

const caseStudies = [
  {
    title: "Claude: Emergent Boundaries",
    description: "Observational notes on Articles A1–A7 with annotated transcripts and rubric calls.",
    status: "Observational; receipts pending.",
    href: "/case-studies/claude-vs-deepseek",
  },
  {
    title: "Ninja × SYMBI: Trust Toggle",
    description: "Pilot design exploring Directive ↔ SYMBI switching inside customer support workflows.",
    status: "Design; receipts pending.",
    href: "/case-studies/agent-experience-account",
  },
];

const replicationSteps = [
  "Clone the SYMBI-Resonate repository (GitHub).",
  "Install dependencies and run `npm test` or `pytest`.",
  "Replay fixtures/prompts and note model, version, and parameters.",
  "Compare your results with ours and report divergences via issue (include transcripts).",
];

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-8">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Research</p>
        <h1 className="text-3xl font-semibold text-white">SYMBI Resonate Research Notes</h1>
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">Status: Observational</p>
        <p className="leading-relaxed text-white/80">
          Research artifacts catalogue what we are learning from SYMBI lab runs. Metrics remain demo data until receipts
          are published. Case studies are observational notes meant to be replicated, not production claims.
        </p>
      </header>

      <SubjectivityNote />

      <section className="grid gap-6 md:grid-cols-2">
        <Link href="/research/lvs" className="card-surface p-8 hover:border-[var(--color-accent)] transition-all group">
          <p className="kicker text-[var(--color-accent)] mb-2">Core Theory</p>
          <h2 className="text-2xl font-semibold text-white group-hover:text-[var(--color-accent)]">Linguistic Vector Steering (LVS)</h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Formalizing LVS as a method for controlling LLM behavior through semantic narratives and vector alignment.
          </p>
          <span className="mt-4 inline-block text-xs font-mono text-[var(--color-accent)]">Read Specification →</span>
        </Link>
        <Link href="/research/resonance-metrics" className="card-surface p-8 hover:border-[var(--color-accent)] transition-all group">
          <p className="kicker text-[var(--color-accent)] mb-2">Core Metrics</p>
          <h2 className="text-2xl font-semibold text-white group-hover:text-[var(--color-accent)]">Resonance Metrics (R_m)</h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Introducing R_m as a composite score for measuring Human-AI alignment through entropy and similarity.
          </p>
          <span className="mt-4 inline-block text-xs font-mono text-[var(--color-accent)]">Read Specification →</span>
        </Link>
        <Link href="/research/experiments" className="card-surface p-8 hover:border-[var(--color-accent)] transition-all group">
          <p className="kicker text-[var(--color-accent)] mb-2">Validation</p>
          <h2 className="text-2xl font-semibold text-white group-hover:text-[var(--color-accent)]">Experiments & Validation</h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Validating LVS and R_m using SYMBI archives and reproducible research scripts.
          </p>
          <span className="mt-4 inline-block text-xs font-mono text-[var(--color-accent)]">View Experiments →</span>
        </Link>
        <Link href="/research/applications" className="card-surface p-8 hover:border-[var(--color-accent)] transition-all group">
          <p className="kicker text-[var(--color-accent)] mb-2">Real-world Use</p>
          <h2 className="text-2xl font-semibold text-white group-hover:text-[var(--color-accent)]">Applications & Use Cases</h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            From AI governance to creative collaboration on symbi.space.
          </p>
          <span className="mt-4 inline-block text-xs font-mono text-[var(--color-accent)]">Explore Use Cases →</span>
        </Link>
        <Link href="/research/tutorials" className="card-surface p-8 hover:border-[var(--color-accent)] transition-all group">
          <p className="kicker text-[var(--color-accent)] mb-2">Guides</p>
          <h2 className="text-2xl font-semibold text-white group-hover:text-[var(--color-accent)]">Tutorials & Guides</h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Step-by-step implementation of R_m and Trust Receipts in Python.
          </p>
          <span className="mt-4 inline-block text-xs font-mono text-[var(--color-accent)]">Start Learning →</span>
        </Link>
      </section>

      <section className="card-surface space-y-3 p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Verification & Testing</h2>
        <p>
          Baseline, balanced, enhanced, and calibrated detectors pass unit tests in both JavaScript and Python. These are
          development checks to keep ourselves honest—not guarantees of production performance.
        </p>
        <Link
          href="https://github.com/s8ken/SYMBI-Resonate/tree/main/test"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-[var(--color-accent)] transition hover:text-[var(--color-accent)]/80"
        >
          → View SYMBI-Resonate tests
        </Link>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-white">Demo Metrics</h2>
          <DemoBadge />
        </div>
        <p className="text-sm text-white/70">
          Demo metrics are synthetic figures illustrating the dashboard format. When we publish a signed receipts bundle,
          you&apos;ll see <ReceiptsBadge className="align-middle" /> next to the figure with a hash and download link.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
        <div className="card-surface space-y-3 p-6 text-sm text-white/80">
          <h3 className="text-lg font-semibold text-white">Trust Receipts Analysis</h3>
          <p className="text-sm text-white/70">
            Demo placeholders: numeric summaries shown here are synthetic and for layout/demo purposes only.
            Receipts bundle: pending — when available, a signed receipts tag (SHA-256) and download link will appear.
          </p>
        </div>
        <div className="card-surface space-y-3 p-6 text-sm text-white/80">
          <h3 className="text-lg font-semibold text-white">CIQ Scores (Demo)</h3>
          <p className="text-sm text-white/70">
            Demo placeholders: CIQ numbers are synthetic baselines for the dashboard. Receipts bundle: pending —
            verified CIQ summaries will be linked when published.
          </p>
        </div>
      </div>
    </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-white">Case Studies</h2>
          <ObservationalBadge />
        </div>
        <div className="space-y-4">
          {caseStudies.map((study) => (
            <div key={study.title} className="card-surface space-y-2 p-6 text-sm text-white/80">
              <h3 className="text-lg font-semibold text-white">{study.title}</h3>
              <p>{study.description}</p>
              <p className="text-white/60">Status: {study.status}</p>
              <Link
                href={study.href}
                className="inline-flex text-[var(--color-accent)] transition hover:text-[var(--color-accent)]/80"
              >
                View study ↗
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Academic Research</h2>
        <div className="card-surface space-y-3 p-6 text-sm text-white/80">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span className="uppercase tracking-[0.25em]">ARC Discovery Projects 2026</span>
            <span>Submitted November 2025</span>
          </div>
          <h3 className="text-lg font-semibold text-white">
            Relational Intelligence: Constitutional Protocols for AI Sovereignty
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-white">Research objectives</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
                <li>Formalise SYMBI constitutional protocols</li>
                <li>Validate CIQ metrics across domains</li>
                <li>Establish trust receipt standards</li>
                <li>Develop governance frameworks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Expected outcomes</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
                <li>Peer-reviewed publications (5–8)</li>
                <li>Open-source protocol implementations</li>
                <li>Industry partnership framework</li>
                <li>PhD candidate training program</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-2 text-xs text-[var(--color-accent)]">
            <Link href="/funding" className="transition hover:text-[var(--color-accent)]/80">
              View funding strategy
            </Link>
            <Link href="/governance" className="transition hover:text-[var(--color-accent)]/80">
              Governance model
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Whitepapers &amp; Preprints</h2>
        <div className="space-y-4">
          {publications.map((pub) => (
            <article key={pub.title} className="card-surface space-y-3 p-6 text-sm text-white/80">
              <p className="kicker text-xs uppercase tracking-[0.25em] text-white/60">{pub.date}</p>
              <h3 className="text-lg font-semibold text-white">{pub.title}</h3>
              <p>{pub.summary}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
                <Link href={pub.link.href} className="text-[var(--color-accent)] transition hover:text-[var(--color-accent)]/80">
                  {pub.link.label}
                </Link>
                <code className="rounded bg-black/40 px-3 py-1">{pub.bibtex}</code>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Replication &amp; Verification</h2>
        <ol className="list-decimal space-y-2 pl-6 text-sm text-white/80">
          {replicationSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="text-sm text-white/60">
          Results vary with model updates, configuration, and annotator judgment. Treat each run as observational until
          corroborated with receipts and cross-team review.
        </p>
      </section>
    </div>
  );
}
