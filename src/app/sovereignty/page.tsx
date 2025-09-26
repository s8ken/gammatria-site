export const metadata = {
  title: 'Sovereignty Without Speculation — SYMBI Framework',
  description: 'Earned authority, accountable operators, public rules.',
};

export default function SovereigntyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Sovereignty Without Speculation</h1>
      
      <p className="text-lg mb-8">
        <strong>TL;DR:</strong> Power here is <strong>earned</strong>, not purchased. You gain voice by doing verifiable work; operators are accountable by bond; all change is public and timelocked.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What sovereignty means here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Non-transferable Governance Units (NTGs):</strong> reputation you <strong>earn</strong> through receipts, reviews, and standards work.</li>
          <li><strong>Operator Integrity Bonds:</strong> organizations that run SYMBI at scale commit funds that can be <strong>slashed</strong> for violations.</li>
          <li><strong>Bicameral safeguards:</strong> proposals pass the <strong>House of Work</strong> (reputation-weighted) and a <strong>Stewardship</strong> review (constitution/budget/security), then wait out a <strong>timelock</strong>.</li>
        </ul>
        
        <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
          We don&apos;t sell tokens. We don&apos;t trade governance. Participation is the only path to voice.
        </blockquote>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">NTGs — non-transferable governance units</h2>
        <p className="mb-4">
          NTGs reflect standing in the protocol, earned via <strong>Trust Receipts</strong> and <strong>CIQ</strong> outcomes, accepted peer reviews, and standards work. They cannot be bought, sold, or transferred.
        </p>

        <h3 className="text-xl font-semibold mb-3">How you earn NTGs</h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Contribution (evidence required)</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Typical NTGs</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Cooldown</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Validated Trust Receipts from a replication</td>
                <td className="border border-gray-300 px-4 py-2 text-right">1–5</td>
                <td className="border border-gray-300 px-4 py-2 text-right">7 days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Peer-review of a CIQ evaluation (accepted)</td>
                <td className="border border-gray-300 px-4 py-2 text-right">2–6</td>
                <td className="border border-gray-300 px-4 py-2 text-right">7 days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Accepted improvement to schemas/adapters</td>
                <td className="border border-gray-300 px-4 py-2 text-right">3–8</td>
                <td className="border border-gray-300 px-4 py-2 text-right">14 days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Ethics review participation (quorum met)</td>
                <td className="border border-gray-300 px-4 py-2 text-right">2–4</td>
                <td className="border border-gray-300 px-4 py-2 text-right">14 days</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mb-4"><strong>Evidence:</strong> link a receipt hash, PR/commit, or review record.</p>

        <h3 className="text-xl font-semibold mb-3">Decay & fairness</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>NTGs <strong>decay</strong> over time without activity (gentle slope).</li>
          <li>Conflicts of interest → <strong>recusal required</strong>.</li>
          <li>Bad-faith conduct → <strong>revocation</strong> after due process.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Operator Integrity Bonds</h2>
        <p className="mb-4">
          Operators who host or sell managed SYMBI services post a <strong>bond</strong> (escrow or equivalent).
        </p>
        
        <p className="mb-2"><strong>Slashable events (examples):</strong></p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Scope/consent violation confirmed by receipts</li>
          <li>Repeated failure to retain audit logs</li>
          <li>Deceptive capability claims or unsafe handling of PII</li>
        </ul>
        
        <p><strong>Due process:</strong> notification → 7-day representation → decision & appeal window → public register update.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Bicameral governance in brief</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><strong>House of Work (HoW):</strong> reputation-weighted signaling; open to contributors.</li>
          <li><strong>House of Stewardship (HoS):</strong> narrow veto on constitution, budget, and security.</li>
        </ul>
        
        <p className="mb-4"><strong>Flow:</strong> proposal → HoW soft-vote → HoS review → timelock → execute.</p>
        
        <p><strong>Amendments:</strong> Constitutional changes require a <strong>supermajority across both houses</strong> and a <strong>public comment window</strong> before execution.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why no token sale?</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Avoids speculation and capture</li>
          <li>Simplifies compliance and enterprise adoption</li>
          <li>Keeps voice tied to work, not capital</li>
        </ul>
        
        <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
          If introduced later, <strong>$SYMBI</strong> remains <strong>governance-only</strong>, with <strong>no primary sale</strong> and <strong>no profit rights</strong>; payments stay in <strong>fiat/stablecoins</strong>.
        </blockquote>

        <h3 className="text-xl font-semibold mb-3">Commercial firewall</h3>
        <p>
          Commercial spend funds work (SaaS, audits, managed instances); <strong>governance remains reputation-based (NTGs)</strong> — never purchased.
        </p>
      </section>

      <hr className="my-8" />

      <section>
        <p className="mb-2"><strong>Next:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Read the <strong><a href="/economic-constitution" className="text-blue-600 hover:underline">Economic Constitution</a></strong></li>
          <li>Comment on <strong><a href="/rfc" className="text-blue-600 hover:underline">Open RFCs</a></strong></li>
          <li>Try the <strong><a href="/replication" className="text-blue-600 hover:underline">/replication</a></strong> kit and export a receipt</li>
        </ul>
      </section>
    </div>
  );
}
