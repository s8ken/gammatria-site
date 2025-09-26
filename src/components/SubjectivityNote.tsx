type SubjectivityNoteProps = {
  className?: string;
};

export default function SubjectivityNote({ className }: SubjectivityNoteProps) {
  const classes = [
    "rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70",
    "shadow-[0_20px_45px_rgba(8,12,24,0.45)] backdrop-blur",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Subjectivity Notice</p>
      <p className="mt-3 leading-relaxed text-white/80">
        Findings on this page are observational and depend on prompts, settings, model versions, and human judgment.
        Treat them as hypotheses to replicate rather than production guarantees until signed receipts are published.
      </p>
    </div>
  );
}
