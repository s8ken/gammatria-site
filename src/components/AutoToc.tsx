'use client';

import { useEffect, useState } from 'react';

type TocItem = {
  id: string;
  text: string;
  level: number;
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function AutoToc({ selector = 'article', maxLevel = 3 }: { selector?: string; maxLevel?: number }) {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const root = document.querySelector(selector) ?? document.body;
    const headings = Array.from(root.querySelectorAll('h2, h3')) as HTMLHeadingElement[];
    const collected: TocItem[] = [];

    headings.forEach((heading) => {
      const text = heading.textContent?.trim();
      if (!text) return;

      const level = Number(heading.tagName.slice(1));
      if (level > maxLevel) return;

      const id = heading.id || slugify(text);
      heading.id = id;
      collected.push({ id, text, level });
    });

    setItems(collected);
  }, [selector, maxLevel]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="rounded-2xl border p-4 shadow-sm text-sm">
      <div className="mb-2 font-semibold">On this page</div>
      <ul className="space-y-1">
        {items.map(({ id, text, level }) => (
          <li key={id} className={level === 3 ? 'pl-4' : ''}>
            <a href={`#${id}`} className="underline-offset-2 hover:underline">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
