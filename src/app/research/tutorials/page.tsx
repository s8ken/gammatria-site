import Link from "next/link";

export const metadata = {
  title: "Tutorials & Guides — SYMBI Research",
  description: "Step-by-step guides for implementing Resonance Metrics and generating Trust Receipts.",
};

export default function TutorialsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-12">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Learning</p>
        <h1 className="text-4xl font-semibold text-white">Tutorials: Implementing LVS and R_m</h1>
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">Hands-on Implementation Guides</p>
        <p className="max-w-3xl leading-relaxed text-white/80">
          Ready to implement the SYMBI framework in your own projects? These guides provide 
          step-by-step instructions and code snippets to get you started.
        </p>
      </header>

      <section className="space-y-12">
        <div className="card-surface p-8 space-y-8">
          <h2 className="text-2xl font-semibold text-white">1. How to Calculate R_m</h2>
          <div className="space-y-4">
            <p className="text-white/70">To calculate the Resonance Metric for a conversation, follow these steps:</p>
            <ol className="list-decimal list-inside space-y-4 text-white/80 marker:text-[var(--color-accent)] marker:font-bold">
              <li>Generate embeddings for the user input and the AI response using a compatible model (e.g., MiniLM).</li>
              <li>Calculate the cosine similarity (V_align) between these embeddings.</li>
              <li>Extract the entropy/perplexity from the LLM response object.</li>
              <li>Apply the weights as specified in our <Link href="/research/resonance-metrics" className="text-[var(--color-accent)] hover:underline">Resonance Metrics</Link> page.</li>
            </ol>
          </div>
          
          <div className="bg-black/40 p-6 rounded-lg border border-white/10">
            <h3 className="text-sm font-mono text-white/40 mb-4 uppercase">Python Snippet</h3>
            <pre className="text-sm font-mono text-white/90 overflow-x-auto">
{`# Simple R_m implementation
def get_quick_resonance(input_text, response_text):
    v_align = model.encode_similarity(input_text, response_text)
    entropy = get_model_entropy(response_text)
    
    # Using standard weights
    return (1 + entropy) / (v_align * 0.5 + 0.5)`}
            </pre>
          </div>
        </div>

        <div className="card-surface p-8 space-y-8">
          <h2 className="text-2xl font-semibold text-white">2. Generating Trust Receipts</h2>
          <div className="space-y-4">
            <p className="text-white/70">Once you have your R_m score, you can package it into a verifiable Trust Receipt.</p>
            <div className="bg-black/40 p-6 rounded-lg border border-white/10">
              <h3 className="text-sm font-mono text-white/40 mb-4 uppercase">Python Snippet</h3>
              <pre className="text-sm font-mono text-white/90 overflow-x-auto">
{`from symbi_framework import TrustReceipt

# Create and sign receipt
receipt = TrustReceipt.issue(
    interaction_id="...",
    metrics={"score": 1.45, "status": "HIGH_RESONANCE"}
)

print(receipt.to_json())`}
              </pre>
            </div>
          </div>
        </div>

        <div className="card-surface p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-white">3. Integration with SONATE</h2>
          <p className="text-white/70 leading-relaxed">
            For users of the **Yseeku Platform**, integrating LVS is as simple as plugging into the 
            <code>@sonate/detect</code> module. This module provides real-time monitoring of R_m 
            across all your AI endpoints.
          </p>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
            <Link 
              href="https://yseeku.com" 
              className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)] hover:opacity-80 transition-opacity"
            >
              Explore SONATE API Docs ↗
            </Link>
          </div>
        </div>
      </section>

      <footer className="pt-8 border-t border-white/10 flex justify-between items-center">
        <Link 
          href="/research/applications" 
          className="text-sm font-medium text-white/50 hover:text-[var(--color-accent)] transition-colors"
        >
          ← Back to Applications
        </Link>
        <Link 
          href="/ecosystem" 
          className="text-sm font-medium text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          Explore Ecosystem →
        </Link>
      </footer>
    </div>
  );
}
