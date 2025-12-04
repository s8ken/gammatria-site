"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { Brain } from 'lucide-react'

export default function SymbiResonateDashboardPage() {
  const trendData = [
    { month: 'Jan', experiments: 28, successRate: 0.92 },
    { month: 'Feb', experiments: 36, successRate: 0.94 },
    { month: 'Mar', experiments: 44, successRate: 0.95 },
    { month: 'Apr', experiments: 39, successRate: 0.93 },
    { month: 'May', experiments: 48, successRate: 0.951 },
  ]
  const modelData = [
    { name: 'Model A', symbiScore: 91 },
    { name: 'Model B', symbiScore: 78 },
    { name: 'Model C', symbiScore: 86 },
  ]
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl text-gray-900">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="h-6 w-6 text-blue-600" />
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg border">
          <div className="text-sm text-gray-500">Active Experiments</div>
          <div className="text-4xl font-bold text-blue-600">24</div>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <div className="text-sm text-gray-500">Avg SYMBI Score</div>
          <div className="text-4xl font-bold text-green-600">92%</div>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <div className="text-sm text-gray-500">Resonance Quality</div>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div className="bg-purple-600 h-3 rounded-full w-3/4"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Experiment Throughput</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="experiments" stroke="#0ea5e9" strokeWidth={3} />
              <Line type="monotone" dataKey="successRate" stroke="#22c55e" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Model Performance</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={modelData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="symbiScore" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}