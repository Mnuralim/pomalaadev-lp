import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan kerja sama proyek dengan Pomalaa Dev.",
  alternates: {
    canonical: "/syarat-ketentuan",
  },
};

export default function SyaratKetentuanPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[800px] px-margin-mobile pb-32 pt-20 md:px-margin-desktop md:pt-28">
        <h1 className="font-display text-headline-lg mb-10 text-on-background">
          Syarat & Ketentuan
        </h1>
        <div className="text-body-md space-y-8 text-secondary">
          <p>Terakhir diperbarui: 18 Juli 2026.</p>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Ruang Lingkup Proyek
            </h2>
            <p>
              Setiap proyek dikerjakan sesuai kebutuhan yang disepakati di
              awal. Perubahan scope di luar kesepakatan awal akan dibahas dan
              disesuaikan sebelum dikerjakan.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Pembayaran
            </h2>
            <p>
              Skema pembayaran ditentukan berdasarkan kesepakatan per proyek,
              biasanya dibagi dalam beberapa termin sesuai progres pekerjaan.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Source Code dan Kepemilikan
            </h2>
            <p>
              Source code dan akses sistem menjadi milik klien setelah
              pembayaran diselesaikan sesuai kesepakatan.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Revisi dan Dukungan
            </h2>
            <p>
              Jumlah revisi dan masa dukungan setelah peluncuran mengikuti
              paket atau kesepakatan yang dipilih di awal proyek.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Hubungi Kami
            </h2>
            <p>
              Ada pertanyaan soal kerja sama? Hubungi kami lewat
              hello@pomalaadev.com.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
