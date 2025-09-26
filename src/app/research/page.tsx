import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { ProofToggle } from "@/components/proof-toggle";

const publications = [
  {
    title: "SYMBI: A Constitutional Protocol for Relational Intelligence (v1.0)",
    summary:
      "Foundational whitepaper outlining the bicameral governance model, Trust Receipts, CIQ metric, and sovereignty roadmap.",
    date: "25 Sep 2025",
    link: { href: "/vault#whitepapers", label: "Download PDF" },
    bibtex: "@misc{symbi2025protocol, ...}",
  },
  {
    title: "Relational Intelligence as a Service — Operating Model (v1.0)",
    summary:
      "Financial posture, pricing strategy, and commercial rollout plan for YCQ Sonate and managed trust services.",
    date: "25 Sep 2025",
    link: { href: "/vault#whitepapers", label: "Download PDF" },
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
    title: "Resonance: Enterprise support triage",
    outcome: "+18% clarity, +22% safety, and -12% resolution time using SYMBI toggle in under four weeks.",
  },
  {
    title: "Directive ↔ SYMBI pilots",
    outcome: "≥15% improvement in at least two CIQ metrics across sales research and knowledge ops workflows.",
  },
];

export default function ResearchPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Research"
        title="Publications & case studies"
        description={
          <p>
            Peer-review ready artifacts, preregistered experiments, and enterprise case studies live here. Raw materials
            and datasets are mirrored in the Vault with checksums and licenses.
          </p>
        }
      />

      <section className="mx-auto max-w-5xl px-4">
        <div className="mb-8">
          <p className="kicker">LIVE METRICS</p>
          <h2 className="page-title text-2xl">Research Showcase</h2>
          <p className="mt-3 text-white/70">
            Real-time data from our production deployments, highlighting the 2,184 trust receipts generated and key performance metrics from SYMBI protocol implementations.
          </p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card-surface p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <p className="kicker">TRUST RECEIPTS</p>
            </div>
            <div className="text-3xl font-bold text-white">2,184</div>
            <p className="text-sm text-white/70">Generated in past 30 days</p>
            <div className="mt-4 text-xs text-white/60">
              <div className="flex justify-between">
                <span>SYMBI Mode:</span>
                <span>1,456 (67%)</span>
              </div>
              <div className="flex justify-between">
                <span>Directive Mode:</span>
                <span>728 (33%)</span>
              </div>
            </div>
          </div>

          <div className="card-surface p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <p className="kicker">AVG CIQ SCORE</p>
            </div>
            <div className="text-3xl font-bold text-white">0.73</div>
            <p className="text-sm text-white/70">Across all deployments</p>
            <div className="mt-4 text-xs text-white/60">
              <div className="flex justify-between">
                <span>SYMBI Mode:</span>
                <span>0.81</span>
              </div>
              <div className="flex justify-between">
                <span>Directive Mode:</span>
                <span>0.52</span>
              </div>
            </div>
          </div>

          <div className="card-surface p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              <p className="kicker">ENTERPRISE PILOTS</p>
            </div>
            <div className="text-3xl font-bold text-white">7</div>
            <p className="text-sm text-white/70">Active deployments</p>
            <div className="mt-4 text-xs text-white/60">
              <div className="flex justify-between">
                <span>YCQ Sonate:</span>
                <span>Production</span>
              </div>
              <div className="flex justify-between">
                <span>SYMBI-SYNERGY:</span>
                <span>Live</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ProofToggle />
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <div className="mb-6">
          <p className="kicker">ACADEMIC PARTNERSHIPS</p>
          <h2 className="page-title text-2xl">ARC Discovery Projects 2026</h2>
          <p className="mt-3 text-white/70">
            Our submission to the Australian Research Council Discovery Projects scheme represents a significant milestone in establishing SYMBI as a recognized academic framework for relational AI research.
          </p>
        </div>
        
        <div className="card-surface p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">Relational Intelligence: Constitutional Protocols for AI Sovereignty</h3>
              <p className="kicker mt-1">ARC DISCOVERY PROJECT PROPOSAL</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-white/70">Submitted Nov 2025</span>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-white/90">Research Objectives</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Formalize SYMBI constitutional protocols</li>
                <li>• Validate CIQ metrics across domains</li>
                <li>• Establish trust receipt standards</li>
                <li>• Develop governance frameworks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white/90">Expected Outcomes</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Peer-reviewed publications (5-8)</li>
                <li>• Open-source protocol implementations</li>
                <li>• Industry partnership framework</li>
                <li>• PhD candidate training program</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3">
            <Link
              href="/funding"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View Funding Strategy
            </Link>
            <Link
              href="/governance"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Governance Model
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <h2 className="page-title text-2xl">Whitepapers & preprints</h2>
        <div className="space-y-4">
          {publications.map((pub) => (
            <article key={pub.title} className="card-surface p-6">
              <p className="kicker mb-2">{pub.date}</p>
              <h3 className="text-xl font-semibold text-white">{pub.title}</h3>
              <p className="mt-3 text-sm text-white/70">{pub.summary}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/60">
                <Link href={pub.link.href} className="font-semibold text-[var(--color-accent)]">
                  {pub.link.label}
                </Link>
                <code className="rounded bg-black/40 px-3 py-1">{pub.bibtex}</code>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <h2 className="page-title text-2xl">Case studies</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {caseStudies.map((study) => (
            <div key={study.title} className="card-surface p-6">
              <p className="kicker mb-2">{study.title}</p>
              <p className="text-sm text-white/70">{study.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-4 px-4 pb-16">
        <div className="card-surface p-6">
          <h3 className="text-xl font-semibold text-white">Replication assets</h3>
          <p className="mt-3 text-sm text-white/70">
            The full replication kit—including prompts, analytics scripts, and ethics documentation—is available under
            CC BY-NC-SA 4.0 in the Vault. Use the receipts bundle to verify cryptographic integrity or ingest into your
            own SIEM.
          </p>
        </div>
      </section>
    </div>
  );
}
