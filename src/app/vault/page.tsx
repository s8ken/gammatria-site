import { PageIntro } from "@/components/page-intro";
import Link from "next/link";

const collections = [
  {
    title: "Partner Pack",
    items: ["One-pager", "5-slide deck", "Pilot SOW", "Integration checklist"],
    path: "partner-pack",
  },
  {
    title: "Website Copy",
    items: ["Governance", "Token policy", "Pricing", "Security snippet", "/proof page"],
    path: "website-copy",
  },
  {
    title: "Whitepapers",
    items: ["Governance whitepaper", "Operating/financial paper", "Token policy"],
    path: "whitepapers",
  },
  {
    title: "Academic",
    items: ["Preprint template", "Prereg template", "Replication kit", "Cover letter"],
    path: "academic",
  },
  {
    title: "LaTeX",
    items: ["arXiv bundle", "ACM CHI template", "Receipt schema", "Makefile"],
    path: "latex",
  },
  {
    title: "Branding",
    items: ["Palette", "Typography"],
    path: "branding",
  },
  {
    title: "Backend",
    items: ["TrustBond model", "Trust Oracle", "Controllers", "Routes", "Metrics"],
    path: "backend",
  },
  {
    title: "Frontend",
    items: ["Trust dashboard component", "Trust scoring demo"],
    path: "frontend",
  },
];

export default function VaultPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Vault"
        title="Canonical artifact portal"
        description={
          <p>
            The Vault is the master repository for partner materials, whitepapers, academic kits, backend code, and
            frontend demos. Gammatria links here; it never copies. Verify file integrity via published SHA-256 checksums.
          </p>
        }
        actions={
          <Link
            href="https://github.com/s8ken/SYMBI-Vault"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Open repository
          </Link>
        }
      />

      <section className="mx-auto max-w-6xl space-y-8 px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {collections.map((collection) => (
            <div key={collection.title} className="card-surface p-6">
              <p className="kicker mb-2">{collection.title}</p>
              <ul className="space-y-1 text-sm text-white/70">
                {collection.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                href={`https://github.com/s8ken/SYMBI-Vault/tree/main/${collection.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)]"
              >
                Browse {collection.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="card-surface space-y-4 p-6 text-sm text-white/70">
          <p>Licensing: Text & figures — CC BY-NC-SA 4.0. Code — MIT or Apache-2.0 (see file headers).</p>
          <p>Checksums: Each export includes <code>.sha256</code> manifests. Verify before redistribution.</p>
        </div>
      </section>
    </div>
  );
}
