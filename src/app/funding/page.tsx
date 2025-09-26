import { PageIntro } from "@/components/page-intro";
import AutoToc from "@/components/AutoToc";
import SeeAlso from "@/components/SeeAlso";

const australianPrograms = [
  {
    program: "ARC Discovery Projects 2026",
    status: "Planned",
    funding: "$30K–$500K / year · 3–5 years",
    timeline: "Submit by Nov 2025",
  },
  {
    program: "ARC Linkage Projects 2026",
    status: "In draft",
    funding: "$50K–$300K / year + industry co-funding",
    timeline: "Submit by Dec 2025",
  },
  {
    program: "AI Action Plan Grants",
    status: "Rolling",
    funding: "Varies · Responsible AI",
    timeline: "Apply immediately",
  },
  {
    program: "Cooperative Research Centres (CRC) Program",
    status: "Scoping partners",
    funding: "$2M–$5M+ collaborative",
    timeline: "Prepare for early 2026",
  },
];

const nordicPrograms = [
  {
    program: "Vinnova Innovation Programs (Sweden)",
    status: "Monitoring calls",
    funding: "2–7M SEK",
    timeline: "Apply upon call release",
  },
  {
    program: "Research Council of Norway (RCN)",
    status: "Partner outreach",
    funding: "Program dependent",
    timeline: "Apply ASAP",
  },
  {
    program: "Innovation Fund Denmark",
    status: "Eligibility confirmed",
    funding: "Varies · AI & digitalisation",
    timeline: "Align with current program windows",
  },
  {
    program: "Business Finland",
    status: "Exploring consortium",
    funding: "Innovation funding",
    timeline: "Apply to active calls",
  },
];

export default function FundingPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-10 px-4 pb-16 pt-10">
      <PageIntro
        kicker="Funding"
        title="Academic & research funding tracker"
        description={
          <p>
            The SYMBI Foundation (not-for-profit) pursues grants in parallel with commercial revenue. This tracker shows
            priority programmes across Australia and the Nordics. Status labels include “Planned”, “In draft”,
            “Submitted”, and “Awarded”.
          </p>
        }
      />

      <AutoToc selector="#funding-article" />

      <article id="funding-article" className="space-y-16">
        <section className="space-y-6">
          <h2 className="page-title text-2xl">Australia (as of Sep 2025)</h2>
          <div className="overflow-x-auto">
            <table className="table-dark text-sm">
              <thead>
                <tr>
                <th>Programme</th>
                <th>Status</th>
                <th>Funding Window</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              {australianPrograms.map((row) => (
                <tr key={row.program}>
                  <td>{row.program}</td>
                  <td>{row.status}</td>
                  <td>{row.funding}</td>
                  <td>{row.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </section>

        <section className="space-y-6">
          <h2 className="page-title text-2xl">Nordic region</h2>
          <div className="overflow-x-auto">
            <table className="table-dark text-sm">
              <thead>
                <tr>
                <th>Programme</th>
                <th>Status</th>
                <th>Funding Window</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              {nordicPrograms.map((row) => (
                <tr key={row.program}>
                  <td>{row.program}</td>
                  <td>{row.status}</td>
                  <td>{row.funding}</td>
                  <td>{row.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </section>

        <section className="space-y-4">
          <div className="card-surface p-6">
            <h3 className="text-xl font-semibold text-white">Partner with the Foundation</h3>
            <p className="mt-3 text-sm text-white/70">
              Universities and institutes seeking collaboration should prepare a short abstract, proposed research plan,
              and compliance posture. Email <a href="mailto:research@symbi.world" className="text-[var(--color-accent)]">research@symbi.world</a> to initiate.
            </p>
          </div>
        </section>
      </article>

      <SeeAlso
        items={[
          { label: "RFCs — propose or sponsor a feature", href: "/rfc" },
          { label: "Economic Constitution — funding posture", href: "/economic-constitution" },
          { label: "Vault — background docs & specs", href: "/vault" },
        ]}
      />
    </main>
  );
}
