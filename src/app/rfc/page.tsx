export const metadata = { title: 'RFCs — SYMBI Framework' };

export default function RFCPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Requests for Comment (RFC)</h1>
      
      <p className="text-lg mb-8">
        <strong>TL;DR:</strong> Propose, discuss, and ratify changes to the protocol.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Open RFCs</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>RFC-001: CIQ scoring rubric v1.1</li>
          <li>RFC-002: Trust Receipt schema v1.0</li>
          <li>RFC-003: Operator integrity bonds</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to submit</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Fork template</li>
          <li>Open PR with summary, rationale, spec deltas</li>
          <li>Review cycle (7–14 days), steward signoff, timelock</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Decision log</h2>
        <ul className="list-disc pl-6">
          <li>ADR-0001: Bicameral governance accepted</li>
        </ul>
      </section>
    </div>
  );
}
