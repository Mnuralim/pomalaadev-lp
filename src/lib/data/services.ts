import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Package,
  Smartphone,
  Store,
  BrainCircuit,
  Plug,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Globe,
    title: "Website Usaha",
    description:
      "Punya website bikin usaha Anda kelihatan lebih niat dan gampang dipercaya calon pelanggan baru.",
  },
  {
    icon: Package,
    title: "Sistem Internal",
    description:
      "Catatan yang tadinya nyebar di Excel dan WhatsApp, dikumpulin jadi satu sistem yang gampang dicek.",
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    description:
      "Bikin pelanggan dan tim Anda gampang mengakses layanan lewat aplikasi yang praktis dipakai.",
  },
  {
    icon: Store,
    title: "Sistem Kasir (POS)",
    description:
      "Transaksi harian jadi lebih cepat dan datanya otomatis tercatat, gak perlu tulis ulang manual.",
  },
  {
    icon: BrainCircuit,
    title: "Otomatisasi & AI",
    description:
      "Kerjaan yang berulang-ulang, kayak input data sampai bikin laporan, bisa jalan sendiri otomatis.",
  },
  {
    icon: Plug,
    title: "Integrasi Sistem",
    description:
      "Tools yang udah Anda pakai kami hubungkan, biar data antar bagian gak terpisah-pisah lagi.",
  },
];
