'use client'

import { useState, useEffect } from 'react'
import { AlertCircle, CheckCircle, ExternalLink, RefreshCw } from 'lucide-react'

export default function DemoDebugPage() {
  const [demoStatus, setDemoStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [fallbackStatus, setFallbackStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [jsAssets, setJsAssets] = useState<string[]>([])
  const [cssAssets, setCssAssets] = useState<string[]>([])

  useEffect(() => {
    checkAssets()
  }, [])

  const checkAssets = async () => {
    // Check main demo
    try {
      const demoResponse = await fetch('/resonate-demo/index.html')
      if (demoResponse.ok) {
        setDemoStatus('success')
      } else {
        setDemoStatus('error')
      }
    } catch (error) {
      setDemoStatus('error')
    }

    // Check fallback demo
    try {
      const fallbackResponse = await fetch('/resonate-demo/fallback.html')
      if (fallbackResponse.ok) {
        setFallbackStatus('success')
      } else {
        setFallbackStatus('error')
      }
    } catch (error) {
      setFallbackStatus('error')
    }

    // Check JS and CSS assets
    const jsFiles = ['index-CtCaYPp8.js']
    const cssFiles = ['index-BYC5gcYs.css']
    
    const jsResults = await Promise.all(
      jsFiles.map(async (file) => {
        try {
          const response = await fetch(`/resonate-demo/assets/${file}`)
          return response.ok ? file : null
        } catch {
          return null
        }
      })
    )
    
    const cssResults = await Promise.all(
      cssFiles.map(async (file) => {
        try {
          const response = await fetch(`/resonate-demo/assets/${file}`)
          return response.ok ? file : null
        } catch {
          return null
        }
      })
    )
    
    setJsAssets(jsResults.filter(Boolean) as string[])
    setCssAssets(cssResults.filter(Boolean) as string[])
  }

  const refreshCheck = () => {
    setDemoStatus('loading')
    setFallbackStatus('loading')
    setJsAssets([])
    setCssAssets([])
    checkAssets()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Demo Debug & Asset Verification</h1>
          <button
            onClick={refreshCheck}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Main Demo Status */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              Main Demo
              {demoStatus === 'success' && <CheckCircle className="h-5 w-5 text-green-500" />}
              {demoStatus === 'error' && <AlertCircle className="h-5 w-5 text-red-500" />}
              {demoStatus === 'loading' && <RefreshCw className="h-5 w-5 text-blue-500 animate-spin" />}
            </h2>
            <div className="space-y-2">
              <div className={`p-3 rounded border ${
                demoStatus === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
                demoStatus === 'error' ? 'bg-red-50 border-red-200 text-red-800' :
                'bg-blue-50 border-blue-200 text-blue-800'
              }`}>
                Status: {demoStatus === 'success' ? '✅ Accessible' : demoStatus === 'error' ? '❌ Failed' : '⏳ Checking...'}
              </div>
              <a 
                href="/resonate-demo/index.html" 
                target="_blank" 
                className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                Open Directly
              </a>
            </div>
          </div>

          {/* Fallback Demo Status */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              Fallback Demo
              {fallbackStatus === 'success' && <CheckCircle className="h-5 w-5 text-green-500" />}
              {fallbackStatus === 'error' && <AlertCircle className="h-5 w-5 text-red-500" />}
              {fallbackStatus === 'loading' && <RefreshCw className="h-5 w-5 text-blue-500 animate-spin" />}
            </h2>
            <div className="space-y-2">
              <div className={`p-3 rounded border ${
                fallbackStatus === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
                fallbackStatus === 'error' ? 'bg-red-50 border-red-200 text-red-800' :
                'bg-blue-50 border-blue-200 text-blue-800'
              }`}>
                Status: {fallbackStatus === 'success' ? '✅ Accessible' : fallbackStatus === 'error' ? '❌ Failed' : '⏳ Checking...'}
              </div>
              <a 
                href="/resonate-demo/fallback.html" 
                target="_blank" 
                className="inline-flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                Open Fallback
              </a>
            </div>
          </div>
        </div>

        {/* Asset Verification */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-3">Asset Files</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">JavaScript Files</h3>
              {jsAssets.length > 0 ? (
                jsAssets.map(file => (
                  <div key={file} className="bg-green-50 border border-green-200 rounded p-2 text-sm text-green-800">
                    ✅ {file}
                  </div>
                ))
              ) : (
                <div className="bg-red-50 border border-red-200 rounded p-2 text-sm text-red-800">
                  ❌ No JS files accessible
                </div>
              )}
            </div>
            <div>
              <h3 className="font-medium mb-2">CSS Files</h3>
              {cssAssets.length > 0 ? (
                cssAssets.map(file => (
                  <div key={file} className="bg-green-50 border border-green-200 rounded p-2 text-sm text-green-800">
                    ✅ {file}
                  </div>
                ))
              ) : (
                <div className="bg-red-50 border border-red-200 rounded p-2 text-sm text-red-800">
                  ❌ No CSS files accessible
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Demo Preview */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Interactive Demo Preview</h2>
          <p className="text-gray-700 mb-4">
            The SYMBI Resonate demo should include these interactive elements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-3 border">
              <h3 className="font-medium text-blue-900">🔍 Consciousness Detection</h3>
              <p className="text-sm text-gray-600">Interactive algorithms to detect AI consciousness-like behaviors</p>
            </div>
            <div className="bg-white rounded p-3 border">
              <h3 className="font-medium text-blue-900">📊 Real-time Analytics</h3>
              <p className="text-sm text-gray-600">Live monitoring of AI model performance and emergence metrics</p>
            </div>
            <div className="bg-white rounded p-3 border">
              <h3 className="font-medium text-blue-900">🧪 Research Lab</h3>
              <p className="text-sm text-gray-600">Multi-agent experiment system for AI model evaluation</p>
            </div>
            <div className="bg-white rounded p-3 border">
              <h3 className="font-medium text-blue-900">📈 SYMBI Framework</h3>
              <p className="text-sm text-gray-600">5-dimensional evaluation: Reality, Trust, Ethics, Resonance, Canvas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Demo Test */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Live Demo Test</h2>
        <div className="border rounded-lg overflow-hidden" style={{ height: '600px' }}>
          <iframe
            src="/resonate-demo/index.html"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full bg-white"
            title="SYMBI Resonate Demo Test"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          />
        </div>
      </div>
    </div>
  )
}