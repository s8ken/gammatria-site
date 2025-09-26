import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerLinks: Record<string, FooterLink[]> = {
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
