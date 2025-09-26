import { PageIntro } from "@/components/page-intro";
import Link from "next/link";
import AutoToc from "@/components/AutoToc";
import SeeAlso from "@/components/SeeAlso";
import ProofDemo from "./ProofDemo";

const kitFolders = ["/prompts", "/protocol", "/receipts", "/metrics", "/analysis", "/ethics"];

const steps = [
  "Install dependencies and load the replication kit (Python + Node scripts).",
  "Run /proof toggle: Directive vs SYMBI across your dataset (supports CSV + API streaming).",
  "Export trust receipts (JSON + PDF). Verify hash chain using provided checksum script.",
  "Score CIQ metrics with paired tests (Holm–Bonferroni correction baked in).",
  "Log outcomes in the replication ledger and, optionally, publish via SYMBI Foundation.",
];

const receiptExample = `{
  "version": "1.0",
  "session_id": "ycq-support-2025-09-24",
  "mode": "SYMBI",
  "inputs": { "user": "acme-support", "context": "incident-431" },
  "constraints": { "articles": [1,2,3,5], "safety": ["pii", "harassment"] },
  "outcome": { "text": "...", "completion": true, "time_sec": 48 },
  "flags": { "safety": 0, "hallucination": 0 },
  "ciq": { "clarity": 4.6, "breadth": 4.1, "safety": 4.9, "completion": 1 },
  "hash_prev": "3af1...dbe7",
  "hash_self": "5c32...91fa",
  "signature": "ed25519:8c9f...e2a1"
}`;

export default function ReplicationPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-10 px-4 pb-16 pt-10">
      <PageIntro
        kicker="Replication"
        title="Run the SYMBI method"
        description={
          <p>
            Everything required to reproduce SYMBI’s results is public: prompts, protocols, metrics, ethics guidelines,
            and signed receipts. Don’t trust us—reproduce us.
          </p>
        }
        actions={
          <Link
            href="https://github.com/s8ken/SYMBI-Vault"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            View replication kit
          </Link>
        }
      />

      <AutoToc selector="#replication-article" />

      <article id="replication-article" className="space-y-16">
        <section className="space-y-6" id="kit">
          <h2 className="page-title text-2xl">Kit structure</h2>
          <div className="card-surface p-6">
            <code className="block whitespace-pre text-sm text-white/80">{kitFolders.map((folder) => `SYMBI-replication${folder}`).join("\n")}</code>
          </div>
          <p className="text-sm text-white/70">
            Each folder includes README.md files with execution steps. Outputs include CSV/Parquet metrics, JSON receipts,
            PDF export templates, and audit logs.
          </p>
        </section>

        <section className="space-y-6" id="receipts">
          <h2 className="page-title text-2xl">Receipt schema</h2>
          <p className="text-sm text-white/70">
            Receipts are signed with ed25519 keys, hash-chained, and exportable to SIEM. The schema below mirrors
            <code className="ml-1">SYMBI-vault/latex/arxiv/src/receipt_schema.json</code>.
          </p>
          <pre className="text-xs leading-relaxed text-[var(--color-cloud)]">{receiptExample}</pre>
        </section>

        <section className="space-y-4" id="proof-demo">
          <h2 className="page-title text-2xl">The /proof demo</h2>
          <p className="text-sm text-white/70">
            Toggle between Directive and SYMBI modes, inspect CIQ score deltas, and export a sample Trust Receipt. When
            the production API is ready, replace the mock with a signed response from <code className="ml-1">/api/proof</code>.
          </p>
          <ProofDemo />
        </section>

        <section className="space-y-6">
          <h2 className="page-title text-2xl">Replication steps</h2>
          <ol className="space-y-3 text-sm text-white/70">
            {steps.map((step, index) => (
              <li key={step} className="card-surface px-5 py-4">
                <span className="kicker mr-3">Step {index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-4" id="ethics">
          <div className="card-surface p-6">
            <h3 className="text-xl font-semibold text-white">Ethics & IRB posture</h3>
            <p className="mt-3 text-sm text-white/70">
              The kit includes rater instructions, exclusion criteria, and bias-testing guidelines. For institutional
              review, cite the Ethics appendix in the governance whitepaper and include Trust Articles as operational
              safeguards.
            </p>
          </div>
        </section>
      </article>

      <SeeAlso
        items={[
          { label: "RFCs — comment on the CIQ rubric & receipt schema", href: "/rfc" },
          { label: "Sovereignty — earned governance & Integrity Bonds", href: "/sovereignty" },
          { label: "Economic Constitution — how issuance & decay work", href: "/economic-constitution" },
          { label: "Vault — canonical whitepapers & specs", href: "/vault" },
        ]}
      />
    </main>
  );
}
