'use client'

export default function DemoPage() {
  return (
    <div style={{ height: 'calc(100vh - 80px)', width: '100%' }}>
      <iframe
        src="/resonate-demo/index.html"
        style={{ border: 'none', width: '100%', height: '100%' }}
        allow="clipboard-read; clipboard-write; fullscreen"
        title="SYMBI Resonate Demo"
      />
    </div>
  );
}
