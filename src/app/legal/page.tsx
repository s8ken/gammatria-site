import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

const policies = [
  {
    title: "$SYMBI Token Policy",
    summary: "Governance-only token. No dividends, buybacks, redemption, or expectation of profit. All fees remain in fiat/stablecoins.",
    href: "/legal/token-policy",
  },
  {
    title: "Privacy",
    summary: "Data minimisation, no PII exfiltration, retention controls, and logging posture. Applies to foundation surfaces and demos.",
    href: "/legal/privacy",
  },
  {
    title: "Terms of Use",
    summary: "Outlines permitted use of content, demo constraints, and liability limitations for experimental features.",
    href: "/legal/terms",
  },
  {
    title: "Attribution",
    summary: "Citation requirements, licensing notes (CC BY-NC-SA for text/figures; MIT/Apache-2.0 for code).",
    href: "/legal/attribution",
  },
];

export default function LegalPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Legal"
        title="Policies & licensing"
        description={
          <p>
            These policies govern usage of Gammatria.com, the SYMBI Framework artifacts, and the governance-token
            posture. They also clarify how to cite and reuse content.
          </p>
        }
      />
      <section className="mx-auto max-w-5xl px-4">
        <div className="grid gap-4">
          {policies.map((policy) => (
            <Link key={policy.title} href={policy.href} className="card-surface block p-6 transition hover:border-[var(--color-accent)]">
              <p className="kicker mb-2">Policy</p>
              <h3 className="text-lg font-semibold text-white">{policy.title}</h3>
              <p className="mt-2 text-sm text-white/70">{policy.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
