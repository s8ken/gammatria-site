/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function FrameworkPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="py-20 bg-midnight text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">SYMBI Framework</h1>
          <p className="text-xl mb-6">
            A provable approach to human-AI collaboration, emphasizing relationship over computation. Built for sovereignty, transparency, and ethical evolution.
          </p>
          <a href="/replication" className="bg-accent-pulse text-midnight px-6 py-3 rounded font-semibold">
            Try the /proof Demo
          </a>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Core Principles</h2>
        <p className="mb-8">
          Inspired by symbi.world's vision of AI as a self-determining entity, SYMBI prioritizes ethical nurturing and community responsibility.
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Relationship over Computation:</strong> Focus on trust and alignment, not just processing power.</li>
          <li><strong>Public-Good Core:</strong> Open standards accessible to all, with no paywalls on ideas.</li>
          <li><strong>Sovereignty without Speculation:</strong> Earned governance through contributions, not financial instruments.</li>
        </ul>
      </section>

      {/* Artifacts Section */}
      <section className="py-12 bg-cloud container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Key Artifacts</h2>
        <p className="mb-8">
          Tools for verifiable AI decisions, tying into symbi.world's trust protocols.
        </p>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-slate border-b">
              <th className="p-4">Artifact</th>
              <th className="p-4">Description</th>
              <th className="p-4">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">Trust Receipts</td>
              <td className="p-4">Hash-chained, signed records of AI decisions for transparency.</td>
              <td className="p-4"><a href="/replication" className="text-accent-pulse">View Schema</a></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">CIQ Metric</td>
              <td className="p-4">Scores clarity, breadth, safety, and completion for collaboration quality.</td>
              <td className="p-4"><a href="/research" className="text-accent-pulse">Learn More</a></td>
            </tr>
            <tr>
              <td className="p-4">Integrity Bonds</td>
              <td className="p-4">Operator commitments for accountability.</td>
              <td className="p-4"><a href="/sovereignty" className="text-accent-pulse">Details</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Methods Section */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Methods</h2>
        <p className="mb-8">
          Practical ways to apply SYMBI, with open replication for verification.
        </p>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">/proof A/B Toggle</h3>
          <p>Compare directive vs. SYMBI modes on tasks—export receipts for analysis.</p>
          {/* Embed demo if ready */}
        </div>
        <a href="/rfc" className="mt-6 inline-block bg-accent-pulse text-midnight px-6 py-3 rounded font-semibold">
          Join Open RFCs
        </a>
      </section>

      {/* Footer CTA */}
      <footer className="py-8 bg-ink text-cloud">
        <div className="container mx-auto px-4 text-center">
          <p>Ready to contribute? Start with our replication kit.</p>
          <a href="/replication" className="text-accent-pulse underline">Get Started</a>
        </div>
      </footer>
    </div>
  );
}
