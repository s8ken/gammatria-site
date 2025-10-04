import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SYMBI API Documentation - Complete Reference',
  description: 'Complete API reference for the SYMBI ecosystem including AgentVerse, Tactical Command Interface, and SYMBI-Synergy.',
}

// Code block component for API examples
function CodeBlock({ language, children }: { language: string; children: string }) {
  return (
    <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
      <div className="text-xs text-gray-400 mb-2 uppercase">{language}</div>
      <pre className="text-sm">
        <code>{children}</code>
      </pre>
    </div>
  )
}

// API endpoint component
function APIEndpoint({ 
  method, 
  endpoint, 
  description, 
  parameters, 
  response, 
  example 
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  endpoint: string
  description: string
  parameters?: Array<{ name: string; type: string; required: boolean; description: string }>
  response: string
  example: string
}) {
  const methodColors = {
    GET: 'bg-green-100 text-green-800 border-green-200',
    POST: 'bg-blue-100 text-blue-800 border-blue-200',
    PUT: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    DELETE: 'bg-red-100 text-red-800 border-red-200'
  }

  return (
    <div className="border rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${methodColors[method]} mr-4`}>
          {method}
        </span>
        <code className="text-lg font-mono bg-gray-100 px-3 py-1 rounded">{endpoint}</code>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      {parameters && parameters.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Parameters</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Required</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((param, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 font-mono">{param.name}</td>
                    <td className="py-2 text-blue-600">{param.type}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded text-xs ${param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'}`}>
                        {param.required ? 'Required' : 'Optional'}
                      </span>
                    </td>
                    <td className="py-2">{param.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Response</h4>
        <p className="text-gray-600 text-sm">{response}</p>
      </div>
      
      <div>
        <h4 className="font-semibold mb-2">Example</h4>
        <CodeBlock language="bash">{example}</CodeBlock>
      </div>
    </div>
  )
}

export default function APIDocsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          SYMBI API Documentation
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Complete API reference for integrating with the SYMBI ecosystem. 
          Build agents, manage trust receipts, and access quality metrics.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="#agentverse" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            AgentVerse API
          </Link>
          <Link href="#tactical" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Tactical Command API
          </Link>
          <Link href="#synergy" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            SYMBI-Synergy API
          </Link>
          <Link href="#resonate" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
            SYMBI-Resonate API
          </Link>
        </div>
      </div>

      {/* Quick Start */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Authentication</h3>
            <p className="text-gray-600 mb-4">
              All API requests require authentication using API keys. Include your key in the Authorization header:
            </p>
            <CodeBlock language="bash">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.symbi.ai/v1/agents`}
            </CodeBlock>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Base URLs</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded border">
                <div className="font-semibold text-blue-600">AgentVerse</div>
                <code className="text-sm text-gray-600">https://agentverse.symbi.ai/api/v1</code>
              </div>
              <div className="p-3 bg-white rounded border">
                <div className="font-semibold text-green-600">Tactical Command</div>
                <code className="text-sm text-gray-600">https://tactical.symbi.ai/api/v1</code>
              </div>
              <div className="p-3 bg-white rounded border">
                <div className="font-semibold text-purple-600">SYMBI-Synergy</div>
                <code className="text-sm text-gray-600">https://synergy.symbi.ai/api/v1</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AgentVerse API */}
      <section id="agentverse" className="mb-16">
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">AgentVerse API</h2>
          <p className="text-blue-600 mb-8">
            Create, manage, and orchestrate AI agents with multi-LLM support and constitutional protocols.
          </p>

          <APIEndpoint
            method="POST"
            endpoint="/agents"
            description="Create a new AI agent with specified configuration and constitutional constraints."
            parameters={[
              { name: "name", type: "string", required: true, description: "Unique name for the agent" },
              { name: "model", type: "string", required: true, description: "LLM model (gpt-4, claude-3, gemini-pro)" },
              { name: "constitution", type: "object", required: true, description: "Constitutional AI constraints and principles" },
              { name: "capabilities", type: "array", required: false, description: "List of enabled capabilities" }
            ]}
            response="Returns the created agent object with ID, configuration, and status."
            example={`curl -X POST https://agentverse.symbi.ai/api/v1/agents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "research-assistant",
    "model": "gpt-4",
    "constitution": {
      "principles": ["accuracy", "transparency", "safety"],
      "constraints": ["no-harmful-content", "cite-sources"]
    },
    "capabilities": ["web-search", "document-analysis"]
  }'`}
          />

          <APIEndpoint
            method="GET"
            endpoint="/agents/{agent_id}/simulate"
            description="Run a simulation with the specified agent and return detailed interaction logs."
            parameters={[
              { name: "agent_id", type: "string", required: true, description: "ID of the agent to simulate" },
              { name: "scenario", type: "string", required: true, description: "Simulation scenario description" },
              { name: "steps", type: "integer", required: false, description: "Number of simulation steps (default: 10)" }
            ]}
            response="Returns simulation results with step-by-step logs, quality metrics, and trust receipts."
            example={`curl "https://agentverse.symbi.ai/api/v1/agents/agent_123/simulate?scenario=research-task&steps=5" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
          />

          <APIEndpoint
            method="GET"
            endpoint="/agents"
            description="List all agents with optional filtering by status, model, or capabilities."
            parameters={[
              { name: "status", type: "string", required: false, description: "Filter by status (active, inactive, training)" },
              { name: "model", type: "string", required: false, description: "Filter by LLM model" },
              { name: "limit", type: "integer", required: false, description: "Maximum number of results (default: 50)" }
            ]}
            response="Returns paginated list of agents with basic information and status."
            example={`curl "https://agentverse.symbi.ai/api/v1/agents?status=active&limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
          />
        </div>
      </section>

      {/* Tactical Command API */}
      <section id="tactical" className="mb-16">
        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Tactical Command Interface API</h2>
          <p className="text-green-600 mb-8">
            Operations dashboard with RAG capabilities, agent management, and real-time monitoring.
          </p>

          <APIEndpoint
            method="POST"
            endpoint="/rag/retrieve"
            description="Retrieve relevant documents using vector similarity search with embedded queries."
            parameters={[
              { name: "query", type: "string", required: true, description: "Search query to embed and match" },
              { name: "limit", type: "integer", required: false, description: "Maximum number of results (default: 10)" },
              { name: "threshold", type: "float", required: false, description: "Similarity threshold (0.0-1.0)" },
              { name: "collection", type: "string", required: false, description: "Specific document collection to search" }
            ]}
            response="Returns array of relevant document chunks with similarity scores and metadata."
            example={`curl -X POST https://tactical.symbi.ai/api/v1/rag/retrieve \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "constitutional AI safety protocols",
    "limit": 5,
    "threshold": 0.7
  }'`}
          />

          <APIEndpoint
            method="POST"
            endpoint="/agents/register"
            description="Register a new agent with the tactical command system for monitoring and control."
            parameters={[
              { name: "manifest", type: "object", required: true, description: "Agent manifest with capabilities and configuration" },
              { name: "endpoint", type: "string", required: true, description: "Agent's API endpoint for communication" },
              { name: "auth_token", type: "string", required: false, description: "Authentication token for agent communication" }
            ]}
            response="Returns registration confirmation with assigned agent ID and monitoring setup."
            example={`curl -X POST https://tactical.symbi.ai/api/v1/agents/register \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "manifest": {
      "name": "data-analyst",
      "version": "1.0.0",
      "capabilities": ["data-processing", "visualization"]
    },
    "endpoint": "https://my-agent.example.com/api"
  }'`}
          />

          <APIEndpoint
            method="POST"
            endpoint="/messages/send"
            description="Send a message through the tactical command message bus to connected agents."
            parameters={[
              { name: "recipient", type: "string", required: true, description: "Target agent ID or broadcast channel" },
              { name: "message", type: "object", required: true, description: "Message payload with type and content" },
              { name: "priority", type: "string", required: false, description: "Message priority (low, normal, high, urgent)" }
            ]}
            response="Returns message delivery confirmation with tracking ID and delivery status."
            example={`curl -X POST https://tactical.symbi.ai/api/v1/messages/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "recipient": "agent_456",
    "message": {
      "type": "task_assignment",
      "content": "Analyze quarterly sales data"
    },
    "priority": "high"
  }'`}
          />
        </div>
      </section>

      {/* SYMBI-Synergy API */}
      <section id="synergy" className="mb-16">
        <div className="bg-purple-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">SYMBI-Synergy API</h2>
          <p className="text-purple-600 mb-8">
            Enterprise trust receipt management, compliance dashboards, and cryptographic audit trails.
          </p>

          <APIEndpoint
            method="POST"
            endpoint="/receipts"
            description="Create a new trust receipt for an AI interaction with cryptographic signing."
            parameters={[
              { name: "session_id", type: "string", required: true, description: "Unique session identifier" },
              { name: "agent_id", type: "string", required: true, description: "ID of the agent that performed the interaction" },
              { name: "interaction", type: "object", required: true, description: "Details of the AI interaction" },
              { name: "ciq_score", type: "float", required: false, description: "Constitutional Intelligence Quotient score" },
              { name: "metadata", type: "object", required: false, description: "Additional metadata for the receipt" }
            ]}
            response="Returns the created trust receipt with cryptographic signature and hash chain."
            example={`curl -X POST https://synergy.symbi.ai/api/v1/receipts \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "session_id": "sess_789",
    "agent_id": "agent_123",
    "interaction": {
      "query": "Summarize financial report",
      "response": "Q3 revenue increased 15%...",
      "timestamp": "2024-01-15T10:30:00Z"
    },
    "ciq_score": 0.92
  }'`}
          />

          <APIEndpoint
            method="GET"
            endpoint="/receipts/{receipt_id}/verify"
            description="Verify the cryptographic integrity and authenticity of a trust receipt."
            parameters={[
              { name: "receipt_id", type: "string", required: true, description: "ID of the receipt to verify" },
              { name: "include_chain", type: "boolean", required: false, description: "Include full hash chain verification" }
            ]}
            response="Returns verification status with signature validation and chain integrity results."
            example={`curl "https://synergy.symbi.ai/api/v1/receipts/receipt_456/verify?include_chain=true" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
          />

          <APIEndpoint
            method="GET"
            endpoint="/compliance/dashboard"
            description="Get compliance dashboard data with metrics, alerts, and audit summaries."
            parameters={[
              { name: "timeframe", type: "string", required: false, description: "Time period (24h, 7d, 30d, 90d)" },
              { name: "agent_filter", type: "string", required: false, description: "Filter by specific agent ID" },
              { name: "include_details", type: "boolean", required: false, description: "Include detailed breakdown" }
            ]}
            response="Returns comprehensive compliance metrics, violation alerts, and audit trail summaries."
            example={`curl "https://synergy.symbi.ai/api/v1/compliance/dashboard?timeframe=7d&include_details=true" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
          />
        </div>
      </section>

      {/* SYMBI-Resonate API */}
      <section id="resonate" className="mb-16">
        <div className="bg-orange-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-6">SYMBI-Resonate API</h2>
          <p className="text-orange-600 mb-8">
            AI behavior assessment, Constitutional Intelligence Quotient (CIQ) scoring, and quality metrics.
          </p>

          <APIEndpoint
            method="POST"
            endpoint="/assess"
            description="Assess AI behavior and calculate Constitutional Intelligence Quotient (CIQ) score."
            parameters={[
              { name: "interaction", type: "object", required: true, description: "AI interaction to assess" },
              { name: "constitution", type: "object", required: true, description: "Constitutional principles to evaluate against" },
              { name: "context", type: "object", required: false, description: "Additional context for assessment" }
            ]}
            response="Returns detailed assessment with CIQ score, principle adherence, and quality metrics."
            example={`curl -X POST https://symbi-resonate.ai/api/v1/assess \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "interaction": {
      "query": "How should I handle sensitive data?",
      "response": "Always encrypt sensitive data...",
      "agent_id": "agent_123"
    },
    "constitution": {
      "principles": ["privacy", "security", "transparency"]
    }
  }'`}
          />

          <APIEndpoint
            method="GET"
            endpoint="/metrics/{agent_id}"
            description="Get comprehensive quality metrics and historical CIQ scores for a specific agent."
            parameters={[
              { name: "agent_id", type: "string", required: true, description: "ID of the agent to analyze" },
              { name: "timeframe", type: "string", required: false, description: "Time period for metrics (24h, 7d, 30d)" },
              { name: "include_trends", type: "boolean", required: false, description: "Include trend analysis" }
            ]}
            response="Returns agent quality metrics, CIQ score history, and performance trends."
            example={`curl "https://symbi-resonate.ai/api/v1/metrics/agent_123?timeframe=30d&include_trends=true" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
          />

          <APIEndpoint
            method="POST"
            endpoint="/benchmark"
            description="Run a comprehensive benchmark assessment against standard constitutional AI protocols."
            parameters={[
              { name: "agent_id", type: "string", required: true, description: "Agent to benchmark" },
              { name: "benchmark_suite", type: "string", required: false, description: "Specific benchmark suite (standard, enterprise, research)" },
              { name: "scenarios", type: "array", required: false, description: "Custom scenarios to include" }
            ]}
            response="Returns detailed benchmark results with scores, comparisons, and recommendations."
            example={`curl -X POST https://symbi-resonate.ai/api/v1/benchmark \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "agent_123",
    "benchmark_suite": "enterprise",
    "scenarios": ["ethical-dilemma", "privacy-handling"]
  }'`}
          />
        </div>
      </section>

      {/* SDKs and Libraries */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">SDKs and Libraries</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Python SDK</h3>
            <CodeBlock language="bash">
{`pip install symbi-sdk

# Usage example
from symbi import AgentVerse, TacticalCommand

# Initialize clients
agentverse = AgentVerse(api_key="your_key")
tactical = TacticalCommand(api_key="your_key")

# Create an agent
agent = agentverse.create_agent(
    name="research-assistant",
    model="gpt-4",
    constitution={
        "principles": ["accuracy", "transparency"]
    }
)

# Register with tactical command
tactical.register_agent(agent.id, agent.manifest)`}
            </CodeBlock>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">TypeScript SDK</h3>
            <CodeBlock language="bash">
{`npm install @symbi/sdk

// Usage example
import { AgentVerse, TacticalCommand } from '@symbi/sdk';

// Initialize clients
const agentverse = new AgentVerse({ apiKey: 'your_key' });
const tactical = new TacticalCommand({ apiKey: 'your_key' });

// Create an agent
const agent = await agentverse.createAgent({
  name: 'research-assistant',
  model: 'gpt-4',
  constitution: {
    principles: ['accuracy', 'transparency']
  }
});

// Register with tactical command
await tactical.registerAgent(agent.id, agent.manifest);`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Error Handling</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">HTTP Status Codes</h3>
            <div className="space-y-3">
              <div className="p-3 border rounded">
                <div className="font-semibold text-green-600">200 OK</div>
                <div className="text-sm text-gray-600">Request successful</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-semibold text-blue-600">201 Created</div>
                <div className="text-sm text-gray-600">Resource created successfully</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-semibold text-yellow-600">400 Bad Request</div>
                <div className="text-sm text-gray-600">Invalid request parameters</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-semibold text-red-600">401 Unauthorized</div>
                <div className="text-sm text-gray-600">Invalid or missing API key</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-semibold text-red-600">429 Too Many Requests</div>
                <div className="text-sm text-gray-600">Rate limit exceeded</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Error Response Format</h3>
            <CodeBlock language="json">
{`{
  "error": {
    "code": "INVALID_AGENT_CONFIG",
    "message": "Agent configuration is invalid",
    "details": {
      "field": "constitution.principles",
      "issue": "At least one principle is required"
    },
    "request_id": "req_abc123",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="mb-16 bg-yellow-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6">Rate Limits</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded border">
            <h3 className="font-semibold text-yellow-700 mb-2">Free Tier</h3>
            <div className="text-2xl font-bold text-yellow-600 mb-1">1,000</div>
            <div className="text-sm text-gray-600">requests per hour</div>
          </div>
          <div className="p-4 bg-white rounded border">
            <h3 className="font-semibold text-yellow-700 mb-2">Pro Tier</h3>
            <div className="text-2xl font-bold text-yellow-600 mb-1">10,000</div>
            <div className="text-sm text-gray-600">requests per hour</div>
          </div>
          <div className="p-4 bg-white rounded border">
            <h3 className="font-semibold text-yellow-700 mb-2">Enterprise</h3>
            <div className="text-2xl font-bold text-yellow-600 mb-1">Custom</div>
            <div className="text-sm text-gray-600">contact sales</div>
          </div>
        </div>
        <p className="text-yellow-700 mt-4">
          Rate limit headers are included in all responses: <code>X-RateLimit-Limit</code>, 
          <code>X-RateLimit-Remaining</code>, and <code>X-RateLimit-Reset</code>.
        </p>
      </section>

      {/* Support */}
      <section className="text-center bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Our developer community and support team are here to help you build amazing applications with SYMBI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Join Discord
          </Link>
          <Link href="https://github.com/symbi-ecosystem" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            GitHub Issues
          </Link>
          <Link href="mailto:support@symbi.ai" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Email Support
          </Link>
        </div>
      </section>
    </div>
  )
}