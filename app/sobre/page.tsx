import Link from "next/link";

export const metadata = { title: "Sobre — Puro Society" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-2xl text-puro-black">Sobre</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-puro-graphite">
        <p>
          Cada peça da Puro Society é feita sob encomenda, uma de cada vez — sem estoque em
          lote e sem produção em série.
        </p>
        <p>
          A produção começa depois do pedido confirmado, o que significa peças limitadas e um
          prazo real de confecção antes do envio.
        </p>
        <p>
          Dúvidas sobre prazos, tecidos ou o andamento de um pedido podem ser tratadas
          diretamente pelo{" "}
          <Link href="/contato" className="text-puro-black underline underline-offset-4 hover:text-puro-graphite">
            contato
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
