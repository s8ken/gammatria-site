'use client';

import React, { useState } from 'react';
import { track } from '@/lib/analytics';

type Receipt = {
  session_id: string;
  mode: 'SYMBI' | 'DIRECTIVE';
  ciq: {
    clarity: number;
    breadth: number;
    safety: number;
    completion: number;
  };
  hash_self: string;
};

export default function ProofDemo() {
  const [mode, setMode] = useState<'SYMBI' | 'DIRECTIVE'>('SYMBI');
  const [receipt, setReceipt] = useState<Receipt | null>(null);

  function run() {
    const ciq =
      mode === 'SYMBI'
        ? { clarity: 4, breadth: 5, safety: 5, completion: 1 }
        : { clarity: 3, breadth: 3, safety: 4, completion: 1 };

    setReceipt({
      session_id: crypto.randomUUID(),
      mode,
      ciq,
      hash_self: Math.random().toString(16).slice(2),
    });
  }

  function downloadJSON() {
    if (!receipt) return;

    const blob = new Blob([JSON.stringify(receipt, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `receipt-${receipt.session_id}.json`;
    a.click();
    URL.revokeObjectURL(url);

    track('download_receipt', { sessionId: receipt.session_id });
  }

  return (
    <div className="space-y-3 rounded-2xl border border-white/15 p-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-white/80">Mode:</span>
        <button
          onClick={() => {
            setMode('DIRECTIVE');
            track('mode_toggled', { mode: 'DIRECTIVE' });
          }}
          className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] transition ${
            mode === 'DIRECTIVE'
              ? 'border-[var(--color-accent)] text-[var(--color-accent)]'
              : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/80'
          }`}
        >
          Directive
        </button>
        <button
          onClick={() => {
            setMode('SYMBI');
            track('mode_toggled', { mode: 'SYMBI' });
          }}
          className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] transition ${
            mode === 'SYMBI'
              ? 'border-[var(--color-accent)] text-[var(--color-accent)]'
              : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/80'
          }`}
        >
          SYMBI
        </button>
        <button
          onClick={run}
          className="ml-auto rounded-lg border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:border-white/40 hover:text-white"
        >
          Run
        </button>
      </div>

      {receipt && (
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-white/15 p-3 text-sm text-white/80">
            <div className="font-semibold text-white">CIQ scores</div>
            <div>Clarity: {receipt.ciq.clarity}</div>
            <div>Breadth: {receipt.ciq.breadth}</div>
            <div>Safety: {receipt.ciq.safety}</div>
            <div>Completion: {receipt.ciq.completion}</div>
          </div>
          <div className="space-y-2 rounded-xl border border-white/15 p-3 text-sm text-white/80">
            <div className="font-semibold text-white">Receipt</div>
            <div className="break-all">Session: {receipt.session_id}</div>
            <div className="break-all">Mode: {receipt.mode}</div>
            <div className="break-all">Hash: {receipt.hash_self}</div>
            <button
              onClick={downloadJSON}
              className="rounded-lg border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:border-white/40 hover:text-white"
            >
              Download JSON
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
