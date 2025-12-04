import { Metadata } from 'next'
import { Brain, BarChart3, Beaker, Shield, Zap, Users, Award, TrendingUp, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SYMBI Resonate Demo',
  description: 'Professional SYMBI Resonate demo experience with sophisticated frontend components and enterprise-grade analytics',
}

export default function SymbiResonateLandingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Brain className="h-10 w-10 text-blue-600" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            SYMBI Resonate
          </h1>
        </div>
        <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Experience the sophisticated SYMBI Resonate platform featuring advanced AI analytics, 
          enterprise-grade components, and comprehensive experiment management for AI model evaluation.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border bg-blue-100 text-blue-800 border-blue-200">
            <Zap className="h-4 w-4 mr-2" />
            Live Demo
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border bg-purple-100 text-purple-800 border-purple-200">
            <Shield className="h-4 w-4 mr-2" />
            SYMBI Framework
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border bg-green-100 text-green-800 border-green-200">
            <Award className="h-4 w-4 mr-2" />
            Enterprise Ready
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border bg-orange-100 text-orange-800 border-orange-200">
            <TrendingUp className="h-4 w-4 mr-2" />
            Advanced Analytics
          </span>
        </div>
      </div>

      {/* Feature Overview */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sophisticated Platform Demo</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore the comprehensive SYMBI Resonate platform with professional-grade components, 
              advanced navigation, and enterprise-level analytics capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-3">
                <BarChart3 className="h-8 w-8" />
              </div>
              <div className="font-bold text-gray-900 mb-2">50+ Components</div>
              <div className="text-sm text-gray-600">Professional shadcn/ui library with advanced styling</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 mb-3">
                <Activity className="h-8 w-8" />
              </div>
              <div className="font-bold text-gray-900 mb-2">Interactive Charts</div>
              <div className="text-sm text-gray-600">Advanced Recharts integration with real-time data</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-purple-600 mb-3">
                <Users className="h-8 w-8" />
              </div>
              <div className="font-bold text-gray-900 mb-2">Advanced Navigation</div>
              <div className="text-sm text-gray-600">Collapsible sidebar with organized menu groups</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-600 mb-3">
                <Beaker className="h-8 w-8" />
              </div>
              <div className="font-bold text-gray-900 mb-2">Experiment Management</div>
              <div className="text-sm text-gray-600">Comprehensive tracking with dual-view modes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Demo iframe */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Brain className="h-6 w-6" />
                SYMBI Resonate Platform Demo
              </h2>
              <p className="text-blue-100 text-base mt-1">
                Interactive demonstration of enterprise AI analytics and assessment capabilities
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-100 text-sm font-medium">Live Demo</span>
            </div>
          </div>
        </div>
        
        <div className="relative bg-gray-50" style={{ height: '900px' }}>
          <iframe
            src="/resonate-demo/"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full bg-white"
            title="SYMBI Resonate Sophisticated Platform Demo"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            loading="lazy"
          />
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-900">Advanced Analytics</h3>
          </div>
          <p className="text-blue-800 text-sm leading-relaxed">
            Real-time metrics, interactive charts, and comprehensive data visualization 
            with professional-grade statistical analysis capabilities.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Beaker className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-green-900">Experiment Orchestration</h3>
          </div>
          <p className="text-green-800 text-sm leading-relaxed">
            Double-blind testing workflows, multi-agent coordination, and automated 
            statistical analysis with confidence intervals and significance testing.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-purple-900">SYMBI Framework</h3>
          </div>
          <p className="text-purple-800 text-sm leading-relaxed">
            Five-dimensional evaluation system: Reality Index, Trust Protocol, 
            Ethical Alignment, Resonance Quality, and Canvas Parity scoring.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-orange-900">Enterprise Components</h3>
          </div>
          <p className="text-orange-800 text-sm leading-relaxed">
            50+ professional shadcn/ui components with accessibility features, 
            dark mode support, and responsive design optimization.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-teal-900">Real-time Monitoring</h3>
          </div>
          <p className="text-teal-800 text-sm leading-relaxed">
            Live experiment tracking, performance metrics, and activity feeds 
            with automated alerts and status notifications.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Award className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-indigo-900">Research Ready</h3>
          </div>
          <p className="text-indigo-800 text-sm leading-relaxed">
            Academic-grade methodology, peer-reviewable datasets, and comprehensive 
            export capabilities for scholarly research and publication.
          </p>
        </div>
      </div>
    </div>
  )
}