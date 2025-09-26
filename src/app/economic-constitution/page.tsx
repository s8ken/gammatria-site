export const metadata = { title: 'Economic Constitution — SYMBI' };

export default function EconomicConstitutionPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Economic Constitution</h1>
      
      <p className="text-lg mb-8"><strong>TL;DR:</strong> Open core; commercial attach; clear grant & audit lanes.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Public-Purpose & Red Lines</h2>
        <p className="mb-4">Our purpose is public: make human–AI collaboration measurably safer and more useful for everyone.</p>
        
        <p className="mb-2"><strong>We will not:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Sell governance power or introduce speculation into participation.</li>
          <li>Paywall the protocol, schemas, or verification tools.</li>
          <li>Hide safety incidents or governance decisions from the public record.</li>
          <li>Accept funding conditioned on content control, surveillance misuse, or exclusionary access.</li>
          <li>Ship changes without receipts, review, and a public timelock.</li>
        </ul>
        
        <p>These guardrails require <strong>supermajority</strong> approval across both houses to amend and a <strong>public 30-day comment</strong> window.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Revenue Pillars</h2>
        <ul className="list-disc pl-6">
          <li>SaaS (Orchestrator Cloud Pro)</li>
          <li>CIQ Audits</li>
          <li>Private Managed</li>
          <li>Marketplace rev-share</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Funding & Grants</h2>
        <ul className="list-disc pl-6">
          <li>ARC Discovery/Linkage (AU)</li>
          <li>Nordic programs (Vinnova, RCN, IFD, Business Finland)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Treasury & Controls</h2>
        <ul className="list-disc pl-6">
          <li>4-of-7 multisig</li>
          <li>Category caps</li>
          <li>Quarterly reports & external audits</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">License Posture</h2>
        <ul className="list-disc pl-6">
          <li>Text/figures: CC BY-NC-SA</li>
          <li>Code: MIT/Apache-2.0</li>
        </ul>
      </section>
    </div>
  );
}
