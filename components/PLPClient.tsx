"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/products";

export function PLPClient({ products }: { products: Product[] }) {
  const colors = useMemo(() => {
    const seen = new Map<string, string>();
    products.forEach((p) => seen.set(p.color.label, p.color.hex));
    return Array.from(seen, ([label, hex]) => ({ label, hex }));
  }, [products]);

  const sizes = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.sizes))),
    [products],
  );

  const fits = useMemo(
    () => Array.from(new Set(products.map((p) => p.fitLabel))),
    [products],
  );

  const [color, setColor] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [fit, setFit] = useState<string | null>(null);

  const filtered = products.filter((p) => {
    if (color && p.color.label !== color) return false;
    if (fit && p.fitLabel !== fit) return false;
    if (size && !p.sizes.includes(size)) return false;
    return true;
  });

  const hasFilters = Boolean(color || size || fit);

  return (
    <div>
      <div className="flex flex-wrap items-start gap-x-8 gap-y-4 border-b border-puro-black/10 pb-6">
        <fieldset>
          <legend className="mb-2 text-xs tracking-wide text-puro-graphite">Cor</legend>
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c.label}
                type="button"
                aria-pressed={color === c.label}
                aria-label={c.label}
                title={c.label}
                onClick={() => setColor(color === c.label ? null : c.label)}
                className={`h-7 w-7 rounded-full border transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puro-black ${
                  color === c.label ? "ring-2 ring-puro-black ring-offset-2" : "border-puro-black/20"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-xs tracking-wide text-puro-graphite">Caimento</legend>
          <div className="flex gap-2">
            {fits.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={fit === f}
                onClick={() => setFit(fit === f ? null : f)}
                className={`border px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puro-black ${
                  fit === f
                    ? "border-puro-black bg-puro-black text-puro-offwhite"
                    : "border-puro-black/20 text-puro-black hover:border-puro-black"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-xs tracking-wide text-puro-graphite">Tamanho</legend>
          <div className="flex gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={size === s}
                onClick={() => setSize(size === s ? null : s)}
                className={`min-w-9 border px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puro-black ${
                  size === s
                    ? "border-puro-black bg-puro-black text-puro-offwhite"
                    : "border-puro-black/20 text-puro-black hover:border-puro-black"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>

        {hasFilters && (
          <button
            type="button"
            onClick={() => {
              setColor(null);
              setSize(null);
              setFit(null);
            }}
            className="ml-auto self-center text-sm text-puro-graphite underline underline-offset-4 hover:text-puro-black"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-sm text-puro-graphite">Nenhuma peça encontrada com esses filtros.</p>
      )}
    </div>
  );
}
