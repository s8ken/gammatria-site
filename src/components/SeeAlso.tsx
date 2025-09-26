import Link from 'next/link';

type Item = { label: string; href: string; external?: boolean };

type Props = {
  items: Item[];
  className?: string;
};

export default function SeeAlso({ items, className = '' }: Props) {
  if (!items.length) {
    return null;
  }

  return (
    <div className={`rounded-2xl border p-4 shadow-sm text-sm ${className}`}>
      <h2 className="mb-2 text-lg font-semibold">See also</h2>
      <ul className="list-disc space-y-1 pl-5">
        {items.map(({ label, href, external }) => (
          <li key={href}>
            {external ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                {label}
              </a>
            ) : (
              <Link href={href} className="underline underline-offset-2">
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
