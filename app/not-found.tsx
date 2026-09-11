import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 sm:px-6">
      <h1 className="font-heading text-2xl text-puro-black">Página não encontrada</h1>
      <p className="mt-4 text-sm text-puro-graphite">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="mt-8 border border-puro-black px-6 py-3 text-sm text-puro-black transition-colors hover:bg-puro-black hover:text-puro-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puro-black"
      >
        Voltar para a home
      </Link>
    </div>
  );
}
