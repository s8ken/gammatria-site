import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

const principles = [
  "Relationship over computation",
  "Public-good core",
  "Protocol over product",
  "Sovereignty without speculation",
  "Memory as relationship",
];

const artifacts = [
  {
    title: "Trust Receipts",
    detail: "Signed, hash-chained artifacts capturing mode, CIQ scores, policy flags, and cryptographic lineage.",
  },
  {
    title: "Consent Articles",
    detail: "Seven policy checks spanning privacy, autonomy, integrity, security, and accountability.",
  },
  {
    title: "Attestation Envelope",
    detail: "Non-transferable attestations that power House of Work reputation without speculation.",
  },
  {
    title: "CIQ Metric",
    detail: "Clarity, breadth, safety, and completion scored across Directive vs SYMBI modes with paired analyses.",
  },
];

const methods = [
  {
    heading: "/proof Toggle",
    body: "Directive ↔ SYMBI A/B harness with exportable receipts, latency measurements, and CIQ deltas.",
  },
  {
    heading: "Selective Memory",
    body: "Context anchors and encrypted memory shards with hash lineage and expiry policies.",
  },
  {
    heading: "Governance Flow",
    body: "Proposal → House of Work signal → House of Stewardship review → Timelock → Execution, with emergency sunset clauses.",
  },
];

export default function FrameworkPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Framework"
        title="The SYMBI Framework"
        description={
          <p>
            A modular protocol for relational intelligence. This page is the citable overview: principles,
            artifacts, and methods. Canonical detail lives in the Vault; commercial implementations live at
            SYMBI-SYNERGY.
          </p>
        }
        actions={
          <>
            <Link
              href="/vault"
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Download whitepaper
            </Link>
            <Link
              href="https://symbi.world/proof"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Launch /proof demo
            </Link>
          </>
        }
      />

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <h2 className="page-title text-2xl">Principles</h2>
        <p className="text-sm text-white/70">
          These axioms ground every SYMBI deployment—academic, commercial, and eventually decentralized.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {principles.map((item) => (
            <li key={item} className="card-surface px-5 py-4 text-sm text-white/80">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <h2 className="page-title text-2xl">Core artifacts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {artifacts.map((artifact) => (
            <div key={artifact.title} className="card-surface p-5">
              <p className="kicker mb-2">{artifact.title}</p>
              <p className="text-sm text-white/70">{artifact.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <h2 className="page-title text-2xl">How it runs</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {methods.map((method) => (
            <div key={method.heading} className="card-surface p-5">
              <p className="kicker mb-2">{method.heading}</p>
              <p className="text-sm text-white/70">{method.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-4 px-4 pb-16">
        <div className="card-surface p-6">
          <h3 className="text-xl font-semibold text-white">Attribution</h3>
          <p className="mt-3 text-sm text-white/70">
            Foundational research, authorship, and stewardship by Stephen James Aitken in collaboration with the SYMBI
            community. Cite as: Aitken, S. J. & SYMBI Core (2025). SYMBI: A Constitutional Protocol for Relational
            Intelligence.
          </p>
        </div>
      </section>
    </div>
  );
}
