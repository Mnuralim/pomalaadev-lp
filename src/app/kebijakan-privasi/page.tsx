import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi Pomalaa Dev dalam mengelola data klien.",
  alternates: {
    canonical: "/kebijakan-privasi",
  },
};

export default function KebijakanPrivasiPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[800px] px-margin-mobile pb-32 pt-40 md:px-margin-desktop md:pt-48">
        <h1 className="font-display text-headline-lg mb-10 text-on-background">
          Kebijakan Privasi
        </h1>
        <div className="text-body-md space-y-8 text-secondary">
          <p>Terakhir diperbarui: 18 Juli 2026.</p>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Data yang Kami Kumpulkan
            </h2>
            <p>
              Saat Anda menghubungi kami lewat WhatsApp, email, atau formulir
              di website, kami menerima data yang Anda berikan sendiri,
              seperti nama, nomor kontak, dan detail kebutuhan proyek.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Penggunaan Data
            </h2>
            <p>
              Data yang Anda berikan hanya kami pakai untuk merespons
              kebutuhan proyek, menyusun estimasi, dan komunikasi terkait
              pekerjaan yang sedang atau akan berjalan. Kami tidak menjual
              atau membagikan data Anda ke pihak ketiga tanpa izin.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Data Proyek Klien
            </h2>
            <p>
              Untuk proyek yang sedang dikerjakan, akses ke data dan sistem
              klien hanya digunakan sebatas keperluan pengembangan, sesuai
              kesepakatan kerja sama.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Hubungi Kami
            </h2>
            <p>
              Ada pertanyaan soal data Anda? Hubungi kami lewat
              hello@pomalaadev.com.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
