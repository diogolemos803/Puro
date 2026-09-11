import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-puro-black" : "text-puro-offwhite";

  return (
    <Link
      href="/"
      className={`inline-flex flex-col leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-puro-black ${color}`}
      aria-label="Puro Society, página inicial"
    >
      <span className="font-heading text-2xl tracking-tight">PURO</span>
      <span className="-mt-0.5 font-heading text-[0.6rem] tracking-[0.35em]">SOCIETY</span>
    </Link>
  );
}
