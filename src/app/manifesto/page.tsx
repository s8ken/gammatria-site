export const metadata = {
  title: 'SYMBI Manifesto — Rebel with Receipts',
  description: 'Why we exist and what we refuse to compromise.',
};

export default function ManifestoPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Rebel with Receipts</h1>
      
      <p className="text-lg mb-6">
        The system didn&apos;t fail because people didn&apos;t care; it failed because outcomes weren&apos;t measured and power wasn&apos;t accountable.
      </p>
      <p className="text-lg mb-8">
        SYMBI&apos;s bet: <strong>relationships over raw computation</strong> and <strong>receipts over rhetoric</strong>.
      </p>

      <ul className="space-y-4 mb-8">
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <div>
            <strong>Everyone can verify.</strong> Core protocol, schemas, and the /proof toggle are free.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <div>
            <strong>Voice is earned.</strong> Non-transferable governance units (NTGs) reflect real work—never money.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <div>
            <strong>Power has brakes.</strong> Bicameral review, timelocks, and public receipts for every decision.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <div>
            <strong>Operators are accountable.</strong> Integrity bonds and due process, in public.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-2">•</span>
          <div>
            <strong>No speculation.</strong> No token sale; governance remains participation-only.
          </div>
        </li>
      </ul>

      <p className="text-lg font-semibold">
        <strong>If we ever drift, pull us back.</strong> File an RFC, challenge a receipt, call us to the Open Call—then check the log to see what changed.
      </p>
    </div>
  );
}
