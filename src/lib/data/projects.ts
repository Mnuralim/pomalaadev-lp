export interface Project {
  title: string;
  description: string;
  tags: string[];
  techs: string[];
  kind: "mobile" | "dashboard";
}

export const projects: Project[] = [
  {
    title: "NexuBank Platform",
    description:
      "Transaksi yang tadinya lambat dan gampang salah catat, sekarang jalan real-time dalam satu aplikasi.",
    tags: ["Fintech", "Aplikasi Mobile"],
    techs: ["React Native", "Node.js"],
    kind: "mobile",
  },
  {
    title: "LogiSmart AI",
    description:
      "Rute pengiriman yang dulu ditentukan manual, sekarang dihitung otomatis, waktu tempuh pun jadi lebih singkat.",
    tags: ["Logistik", "Dashboard"],
    techs: ["Next.js", "OpenAI"],
    kind: "dashboard",
  },
];
