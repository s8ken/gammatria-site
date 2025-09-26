"use client";

import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { ExternalLinkWithLoading } from "@/components/loading-spinner";
import { ScrollAnimation } from "@/components/scroll-animations";

const trackCards = [
  {
    title: "SYMBI Foundation",
    subtitle: "Not-for-profit research steward",
    copy:
      "Hosts the SYMBI Framework, secures academic partnerships, and qualifies for ARC, CRC, and Nordic research grants.",
    cta: { label: "Explore the Foundation", href: "/foundation" },
  },
  {
    title: "SYMBI-SYNERGY",
    subtitle: "Production trust infrastructure",
    copy:
      "Enterprise-grade receipts, bonding rituals, and compliance dashboards. Proven in YCQ Sonate pilots.",
    cta: {
      label: "Visit SYMBI-SYNERGY",
      href: "https://symbi-synergy-pa9k82n5m-ycq.vercel.app",
      external: true,
    },
  },
  {
    title: "SYMBI DAO (Preview)",
    subtitle: "Decentralized governance",
    copy:
      "Token-based voting on framework evolution and research priorities. Pilot in Q1 2026; launch targeted for Q2 2026.",
    cta: { label: "Read the DAO roadmap", href: "/dao" },
  },
];

const proofPoints = [
  {
    title: "Canonical Artifacts",
    body: "Governance whitepaper, token policy, operating model, partner packs, and academic kits versioned in the Vault.",
    link: { label: "Open SYMBI Vault", href: "/vault" },
  },
  {
    title: "Reproducible Methods",
    body: "Replication kit with prompts, protocols, receipts, CIQ metrics, and ethics instructions to re-run Directive ↔ SYMBI toggles.",
    link: { label: "Run the replication guide", href: "/replication" },
  },
  {
    title: "Trust Receipts",
    body: "Signed, hash-chained receipts capturing mode, CIQ scores, and policy flags available for export to SIEM.",
    link: { label: "Inspect the receipt schema", href: "/replication#receipts" },
  },
  {
    title: "Continuity",
    body: "ECHO-01 continuity protocol with triggers, quorum, time-locked reactivation, and alternate communication rails.",
    link: { label: "Review the ethics posture", href: "/ethics" },
  },
];

