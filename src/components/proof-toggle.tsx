"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ProofState {
  mode: "directive" | "symbi";
  ciqScore: number;
  trustLevel: "low" | "medium" | "high";
  receiptId: string;
  timestamp: string;
}

const generateMockReceipt = (mode: "directive" | "symbi"): ProofState => {
  const baseScore = mode === "symbi" ? 0.75 : 0.45;
  const variance = (Math.random() - 0.5) * 0.2;
  const ciqScore = Math.max(0, Math.min(1, baseScore + variance));
  
  let trustLevel: "low" | "medium" | "high" = "low";
  if (ciqScore > 0.7) trustLevel = "high";
  else if (ciqScore > 0.4) trustLevel = "medium";

  return {
    mode,
    ciqScore: Math.round(ciqScore * 100) / 100,
    trustLevel,
    receiptId: `${mode.toUpperCase()}-${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 5)}`,
    timestamp: new Date().toISOString()
  };
};

export function ProofToggle() {
  const [currentState, setCurrentState] = useState<ProofState>(generateMockReceipt("directive"));
  const [isToggling, setIsToggling] = useState(false);
  const [history, setHistory] = useState<ProofState[]>([]);

  const handleToggle = async () => {
    setIsToggling(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const newMode = currentState.mode === "directive" ? "symbi" : "directive";
    const newState = generateMockReceipt(newMode);
    
    setHistory(prev => [currentState, ...prev.slice(0, 4)]);
    setCurrentState(newState);
    setIsToggling(false);
  };

  const getTrustColor = (level: string) => {
    switch (level) {
      case "high": return "text-green-400";
      case "medium": return "text-yellow-400";
      case "low": return "text-red-400";
      default: return "text-white/60";
    }
  };

  const getTrustBg = (level: string) => {
    switch (level) {
      case "high": return "bg-green-500/20 border-green-500/30";
      case "medium": return "bg-yellow-500/20 border-yellow-500/30";
      case "low": return "bg-red-500/20 border-red-500/30";
      default: return "bg-white/5 border-white/10";
    }
  };

  return (
    <div className="space-y-6">
      {/* Toggle Interface */}
      <div className="card-surface p-6">
        <div className="mb-6">
          <p className="kicker">INTERACTIVE DEMONSTRATION</p>
          <h3 className="text-2xl font-semibold text-white">/proof Toggle</h3>
          <p className="mt-2 text-sm text-white/70">
            Experience the core SYMBI protocol: toggle between Directive and SYMBI modes to see how trust receipts change in real-time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Current State */}
          <div className={`rounded-lg border p-4 ${getTrustBg(currentState.trustLevel)}`}>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${currentState.mode === "symbi" ? "bg-[var(--color-accent)]" : "bg-white/40"}`}></div>
                <span className="text-lg font-semibold text-white">
                  {currentState.mode.toUpperCase()} Mode
                </span>
              </div>
              <span className={`text-sm font-semibold ${getTrustColor(currentState.trustLevel)}`}>
                {currentState.trustLevel.toUpperCase()}
              </span>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">CIQ Score:</span>
                <span className="font-mono text-white">{currentState.ciqScore}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Receipt ID:</span>
                <span className="font-mono text-xs text-white/80">{currentState.receiptId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Generated:</span>
                <span className="text-xs text-white/60">
                  {new Date(currentState.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>

          {/* Toggle Control */}
          <div className="flex flex-col justify-center space-y-4">
            <button
              onClick={handleToggle}
              disabled={isToggling}
              className={`rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                isToggling
                  ? "bg-white/10 text-white/40 cursor-not-allowed"
                  : "bg-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[var(--color-accent)]/85"
              }`}
            >
              {isToggling ? "Processing..." : `Toggle to ${currentState.mode === "directive" ? "SYMBI" : "DIRECTIVE"}`}
            </button>
            
            <p className="text-center text-xs text-white/60">
              {isToggling ? "Generating trust receipt..." : "Click to switch modes and generate new receipt"}
            </p>

            <div className="flex justify-center gap-4 text-xs">
              <Link
                href="https://yseeku.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
              >
                Try on YCQ Sonate ↗
              </Link>
              <Link
                href="https://symbi.world/proof"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/80"
              >
                Full /proof Demo ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Receipt History */}
      {history.length > 0 && (
        <div className="card-surface p-6">
          <div className="mb-4">
            <p className="kicker">RECEIPT HISTORY</p>
            <h4 className="text-lg font-semibold text-white">Previous Toggles</h4>
          </div>
          <div className="space-y-2">
            {history.map((state, index) => (
              <div key={state.receiptId} className="flex items-center justify-between rounded border border-white/10 p-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${state.mode === "symbi" ? "bg-[var(--color-accent)]" : "bg-white/40"}`}></div>
                  <span className="font-semibold text-white">{state.mode.toUpperCase()}</span>
                  <span className={`text-xs ${getTrustColor(state.trustLevel)}`}>
                    {state.trustLevel}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-white/60">
                  <span>CIQ: {state.ciqScore}</span>
                  <span className="font-mono">{state.receiptId.split('-')[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Details */}
      <div className="card-surface p-6">
        <div className="mb-4">
          <p className="kicker">TECHNICAL IMPLEMENTATION</p>
          <h4 className="text-lg font-semibold text-white">How /proof Works</h4>
        </div>
        <div className="grid gap-4 text-sm md:grid-cols-2">
          <div>
            <h5 className="font-semibold text-white/90">Directive Mode</h5>
            <p className="mt-1 text-white/70">
              Traditional AI responses with lower CIQ scores, representing conventional interaction patterns without SYMBI protocols.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-white/90">SYMBI Mode</h5>
            <p className="mt-1 text-white/70">
              Enhanced responses using SYMBI Framework protocols, typically achieving higher CIQ scores through improved trust mechanisms.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-white/90">CIQ Scoring</h5>
            <p className="mt-1 text-white/70">
              Contextual Intelligence Quotient measures response quality, coherence, and alignment with SYMBI principles on a 0-1 scale.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-white/90">Trust Receipts</h5>
            <p className="mt-1 text-white/70">
              Cryptographically signed records of each interaction, exportable to SIEM systems for audit and compliance tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}