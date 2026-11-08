export interface Project {
  title: string;
  description: string;
  image: string;
  /** true = proyek contoh, ganti dengan proyek asli */
  sample?: boolean;
}

// shortcut: gambar masih placeholder picsum, ganti dengan screenshot asli di /public
export const projects: Project[] = [
  {
    title: "SkuyMiBro",
    description:
      "Website media lokal Kolaka, lengkap dengan direktori UMKM dan panel admin.",
    image: "https://picsum.photos/seed/skuymibro-kolaka/1200/800",
  },
  {
    title: "Monitoring alat berat",
    description: "Aplikasi Android untuk laporan jam kerja alat di lapangan.",
    image: "https://picsum.photos/seed/heavy-equipment-site/800/450",
    sample: true,
  },
  {
    title: "Aplikasi akuntansi kantor",
    description: "Pembukuan dan laporan keuangan dalam satu aplikasi web.",
    image: "https://picsum.photos/seed/accounting-ledger/800/450",
    sample: true,
  },
];
