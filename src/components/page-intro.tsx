import { ReactNode } from "react";

interface PageIntroProps {
  kicker?: string;
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
}

export function PageIntro({ kicker, title, description, actions }: PageIntroProps) {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 text-left">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h1 className="page-title text-3xl sm:text-4xl md:text-5xl">{title}</h1>
      {description ? (
        <div className="text-base leading-relaxed text-white/80 sm:text-lg">{description}</div>
      ) : null}
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
