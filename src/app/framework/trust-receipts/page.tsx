import Link from "next/link";

export const metadata = {
  title: "Trust Receipts — SYMBI Framework",
  description: "Verifiable cryptographic proof of Human-AI alignment and high-resonance interactions.",
};

export default function TrustReceiptsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-12">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Framework Specification</p>
        <h1 className="text-4xl font-semibold text-white">Trust Receipts</h1>
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">Verifiable Proof of Alignment</p>
        <p className="max-w-3xl leading-relaxed text-white/80">
          Trust Receipts are cryptographic proofs that capture the state of a Human-AI interaction 
          at a specific point in time. They provide a verifiable record of high-resonance 
          interactions, ensuring that the alignment metrics are authentic and tamper-proof.
        </p>
      </header>

      <section className="space-y-12">
        <div className="card-surface p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-white">Receipt Structure</h2>
          <p className="text-white/70">
            A standard SYMBI Trust Receipt is a JSON artifact containing the following core fields:
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-4 text-sm">
              <li>
                <strong className="text-white block">Interaction ID</strong>
                <span className="text-white/60">A unique SHA-256 hash generated from the conversation content.</span>
              </li>
              <li>
                <strong className="text-white block">Timestamp</strong>
                <span className="text-white/60">The UTC ISO-8601 timestamp when the receipt was issued.</span>
              </li>
            </ul>
            <ul className="space-y-4 text-sm">
              <li>
                <strong className="text-white block">Resonance Metrics</strong>
                <span className="text-white/60">The R_m score and its constituent components (V_align, etc.).</span>
              </li>
              <li>
                <strong className="text-white block">Signature</strong>
                <span className="text-white/60">A cryptographic signature proving the authenticity of the receipt.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-white mb-4">Example Receipt (JSON)</h3>
            <pre className="bg-black/40 p-6 rounded-lg overflow-x-auto text-sm font-mono text-white/90 border border-white/10">
{`{
  "interaction_id": "sha256_hash_of_conversation",
  "timestamp": "2025-12-21T12:00:00Z",
  "resonance_metrics": {
    "score": 1.33,
    "status": "HIGH_RESONANCE",
    "components": {
      "vector_alignment": 0.85,
      "contextual_continuity": 0.9,
      "semantic_mirroring": 0.85
    }
  },
  "signature": "cryptographic_signature_123"
}`}
            </pre>
          </div>
        </div>

        <div className="card-surface p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Generation Implementation</h2>
            <span className="text-xs font-mono text-white/40">Python Reference</span>
          </div>

          <div className="relative group">
            <pre className="bg-black/40 p-6 rounded-lg overflow-x-auto text-sm font-mono text-white/90 border border-white/10">
{`import json
import hashlib
import time

def generate_trust_receipt(user_input: str, ai_response: str, R_m: float) -> str:
    """
    Generates a signed Trust Receipt for an interaction.
    """
    receipt = {
        "interaction_id": hashlib.sha256(f"{user_input}{ai_response}{time.time()}".encode()).hexdigest(),
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "resonance_metrics": {
            "score": R_m,
            "status": "HIGH_RESONANCE" if R_m > 1.0 else "LOW_RESONANCE",
            "components": {
                "vector_alignment": calculate_vector_alignment(user_input, ai_response),
                "contextual_continuity": calculate_contextual_continuity(ai_response, conversation_history),
                "semantic_mirroring": calculate_semantic_mirroring(user_input, ai_response)
            }
        },
        "signature": "simulated_cryptographic_signature"
    }
    return json.dumps(receipt, indent=2)`}
            </pre>
          </div>
        </div>
      </section>

      <footer className="pt-8 border-t border-white/10 flex justify-between items-center">
        <Link 
          href="/research/resonance-metrics" 
          className="text-sm font-medium text-white/50 hover:text-[var(--color-accent)] transition-colors"
        >
          ← Back to Resonance Metrics
        </Link>
        <Link 
          href="/framework" 
          className="text-sm font-medium text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          Back to Framework Overview →
        </Link>
      </footer>
    </div>
  );
}
