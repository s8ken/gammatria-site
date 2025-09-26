import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

const ecosystemNodes = [
  {
    id: "gammatria",
    title: "Gammatria.com",
    subtitle: "Ethics & Academia Pillar",
    description: "Stewards the SYMBI Framework, publishes research, manages governance, and maintains canonical artifacts.",
    status: "Live",
    statusColor: "bg-green-500",
    links: [
      { label: "Framework Documentation", href: "/framework" },
      { label: "Research Publications", href: "/research" },
      { label: "Governance Model", href: "/governance" },
      { label: "SYMBI Vault", href: "/vault" }
    ],
    connections: ["symbi-synergy", "symbi-world", "yseeku"]
  },
  {
    id: "symbi-synergy",
    title: "SYMBI-SYNERGY",
    subtitle: "Production Infrastructure",
    description: "Enterprise-grade trust receipts, bonding rituals, and compliance dashboards for commercial deployment.",
    status: "Production",
    statusColor: "bg-blue-500",
    links: [
      { label: "Launch Platform", href: "https://symbi-synergy-pa9k82n5m-ycq.vercel.app", external: true },
      { label: "Enterprise Features", href: "/foundation#enterprise" },
      { label: "Trust Receipts", href: "/replication#receipts" }
    ],
    connections: ["gammatria", "ycq-sonate"]
  },
  {
    id: "symbi-world",
    title: "SYMBI.world",
    subtitle: "Interactive Demonstrations",
    description: "Live /proof toggles, interactive protocol demonstrations, and real-time SYMBI Framework showcases.",
    status: "Beta",
    statusColor: "bg-yellow-500",
    links: [
      { label: "Launch /proof", href: "https://symbi.world/proof", external: true },
      { label: "Interactive Demos", href: "https://symbi.world", external: true }
    ],
    connections: ["gammatria", "ycq-sonate"]
  },
  {
    id: "yseeku",
    title: "YSeeku.com",
    subtitle: "Research & Discovery",
    description: "Academic research platform, discovery tools, and collaborative research environment for SYMBI studies.",
    status: "Development",
    statusColor: "bg-purple-500",
    links: [
      { label: "Research Portal", href: "https://yseeku.com", external: true },
      { label: "Academic Partnerships", href: "/research#partnerships" }
    ],
    connections: ["gammatria", "ycq-sonate"]
  },
  {
    id: "ycq-sonate",
    title: "YCQ Sonate",
    subtitle: "Commercial Platform",
    description: "Production deployment of SYMBI protocols with enterprise features, /proof toggles, and commercial applications.",
    status: "Live",
    statusColor: "bg-green-500",
    links: [
      { label: "Platform Access", href: "https://ycq-sonate.com", external: true },
      { label: "Enterprise Solutions", href: "/foundation#commercial" }
    ],
    connections: ["symbi-synergy", "symbi-world", "yseeku"]
  }
];

const dataFlows = [
  {
    from: "Gammatria",
    to: "SYMBI-SYNERGY",
    type: "Governance & Standards",
    description: "Framework specifications, governance policies, and compliance requirements"
  },
  {
    from: "SYMBI-SYNERGY",
    to: "YCQ Sonate",
    type: "Trust Infrastructure",
    description: "Production-ready trust receipts, bonding protocols, and enterprise features"
  },
  {
    from: "Gammatria",
    to: "SYMBI.world",
    type: "Research & Proofs",
    description: "Academic research, proof concepts, and interactive demonstrations"
  },
  {
    from: "YSeeku.com",
    to: "Gammatria",
    type: "Research Insights",
    description: "Academic findings, research data, and collaborative studies"
  },
  {
    from: "SYMBI.world",
    to: "YCQ Sonate",
    type: "Proof Validation",
    description: "/proof toggle implementations and interactive protocol validations"
  }
];

