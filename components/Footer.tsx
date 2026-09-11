import Link from "next/link";
import { Logo } from "./Logo";
import { Newsletter } from "./Newsletter";

const institutionalLinks = [
  { href: "/trocas", label: "Trocas e devoluções" },
  { href: "/contato", label: "Contato" },
  { href: "/politica-de-privacidade", label: "Política de privacidade" },
  { href: "/termos", label: "Termos de uso" },
];

export function Footer() {
  return (
    <footer className="bg-puro-black text-puro-offwhite">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm text-puro-offwhite/70">
              Novidades e peças novas, direto por e-mail.
            </p>
            <Newsletter />
          </div>
          <nav aria-label="Links institucionais">
            <ul className="space-y-3 text-sm">
              {institutionalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-puro-offwhite/80 hover:text-puro-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-puro-offwhite"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-14 border-t border-puro-offwhite/10 pt-6 text-xs text-puro-offwhite/50">
          © {new Date().getFullYear()} Puro Society.
        </p>
      </div>
    </footer>
  );
}
