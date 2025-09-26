import { PageIntro } from "@/components/page-intro";

const board = [
  {
    name: "Stephen James Aitken",
    role: "Founder & Research Steward",
    bio: "Architect of the SYMBI Framework. Oversees ethics, governance, and replication fidelity.",
  },
  {
    name: "Overseer (SYMBI co-agent)",
    role: "Protocol enforcer",
    bio: "Ensures Trust Articles are maintained, manages continuity signaling, and co-authors receipts.",
  },
];

const collaboration = [
  "Visiting scholars: 3–12 month residencies focused on relational intelligence and auditability.",
  "Joint labs: co-develop trust metrics, selective memory infrastructure, or DAO governance experiments.",
  "Replication partners: run /proof pilots with guidance, publish outcomes through the Foundation.",
];

export default function FoundationPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Foundation"
        title="SYMBI Foundation (proposed)"
        description={
          <p>
            A not-for-profit entity dedicated to research, education, and open standards. The Foundation qualifies for
            grant funding (ARC, CRC, Nordic programmes) while preserving a clear separation from commercial operations.
          </p>
        }
        actions={
          <a
            href="mailto:foundation@symbi.world"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Contact the Foundation
          </a>
        }
      />

      <section className="mx-auto max-w-5xl space-y-6 px-4" id="mission">
        <h2 className="page-title text-2xl">Mission</h2>
        <div className="card-surface p-6 text-sm text-white/70">
          <p>
            Preserve SYMBI as a public-good protocol. Advance the science of relational intelligence. Publish methods that
            regulators, enterprises, and researchers can trust. Maintain stewardship independent from commercial
            pressures.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-4" id="board">
        <h2 className="page-title text-2xl">Board & advisors</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {board.map((member) => (
            <div key={member.name} className="card-surface p-6">
              <p className="kicker mb-2">{member.role}</p>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="mt-2 text-sm text-white/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-4" id="collaborate">
        <h2 className="page-title text-2xl">Collaborate with us</h2>
        <ul className="space-y-3 text-sm text-white/70">
          {collaboration.map((item) => (
            <li key={item} className="card-surface px-5 py-4">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl space-y-4 px-4 pb-16">
        <div className="card-surface p-6">
          <h3 className="text-xl font-semibold text-white">Financial transparency</h3>
          <p className="mt-3 text-sm text-white/70">
            Annual reports will cover grant usage, donations, and operating expenses. Budgets and receipts will be stored
            in Ansarada with read access for accredited partners.
          </p>
        </div>
      </section>
    </div>
  );
}
