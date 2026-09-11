export type ProductColor = {
  label: string;
  hex: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  price: string;
  fitLabel: string;
  fabric: string;
  color: ProductColor;
  sizes: string[];
  specs: ProductSpec[];
  description: string;
  details: string[];
};

export const products: Product[] = [
  {
    slug: "rooftop-sessions-tee",
    name: "Rooftop Sessions Tee",
    price: "Sob consulta",
    fitLabel: "Regular",
    fabric: "Algodão médio-pesado",
    color: { label: "Off-white", hex: "#F5F1EA" },
    sizes: ["P", "M", "G", "GG"],
    specs: [
      { label: "Corte", value: "Regular" },
      { label: "Tecido", value: "Algodão médio-pesado" },
      { label: "Cor", value: "Off-white" },
      { label: "Estampa", value: "Bordado frontal, serigrafia nas costas" },
    ],
    description:
      "Peça feita sob encomenda, uma de cada vez — sem produção em lote.",
    details: ["Detalhe do bordado", "Detalhe da estampa", "Caimento"],
  },
  {
    slug: "life-point-tee",
    name: "Life Point Tee",
    price: "Sob consulta",
    fitLabel: "Relaxed",
    fabric: "Tecido chapado sólido",
    color: { label: "Azul-petróleo", hex: "#3E6E78" },
    sizes: ["P", "M", "G", "GG"],
    specs: [
      { label: "Corte", value: "Relaxed" },
      { label: "Tecido", value: "Tecido chapado sólido" },
      { label: "Cor", value: "Azul-petróleo" },
      { label: "Estampa", value: "Bordado frontal, serigrafia nas costas" },
    ],
    description:
      "Peça feita sob encomenda, uma de cada vez — sem produção em lote.",
    details: ["Detalhe do bordado", "Detalhe da estampa", "Caimento"],
  },
];
