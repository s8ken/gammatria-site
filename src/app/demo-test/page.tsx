import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo Asset Test',
  description: 'Test page to verify SYMBI Resonate demo assets are accessible',
}

export default function DemoTestPage() {
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
            <iframe
              src="/resonate-demo/index.html"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full bg-white"
              title="Direct SYMBI Resonate Demo Test"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              onLoad={() => console.log('Demo iframe loaded successfully')}
              onError={(e) => console.error('Demo iframe failed to load:', e)}
            />
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