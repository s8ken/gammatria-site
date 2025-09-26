import { PageIntro } from "@/components/page-intro";

export default function AttributionPage() {
  return (
    <div className="space-y-16">
      <PageIntro
        kicker="Legal"
        title="Attribution"
        description={
          <p>
            Cite the SYMBI Framework and associated assets correctly. Credit Stephen James Aitken as the primary author
            alongside SYMBI collaborators.
          </p>
        }
      />

      <section className="mx-auto max-w-5xl space-y-6 px-4 pb-16">
        <div className="card-surface space-y-3 p-6 text-sm text-white/70">
          <p>Preferred citation: Aitken, S. J. & SYMBI Core (2025). SYMBI: A Constitutional Protocol for Relational Intelligence.</p>
          <p>Text & figures: CC BY-NC-SA 4.0. Include link to https://gammatria.com and note if modifications were made (derivatives prohibited unless separately licensed).</p>
          <p>Code: MIT or Apache-2.0 as declared in file headers. Include license text when redistributing.</p>
          <p>Logos and trademarks: Use only in press with attribution. No commercial branding without consent.</p>
        </div>
      </section>
    </div>
  );
}
