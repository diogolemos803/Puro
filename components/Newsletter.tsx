"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!email) return;
        setSubmitted(true);
      }}
      className="mt-5 max-w-xs"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        E-mail
      </label>
      <div className="flex border-b border-puro-offwhite/30 focus-within:border-puro-offwhite">
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="seu@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full bg-transparent py-2 text-sm text-puro-offwhite placeholder:text-puro-offwhite/40 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 py-2 text-sm text-puro-offwhite/80 hover:text-puro-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-puro-offwhite"
        >
          Cadastrar
        </button>
      </div>
      <p aria-live="polite" className="mt-2 h-4 text-xs text-puro-offwhite/60">
        {submitted ? "Cadastro recebido." : ""}
      </p>
    </form>
  );
}
