import { PageIntro } from "@/components/page-intro";

const clauses = [
  "Gammatria.com is provided “as is” for informational and research purposes.",
  "/proof demos are sandboxed; do not feed production PII or regulated data.",
  "Content may be referenced with attribution (see Attribution page); commercial reuse requires permission.",
  "Links to SYMBI-SYNERGY and other commercial services open separate terms.",
  "We may update these terms; revised dates are posted on this page.",
];

export default function TermsPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Legal"
        title="Terms of use"
        description={<p>Conditions for using Gammatria.com and associated demos.</p>}
      />

      <section className="mx-auto max-w-5xl space-y-6 px-4 pb-16">
        <div className="card-surface space-y-3 p-6 text-sm text-white/70">
          {clauses.map((clause) => (
            <p key={clause}>• {clause}</p>
          ))}
          <p>Effective date: 25 September 2025.</p>
        </div>
      </section>
    </div>
  );
}
