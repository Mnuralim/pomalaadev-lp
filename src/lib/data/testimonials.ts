export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Pencatatan yang dulu berantakan sekarang jadi satu dashboard yang benar-benar dipakai tim operasional kami setiap hari.",
    name: "Sarah Chandra",
    role: "COO, TechFlow Indonesia",
  },
  {
    quote:
      "Prosesnya jelas dari awal. MVP kami rilis tiga minggu lebih cepat dari target.",
    name: "James Wijaya",
    role: "Founder, Nexus Labs",
  },
  {
    quote:
      "Perhatian ke detail dan keamanan jadi alasan utama kami percayakan proyek fintech ini ke Pomalaa Dev.",
    name: "Dewi Santoso",
    role: "CTO, Solaris Fintech",
  },
];
