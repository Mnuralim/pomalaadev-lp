import type { LucideIcon } from "lucide-react";
import { FileText, Receipt, Smartphone } from "lucide-react";

export interface PriceGroup {
  icon: LucideIcon;
  title: string;
  items: { name: string; price: string }[];
}

// shortcut: semua harga masih contoh, ganti dengan harga asli
export const priceGroups: PriceGroup[] = [
  {
    icon: Smartphone,
    title: "Aplikasi",
    items: [
      { name: "Website profil", price: "mulai Rp 1,5jt" },
      { name: "Aplikasi kantor", price: "mulai Rp 5jt" },
      { name: "Pendampingan kuliah", price: "mulai Rp 300rb" },
    ],
  },
  {
    icon: FileText,
    title: "Lamaran kerja",
    items: [
      { name: "CV ATS", price: "mulai Rp 50rb" },
      { name: "Surat lamaran", price: "mulai Rp 25rb" },
      { name: "Paket CV + surat", price: "mulai Rp 65rb" },
    ],
  },
  {
    icon: Receipt,
    title: "Pajak",
    items: [
      { name: "Aktivasi Coretax", price: "mulai Rp 50rb" },
      { name: "Lapor SPT pribadi", price: "mulai Rp 75rb" },
      { name: "SPT badan usaha", price: "tanya dulu" },
    ],
  },
];
