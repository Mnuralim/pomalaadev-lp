export interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceSuffix: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Tampil Profesional",
    description: "Cocok buat company profile, landing page, atau MVP kecil-kecilan.",
    price: "Custom",
    priceSuffix: "/ Proyek",
    features: [
      "Landing Page Modern",
      "5 Komponen Custom",
      "Responsif di Semua Perangkat",
      "Support 30 Hari",
    ],
    ctaLabel: "Dapatkan Estimasi",
  },
  {
    name: "Sistem Bisnis",
    description: "Buat aplikasi dan sistem internal yang lebih lengkap.",
    price: "Fleksibel",
    priceSuffix: "/ Proyek",
    features: [
      "Aplikasi Web Custom",
      "Integrasi CRM / POS",
      "Autentikasi Pengguna",
      "Support 90 Hari",
    ],
    ctaLabel: "Dapatkan Estimasi",
    featured: true,
  },
  {
    name: "Solusi Khusus",
    description: "Ada tim khusus buat kebutuhan sistem yang lebih rumit.",
    price: "Retainer",
    priceSuffix: "/ Bulan",
    features: [
      "Tim Engineering Khusus",
      "Pelatihan Model AI",
      "Audit Keamanan",
      "Support Prioritas 24/7",
    ],
    ctaLabel: "Diskusikan Proyek",
  },
];
