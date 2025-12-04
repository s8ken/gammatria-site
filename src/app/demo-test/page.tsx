'use client'

import { useEffect, useState } from 'react'

export default function DemoTestPage() {
  const [iframeStatus, setIframeStatus] = useState('loading')

  useEffect(() => {
    // Client-side only operations
    console.log('Demo test page loaded on client')
  }, [])

  const handleIframeLoad = () => {
    console.log('Demo iframe loaded successfully')
    setIframeStatus('loaded')
  }

  const handleIframeError = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    console.error('Demo iframe failed to load:', e)
    setIframeStatus('error')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">SYMBI Resonate Demo Asset Test</h1>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Asset Links Test</h2>
          <p className="text-gray-600 mb-4">Click these links to verify demo assets are accessible:</p>
          
          <div className="space-y-3">
            <div>
              <a 
                href="/resonate-demo/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Test Demo HTML
              </a>
              <span className="ml-3 text-sm text-gray-500">Should open the demo page</span>
            </div>
            
            <div>
              <a 
                href="/resonate-demo/assets/index-CtCaYPp8.js" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Test JavaScript File
              </a>
              <span className="ml-3 text-sm text-gray-500">Should download or display JS file</span>
            </div>
            
            <div>
              <a 
                href="/resonate-demo/assets/index-BYC5gcYs.css" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Test CSS File
              </a>
              <span className="ml-3 text-sm text-gray-500">Should download or display CSS file</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Direct Demo Test</h2>
          <p className="text-gray-600 mb-4">This iframe should load the demo directly:</p>
          
          <div className="border border-gray-300 rounded-lg overflow-hidden" style={{ height: '600px' }}>
            {iframeStatus === 'loading' && (
              <div className="flex items-center justify-center h-full bg-white">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading demo...</p>
                </div>
              </div>
            )}
            
            <iframe
              src="/resonate-demo/index.html"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full bg-white"
              title="Direct SYMBI Resonate Demo Test"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
            
            {iframeStatus === 'error' && (
              <div className="absolute inset-0 flex items-center justify-center bg-red-50 border border-red-200">
                <div className="text-center p-8">
                  <div className="text-red-600 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Demo Loading Error</h3>
                  <p className="text-red-600 mb-4">The SYMBI Resonate demo failed to load properly.</p>
                  <a 
                    href="/resonate-demo/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Open Demo in New Tab
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h2 className="text-xl font-semibold mb-4 text-yellow-800">Debug Information</h2>
          <div className="space-y-2 text-sm text-yellow-700">
            <p>• Demo files are located in: <code className="bg-yellow-100 px-2 py-1 rounded">/public/resonate-demo/</code></p>
            <p>• Assets path: <code className="bg-yellow-100 px-2 py-1 rounded">/public/resonate-demo/assets/</code></p>
            <p>• Check browser console for detailed error messages</p>
            <p>• Verify all files were copied correctly during build process</p>
          </div>
        </div>
      </div>
    </div>
  )
}