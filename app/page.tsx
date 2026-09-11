import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductPlaceholder } from "@/components/ProductPlaceholder";

export default function Home() {
  const featured = products[0];

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-16">
        <div className="order-2 motion-safe:animate-fade-up lg:order-1">
          <p className="font-heading text-3xl leading-tight text-puro-black sm:text-4xl">
            Peça a peça, sob encomenda.
          </p>
          <p className="mt-4 max-w-sm text-sm text-puro-graphite">
            Roupa feita uma de cada vez, sem produção em lote — {featured.name} é a peça em
            destaque agora.
          </p>
          <Link
            href="/colecao"
            className="mt-8 inline-flex border border-puro-black bg-puro-black px-6 py-3.5 text-sm text-puro-offwhite transition-colors hover:bg-puro-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puro-black"
          >
            Ver coleção
          </Link>
        </div>
        <Link href={`/colecao/${featured.slug}`} className="order-1 block lg:order-2">
          <div className="aspect-[4/5] w-full">
            <ProductPlaceholder slug={featured.slug} view="costas" />
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
