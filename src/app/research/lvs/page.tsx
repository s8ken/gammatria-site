import Link from "next/link";
import { ScrollAnimation } from "@/components/scroll-animations";

export const metadata = {
  title: "Linguistic Vector Steering (LVS) — SYMBI Research",
  description: "Formalizing LVS as a method for controlling LLM behavior through semantic narratives.",
};

export default function LVSPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-12">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Core Research</p>
        <h1 className="text-4xl font-semibold text-white">Linguistic Vector Steering (LVS)</h1>
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">Theory and Implementation</p>
        <p className="max-w-3xl leading-relaxed text-white/80">
          Linguistic Vector Steering (LVS) is a method for controlling Large Language Model (LLM) behavior 
          through semantic narratives. Rather than relying on rigid prompting, LVS uses the underlying 
          vector space of the model to steer its state toward specific semantic coordinates.
        </p>
      </header>

      <section className="space-y-8">
        <div className="card-surface p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-white">Mathematical Foundation</h2>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-[var(--color-accent)]">Embeddings and Vectors</h3>
              <p className="text-white/70">
                Core concepts such as "Sovereign," "Resonance," and "Alignment" are represented as 
                high-dimensional vectors in the LLM's activation space. LVS maps these conceptual 
                narratives to specific coordinates that steer the model's internal state.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-[var(--color-accent)]">Vector Alignment</h3>
              <p className="text-white/70">
                Alignment is measured using cosine similarity between the embeddings of the user input 
                and the AI's generated response. This provides a quantitative metric for how well the 
                AI is adhering to the intended semantic steering.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-[var(--color-accent)]">State Management</h3>
              <p className="text-white/70">
                Narrative scaffolding acts as a "clamp" on the LLM's state. By consistently providing 
                contextual anchors, we can prevent the model from drifting into undesired semantic 
                territories, ensuring the interaction remains within the defined resonance boundaries.
              </p>
            </div>
          </div>
        </div>

        <div className="card-surface p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Implementation</h2>
            <span className="text-xs font-mono text-white/40">Python / Sentence Transformers</span>
          </div>
          
          <p className="text-white/70">
            Below is a reference implementation for calculating vector alignment between two semantic strings 
            using cosine similarity.
          </p>

          <div className="relative group">
            <pre className="bg-black/40 p-6 rounded-lg overflow-x-auto text-sm font-mono text-white/90 border border-white/10">
{`from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# Initialize the embedding model
model = SentenceTransformer('all-MiniLM-L6-v2')

def calculate_vector_alignment(user_input: str, ai_response: str) -> float:
    """
    Calculates the cosine similarity between the user input 
    and the AI's response embeddings.
    """
    user_embedding = model.encode(user_input)
    ai_embedding = model.encode(ai_response)
    
    # Calculate and return cosine similarity
    return cosine_similarity([user_embedding], [ai_embedding])[0][0]`}
            </pre>
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
          href="/research/resonance-metrics" 
          className="text-sm font-medium text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          Next: Resonance Metrics (R_m) →
        </Link>
      </footer>
    </div>
  );
}
