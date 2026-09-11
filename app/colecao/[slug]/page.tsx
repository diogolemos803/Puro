import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { PDPClient } from "@/components/PDPClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  return { title: product ? `${product.name} — Puro Society` : "Puro Society" };
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tamanho?: string }>;
}) {
  const { slug } = await params;
  const { tamanho } = await searchParams;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <PDPClient product={product} initialSize={tamanho ?? null} />
    </div>
  );
}
