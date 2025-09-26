type BadgeVariant = "demo" | "observational" | "receipts";

type BadgeProps = {
  label?: string;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  demo: "bg-white/8 text-white/80",
  observational: "bg-amber-500/15 text-amber-100",
  receipts: "bg-emerald-500/15 text-emerald-100",
};

function BaseBadge({
  variant,
  label,
  defaultLabel,
  className,
}: BadgeProps & { variant: BadgeVariant; defaultLabel: string }) {
  const classes = [
    "inline-flex items-center gap-1 rounded-full px-2.5 py-1",
    "text-[0.65rem] font-semibold uppercase tracking-[0.2em]",
    variantStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{label ?? defaultLabel}</span>;
}

export function DemoBadge(props: BadgeProps) {
  return <BaseBadge variant="demo" defaultLabel="Demo" {...props} />;
}

export function ObservationalBadge(props: BadgeProps) {
  return <BaseBadge variant="observational" defaultLabel="Observational" {...props} />;
}

export function ReceiptsBadge(props: BadgeProps) {
  return <BaseBadge variant="receipts" defaultLabel="Receipts" {...props} />;
}
