import { Metadata } from 'next'
import Link from 'next/link'
import { Brain, BarChart3, Beaker } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SYMBI Resonate Demo',
  description: 'Embedded SYMBI Resonate demo experience within the Gammatria site',
}

export default function SymbiResonateLandingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Brain className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SYMBI Resonate
          </h1>
        </div>
        <p className="text-xl text-gray-900 mb-6 max-w-3xl mx-auto">
          Explore the SYMBI Resonate demo: a streamlined analytics and assessment interface inspired by the upstream project.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-blue-100 text-blue-800 border-blue-200">Live Demo</span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-purple-100 text-purple-800 border-purple-200">SYMBI Framework</span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200">Research Ready</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <Link href="/symbi-resonate/dashboard" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold text-blue-600">Dashboard</h3>
          </div>
          <p className="text-sm text-gray-900">Metrics and live indicators</p>
        </Link>
        <Link href="/symbi-resonate/experiments" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-2">
            <Beaker className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-green-600">Experiments</h3>
          </div>
          <p className="text-sm text-gray-900">Double-blind testing workflow</p>
        </Link>
        <Link href="/symbi-resonate/symbi" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            <h3 className="font-semibold text-purple-600">SYMBI Assessment</h3>
          </div>
          <p className="text-sm text-gray-900">Framework-aligned evaluation</p>
        </Link>
      </div>

      <section className="mb-16">
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl mr-4">🧠</div>
            <div>
              <h2 className="text-3xl font-bold text-blue-800">Five-Dimensional Evaluation</h2>
              <p className="text-blue-600">Consciousness, Trust, Ethics, Resonance, Collaboration</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Feature Overview</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Multi-metric scoring with visual indicators</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Experiment orchestration and status tracking</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Assessment flows aligned to SYMBI</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Lightweight UI optimized for Tailwind</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-white rounded border">
                <div className="text-2xl font-bold text-blue-600">24</div>
                <div className="text-sm text-gray-900">Active Experiments</div>
              </div>
              <div className="text-center p-3 bg-white rounded border">
                <div className="text-2xl font-bold text-green-600">92%</div>
                <div className="text-sm text-gray-900">Avg SYMBI Score</div>
              </div>
              </div>
              <div className="mt-4">
                <div className="text-sm font-medium mb-2 text-gray-900">Resonance Quality</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to explore?</h2>
        <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">Navigate to any section above to experience the integrated demo.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/symbi-resonate/dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Open Dashboard</Link>
          <Link href="/symbi-resonate/experiments" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">View Experiments</Link>
          <Link href="/symbi-resonate/symbi" className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors">Run Assessment</Link>
        </div>
      </section>
    </div>
  )
}