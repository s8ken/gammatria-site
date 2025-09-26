'use client';

import { MDXProvider, type Components } from '@mdx-js/react';
import React from 'react';

function Table(props: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm" {...props} />
    </div>
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <div className="font-semibold mb-1">{title}</div>
      <div>{children}</div>
    </div>
  );
}

const mdxComponents: Components = {
  table: Table,
  Callout,
};

export function WithMDX({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
}
