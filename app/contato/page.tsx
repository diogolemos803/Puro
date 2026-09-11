import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata = { title: "Contato — Puro Society" };

export default function ContatoPage() {
  return (
    <PlaceholderPage title="Contato">
      <p>
        Para dúvidas sobre pedidos, prazos ou peças específicas, escreva para{" "}
        <a
          href="mailto:contato@purosociety.com.br"
          className="text-puro-black underline underline-offset-4 hover:text-puro-graphite"
        >
          contato@purosociety.com.br
        </a>
        .
      </p>
    </PlaceholderPage>
  );
}
