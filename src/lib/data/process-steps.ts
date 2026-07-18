export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Ceritakan Kebutuhan",
    description: "Kami dengerin dulu masalah dan maunya usaha Anda apa.",
  },
  {
    number: "02",
    title: "Kami Petakan Solusinya",
    description: "Kebutuhan itu kami rancang jadi tampilan dan alurnya.",
  },
  {
    number: "03",
    title: "Kami Bangun dan Uji Coba",
    description: "Dikerjain sambil update rutin, dicoba dulu sebelum dipakai.",
  },
  {
    number: "04",
    title: "Siap Dipakai",
    description: "Serah terima ke tim Anda, kami tetap kawal setelahnya.",
  },
];
