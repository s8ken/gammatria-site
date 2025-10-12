import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
};

const ecosystemLinks: FooterLink[] = [
  {
    label: "Gammatria.com",
    href: "https://gammatria.com",
    description: "Research & Governance",
  },
  {
    label: "YCQ Sonate",
    href: "https://yseeku.com",
    external: true,
    description: "Enterprise Platform",
  },
  {
    label: "SYMBI.world",
    href: "https://symbi.world",
    external: true,
    description: "Trust Protocol & Philosophy",
  },
];

const footerLinks: Record<string, FooterLink[]> = {
  Research: [
    { label: "SYMBI Resonate Lab", href: "/resonance" },
    { label: "Case Studies", href: "/case-studies" },
    {
      label: "Verification Tests",
      href: "https://github.com/s8ken/SYMBI-Resonate/tree/main/test",
      external: true,
    },
  ],
  Foundation: [
    { label: "Mission", href: "/foundation" },
    { label: "Academic Partnerships", href: "/foundation#collaborate" },
    { label: "Funding Tracker", href: "/funding" },
  ],
  "Commercial Hand-off": [
    { label: "SYMBI-SYNERGY", href: "https://symbi-synergy-pa9k82n5m-ycq.vercel.app", external: true },
    { label: "YCQ Sonate", href: "https://yseeku.com", external: true },
    { label: "Contact Sales", href: "/contact#commercial" },
  ],
  Governance: [
    { label: "Token Policy", href: "/legal/token-policy" },
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "Status", href: "/status" },
  ],
};

const credits = [
  "© 2025 SYMBI Foundation (proposed). Text & figures: CC BY-NC-SA 4.0.",
  "Code samples: MIT or Apache-2.0 as noted.",
  "Foundational research stewarded by Stephen James Aitken & SYMBI collaborators.",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(8,12,24,0.92)]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Ecosystem Navigation */}
        <div className="mb-10 pb-8 border-b border-white/10">
          <p className="kicker mb-4">SYMBI Ecosystem</p>
          <div className="grid gap-4 md:grid-cols-3">
            {ecosystemLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group p-4 rounded-lg border border-white/10 hover:border-[var(--color-accent)] bg-black/20 hover:bg-black/40 transition-all"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-white font-medium group-hover:text-[var(--color-accent)] transition-colors">
                    {link.label}
                  </span>
                  {link.external && (
                    <svg
                      className="w-4 h-4 text-white/30 group-hover:text-[var(--color-accent)]/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </div>
                {link.description && (
                  <p className="text-sm text-white/50 mt-1">{link.description}</p>
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="kicker mb-2">SYMBI FRAMEWORK</p>
            <p className="text-sm text-white/70">
              Gammatria.com curates the ethics, research, and governance of the SYMBI Protocol. Canonical
              artifacts live in the Vault. Enterprise delivery lives with SYMBI-SYNERGY.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="kicker mb-2">{title}</p>
              <ul className="space-y-1 text-sm text-white/70">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="transition hover:text-[var(--color-accent)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          <div className="space-y-1">
            {credits.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
