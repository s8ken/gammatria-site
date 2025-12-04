'use client'

import { Brain, BarChart3, Beaker, Shield, Zap, Users, Award, TrendingUp, Activity } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function SymbiResonateLandingPage() {
  const [demoStatus, setDemoStatus] = useState('loading')
  const [currentDemo, setCurrentDemo] = useState('main')

  useEffect(() => {
    // Test if main demo loads
    const testMainDemo = async () => {
      try {
        const response = await fetch('/resonate-demo/index.html')
        if (response.ok) {
          console.log('✅ Main demo file accessible')
          setDemoStatus('main-available')
        } else {
          console.log('❌ Main demo file not accessible:', response.status)
          setDemoStatus('main-failed')
        }
      } catch (error) {
        console.log('❌ Main demo file error:', error)
        setDemoStatus('main-failed')
      }
    }

    testMainDemo()
  }, [])

  const handleIframeError = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    console.log('🚨 Iframe error detected, switching to fallback...')
    setDemoStatus('fallback')
    setCurrentDemo('interactive')
  }

  const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    console.log('✅ Iframe loaded successfully')
    setDemoStatus('loaded')
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

      {/* Debug Status */}
      <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">🔍 Demo Status Debug</h3>
        <div className="text-sm text-yellow-700">
          <p>Current Status: <span className="font-mono">{demoStatus}</span></p>
          <p>Current Demo: <span className="font-mono">{currentDemo}</span></p>
          <p>Expected Interactive Elements: Consciousness Detection, Real-time Analytics, Multi-Agent Lab, SYMBI Framework</p>
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

          {/* Demo Instructions */}
          <div className="bg-blue-50 border-b border-blue-200 px-8 py-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <div className="text-blue-800">
                <h3 className="font-semibold mb-2">Interactive Demo Guide</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium mb-1">🧠 Consciousness Detection</p>
                    <p className="text-blue-700">Monitor AI models for emergent consciousness-like behaviors</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">📊 Real-time Analytics</p>
                    <p className="text-blue-700">Live charts showing AI performance metrics and trends</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">🧪 Multi-Agent Lab</p>
                    <p className="text-blue-700">Experiment with different AI models and configurations</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">📈 SYMBI Framework</p>
                    <p className="text-blue-700">5-dimensional evaluation: Reality, Trust, Ethics, Resonance, Canvas</p>
                  </div>
                </div>
                <p className="text-blue-600 text-xs mt-3">
                  💡 <strong>Tip:</strong> The demo below contains interactive charts, buttons, and controls. 
                  Look for clickable elements, hover effects, and dynamic data visualizations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-gray-50" style={{ height: '900px' }}>
            {demoStatus === 'loading' && (
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-blue-600">Loading demo...</p>
                </div>
              </div>
            )}
            
            {demoStatus === 'main-available' && currentDemo === 'main' && (
              <iframe
                src="/resonate-demo/index.html"
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full bg-white"
                title="SYMBI Resonate Sophisticated Platform Demo"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                loading="lazy"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
              />
            )}
            
            {(demoStatus === 'main-failed' || currentDemo === 'interactive') && (
              <iframe
                src="/resonate-demo/interactive-fallback.html"
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full bg-white"
                title="SYMBI Resonate Interactive Fallback Demo"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              />
            )}
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Brain className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Consciousness Detection</h3>
          <p className="text-gray-600 text-sm">Advanced algorithms monitor AI models for emergent consciousness-like behaviors and self-awareness patterns.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <BarChart3 className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
          <p className="text-gray-600 text-sm">Live monitoring dashboards with interactive charts showing AI performance metrics and emergence indicators.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Beaker className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Agent Lab</h3>
          <p className="text-gray-600 text-sm">Experiment with different AI models and configurations in controlled environments with comprehensive tracking.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">SYMBI Framework</h3>
          <p className="text-gray-600 text-sm">Five-dimensional evaluation system: Reality, Trust, Ethics, Resonance, and Canvas assessment protocols.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
        <p className="text-lg mb-6 opacity-90">
          Experience the full SYMBI Resonate platform with advanced AI analytics and consciousness detection capabilities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://github.com/s8ken/SYMBI-Resonate" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Users className="h-5 w-5 mr-2" />
            View on GitHub
          </a>
          <a 
            href="/demo-debug" 
            className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            <Activity className="h-5 w-5 mr-2" />
            Debug Demo
          </a>
        </div>
      </div>
    </div>
  )
}