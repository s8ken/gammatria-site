'use client'

import { Brain, BarChart3, Beaker, Shield, Zap, Users, Award, TrendingUp, Activity, ExternalLink, Play, Settings, Monitor } from 'lucide-react'

export default function SymbiResonateLandingPage() {
  const openDemoInNewTab = () => {
    window.open('/resonate-demo/index.html', '_blank', 'noopener,noreferrer')
  }

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

      {/* Enhanced Demo Controls */}
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4">Enterprise AI Emergence Detection Platform</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Experience the sophisticated SYMBI Resonate platform with real-time consciousness detection, 
            advanced analytics, and comprehensive AI model evaluation capabilities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={openDemoInNewTab}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Open in New Tab
          </button>
          <button
            onClick={toggleFullscreen}
            className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            <Monitor className="w-5 h-5 mr-2" />
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Mode'}
          </button>
        </div>

        {/* Demo Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Brain className="w-8 h-8 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Consciousness Detection</h3>
            <p className="text-sm opacity-80">Real-time monitoring for emergent AI consciousness</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <BarChart3 className="w-8 h-8 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Live Analytics</h3>
            <p className="text-sm opacity-80">Interactive charts and performance metrics</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Beaker className="w-8 h-8 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Multi-Agent Lab</h3>
            <p className="text-sm opacity-80">Test multiple AI models simultaneously</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Shield className="w-8 h-8 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">SYMBI Framework</h3>
            <p className="text-sm opacity-80">5-dimensional evaluation system</p>
          </div>
        </div>
      </div>

      {/* Demo Container */}
      <div className="mb-12 bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm font-medium">SYMBI Resonate Enterprise Platform</span>
            <span className="px-2 py-1 bg-green-600 text-xs rounded-full">LIVE</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={openDemoInNewTab}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors flex items-center gap-1"
            >
              <ExternalLink className="w-4 h-4" />
              Open New
            </button>
          </div>
        </div>
        
        <div className="relative" style={{ height: '900px' }}>
          <iframe
            src="/resonate-demo/index.html"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full bg-white"
            title="SYMBI Resonate Enterprise Platform Demo"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            loading="lazy"
          />
        </div>
      </div>

      {/* Fallback Section - Direct Access */}
      <div className="mb-16 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct Demo Access</h3>
          <p className="text-gray-600 mb-6">
            If the demo above doesn't load properly, you can access it directly using the options below:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={openDemoInNewTab}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Full Demo
            </button>
            <a
              href="/resonate-demo/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Main Demo
            </a>
            <a
              href="/symbi-demo.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Backup Demo
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            The backup demo is a simplified version that should load in all environments.
          </p>
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise-Ready Capabilities</h2>
          <p class="text-lg text-gray-600">Professional-grade features designed for production AI monitoring and research</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Consciousness Detection</h3>
            <p className="text-gray-700 text-sm mb-4">Advanced neural pattern analysis for emergent AI consciousness detection with real-time monitoring.</p>
            <div className="flex items-center text-blue-600 text-sm font-medium">
              <Zap className="w-4 h-4 mr-1" />
              Active Monitoring
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
            <p className="text-gray-700 text-sm mb-4">Live dashboards with interactive charts, performance metrics, and emergence indicator tracking.</p>
            <div className="flex items-center text-purple-600 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-1" />
              Live Data
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Beaker className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Agent Lab</h3>
            <p className="text-gray-700 text-sm mb-4">Experiment with multiple AI models in controlled environments with comprehensive tracking.</p>
            <div className="flex items-center text-green-600 text-sm font-medium">
              <Activity className="w-4 h-4 mr-1" />
              Active Testing
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SYMBI Framework</h3>
            <p className="text-gray-700 text-sm mb-4">Five-dimensional evaluation: Reality, Trust, Ethics, Resonance, and Canvas assessment protocols.</p>
            <div className="flex items-center text-orange-600 text-sm font-medium">
              <Award className="w-4 h-4 mr-1" />
              Certified
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Call to Action */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white border border-gray-700">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-1">Enterprise Implementation</h2>
              <p class="text-gray-400">Production-ready AI consciousness detection platform</p>
            </div>
          </div>
          
          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
            Deploy SYMBI Resonate in your organization to monitor AI systems with enterprise-grade security, 
            compliance, and scalability. Trusted by research institutions and AI labs worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-blue-400 mb-1">99.9%</div>
              <p class="text-sm text-gray-400">Uptime SLA</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-purple-400 mb-1">247+</div>
              <p class="text-sm text-gray-400">Active Models</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-green-400 mb-1">< 1.2ms</div>
              <p class="text-sm text-gray-400">Response Time</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/s8ken/SYMBI-Resonate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Users className="h-5 w-5 mr-2" />
              View Source Code
            </a>
            <button 
              onClick={openDemoInNewTab}
              className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors border border-gray-600"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Enterprise Demo
            </button>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              <Settings className="h-5 w-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}