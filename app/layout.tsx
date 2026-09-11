import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Hammersmith_One, Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const hammersmithOne = Hammersmith_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading-src",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body-src",
});

export const metadata: Metadata = {
  title: "Puro Society",
  description: "Streetwear feito sob encomenda, peça a peça.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${hammersmithOne.variable} ${workSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-puro-offwhite font-sans text-puro-black antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
