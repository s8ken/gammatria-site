import { PageIntro } from "@/components/page-intro";

const contacts = [
  {
    title: "Academic partnerships",
    email: "research@symbi.world",
    description: "Universities and institutes exploring collaboration, replication, or joint grant applications.",
  },
  {
    title: "Enterprise & SYMBI-SYNERGY",
    email: "hello@symbi-synergy.com",
    description: "Pilot programmes, commercial deployments, and compliance assessments.",
  },
  {
    title: "Community & DAO",
    email: "dao@symbi.world",
    description: "Join the governance preview, contribute to tokenomics design, or propose grants.",
  },
  {
    title: "Press",
    email: "press@symbi.world",
    description: "Interviews, speaking requests, and media coordination.",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Contact"
        title="Get in touch"
        description={<p>Choose the lane aligned to your purpose to keep the separation between Foundation and commercial spotless.</p>}
      />
      <section className="mx-auto max-w-5xl space-y-6 px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {contacts.map((contact) => (
            <div key={contact.title} className="card-surface p-6">
              <p className="kicker mb-2">{contact.title}</p>
              <p className="text-sm text-white/70">{contact.description}</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)]"
              >
                {contact.email}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
