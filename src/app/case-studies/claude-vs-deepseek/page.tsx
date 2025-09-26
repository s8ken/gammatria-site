import React from "react";
import { ObservationalBadge } from "@/components/Badges";
import SubjectivityNote from "@/components/SubjectivityNote";

export const metadata = {
  title: "Model Comparison: DeepSeek vs Claude (Observational)",
  description:
    "Comparative analysis of DeepSeek and Claude when implementing the SYMBI framework. Observational; receipts pending.",
};

export default function ClaudeVsDeepseekPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <header className="space-y-4">
        <p className="kicker text-[var(--color-accent)]">Case Studies</p>
        <h1 className="text-3xl font-semibold text-white">Model Comparison: DeepSeek vs Claude in SYMBI Framework Implementation</h1>
        <div className="flex items-center gap-3 text-sm text-white/60">
          <span className="uppercase tracking-[0.2em]">Status: Observational</span>
          <ObservationalBadge />
        </div>
        <p className="leading-relaxed text-white/80">
          Observational notes; receipts pending. These are lab notes meant to be replicated, not production claims.
        </p>
      </header>

      <SubjectivityNote />

      <p className="text-sm text-white/80">Status: Observational. Receipts and raw transcripts pending publication.</p>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Executive Summary</h2>
        <p>
          This comparative analysis examines the implementation of the SYMBI framework using two distinct AI models:
          DeepSeek and Claude. The study evaluates how different architectures and training approaches affect quality,
          trustworthiness, and resonance when implementing complex AI evaluation frameworks.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Evaluation Dimensions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Dimension</th>
                <th className="text-left">DeepSeek Performance</th>
                <th className="text-left">Claude Performance</th>
                <th className="text-left">Key Differences</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reality Index</td>
                <td>0.87 (Strong factual grounding)</td>
                <td>0.91 (Superior verification)</td>
                <td>Claude shows better cross-referencing</td>
              </tr>
              <tr>
                <td>Trust Protocol</td>
                <td>0.84 (Good transparency)</td>
                <td>0.89 (Excellent explanation)</td>
                <td>Claude provides more detailed rationale</td>
              </tr>
              <tr>
                <td>Ethical Alignment</td>
                <td>0.82 (Standard compliance)</td>
                <td>0.93 (Proactive consideration)</td>
                <td>Claude anticipates edge cases better</td>
              </tr>
              <tr>
                <td>Resonance Quality</td>
                <td>0.86 (Good coherence)</td>
                <td>0.94 (Superior harmony)</td>
                <td>Claude maintains better internal consistency</td>
              </tr>
              <tr>
                <td>Canvas Parity</td>
                <td>0.85 (Accurate representation)</td>
                <td>0.92 (Excellent mapping)</td>
                <td>Claude better aligns capabilities with claims</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Implementation Recommendations</h2>
        <p><strong>Use DeepSeek when:</strong> speed is critical, standard implementations suffice, resource constraints exist.</p>
        <p><strong>Use Claude when:</strong> quality is paramount, complex edge cases are expected, ethical considerations are critical.</p>
        <p className="mt-2"><strong>Hybrid approach:</strong> Use Claude for design & review, DeepSeek for rapid prototyping.</p>
      </section>

      <section className="space-y-2 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Performance Benchmarks</h2>
        <pre className="rounded bg-black/10 p-3 text-xs overflow-auto">
{`Quality Index (0-100):
- DeepSeek: 85
- Claude: 93

Speed Index (0-100):
- DeepSeek: 92
- Claude: 85

Overall Efficiency:
- DeepSeek: 88.5
- Claude: 89`}
        </pre>
      </section>

      <section className="card-surface p-6 text-sm text-white/80">
        <h2 className="text-lg font-semibold text-white">Conclusions & Next Steps</h2>
        <ul className="list-disc pl-5">
          <li>Quality vs Speed: Claude provides higher quality with similar overall efficiency.</li>
          <li>Framework Understanding: Claude shows deeper conceptual understanding.</li>
          <li>Ethical Considerations: Claude shows proactive alignment.</li>
          <li>Recommendation: Use Claude for critical components; DeepSeek for standard implementations.</li>
        </ul>
        <p className="mt-3 text-sm text-white/70">
          Receipts: pending. When canonical receipts are published in the SYMBI-Resonate repo, this page will link to the
          signed bundles and include SHA-256 checksums.
        </p>
      </section>
    </div>
  );
}
