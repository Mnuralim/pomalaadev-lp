import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Keamanan",
  description: "Pendekatan keamanan Pomalaa Dev dalam membangun sistem klien.",
  alternates: {
    canonical: "/keamanan",
  },
};

export default function KeamananPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[800px] px-margin-mobile pb-32 pt-40 md:px-margin-desktop md:pt-48">
        <h1 className="font-display text-headline-lg mb-10 text-on-background">
          Keamanan
        </h1>
        <div className="text-body-md space-y-8 text-secondary">
          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Autentikasi dan Akses
            </h2>
            <p>
              Sistem yang kami bangun menggunakan autentikasi yang tervalidasi
              dan pembatasan akses sesuai peran pengguna, agar data hanya bisa
              diakses oleh pihak yang berwenang.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Enkripsi Data
            </h2>
            <p>
              Data sensitif, seperti kredensial dan informasi pelanggan,
              dienkripsi baik saat disimpan maupun saat dikirim antar sistem.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Server dan Deployment
            </h2>
            <p>
              Kami mengatur konfigurasi server, firewall, dan sertifikat SSL
              agar aplikasi berjalan aman sebelum digunakan oleh tim Anda.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-lg font-bold text-on-background">
              Laporan Kerentanan
            </h2>
            <p>
              Jika Anda menemukan celah keamanan pada sistem yang kami
              kembangkan, laporkan ke hello@pomalaadev.com agar bisa segera
              kami tindak lanjuti.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
