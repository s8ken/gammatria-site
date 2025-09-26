import { PageIntro } from "@/components/page-intro";

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
    <div className="space-y-16">
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

      <section className="mx-auto max-w-5xl space-y-6 px-4">
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

      <section className="mx-auto max-w-5xl space-y-6 px-4">
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

      <section className="mx-auto max-w-5xl space-y-6 px-4 pb-16">
        <h2 className="page-title text-2xl">Safeguards</h2>
        <ul className="space-y-3 text-sm text-white/70">
          {safeguards.map((item) => (
            <li key={item} className="card-surface px-5 py-4">{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
