import type { LucideIcon } from "lucide-react";
import { FileText, Receipt, Smartphone } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
}

export const services: Service[] = [
  {
    icon: Smartphone,
    title: "Aplikasi web & Android",
    description:
      "Dibikinkan sesuai alur kerja kantor ta'. Bukan template, tapi ikut cara kerja tim ta' sehari-hari.",
    items: [
      "Aplikasi akuntansi & kasir",
      "Monitoring alat berat",
      "Website profil usaha",
      "Pendampingan proyek kuliah IT",
    ],
  },
  {
    icon: FileText,
    title: "CV & surat lamaran",
    description:
      "CV rapi yang gampang dibaca sistem HRD, plus surat lamaran yang nda kaku.",
  },
  {
    icon: Receipt,
    title: "Urusan pajak",
    description:
      "Aktivasi akun Coretax sampai lapor SPT tahunan. Nda usah mi pusing sendiri.",
  },
];
