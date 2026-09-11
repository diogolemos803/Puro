import { productArt } from "./product-art";

export function ProductPlaceholder({
  slug,
  view,
  className,
}: {
  slug: string;
  view: "frente" | "costas";
  className?: string;
}) {
  const art = productArt[slug];
  if (!art) return null;
  const Art = view === "frente" ? art.front : art.back;

  return (
    <div
      className={`h-full w-full overflow-hidden border border-puro-black/10 bg-puro-beige/20 ${className ?? ""}`}
    >
      <Art className="h-full w-full" />
    </div>
  );
}
