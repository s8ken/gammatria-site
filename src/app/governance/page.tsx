import { PageIntro } from "@/components/page-intro";
import AutoToc from "@/components/AutoToc";
import SeeAlso from "@/components/SeeAlso";

const houses = [
  {
    name: "House of Work",
    role: "Reputation-weighted signaling from non-transferable attestations derived from Trust Receipts and CIQ outcomes.",
    details: [
      "Thresholds: quorum 35%, soft-majority >= 55%",
      "Reputation decays after 45 days of inactivity",
      "Integrity incidents reduce voting weight until remediation",
    ],
  },
  {
    name: "House of Stewardship",
    role: "Time-bound steward council with narrow veto on constitution, budget, and security upgrades.",
    details: [
      "Seven seats, staggered 12-month terms",
      "Veto window: 96 hours after HoW pass",
      "Emergency sunset powers require 4/7 supermajority",
    ],
  },
];

const safeguards = [
  "Proposal registry with hash-stamped drafts, public discussion, and impact assessments.",
  "Timelock minimum 72 hours; urgent upgrades require dual attestation with public rationale.",
  "Incident response: transparency report within 7 days, remediation plan, and voting on acceptance.",
];

export default function GovernancePage() {
  return (
    <main className="mx-auto max-w-5xl space-y-10 px-4 pb-16 pt-10">
      <PageIntro
        kicker="Governance"
        title="Bicameral governance & change control"
        description={
          <p>
            Governance separates signal (House of Work) from stewardship (House of Stewardship). Every material change to
            SYMBI—articles, metrics, funding—flows through this pipeline with timelocks, emergency brakes, and recorded
            votes.
          </p>
        }
      />

      <AutoToc selector="#governance-article" />

      <article id="governance-article" className="space-y-12">
        <section className="space-y-6">
          <h2 className="page-title text-2xl">Houses</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {houses.map((house) => (
              <div key={house.name} className="card-surface p-6">
                <p className="kicker mb-2">{house.name}</p>
                <p className="text-sm text-white/70">{house.role}</p>
                <ul className="mt-4 space-y-2 text-xs text-white/60">
                  {house.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="page-title text-2xl">Proposal flow</h2>
          <div className="card-surface space-y-4 p-6">
            <ol className="space-y-3 text-sm text-white/70">
              <li>
                <span className="font-semibold text-white">1. Draft & due diligence.</span> Submit proposal with impact memo,
              threat assessment, and required resource plan. Logged in transparent registry.
            </li>
            <li>
              <span className="font-semibold text-white">2. House of Work soft vote.</span> Reputation-weighted signal. Passing threshold triggers hand-off to House of
              Stewardship.
            </li>
            <li>
              <span className="font-semibold text-white">3. House of Stewardship review.</span> Steward council approves, amends, or vetoes within 96 hours. Decisions with
              rationale are recorded.
            </li>
            <li>
              <span className="font-semibold text-white">4. Timelock & execution.</span> Approved proposals wait ≥72 hours before implementation. Emergency sunsets require
              supermajority from both houses.
              </li>
            </ol>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="page-title text-2xl">Safeguards</h2>
          <ul className="space-y-3 text-sm text-white/70">
            {safeguards.map((item) => (
              <li key={item} className="card-surface px-5 py-4">{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="page-title text-2xl">Principles</h2>
          <div className="card-surface p-6 text-sm text-white/80">
            <p><strong>Core principles:</strong> Relationship over computation; Public-good core; Protocol over product; Sovereignty without speculation.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="page-title text-2xl">Roles & Artifacts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-surface p-6">
              <p className="kicker mb-2">Participants</p>
              <p className="text-sm text-white/70">Non-transferable reputation holders who contribute signalling and review. Reputation is earned and may decay for inactivity or incidents.</p>
            </div>
            <div className="card-surface p-6">
              <p className="kicker mb-2">Operators</p>
              <p className="text-sm text-white/70">Run services, hold operator integrity bonds, and follow quality policies; stake may be slashed for violations.</p>
            </div>
            <div className="card-surface p-6">
              <p className="kicker mb-2">Stewards</p>
              <p className="text-sm text-white/70">Institute members and elected community stewards who exercise narrow stewardship powers and constitutional review.</p>
            </div>
          </div>

          <div className="card-surface p-6 mt-4 text-sm text-white/70">
            <p><strong>Artifacts:</strong> Trust Receipts (signed, hash-chained), Attestation envelopes (non-transferable attestations), and formal Specs (Articles, schemas, adapters) used to drive audits and reputation.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="page-title text-2xl">Reputation & Integrity</h2>
          <div className="card-surface p-6 text-sm text-white/80">
            <p>Reputation is earned (not bought), driven by Trust Receipts and CIQ outcomes, peer review, and contribution to standards. Reputation decays with inactivity or verified incidents. Operator integrity mechanisms include stake-slash, rotating reviewers, and auditable trails for remediation and dispute resolution.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="page-title text-2xl">Token Posture (optional)</h2>
          <div className="card-surface p-6 text-sm text-white/80">
            <p>The token posture is optional and designed to avoid financialisation of governance: tokens (if introduced later) would represent governance parameters and integrity bonds only — no dividends, buybacks, or redemption. Payments for services remain fiat or stablecoins; no public speculative sale is planned under this posture.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="page-title text-2xl">Treasury & Public Goods</h2>
          <div className="card-surface p-6 text-sm text-white/80">
            <p>Treasury revenues are expected from SaaS, CIQ audits, managed instances, and marketplace revenue share. Controls include a multi-signature (4-of-7) custody, category spend caps, quarterly reporting, and external audits. The treasury prioritises public-goods funding, operational runway, and audit resources.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="page-title text-2xl">Progressive Sovereignty & Risks</h2>
          <div className="card-surface p-6 text-sm text-white/80">
            <p>SYMBI follows a phased path (Phase 0 → Phase 3) from Institute guardianship to community self-governance. Key risks include regulatory changes, capture, model drift, collusion, and software bugs. Mitigations include timelocks, audit trails, continuity protocols (ECHO-01), emergency sunsets, and multi-stakeholder review processes.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="page-title text-2xl">License</h2>
          <div className="card-surface p-6 text-sm text-white/80">
            <p>Whitepapers and canonical artifacts are licensed CC BY-NC-SA 4.0 unless otherwise stated. Code is licensed MIT or Apache-2.0 as indicated in individual files.</p>
          </div>
        </section>
      </article>

      <SeeAlso
        items={[
          {
            label: "Economic Constitution — issuance, decay, and bond policy",
            href: "/economic-constitution",
          },
          { label: "RFCs — comment on live proposals", href: "/rfc" },
          { label: "Sovereignty — NTGs & Integrity Bonds", href: "/sovereignty" },
          { label: "Replication — reproduce results and export receipts", href: "/replication" },
          { label: "Vault — canonical whitepapers & specs", href: "/vault" },
        ]}
      />
    </main>
  );
}
