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
  coverImage: string;
  hoverImage: string;
  /** Real "frente" photo for the PDP gallery — falls back to the vector placeholder when absent. */
  frontImage?: string;
  /** Extra real photos for the PDP "Mais detalhes" section — falls back to the color blocks when absent. */
  galleryImages?: string[];
  /** Shared id linking color variants of the same design, used to render the PDP color swatches. */
  colorGroup?: string;
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
    coverImage: "/produtos/rooftop-sessions-tee/costas.png",
    hoverImage: "/produtos/rooftop-sessions-tee/modelo-1.png",
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
    coverImage: "/produtos/life-point-tee/costas.png",
    hoverImage: "/produtos/life-point-tee/modelo-1.png",
  },
  {
    slug: "home-tee-creme",
    name: "Home Tee",
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
    coverImage: "/produtos/home-tee-creme/costas.png",
    hoverImage: "/produtos/home-tee-creme/modelo-1.png",
    frontImage: "/produtos/home-tee-creme/frente.png",
    galleryImages: ["/produtos/home-tee-creme/modelo-2.png"],
    colorGroup: "home-tee",
  },
  {
    slug: "home-tee-verde",
    name: "Home Tee",
    price: "Sob consulta",
    fitLabel: "Regular",
    fabric: "Algodão médio-pesado",
    color: { label: "Verde escuro", hex: "#2F4A3C" },
    sizes: ["P", "M", "G", "GG"],
    specs: [
      { label: "Corte", value: "Regular" },
      { label: "Tecido", value: "Algodão médio-pesado" },
      { label: "Cor", value: "Verde escuro" },
      { label: "Estampa", value: "Bordado frontal, serigrafia nas costas" },
    ],
    description:
      "Peça feita sob encomenda, uma de cada vez — sem produção em lote.",
    details: ["Detalhe do bordado", "Detalhe da estampa", "Caimento"],
    coverImage: "/produtos/home-tee-verde/costas.png",
    hoverImage: "/produtos/home-tee-verde/modelo-1.png",
    galleryImages: ["/produtos/home-tee-verde/modelo-2.png"],
    colorGroup: "home-tee",
  },
];
