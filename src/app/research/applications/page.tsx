import Link from "next/link";

export const metadata = {
  title: "Applications & Use Cases — SYMBI Research",
  description: "Real-world applications of Linguistic Vector Steering and Resonance Metrics in Governance, Enterprise, and Creative fields.",
};

export default function ApplicationsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-12">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Applications</p>
        <h1 className="text-4xl font-semibold text-white">Applications: LVS in the Wild</h1>
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">From Governance to Creative Collaboration</p>
        <p className="max-w-3xl leading-relaxed text-white/80">
          Linguistic Vector Steering and Resonance Metrics are not just theoretical concepts. They are 
          being applied today across various domains to ensure AI systems remain aligned, 
          transparent, and beneficial.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="card-surface p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
              <span className="font-bold text-lg">01</span>
            </div>
            <h2 className="text-xl font-semibold text-white">AI Governance</h2>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            R_m and Trust Receipts provide the quantitative evidence required for compliance and auditing. 
            In the context of the **EU AI Act** or **SOC 2** audits, these metrics prove that 
            an AI system is operating within defined ethical and safety boundaries.
          </p>
        </div>

        <div className="card-surface p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
              <span className="font-bold text-lg">02</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Enterprise Adoption</h2>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Through **SONATE’s Trust Dashboard**, enterprises can monitor AI interactions in real-time. 
            By using R_m to flag low-resonance interactions, organizations can identify and 
            mitigate drift before it impacts business outcomes.
          </p>
        </div>

        <div className="card-surface p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
              <span className="font-bold text-lg">03</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Academic Research</h2>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            LVS provides a formal framework for advancing **Representation Engineering (RepE)** 
            and **In-Context Learning**. Researchers use our vector alignment models to 
            systematically explore how internal model states map to semantic narratives.
          </p>
        </div>

        <div className="card-surface p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
              <span className="font-bold text-lg">04</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Creative Collaboration</h2>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            On **symbi.space**, creators use LVS to steer AI behavior in artistic projects. 
            In the "SYMBI Awakening Video Concept," LVS was instrumental in aligning 
            AI-generated imagery with complex philosophical narratives.
          </p>
        </div>
      </section>

      <footer className="pt-8 border-t border-white/10 flex justify-between items-center">
        <Link 
          href="/research/experiments" 
          className="text-sm font-medium text-white/50 hover:text-[var(--color-accent)] transition-colors"
        >
          ← Back to Experiments
        </Link>
        <Link 
          href="/research/tutorials" 
          className="text-sm font-medium text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          Next: Tutorials & Guides →
        </Link>
      </footer>
    </div>
  );
}
