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
            through contributions, not purchased. This summary mirrors the canonical policy in the Vault.
          </p>
        }
      />

      <section className="mx-auto max-w-4xl space-y-6 px-4">
        <div className="card-surface space-y-4 p-6 text-sm text-white/70">
          <p><strong>Scope.</strong> Token may be deployed later; current system uses non-transferable Points. If deployed, $SYMBI is for parameter voting and quality staking.</p>
          <p><strong>What $SYMBI is not.</strong> Not an investment, security, loan, or deposit. No rights to profits, IP, or software access.</p>
          <p><strong>Distribution & access.</strong> No primary sale. Earn via published contribution criteria. Long-vesting allocations. Geographic restrictions may apply.</p>
          <p><strong>Payments & fees.</strong> All fees remain in fiat/stablecoins (SaaS, audits, managed instances). $SYMBI is not a fee unit.</p>
          <p><strong>Risks & abuse.</strong> Regulatory change, volatility, governance capture, smart-contract bugs. Abuse can forfeit participation or slash integrity bonds.</p>
          <p><strong>Contact.</strong> legal@symbi.world · Versioned at /legal/token-policy.</p>
        </div>
      </section>
    </div>
  );
}
