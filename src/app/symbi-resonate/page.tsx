import { Metadata } from 'next'
import { Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SYMBI Resonate Demo',
  description: 'Professional SYMBI Resonate demo experience within the Gammatria site',
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
          Experience the full SYMBI Resonate platform: Advanced AI analytics and assessment interface with enterprise-grade features.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-blue-100 text-blue-800 border-blue-200">Live Demo</span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-purple-100 text-purple-800 border-purple-200">SYMBI Framework</span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200">Enterprise Ready</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Platform Demo</h2>
          <p className="text-gray-700 mb-4">
            Experience the complete SYMBI Resonate platform with advanced sidebar navigation, 
            interactive dashboards, experiment management, and enterprise-grade components.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-3 rounded-lg border">
              <div className="font-semibold text-blue-600">50+ Components</div>
              <div className="text-gray-600">shadcn/ui library</div>
            </div>
            <div className="bg-white p-3 rounded-lg border">
              <div className="font-semibold text-green-600">Interactive Charts</div>
              <div className="text-gray-600">Recharts integration</div>
            </div>
            <div className="bg-white p-3 rounded-lg border">
              <div className="font-semibold text-purple-600">Responsive Design</div>
              <div className="text-gray-600">Mobile-first approach</div>
            </div>
            <div className="bg-white p-3 rounded-lg border">
              <div className="font-semibold text-orange-600">TypeScript</div>
              <div className="text-gray-600">Strict mode enabled</div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Demo iframe */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Brain className="h-5 w-5" />
            SYMBI Resonate Platform Demo
          </h2>
          <p className="text-blue-100 text-sm">Interactive demonstration of enterprise AI analytics capabilities</p>
        </div>
        <div className="relative" style={{ height: '800px' }}>
          <iframe
            src="/resonate-demo/"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full"
            title="SYMBI Resonate Platform Demo"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg text-blue-600 mb-2">Advanced Navigation</h3>
          <p className="text-gray-600 text-sm">Professional sidebar with collapsible menu groups and organized sections.</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg text-green-600 mb-2">Real-time Analytics</h3>
          <p className="text-gray-600 text-sm">Interactive charts, metrics, and activity feeds with live data visualization.</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg text-purple-600 mb-2">Experiment Management</h3>
          <p className="text-gray-600 text-sm">Advanced filtering, dual-view modes, and comprehensive experiment tracking.</p>
        </div>
      </div>
    </div>
  )
}