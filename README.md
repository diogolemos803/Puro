# Puro Society

Site de e-commerce da Puro Society — streetwear/alto padrão feito sob encomenda, peça a
peça. Next.js (App Router) + TypeScript + Tailwind CSS, pronto para deploy na Vercel.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `app/page.tsx` — home
- `app/colecao/page.tsx` — PLP (grid da coleção, com filtros de cor/caimento/tamanho)
- `app/colecao/[slug]/page.tsx` — PDP (galeria, specs, seletor de tamanho, consulta)
- `app/sobre/page.tsx` — sobre o modelo de produção
- `lib/products.ts` — dados dos produtos
- `components/product-art.tsx` — placeholders vetoriais frente/costas de cada peça
  (ainda não há fotografia real do produto)

## Deploy

```bash
npm run build
```

Pronto para deploy direto na Vercel (sem configuração adicional).
