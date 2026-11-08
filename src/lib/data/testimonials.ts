export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** true = testimoni contoh, ganti dengan testimoni asli klien */
  sample?: boolean;
}

export const testimonial: Testimonial = {
  quote:
    "Cepat ki kerjanya, terus sabar sekali jelaskan ke kami yang nda ngerti teknologi.",
  name: "Andi Rahmat",
  role: "pemilik toko bangunan di Pomalaa",
  sample: true,
};
