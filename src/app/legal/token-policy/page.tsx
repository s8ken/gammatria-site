import { PageIntro } from "@/components/page-intro";

export default function TokenPolicyPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Legal"
        title="$SYMBI token policy"
        description={
          <p>
            Governance-only token. No dividends, buybacks, redemption, or expectation of profit. Participation is earned
            through contributions, not purchased. This summary mirrors the canonical policy and clarifies operational
            mechanics, distribution, and compliance posture.
          </p>
        }
      />

      <section className="mx-auto max-w-4xl space-y-6 px-4">
        <div className="card-surface space-y-4 p-6 text-sm text-white/70">
          <p><strong>Executive summary.</strong> The $SYMBI token (if deployed) is a governance and quality-assurance instrument only — designed to avoid financialisation of governance. Tokens are earned through contribution and quality (CIQ/Trust Receipts) rather than sold as an investment. All commercial fees remain in fiat/stablecoins.</p>

          <h3 className="mt-4 font-semibold text-white">Core principles</h3>
          <ul className="list-disc pl-6 text-sm text-white/70">
            <li><strong>No investment expectation:</strong> $SYMBI confers governance voice and quality-staking utilities, not profit rights.</li>
            <li><strong>Governance-only utility:</strong> Primary purpose is parameter voting, quality staking, and protocol operations.</li>
            <li><strong>Earned distribution:</strong> Tokens are allocated for contribution, not sold in primary markets.</li>
            <li><strong>Compliance-first:</strong> Legal opinions, monitoring, and adaptive controls underpin policy.</li>
          </ul>

          <h3 className="mt-4 font-semibold text-white">Distribution & mechanics</h3>
          <p className="text-sm text-white/70">
            The reference economics use a fixed-supply model to minimise inflationary pressures and speculation:
          </p>
          <ul className="list-disc pl-6 text-sm text-white/70">
            <li><strong>Total supply:</strong> 1,000,000,000 $SYMBI (fixed).</li>
            <li><strong>Initial distribution:</strong> 100,000,000 (10%) allocated to founding contributors with vesting (4 years, 1-year cliff).</li>
            <li><strong>Community pool:</strong> 900,000,000 (90%) reserved for earned distribution based on contribution criteria.</li>
            <li><strong>Allocation model:</strong> Token_Allocation = Base_Contribution × Quality_Multiplier × Consistency_Bonus × Time_Factor — where quality is CIQ-derived.</li>
            <li><strong>Staking & slashing:</strong> Quality staking and validator bonding secure Trust Receipt validation; dishonest behaviour is subject to slashing (burn) and penalties.</li>
            <li><strong>Circulation controls:</strong> Earned release, staking lock-ups, burn on slashing, and vesting reduce speculative velocity.</li>
          </ul>

          <h3 className="mt-4 font-semibold text-white">Governance functions</h3>
          <p className="text-sm text-white/70">
            Tokens enhance governance participation but do not replace reputation-first controls:
          </p>
          <ul className="list-disc pl-6 text-sm text-white/70">
            <li><strong>Weighted voting:</strong> Token holdings provide additional voting weight for parameter decisions.</li>
            <li><strong>Proposal thresholds:</strong> Minimum token holdings required to submit certain classes of proposals; reputation remains primary for many flows.</li>
            <li><strong>Delegation:</strong> Token-based delegation available to trusted delegates.</li>
            <li><strong>Quorums:</strong> Minimum participation thresholds ensure legitimacy of token-weighted votes.</li>
          </ul>

          <h3 className="mt-4 font-semibold text-white">Regulatory & legal posture</h3>
          <p className="text-sm text-white/70">
            The policy emphasises proactive compliance and documentation:
          </p>
          <ul className="list-disc pl-6 text-sm text-white/70">
            <li><strong>Howey analysis:</strong> Design choices (no primary sale, earned distribution, explicit no-profit disclosures) aim to reduce securities risk.</li>
            <li><strong>Legal monitoring:</strong> Continuous regulatory tracking and periodic legal opinions ensure adaptation to jurisdictional developments.</li>
            <li><strong>Operational controls:</strong> KYC/AML for significant allocations, geographic restrictions, and audit trails for transparency.</li>
            <li><strong>Disclaimers:</strong> Prominent investment disclaimers and risk disclosures accompany any token-related documentation.</li>
          </ul>

          <h3 className="mt-4 font-semibold text-white">Quality & economic security</h3>
          <p className="text-sm text-white/70">
            Tokens integrate with quality mechanisms to align incentives:
          </p>
          <ul className="list-disc pl-6 text-sm text-white/70">
            <li><strong>CIQ staking:</strong> Stake tokens predicting CIQ outcomes to underwrite quality claims; honest stakers earn rewards from penalty pools.</li>
            <li><strong>Validator bonding:</strong> Validators bond tokens as economic security; slashing for dishonest validation reduces supply and funds rewards.</li>
            <li><strong>Anti-gaming:</strong> Slashing conditions, economic costs, and monitoring reduce incentives for manipulation.</li>
          </ul>

          <h3 className="mt-4 font-semibold text-white">Implementation roadmap (illustrative)</h3>
          <ol className="list-decimal pl-6 text-sm text-white/70 space-y-2">
            <li><strong>Phase 1 — Foundation (Months 1–6):</strong> Legal framework, core smart contracts, vesting, and governance integration tests.</li>
            <li><strong>Phase 2 — Community distribution (Months 7–18):</strong> Earned distribution, CIQ staking launch, validator network trials.</li>
            <li><strong>Phase 3 — Ecosystem maturity (Months 19+):</strong> Decentralised operations, cross-protocol integrations, advanced delegation features.</li>
          </ol>

          <h3 className="mt-4 font-semibold text-white">Risks & mitigations</h3>
          <p className="text-sm text-white/70">
            Principal risks include securities classification, governance capture, economic attack vectors, and jurisdictional complexity. Mitigations are proactive legal counsel, reputation-weighted governance, slashing economics, and emergency governance protocols.
          </p>

          <p className="mt-4 text-xs text-white/60">Document version: 1.0 — This summary does not constitute legal advice. Contact: legal@symbi.world</p>
        </div>
      </section>
    </div>
  );
}
