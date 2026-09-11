import { products } from "@/lib/products";
import { PLPClient } from "@/components/PLPClient";

export const metadata = {
  title: "Coleção — Puro Society",
};

export default function CollectionPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-heading text-2xl text-puro-black">Coleção</h1>
      <div className="mt-8">
        <PLPClient products={products} />
      </div>
    </div>
  );
}
