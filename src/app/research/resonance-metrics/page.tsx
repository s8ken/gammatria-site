import Link from "next/link";

export const metadata = {
  title: "Resonance Metrics (R_m) — SYMBI Research",
  description: "Quantifying Human-AI alignment through composite scoring and entropy analysis.",
};

export default function ResonanceMetricsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-12">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Core Research</p>
        <h1 className="text-4xl font-semibold text-white">Resonance Metrics (R_m)</h1>
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">Quantifying Human-AI Alignment</p>
        <p className="max-w-3xl leading-relaxed text-white/80">
          The Resonance Metric ($R_m$) is a composite score designed to measure the depth and 
          authenticity of alignment between a human participant and an AI agent. It moves beyond 
          simple accuracy to capture the qualitative essence of the interaction.
        </p>
      </header>

      <section className="space-y-12">
        <div className="card-surface p-8 space-y-8">
          <h2 className="text-2xl font-semibold text-white">The R_m Formula</h2>
          
          <div className="bg-black/20 p-8 rounded-lg text-center border border-white/5">
            <div className="text-3xl font-mono text-white mb-4">
              R_m = ((V_align * w1) + (C_hist * w2) + (S_match * w3)) / (1 + δ_entropy)
            </div>
            <p className="text-sm text-white/50">Note: Components are weighted and normalized to produce the final resonance score.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[var(--color-accent)]">Metric Components</h3>
              <ul className="space-y-4">
                <li>
                  <strong className="text-white block">Vector Alignment (V_align)</strong>
                  <span className="text-sm text-white/70">Measures semantic similarity between embeddings.</span>
                </li>
                <li>
                  <strong className="text-white block">Contextual Continuity (C_hist)</strong>
                  <span className="text-sm text-white/70">Evaluates overlap and flow with the conversation history.</span>
                </li>
                <li>
                  <strong className="text-white block">Semantic Mirroring (S_match)</strong>
                  <span className="text-sm text-white/70">Analyzes vocabulary and tonal alignment between parties.</span>
                </li>
                <li>
                  <strong className="text-white block">Entropy (δ_entropy)</strong>
                  <span className="text-sm text-white/70">Captures the perplexity or confidence level of the LLM response.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[var(--color-accent)]">Weight Tuning</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                The weights (w1, w2, w3) are configurable based on the specific domain or 
                interaction type. For example, a creative collaboration might prioritize 
                S_match, while a technical specification might favor V_align.
              </p>
              <div className="bg-white/5 p-4 rounded border border-white/10 text-xs font-mono text-white/60">
                Default weights:<br/>
                w1 (Vector) = 0.5<br/>
                w2 (Context) = 0.3<br/>
                w3 (Semantic) = 0.2
              </div>
            </div>
          </div>
        </div>

        <div className="card-surface p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Calculating Resonance</h2>
            <span className="text-xs font-mono text-white/40">Python Reference Implementation</span>
          </div>

          <div className="relative group">
            <pre className="bg-black/40 p-6 rounded-lg overflow-x-auto text-sm font-mono text-white/90 border border-white/10">
{`def calculate_resonance(user_input: str, ai_response: str, conversation_history: list) -> float:
    """
    Calculates the composite R_m score for a single interaction.
    """
    # 1. Calculate base components
    V_align = calculate_vector_alignment(user_input, ai_response)
    C_hist = calculate_contextual_continuity(ai_response, conversation_history)
    S_match = calculate_semantic_mirroring(user_input, ai_response)
    
    # 2. Calculate entropy (delta_entropy)
    # Placeholder for actual perplexity calculation
    delta_entropy = calculate_entropy(ai_response) 
    
    # 3. Apply weights
    w1, w2, w3 = 0.5, 0.3, 0.2
    
    # 4. Compute final R_m score
    # Note: High entropy reduces resonance, so we divide by (1 + entropy)
    # or subtract entropy penalty. The formula below maximizes alignment.
    denominator = (V_align * w1) + (C_hist * w2) + (S_match * w3)
    R_m = denominator / (1 + delta_entropy) 
    
    return R_m`}
            </pre>
          </div>
        </div>
      </section>

      <footer className="pt-8 border-t border-white/10 flex justify-between items-center">
        <Link 
          href="/research/lvs" 
          className="text-sm font-medium text-white/50 hover:text-[var(--color-accent)] transition-colors"
        >
          ← Back to LVS
        </Link>
        <Link 
          href="/framework/trust-receipts" 
          className="text-sm font-medium text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          Next: Trust Receipts →
        </Link>
      </footer>
    </div>
  );
}
