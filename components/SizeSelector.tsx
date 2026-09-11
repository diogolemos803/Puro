export function SizeSelector({
  sizes,
  selected,
  onSelect,
}: {
  sizes: string[];
  selected: string | null;
  onSelect: (size: string) => void;
}) {
  return (
    <div role="group" aria-label="Selecionar tamanho" className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const isSelected = size === selected;
        return (
          <button
            key={size}
            type="button"
            onClick={() => onSelect(size)}
            aria-pressed={isSelected}
            className={`min-w-9 border px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puro-black ${
              isSelected
                ? "border-puro-black bg-puro-black text-puro-offwhite"
                : "border-puro-black/30 text-puro-black hover:border-puro-black"
            }`}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