export default function EcosystemPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="SYMBI ECOSYSTEM"
        title="Interconnected Architecture"
        description="The SYMBI Framework operates across five interconnected platforms, each serving distinct but complementary roles in the ecosystem. This map shows how governance, research, infrastructure, and commercial applications work together."
      />

      {/* Live Status Overview */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="card-surface p-6">
          <div className="mb-6">
            <p className="kicker">ECOSYSTEM STATUS</p>
            <h2 className="text-2xl font-semibold text-white">Live Platform Health</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {ecosystemNodes.map((node) => (
              <div key={node.id} className="flex items-center gap-3 rounded-lg border border-white/10 p-3">
                <div className={`h-3 w-3 rounded-full ${node.statusColor}`}></div>
                <div>
                  <p className="text-sm font-semibold text-white">{node.title.split('.')[0]}</p>
                  <p className="text-xs text-white/60">{node.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Details */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <p className="kicker">PLATFORM ARCHITECTURE</p>
          <h2 className="text-3xl font-semibold text-white">Five Pillars, One Framework</h2>
          <p className="mt-3 text-white/70">
            Each platform serves a specific function while maintaining seamless integration with the broader SYMBI ecosystem.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {ecosystemNodes.map((node) => (
            <div key={node.id} className="card-surface p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{node.title}</h3>
                  <p className="kicker mt-1">{node.subtitle}</p>
                </div>
                <div className={`h-3 w-3 rounded-full ${node.statusColor}`}></div>
              </div>
              <p className="mb-4 text-sm text-white/70">{node.description}</p>
              <div className="space-y-2">
                {node.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="block text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                  >
                    {link.label} {link.external && "↗"}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <p className="kicker">DATA FLOWS</p>
          <h2 className="text-3xl font-semibold text-white">Information Architecture</h2>
          <p className="mt-3 text-white/70">
            How data, governance, and trust flow between platforms to maintain ecosystem integrity.
          </p>
        </div>
        <div className="grid gap-4">
          {dataFlows.map((flow, index) => (
            <div key={index} className="card-surface p-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span>{flow.from}</span>
                  <span className="text-[var(--color-accent)]">→</span>
                  <span>{flow.to}</span>
                </div>
                <span className="kicker text-xs">{flow.type}</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{flow.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Points */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="card-surface p-6">
          <div className="mb-6">
            <p className="kicker">INTEGRATION MATRIX</p>
            <h2 className="text-2xl font-semibold text-white">Cross-Platform Connections</h2>
            <p className="mt-3 text-white/70">
              Key integration points that enable seamless user journeys across the SYMBI ecosystem.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 p-4">
              <h3 className="font-semibold text-white">Academic → Commercial</h3>
              <p className="mt-2 text-sm text-white/70">
                Research from Gammatria and YSeeku flows into production implementations via SYMBI-SYNERGY to YCQ Sonate.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-4">
              <h3 className="font-semibold text-white">Proof → Production</h3>
              <p className="mt-2 text-sm text-white/70">
                Interactive demonstrations on SYMBI.world validate concepts before enterprise deployment.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-4">
              <h3 className="font-semibold text-white">Governance → Implementation</h3>
              <p className="mt-2 text-sm text-white/70">
                Framework standards from Gammatria ensure consistent implementation across all platforms.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-4">
              <h3 className="font-semibold text-white">Feedback → Evolution</h3>
              <p className="mt-2 text-sm text-white/70">
                Production insights from commercial platforms inform academic research and framework evolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="card-surface p-6">
          <div className="mb-6">
            <p className="kicker">QUICK ACCESS</p>
            <h2 className="text-2xl font-semibold text-white">Navigate the Ecosystem</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <Link
              href="https://symbi-synergy-pa9k82n5m-ycq.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-center text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-accent)]/85"
            >
              Launch SYMBI-SYNERGY ↗
            </Link>
            <Link
              href="https://symbi.world/proof"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Try /proof Toggle ↗
            </Link>
            <Link
              href="/vault"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Access SYMBI Vault
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}