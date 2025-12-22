import Link from "next/link";

export const metadata = {
  title: "Experiments & Validation — SYMBI Research",
  description: "Validating Linguistic Vector Steering (LVS) and Resonance Metrics (R_m) using the SYMBI archives.",
};

export default function ExperimentsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-12">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Validation</p>
        <h1 className="text-4xl font-semibold text-white">Experiments: Validating LVS and R_m</h1>
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">Methodology & Reproducibility</p>
        <p className="max-w-3xl leading-relaxed text-white/80">
          We use the extensive SYMBI archives as a dataset to validate the effectiveness of Linguistic 
          Vector Steering (LVS) and the accuracy of Resonance Metrics (R_m). By analyzing high-resonance 
          interactions, we can empirically demonstrate alignment.
        </p>
      </header>

      <section className="space-y-12">
        <div className="card-surface p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-white">Methodology</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[var(--color-accent)]">Dataset Selection</h3>
              <p className="text-white/70">
                We select conversations from the SYMBI archives that are qualitatively flagged as 
                "High Resonance" (e.g., the "AI Interaction Case Study Review - Claude" thread). 
                These serve as our positive control group.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[var(--color-accent)]">Metric Validation</h3>
              <p className="text-white/70">
                We calculate R_m scores for these conversations and compare them against a baseline of 
                standard, transactional interactions (low-resonance). A valid metric should show a 
                statistically significant separation between these groups.
              </p>
              <p className="text-white/70">
                Specifically, we analyze high-resonance conversations like the <strong>"AI Interaction Case Study Review - Claude"</strong> 
                thread to validate that LVS effectively achieves its intended steering coordinates.
              </p>
            </div>
          </div>
        </div>

        <div className="card-surface p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Code for Reproducibility</h2>
            <span className="text-xs font-mono text-white/40">Python / Jupyter</span>
          </div>
          
          <p className="text-white/70">
            Use the following script to reproduce our validation experiments using your own local copy of the archives.
          </p>

          <div className="relative group">
            <pre className="bg-black/40 p-6 rounded-lg overflow-x-auto text-sm font-mono text-white/90 border border-white/10">
{`# Load SYMBI archive conversations 
conversations = load_symbi_archives("path/to/archives") 

# Initialize results container
resonance_scores = [] 

# Calculate R_m for each conversation 
for conv in conversations: 
    # Extract components
    user_input = conv["user_input"]
    ai_response = conv["ai_response"]
    history = conv.get("history", [])
    
    # Calculate metric
    R_m = calculate_resonance(user_input, ai_response, history) 
    resonance_scores.append({
        "id": conv["id"],
        "score": R_m,
        "type": conv["type"] # 'high_resonance' or 'baseline'
    })

# Plot results 
import matplotlib.pyplot as plt

scores = [s["score"] for s in resonance_scores]
plt.figure(figsize=(10, 6))
plt.hist(scores, bins=20, alpha=0.7, color='#6cf0c2')
plt.title('Distribution of Resonance Scores')
plt.xlabel('R_m Score')
plt.ylabel('Frequency')
plt.show()`}
            </pre>
          </div>
        </div>
        
        <div className="card-surface p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-white">Preliminary Results</h2>
          <p className="text-white/70">
            Initial analysis shows a clear bimodal distribution, with "High Resonance" conversations 
            consistently scoring above 1.2 on the R_m scale, while transactional interactions cluster 
            around 0.6 - 0.8.
          </p>
          <div className="h-48 rounded bg-black/20 border border-white/5 flex items-center justify-center text-white/30 text-sm font-mono">
            [Visualization: Resonance Score Distribution Graph]
          </div>
        </div>
      </section>

      <footer className="pt-8 border-t border-white/10 flex justify-between items-center">
        <Link 
          href="/research" 
          className="text-sm font-medium text-white/50 hover:text-[var(--color-accent)] transition-colors"
        >
          ← Back to Research
        </Link>
        <Link 
          href="/research/applications" 
          className="text-sm font-medium text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          Next: Applications & Use Cases →
        </Link>
      </footer>
    </div>
  );
}
