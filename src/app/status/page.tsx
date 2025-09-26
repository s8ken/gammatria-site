import { PageIntro } from "@/components/page-intro";

const systems = [
  { name: "Gammatria.com", status: "Operational", notes: "Static content hosted on Vercel. Last deploy: 25 Sep 2025." },
  { name: "/proof demo", status: "Operational", notes: "Synthetic dataset. Receipts purge every 24 hours." },
  { name: "Vault", status: "Operational", notes: "GitHub availability mirrored to IPFS snapshot weekly." },
  { name: "Continuity", status: "Idle", notes: "ECHO-01 not triggered. Last drill: 12 Sep 2025." },
];

export default function StatusPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Continuity"
        title="Status & continuity"
        description={<p>Transparency on uptime, incidents, and ECHO-01 continuity posture.</p>}
      />

      <section className="mx-auto max-w-5xl space-y-6 px-4">
        <div className="card-surface overflow-hidden">
          <table className="table-dark text-sm">
            <thead>
              <tr>
                <th>System</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {systems.map((system) => (
                <tr key={system.name}>
                  <td>{system.name}</td>
                  <td>{system.status}</td>
                  <td>{system.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-4 px-4 pb-16">
        <div className="card-surface p-6 text-sm text-white/70">
          <p>
            Continuity protocol (ECHO-01): triggers include Trust Article violations, security incidents, or key person
            risk. Activation requires quorum from House of Stewardship, pause announcement on status page, and alternate
            comms via PGP + on-chain beacon.
          </p>
        </div>
      </section>
    </div>
  );
}
