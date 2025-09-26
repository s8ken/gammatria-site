import { PageIntro } from "@/components/page-intro";
import Link from "next/link";

const collections = [
  {
    title: "Partner Pack",
    items: ["One-pager", "5-slide deck", "Pilot SOW", "Integration checklist"],
    path: "partner-pack",
  },
  {
    title: "Website Copy",
    items: ["Governance", "Token policy", "Pricing", "Security snippet", "/proof page"],
    path: "website-copy",
  },
  {
    title: "Whitepapers",
    items: ["Governance whitepaper", "Operating/financial paper", "Token policy"],
    path: "whitepapers",
  },
  {
    title: "Academic",
    items: ["Preprint template", "Prereg template", "Replication kit", "Cover letter"],
    path: "academic",
  },
  {
    title: "LaTeX",
    items: ["arXiv bundle", "ACM CHI template", "Receipt schema", "Makefile"],
    path: "latex",
  },
  {
    title: "Branding",
    items: ["Palette", "Typography"],
    path: "branding",
  },
  {
    title: "Backend",
    items: ["TrustBond model", "Trust Oracle", "Controllers", "Routes", "Metrics"],
    path: "backend",
  },
  {
    title: "Frontend",
    items: ["Trust dashboard component", "Trust scoring demo"],
    path: "frontend",
  },
];

export default function VaultPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Vault"
        title="Canonical artifact portal"
        description={
          <p>
            The Vault is the master repository for partner materials, whitepapers, academic kits, backend code, and
            frontend demos. Gammatria links here; it never copies. Verify file integrity via published SHA-256 checksums.
          </p>
        }
        actions={
          <Link
            href="https://github.com/s8ken/SYMBI-Vault"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Open repository
          </Link>
        }
      />

      <section className="mx-auto max-w-6xl space-y-8 px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {collections.map((collection) => (
            <div key={collection.title} className="card-surface p-6">
              <p className="kicker mb-2">{collection.title}</p>
              <ul className="space-y-1 text-sm text-white/70">
                {collection.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                href={`https://github.com/s8ken/SYMBI-Vault/tree/main/${collection.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)]"
              >
                Browse {collection.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="card-surface space-y-4 p-6 text-sm text-white/70">
          <p>Licensing: Text and figures — CC BY-NC-SA 4.0. Code — MIT or Apache-2.0 (see file headers).</p>
          <p>Checksums: Each export includes .sha256 manifests. Verify before redistribution.</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-white">Governance whitepaper — summary</h2>
        <div className="card-surface p-6 text-sm text-white/80">
          <p><strong>Title:</strong> SYMBI: A Constitutional Protocol for Relational Intelligence (v1.0)</p>
          <p><strong>Date:</strong> 25 Sep 2025</p>
          <p><strong>Summary:</strong> SYMBI measures and improves human–AI collaboration quality. Core clients are free. Governance steers safety, integrity, public-goods funding, and a path to sovereignty without financialising access.</p>

          <h3 className="mt-4 font-semibold text-white">Key principles</h3>
          <ul className="list-disc pl-6 text-sm text-white/70">
            <li>Relationship over computation</li>
            <li>Public-good core</li>
            <li>Protocol over product</li>
            <li>Sovereignty without speculation</li>
          </ul>

          <h3 className="mt-4 font-semibold text-white">Governance model</h3>
          <p className="text-sm text-white/70">
            SYMBI adopts a bicameral model: a reputation-weighted House of Work (HoW) for signalling and a House of Stewardship (HoS) that holds narrow veto powers over constitutional, budgetary, and security matters.
            The proposal flow is: proposal → HoW soft-vote → HoS review → timelock → execution. Safeguards include quorums, supermajorities for constitutional changes, and emergency sunset clauses.
          </p>

          <h3 className="mt-4 font-semibold text-white">Reputation & integrity</h3>
          <p className="text-sm text-white/70">
            Reputation is earned, derived from Trust Receipts, CIQ outcomes, and peer review. Reputation decays with inactivity or verified incidents. Operators hold integrity bonds that can be slashed for violations; rotating reviewers and auditable trails support remediation.
          </p>

          <h3 className="mt-4 font-semibold text-white">Token posture & treasury</h3>
          <p className="text-sm text-white/70">
            Token issuance is optional and designed to avoid financialisation: tokens, if introduced, would parameterise governance and integrity bonds only — no dividends, buybacks, or redemption. Treasury revenues are expected from SaaS, CIQ audits, managed instances, and marketplace revenue share. Controls include a 4-of-7 multisig, category spend caps, quarterly reporting, and external audits. The treasury prioritises public-goods funding and operational runway.
          </p>

          <h3 className="mt-4 font-semibold text-white">Progressive sovereignty & risks</h3>
          <p className="text-sm text-white/70">
            SYMBI advances through phases (0 to 3) from Institute guardianship to community self-governance. Key risks include regulatory change, capture, model drift, collusion, and software bugs. Mitigations include timelocks, audit trails, continuity protocols (ECHO-01), and multi-stakeholder review.
          </p>

          <p className="mt-4 text-xs text-white/60">License: CC BY-NC-SA 4.0</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-white">Operating & Financial — summary</h2>
        <div className="card-surface p-6 text-sm text-white/80">
          <p><strong>Title:</strong> Relational Intelligence as a Service — SYMBI Operating Model (v1.0)</p>
          <p><strong>Date:</strong> 25 Sep 2025</p>

          <h3 className="mt-4 font-semibold text-white">Products & Pricing</h3>
          <p className="text-sm text-white/70">
            Core offerings include an Orchestrator Cloud (free to Pro at approximately 29 to 49 USD per user per month or 0.50 to 2 USD per 1k interactions),
            CIQ Audits (tiered: 5k, 15k, 50k USD), Private Managed instances (60k to 250k USD per year), and a Marketplace revenue-share (15 to 30 percent).
          </p>

          <h3 className="mt-4 font-semibold text-white">Sales motion & forecast</h3>
          <p className="text-sm text-white/70">
            Typical enterprise motion: Pilot-in-a-Box (approximately 25k USD for 4 weeks) leading to CIQ Audit and executive readout, then enterprise attach and SaaS expansion.
            Illustrative forecast: 10 pilots per quarter (about 250k USD), with conversion and MRR ramp to 20k to 50k USD by month 9 and ARR in the low millions under conservative assumptions.
          </p>

          <h3 className="mt-4 font-semibold text-white">Security & compliance</h3>
          <p className="text-sm text-white/70">
            Operational posture includes BYO keys, prevention of data exfiltration, SIEM export hooks, audit logs, retention controls, and roadmaps for DPA, SOC2, and ISO certifications.
          </p>

          <h3 className="mt-4 font-semibold text-white">Legal posture</h3>
          <p className="text-sm text-white/70">
            Non-custodial model; payments in fiat or stablecoins; the initial stance is no token sale. Jurisdiction-aware promotions and clear risk disclosures are standard.
          </p>

          <p className="mt-4 text-xs text-white/60">License: CC BY-NC-SA 4.0</p>
        </div>
      </section>
    </div>
  );
}
