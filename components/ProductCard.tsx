import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const href = `/colecao/${product.slug}`;

  return (
    <div className="group">
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-puro-black/10 bg-puro-beige/20">
        <Link href={href} className="block h-full w-full" aria-label={`Ver ${product.name}`}>
          <Image
            src={product.coverImage}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 70vw"
            quality={90}
            className="object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <Image
            src={product.hoverImage}
            alt={`${product.name}, modelo vestindo a peça`}
            fill
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 70vw"
            quality={90}
            className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </Link>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap gap-1.5 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {product.sizes.map((size) => (
            <Link
              key={size}
              href={`${href}?tamanho=${size}`}
              className="pointer-events-auto min-w-8 border border-puro-black/20 bg-puro-offwhite/95 px-2.5 py-1 text-center text-xs text-puro-black transition-colors hover:border-puro-black hover:bg-puro-black hover:text-puro-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puro-black"
            >
              {size}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <Link href={href} className="block text-sm text-puro-black hover:text-puro-graphite">
          {product.name}
        </Link>
        <span className="text-sm text-puro-graphite">{product.price}</span>
      </div>
    </div>
  );
}
