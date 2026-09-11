import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-puro-black/10 bg-puro-offwhite/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Logo />
        <nav aria-label="Navegação principal" className="flex items-center gap-6 text-sm">
          <Link
            href="/colecao"
            className="tracking-wide hover:text-puro-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-puro-black"
          >
            Coleção
          </Link>
          <Link
            href="/sobre"
            className="tracking-wide hover:text-puro-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-puro-black"
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
