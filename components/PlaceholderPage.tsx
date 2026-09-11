import type { ReactNode } from "react";

export function PlaceholderPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-2xl text-puro-black">{title}</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-puro-graphite">{children}</div>
    </div>
  );
}
