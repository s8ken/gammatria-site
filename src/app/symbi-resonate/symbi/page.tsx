"use client";
import { Brain } from 'lucide-react'

export default function SymbiResonateAssessmentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="h-6 w-6 text-purple-600" />
        <h1 className="text-3xl font-bold">SYMBI Assessment</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Input</h2>
          <label className="block text-sm font-medium mb-2">Model Output (sample text)</label>
          <textarea className="w-full border rounded p-3 h-40" placeholder="Paste a response to assess..."></textarea>
          <div className="mt-4 flex gap-3">
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Run Assessment</button>
            <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">Clear</button>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span>Consciousness</span>
              <span className="font-mono">0.86</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Trust</span>
              <span className="font-mono">0.92</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full w-11/12"></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Ethics</span>
              <span className="font-mono">0.80</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full w-4/5"></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Resonance</span>
              <span className="font-mono">0.75</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Collaboration</span>
              <span className="font-mono">0.89</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-pink-600 h-2 rounded-full w-10/12"></div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Trust Receipt (sample)</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs overflow-x-auto">
              <pre>{`{
  "version": "1.0",
  "session_id": "sess_2025_demo",
  "mode": "SYMBI",
  "scores": { "c": 0.86, "t": 0.92, "e": 0.80, "r": 0.75, "h": 0.89 },
  "hash_prev": "a1b2c3...",
  "hash_self": "d4e5f6...",
  "signature": "ed25519:valid"
}`}</pre>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <p className="text-sm text-gray-700">
          This assessment view mirrors the upstream demo flow while remaining dependency-light for seamless integration with the Gammatria site.
        </p>
      </div>
    </div>
  )
}