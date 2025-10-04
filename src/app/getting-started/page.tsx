import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Getting Started with SYMBI - Quick Start Guide',
  description: 'Get up and running with the SYMBI ecosystem. Choose your path: Researcher, Developer, Enterprise, or Contributor.',
}

// Badge component for getting started page
function Badge({ variant, children }: { 
  variant: 'beginner' | 'intermediate' | 'advanced' | 'time'
  children: React.ReactNode 
}) {
  const variantStyles = {
    beginner: "bg-green-100 text-green-800 border-green-200",
    intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    advanced: "bg-red-100 text-red-800 border-red-200",
    time: "bg-blue-100 text-blue-800 border-blue-200"
  }
  
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${variantStyles[variant]}`}>
      {children}
    </span>
  )
}

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Getting Started with SYMBI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Choose your path to explore the SYMBI ecosystem. Whether you&apos;re a researcher, 
          developer, enterprise user, or contributor, we have the right starting point for you.
        </p>
      </div>

      {/* Quick Path Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Link href="#researcher" className="group p-6 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔬</div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Researcher</h3>
          <p className="text-gray-600 text-sm mb-3">
            Explore constitutional AI protocols, trust validation, and quality measurement research.
          </p>
          <Badge variant="time">15 minutes</Badge>
        </Link>

        <Link href="#developer" className="group p-6 border-2 border-green-200 rounded-lg hover:border-green-400 hover:shadow-lg transition-all">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Developer</h3>
          <p className="text-gray-600 text-sm mb-3">
            Build agents, integrate APIs, and create applications with the SYMBI framework.
          </p>
          <Badge variant="time">30 minutes</Badge>
        </Link>

        <Link href="#enterprise" className="group p-6 border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:shadow-lg transition-all">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
          <h3 className="text-xl font-semibold text-purple-800 mb-2">Enterprise</h3>
          <p className="text-gray-600 text-sm mb-3">
            Implement trust receipts, compliance dashboards, and enterprise AI governance.
          </p>
          <Badge variant="time">45 minutes</Badge>
        </Link>

        <Link href="#contributor" className="group p-6 border-2 border-orange-200 rounded-lg hover:border-orange-400 hover:shadow-lg transition-all">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤝</div>
          <h3 className="text-xl font-semibold text-orange-800 mb-2">Contributor</h3>
          <p className="text-gray-600 text-sm mb-3">
            Contribute to open source development, research, and community building.
          </p>
          <Badge variant="time">20 minutes</Badge>
        </Link>
      </div>

      {/* Researcher Path */}
      <section id="researcher" className="mb-16">
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🔬</div>
            <div>
              <h2 className="text-3xl font-bold text-blue-800">Researcher Path</h2>
              <p className="text-blue-600">Explore SYMBI&apos;s academic foundations and research contributions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Start (15 minutes)</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold">Read the SYMBI Whitepaper</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Understand constitutional AI protocols and trust validation mechanisms.
                    </p>
                    <Link href="/research" className="text-blue-600 hover:underline text-sm">
                      → Access Research Papers
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold">Explore SYMBI-Resonate</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Review quality measurement methodologies and CIQ scoring systems.
                    </p>
                    <Link href="/resonance" className="text-blue-600 hover:underline text-sm">
                      → View Lab Notes
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold">Access Replication Kits</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Download complete research reproduction packages and datasets.
                    </p>
                    <Link href="/replication" className="text-blue-600 hover:underline text-sm">
                      → Get Replication Materials
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Research Resources</h3>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Academic Papers</h4>
                    <Badge variant="beginner">Open Access</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Peer-reviewed publications on constitutional AI and trust validation
                  </p>
                </div>

                <div className="p-4 bg-white rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Case Studies</h4>
                    <Badge variant="intermediate">Detailed</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Real-world implementations with metrics and analysis
                  </p>
                </div>

                <div className="p-4 bg-white rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Collaboration Framework</h4>
                    <Badge variant="advanced">Partnership</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Guidelines for academic partnerships and joint research
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Path */}
      <section id="developer" className="mb-16">
        <div className="bg-green-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">💻</div>
            <div>
              <h2 className="text-3xl font-bold text-green-800">Developer Path</h2>
              <p className="text-green-600">Build your first SYMBI agent and integrate with the ecosystem</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Start (30 minutes)</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold">Setup Development Environment</h4>
                    <div className="text-sm text-gray-600 mb-2 font-mono bg-gray-100 p-2 rounded">
                      git clone https://github.com/symbi-ecosystem/agentverse<br/>
                      cd agentverse && pip install -r requirements.txt
                    </div>
                    <Badge variant="beginner">5 minutes</Badge>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold">Create Your First Agent</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Follow the tutorial to build a simple SYMBI-compliant agent.
                    </p>
                    <Badge variant="intermediate">15 minutes</Badge>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold">Test Integration</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Connect to Tactical Command Interface and generate trust receipts.
                    </p>
                    <Badge variant="intermediate">10 minutes</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Development Resources</h3>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">API Documentation</h4>
                    <Badge variant="beginner">Interactive</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Complete API reference with live testing interface
                  </p>
                </div>

                <div className="p-4 bg-white rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">SDK Libraries</h4>
                    <Badge variant="intermediate">Python & TypeScript</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Official SDKs for rapid development and integration
                  </p>
                </div>

                <div className="p-4 bg-white rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Code Examples</h4>
                    <Badge variant="advanced">Production Ready</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Complete working examples for common use cases
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <div className="space-y-2 text-sm">
                  <Link href="https://github.com/symbi-ecosystem" className="block text-green-600 hover:underline">
                    → GitHub Repositories
                  </Link>
                  <Link href="/showcase" className="block text-green-600 hover:underline">
                    → Live Demonstrations
                  </Link>
                  <Link href="#" className="block text-green-600 hover:underline">
                    → Developer Discord
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Path */}
      <section id="enterprise" className="mb-16">
        <div className="bg-purple-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🏢</div>
            <div>
              <h2 className="text-3xl font-bold text-purple-800">Enterprise Path</h2>
              <p className="text-purple-600">Implement SYMBI for enterprise AI governance and compliance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Implementation Guide (45 minutes)</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold">Architecture Assessment</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Review your current AI infrastructure and integration requirements.
                    </p>
                    <Badge variant="beginner">15 minutes</Badge>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold">SYMBI-Synergy Setup</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Deploy trust receipt infrastructure and compliance dashboards.
                    </p>
                    <Badge variant="intermediate">20 minutes</Badge>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold">SIEM Integration</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Connect to existing security and monitoring infrastructure.
                    </p>
                    <Badge variant="advanced">10 minutes</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Features</h3>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border">
                  <h4 className="font-semibold text-purple-700 mb-2">🔐 Trust Receipts</h4>
                  <p className="text-sm text-gray-600">
                    Cryptographically signed audit trails for all AI interactions
                  </p>
                </div>

                <div className="p-4 bg-white rounded border">
                  <h4 className="font-semibold text-purple-700 mb-2">📊 Compliance Dashboard</h4>
                  <p className="text-sm text-gray-600">
                    Real-time monitoring and reporting for regulatory requirements
                  </p>
                </div>

                <div className="p-4 bg-white rounded border">
                  <h4 className="font-semibold text-purple-700 mb-2">🏗️ Enterprise Integration</h4>
                  <p className="text-sm text-gray-600">
                    Seamless integration with existing enterprise systems
                  </p>
                </div>

                <div className="p-4 bg-white rounded border">
                  <h4 className="font-semibold text-purple-700 mb-2">🛡️ Security & Governance</h4>
                  <p className="text-sm text-gray-600">
                    Constitutional AI protocols with policy enforcement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributor Path */}
      <section id="contributor" className="mb-16">
        <div className="bg-orange-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🤝</div>
            <div>
              <h2 className="text-3xl font-bold text-orange-800">Contributor Path</h2>
              <p className="text-orange-600">Join the SYMBI community and contribute to open source development</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Getting Involved (20 minutes)</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold">Review Contribution Guidelines</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Understand our development process, coding standards, and community guidelines.
                    </p>
                    <Badge variant="beginner">5 minutes</Badge>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold">Find Good First Issues</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Browse beginner-friendly issues across all SYMBI repositories.
                    </p>
                    <Badge variant="intermediate">10 minutes</Badge>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold">Join the Community</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Connect with other contributors and maintainers in our Discord server.
                    </p>
                    <Badge variant="beginner">5 minutes</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contribution Areas</h3>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Code Development</h4>
                    <Badge variant="intermediate">All Levels</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Core platform features, bug fixes, and performance improvements
                  </p>
                </div>

                <div className="p-4 bg-white rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Documentation</h4>
                    <Badge variant="beginner">Great Start</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Tutorials, guides, API docs, and translation efforts
                  </p>
                </div>

                <div className="p-4 bg-white rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Research</h4>
                    <Badge variant="advanced">Academic</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Constitutional AI research, quality metrics, and case studies
                  </p>
                </div>

                <div className="p-4 bg-white rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Community</h4>
                    <Badge variant="beginner">Social</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Events, outreach, mentorship, and community building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="text-center bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Choose your path above or explore our comprehensive ecosystem overview 
          to understand how all the pieces fit together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/showcase" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View Live Demos
          </Link>
          <Link href="/ecosystem" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Ecosystem Overview
          </Link>
          <Link href="https://github.com/symbi-ecosystem" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Browse Code
          </Link>
        </div>
      </section>
    </div>
  )
}