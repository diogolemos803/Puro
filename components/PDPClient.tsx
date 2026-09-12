"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductPlaceholder } from "./ProductPlaceholder";
import { productArt } from "./product-art";
import { SizeSelector } from "./SizeSelector";
import { products, type Product } from "@/lib/products";

export function PDPClient({
  product,
  initialSize,
}: {
  product: Product;
  initialSize: string | null;
}) {
  const [size, setSize] = useState<string | null>(
    initialSize && product.sizes.includes(initialSize) ? initialSize : null,
  );
  const [touched, setTouched] = useState(false);

  const colorVariants = product.colorGroup
    ? products.filter((p) => p.colorGroup === product.colorGroup)
    : [];

  const hasFrontVisual = Boolean(product.frontImage) || Boolean(productArt[product.slug]);

  const mailHref = `mailto:contato@purosociety.com.br?subject=${encodeURIComponent(
    `Consulta — ${product.name}`,
  )}&body=${encodeURIComponent(
    `Olá! Tenho interesse na peça ${product.name}${size ? `, tamanho ${size}` : ""}. Podem me passar prazo e disponibilidade?`,
  )}`;

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={`grid gap-3 sm:gap-4 ${hasFrontVisual ? "grid-cols-2" : "grid-cols-1"}`}>
        {hasFrontVisual &&
          (product.frontImage ? (
            <figure>
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-puro-black/10">
                <Image
                  src={product.frontImage}
                  alt={`${product.name}, frente`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 45vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs text-puro-graphite">Frente</figcaption>
            </figure>
          ) : (
            <figure>
              <div className="aspect-[4/5] w-full">
                <ProductPlaceholder slug={product.slug} view="frente" />
              </div>
              <figcaption className="mt-2 text-xs text-puro-graphite">Frente</figcaption>
            </figure>
          ))}
        <figure>
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-puro-black/10">
            <Image
              src={product.coverImage}
              alt={`${product.name}, costas`}
              fill
              sizes="(min-width: 1024px) 30vw, 45vw"
              quality={90}
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-xs text-puro-graphite">Costas</figcaption>
        </figure>
      </div>

      <div>
        <h1 className="font-heading text-3xl text-puro-black">{product.name}</h1>
        <p className="mt-2 text-lg text-puro-black">{product.price}</p>
        <p className="mt-4 text-sm text-puro-graphite">{product.description}</p>

        <dl className="mt-8 space-y-2 border-t border-puro-black/10 pt-6">
          {product.specs.map((spec) => (
            <div key={spec.label} className="flex justify-between text-sm">
              <dt className="text-puro-graphite">{spec.label}</dt>
              <dd className="text-puro-black">{spec.value}</dd>
            </div>
          ))}
        </dl>

        {colorVariants.length > 1 && (
          <div className="mt-8">
            <p className="mb-3 text-sm text-puro-black">Cor</p>
            <div className="flex gap-2">
              {colorVariants.map((variant) => {
                const isCurrent = variant.slug === product.slug;
                return (
                  <Link
                    key={variant.slug}
                    href={`/colecao/${variant.slug}`}
                    aria-current={isCurrent}
                    title={variant.color.label}
                    className={`h-8 w-8 rounded-full border transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puro-black ${
                      isCurrent
                        ? "ring-2 ring-puro-black ring-offset-2"
                        : "border-puro-black/20 hover:ring-2 hover:ring-puro-black/40 hover:ring-offset-2"
                    }`}
                    style={{ backgroundColor: variant.color.hex }}
                  />
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-8">
          <p className="mb-3 text-sm text-puro-black">Tamanho</p>
          <SizeSelector
            sizes={product.sizes}
            selected={size}
            onSelect={(s) => {
              setSize(s);
              setTouched(true);
            }}
          />
          {touched && !size && (
            <p className="mt-2 text-xs text-puro-red">
              Escolha um tamanho para consultar disponibilidade.
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => {
            if (!size) {
              setTouched(true);
              return;
            }
            window.location.href = mailHref;
          }}
          aria-disabled={!size}
          className={`mt-6 inline-flex w-full items-center justify-center border px-6 py-3.5 text-sm transition-colors sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puro-black ${
            size
              ? "border-puro-black bg-puro-black text-puro-offwhite hover:bg-puro-graphite"
              : "cursor-not-allowed border-puro-black/20 text-puro-black/40"
          }`}
        >
          Consultar disponibilidade
        </button>

        <div className="mt-16">
          <p className="mb-4 text-sm text-puro-black">Mais detalhes</p>
          {product.galleryImages && product.galleryImages.length > 0 ? (
            <div className="grid grid-cols-3 gap-3">
              {product.galleryImages.map((src) => (
                <div key={src} className="relative aspect-square w-full overflow-hidden border border-puro-black/10">
                  <Image
                    src={src}
                    alt={`${product.name}, mais uma foto`}
                    fill
                    sizes="(min-width: 1024px) 15vw, 30vw"
                    quality={90}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {product.details.map((label, i) => (
                <figure key={label}>
                  <div
                    className="aspect-square w-full border border-puro-black/10"
                    style={{
                      backgroundColor: product.color.hex,
                      filter: `brightness(${1 + (i - 1) * 0.12})`,
                    }}
                  />
                  <figcaption className="mt-2 text-xs text-puro-graphite">{label}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/colecao"
          className="mt-10 inline-block text-sm text-puro-graphite underline underline-offset-4 hover:text-puro-black"
        >
          Voltar para a coleção
        </Link>
      </div>
    </div>
  );
}
