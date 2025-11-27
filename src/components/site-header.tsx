'use client';

import Link from "next/link";
import { useState } from "react";

const primaryNav = [
  { label: "Get Started", href: "/getting-started" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Showcase", href: "/showcase" },
  { label: "API Docs", href: "/api-docs" },
  { label: "Framework", href: "/framework" },
  { label: "Ethics", href: "/ethics" },
  { label: "Governance", href: "/governance" },
  { label: "Research", href: "/research" },
  { label: "Resonance", href: "/resonance" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Replication", href: "/replication" },
  { label: "Funding", href: "/funding" },
  { label: "Foundation", href: "/foundation" },
  { label: "DAO", href: "/dao" },
  { label: "Press", href: "/press" },
  { label: "Symbi Resonate Demo", href: "/symbi-resonate" },
];

const callouts = [
  { label: "Vault", href: "/vault", accent: true },
  {
    label: "YCQ Sonate",
    href: "https://yseeku.com",
    external: true,
  },
  {
    label: "SYMBI-SYNERGY",
    href: "https://symbi-synergy-pa9k82n5m-ycq.vercel.app",
    external: true,
  },
  {
    label: "/proof",
    href: "https://symbi.world/proof",
    external: true,
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(11,16,32,0.88)] backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[var(--color-cloud)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 font-medium text-[var(--color-accent)]">
              Σ
            </span>
            <span className="font-semibold">Gammatria · SYMBI Framework</span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-xs uppercase text-white/70 transition sm:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <nav
          className={`grid gap-4 text-sm sm:flex sm:flex-1 sm:flex-wrap sm:items-center sm:justify-between ${
            open ? "grid" : "hidden sm:flex"
          }`}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {callouts.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  item.accent
                    ? "bg-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[var(--color-accent)]/90"
                    : "border border-white/15 text-white/80 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