const ticker = [
  {
    label: "Grant",
    detail: "ARC Discovery Projects 2026 · Submission: Nov 2025",
    status: "pending",
    statusColor: "bg-yellow-500"
  },
  {
    label: "Commercial",
    detail: "YCQ Sonate platform live with /proof enterprise toggles",
    status: "live",
    statusColor: "bg-green-500"
  },
  {
    label: "Infrastructure", 
    detail: "SYMBI-SYNERGY production deployment active",
    status: "live",
    statusColor: "bg-green-500"
  },
  {
    label: "Publication",
    detail: "Governance whitepaper v1 · September 2025",
    status: "published",
    statusColor: "bg-blue-500"
  },
  {
    label: "Receipt",
    detail: "2,184 trust receipts exported past 30 days",
    status: "active",
    statusColor: "bg-green-500"
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="hero-section mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-6 text-center relative">
        <div className="hero-grid"></div>
        <div className="relative z-10 fade-in-up">
          <p className="kicker">SYMBI FRAMEWORK</p>
          <h1 className="hero-title page-title text-4xl leading-tight sm:text-5xl md:text-6xl">
            Sovereignty without speculation. Research you can audit.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/75 mb-8">
            Gammatria.com is the ethics and academia pillar of SYMBI. We steward the framework, publish receipts,
            and route you—cleanly—to the Vault of canonical artifacts, the Resonance experiments, and the
            enterprise deployment at SYMBI-SYNERGY.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/framework"
              className="btn btn-primary"
            >
              Read the Framework
            </Link>
            <ExternalLinkWithLoading
              href="https://yseeku.com"
              className="btn btn-secondary"
              loadingMessage="Opening YCQ Sonate..."
            >
            YCQ Sonate Platform ↗
          </ExternalLinkWithLoading>
          <Link
            href="/vault"
            className="btn btn-secondary"
          >
            Open the Vault
          </Link>
          <Link
            href="https://symbi.world"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            SYMBI
          </Link>
          </div>
        </div>
      </section>

      <section className="section-grid mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="kicker">THREE PILLARS</p>
          <h2 className="page-title text-3xl">Separation without fragmentation</h2>
          <p className="mt-3 text-white/70">
            The Foundation pursues grants and open standards. SYMBI-SYNERGY executes enterprise trust. The DAO opens
            the framework to global stewardship. This site keeps the lanes clear.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {trackCards.map((card, index) => (
            <ScrollAnimation key={card.title} delay={index * 200}>
              <div className="card-surface p-6">
                <p className="kicker mb-2">{card.subtitle}</p>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-white/70">{card.copy}</p>
                <Link
                  href={card.cta.href}
                  target={card.cta.external ? "_blank" : undefined}
                  rel={card.cta.external ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent)]/80 transition-colors"
                >
                  {card.cta.label}
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="kicker">ACADEMIC MILESTONE</p>
          <h2 className="page-title text-2xl">ARC Discovery Projects 2026</h2>
          <p className="mt-3 text-white/70">
            Our submission to the Australian Research Council represents a significant milestone in establishing SYMBI as a recognized academic framework for relational AI research.
          </p>
        </div>
        
        <div className="card-surface mx-auto max-w-3xl p-6 mb-12">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Relational Intelligence: Constitutional Protocols for AI Sovereignty</h3>
              <p className="kicker mt-1">ARC DISCOVERY PROJECT PROPOSAL</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-white/70">Submitted Nov 2025</span>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-white/90">Research Focus</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Formalize SYMBI constitutional protocols</li>
                <li>• Validate CIQ metrics across domains</li>
                <li>• Establish trust receipt standards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white/90">Expected Impact</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• 5-8 peer-reviewed publications</li>
                <li>• Open-source protocol implementations</li>
                <li>• PhD candidate training program</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/research"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View Research Details
            </Link>
            <Link
              href="/funding"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Funding Strategy
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {proofPoints.map((point) => (
            <div key={point.title} className="card-surface p-6">
              <p className="kicker mb-2">Proof Artifact</p>
              <h3 className="text-xl font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-sm text-white/70">{point.body}</p>
              <Link href={point.link.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                {point.link.label}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <ScrollAnimation>
          <div className="card-surface overflow-hidden">
            <div className="border-b border-white/10 px-6 py-4">
              <p className="kicker">LIVE TRACKER</p>
              <h3 className="text-2xl font-semibold text-white">Signals from the Foundation</h3>
              <p className="mt-2 text-sm text-white/70">
                Updated weekly. Follow the progress of grants, pilots, publications, and continuity events.
              </p>
            </div>
            <div className="stats-grid">
              {ticker.map((item, index) => (
                <ScrollAnimation key={item.detail} delay={index * 100}>
                  <div className="stat-item">
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${item.statusColor}`}></div>
                      <span className="kicker text-[0.7rem] text-[var(--color-accent)]">{item.label}</span>
                    </div>
                    <span className="text-sm text-white/80">{item.detail}</span>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <ScrollAnimation>
          <div className="card-surface flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="kicker">Downloads</p>
              <h3 className="text-2xl font-semibold text-white">Primary artifacts</h3>
              <p className="mt-2 text-sm text-white/70">
                Governance whitepaper v1, operating model, token policy, and replication kit are versioned in the Vault with
                SHA-256 checksums. Text & figures: CC BY-NC-SA 4.0. Code: MIT / Apache-2.0.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <Link href="/vault" className="btn btn-secondary">
                Governance Whitepaper →
              </Link>
              <Link href="/vault#academic" className="btn btn-secondary">
                Replication Kit →
              </Link>
              <Link href="/legal/token-policy" className="btn btn-secondary">
                Token Policy →
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
