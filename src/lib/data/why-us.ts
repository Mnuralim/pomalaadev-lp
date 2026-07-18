import type { LucideIcon } from "lucide-react";
import { Zap, TrendingUp, ShieldCheck } from "lucide-react";

export interface WhyUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyUsItems: WhyUsItem[] = [
  {
    icon: Zap,
    title: "Sesuai Cara Kerja Anda",
    description:
      "Sistem dibikin ngikutin cara tim Anda kerja sehari-hari, bukan malah bikin ribet. Gak ada fitur yang gak kepake.",
  },
  {
    icon: TrendingUp,
    title: "Bisa Tumbuh Bareng Usaha",
    description:
      "Kalau nanti pelanggan atau kebutuhan makin banyak, sistemnya tinggal dikembangkan, gak perlu bikin ulang dari nol.",
  },
  {
    icon: ShieldCheck,
    title: "Tetap Didampingi Setelah Rilis",
    description:
      "Selesai dipasang bukan berarti selesai urusan. Kami tetap standby kalau ada yang perlu dibenerin atau ditanyain.",
  },
];
