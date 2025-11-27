import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SYMBI Resonate · Experiments',
  description: 'Double-blind testing workflow overview',
}

const experiments = [
  { id: 'EXP-2025-001', name: 'Emergence Detection (LLM-A)', status: 'Running', score: 0.91 },
  { id: 'EXP-2025-002', name: 'Ethical Alignment (LLM-B)', status: 'Queued', score: 0.0 },
  { id: 'EXP-2025-003', name: 'Trust Framework Validation', status: 'Completed', score: 0.88 },
]

export default function SymbiResonateExperimentsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Experiments</h1>
      <div className="bg-white rounded-lg border overflow-hidden text-gray-900">
        <div className="grid grid-cols-4 gap-4 px-4 py-2 text-xs font-semibold bg-gray-50">
          <div>ID</div>
          <div>Name</div>
          <div>Status</div>
          <div>SYMBI Score</div>
        </div>
        {experiments.map((exp) => (
          <div key={exp.id} className="grid grid-cols-4 gap-4 px-4 py-3 border-t text-sm">
            <div className="font-mono">{exp.id}</div>
            <div>{exp.name}</div>
            <div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                exp.status === 'Running'
                  ? 'bg-blue-100 text-blue-800 border-blue-200'
                  : exp.status === 'Completed'
                  ? 'bg-green-100 text-green-800 border-green-200'
                  : 'bg-yellow-100 text-yellow-800 border-yellow-200'
              }`}>{exp.status}</span>
            </div>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                <div className={`h-2 rounded-full ${exp.score >= 0.85 ? 'bg-green-600' : 'bg-yellow-500'}`} style={{ width: `${Math.round(exp.score * 100)}%` }}></div>
              </div>
              <span className="font-mono">{exp.score > 0 ? (exp.score * 100).toFixed(0) + '%' : '-'}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg border text-gray-900">
        <h2 className="text-xl font-semibold mb-2">Protocol Notes</h2>
        <p className="text-sm">
          This demo presents a simplified experiment pipeline aligned to the SYMBI framework. It illustrates status progression
          and scoring visualizations without external dependencies, suitable for the Gammatria site environment.
        </p>
      </div>
    </div>
  )
}