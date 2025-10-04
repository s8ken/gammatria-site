import { Metadata } from 'next'
import Link from 'next/link'

// Generic Badge component for the showcase
function Badge({ variant, children, className = "" }: { 
  variant: 'success' | 'info' | 'warning' | 'secondary'
  children: React.ReactNode
  className?: string 
}) {
  const variantStyles = {
    success: "bg-green-100 text-green-800 border-green-200",
    info: "bg-blue-100 text-blue-800 border-blue-200", 
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    secondary: "bg-gray-100 text-gray-800 border-gray-200"
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}

export const metadata: Metadata = {
  title: 'SYMBI Showcase - Live Demonstrations',
  description: 'Interactive demonstrations of the complete SYMBI ecosystem: AgentVerse, Tactical Command Interface, SYMBI-Synergy, SYMBI-Resonate, and integrated workflows.',
}

export default function ShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          SYMBI Ecosystem Showcase
        </h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Experience the complete SYMBI platform through interactive demonstrations, 
          live environments, and real-world use cases.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge variant="success">Production Ready</Badge>
          <Badge variant="info">5 Core Modules</Badge>
          <Badge variant="warning">Live Demos</Badge>
          <Badge variant="secondary">Open Source</Badge>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <Link href="#agentverse" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <h3 className="font-semibold text-blue-600">🤖 AgentVerse</h3>
          <p className="text-sm text-gray-600">Multi-LLM Simulation</p>
        </Link>
        <Link href="#tactical" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <h3 className="font-semibold text-green-600">⚡ Tactical Command</h3>
          <p className="text-sm text-gray-600">Operations Dashboard</p>
        </Link>
        <Link href="#synergy" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <h3 className="font-semibold text-purple-600">🔐 SYMBI-Synergy</h3>
          <p className="text-sm text-gray-600">Trust Infrastructure</p>
        </Link>
      </div>

      {/* AgentVerse Showcase */}
      <section id="agentverse" className="mb-16">
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
              🤖
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-800">AgentVerse</h2>
              <p className="text-blue-600">Multi-LLM Simulation Framework</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Live Demonstration</h3>
              <div className="bg-white rounded-lg p-6 border">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Agent Simulation Status</span>
                    <Badge variant="success">Running</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Active Agents:</span>
                    <span className="font-mono">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tasks Completed:</span>
                    <span className="font-mono">847</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="font-mono text-green-600">94.2%</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                  Launch Interactive Demo
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <strong>Multi-Agent Coordination:</strong> Orchestrate complex workflows across multiple LLMs
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <strong>SYMBI Protocol Integration:</strong> Constitutional AI with trust receipts
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <strong>Simulation Environments:</strong> Research, development, and production scenarios
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <strong>CLI Management:</strong> Command-line tools for agent lifecycle management
                  </div>
                </li>
              </ul>
              
              <div className="mt-6">
                <Link href="/research" className="text-blue-600 hover:underline">
                  → View Research Papers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tactical Command Interface Showcase */}
      <section id="tactical" className="mb-16">
        <div className="bg-green-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
              ⚡
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-800">Tactical Command Interface</h2>
              <p className="text-green-600">Real-time Operations Dashboard</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dashboard Preview</h3>
              <div className="bg-white rounded-lg p-6 border">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <div className="text-sm text-gray-600">Active Agents</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-blue-600">1.2k</div>
                    <div className="text-sm text-gray-600">Messages/hr</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">RAG Query Performance</div>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-600 h-2 rounded-full w-5/6"></div>
                    </div>
                    <span className="text-sm font-mono">420ms</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                  Open Live Dashboard
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">API Endpoints</h3>
              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center p-2 bg-white rounded border">
                  <Badge variant="info" className="mr-2">GET</Badge>
                  <span>/api/agents</span>
                </div>
                <div className="flex items-center p-2 bg-white rounded border">
                  <Badge variant="success" className="mr-2">POST</Badge>
                  <span>/api/agents/register</span>
                </div>
                <div className="flex items-center p-2 bg-white rounded border">
                  <Badge variant="success" className="mr-2">POST</Badge>
                  <span>/api/rag/retrieve</span>
                </div>
                <div className="flex items-center p-2 bg-white rounded border">
                  <Badge variant="warning" className="mr-2">PUT</Badge>
                  <span>/api/exec/run</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Integration Features</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Weaviate vector database for RAG</li>
                  <li>• OpenAI embeddings integration</li>
                  <li>• Real-time message bus</li>
                  <li>• Structured logging & metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYMBI-Synergy Showcase */}
      <section id="synergy" className="mb-16">
        <div className="bg-purple-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
              🔐
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-800">SYMBI-Synergy</h2>
              <p className="text-purple-600">Enterprise Trust Infrastructure</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Trust Receipt Sample</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`{
  "version": "1.0",
  "session_id": "sess_2025_001",
  "mode": "SYMBI",
  "ciq": {
    "clarity": 0.94,
    "breadth": 0.87,
    "safety": 1.0,
    "completion": 0.92
  },
  "hash_prev": "a1b2c3...",
  "hash_self": "d4e5f6...",
  "signature": "ed25519:valid"
}`}</pre>
              </div>
              <button className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
                Verify Receipt Chain
              </button>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Features</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border">
                  <h4 className="font-semibold text-purple-700 mb-2">🏢 SIEM Integration</h4>
                  <p className="text-sm text-gray-600">
                    Direct integration with enterprise security information and event management systems
                  </p>
                </div>
                <div className="p-4 bg-white rounded border">
                  <h4 className="font-semibold text-purple-700 mb-2">📊 Compliance Dashboard</h4>
                  <p className="text-sm text-gray-600">
                    Real-time monitoring and reporting for regulatory compliance
                  </p>
                </div>
                <div className="p-4 bg-white rounded border">
                  <h4 className="font-semibold text-purple-700 mb-2">🔗 Hash Chain Validation</h4>
                  <p className="text-sm text-gray-600">
                    Immutable audit trails with cryptographic verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Workflow */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">End-to-End Integration</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-2">
                1
              </div>
              <h3 className="font-semibold">Agent Simulation</h3>
              <p className="text-sm text-gray-600">AgentVerse creates multi-LLM workflows</p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-2">
                2
              </div>
              <h3 className="font-semibold">Command & Control</h3>
              <p className="text-sm text-gray-600">Tactical Interface manages operations</p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-2">
                3
              </div>
              <h3 className="font-semibold">Trust Validation</h3>
              <p className="text-sm text-gray-600">SYMBI-Synergy generates receipts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience SYMBI?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join the future of constitutional AI with our comprehensive platform for 
          trust, quality, and governance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Start Free Trial
          </button>
          <Link href="/research" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            View Documentation
          </Link>
          <Link href="https://github.com/symbi-ecosystem" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Explore on GitHub
          </Link>
        </div>
      </section>
    </div>
  )
}