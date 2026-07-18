import { CheckCircle2, Bell } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { HeroDashboardMockup } from "@/components/sections/hero-dashboard-mockup";
import { getWhatsappLink } from "@/lib/whatsapp";

const checklist = ["Konsultasi Awal Gratis", "Prosesnya Jelas", "Bisa Dikembangkan Lagi"];

export function HeroSection() {
  return (
    <section className="mx-auto max-w-(--container-max-width) overflow-x-hidden px-margin-mobile pb-20 pt-32 md:px-margin-desktop md:pb-32 md:pt-48">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="min-w-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-container px-3 py-1">
            <span className="text-[12px]">🚀</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
              Teman digital buat usaha yang mau maju
            </span>
          </div>
          <h1 className="font-display text-headline-lg md:text-headline-xl mb-6 text-on-background">
            Website dan aplikasi yang{" "}
            <span className="text-primary">beneran kepake.</span>
          </h1>
          <p className="text-body-lg mb-10 max-w-lg text-secondary">
            Kami bantu usaha Anda pindah dari catatan manual dan WhatsApp
            ke website dan sistem yang lebih rapi, gampang dipantau, dan
            bikin pelanggan makin percaya.
          </p>
          <div className="mb-12 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap">
            <Button
              href={getWhatsappLink(
                "Halo, saya mau diskusikan proyek website/aplikasi.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-8"
            >
              <span className="sm:hidden">Diskusikan Proyek</span>
              <span className="hidden sm:inline">Diskusikan Proyek Anda</span>
            </Button>
            <Button href="#projects" variant="secondary" className="px-4 sm:px-8">
              Lihat Hasil Kerja
            </Button>
          </div>
          <div className="space-y-3">
            {checklist.map((item) => (
              <div
                key={item}
                className="text-label-md flex items-center gap-3 text-on-background"
              >
                <CheckCircle2 className="text-primary" size={20} />
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="relative min-w-0">
          <HeroDashboardMockup />
          <div className="absolute -bottom-6 right-10 w-48 rounded-xl border border-border-subtle bg-surface p-4 shadow-2xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10">
                <Bell className="text-primary" size={16} />
              </div>
              <div className="text-[10px] font-bold">Penjualan Baru!</div>
            </div>
            <div className="text-sm font-bold">+Rp450.000</div>
            <div className="text-[10px] text-secondary">dari Budi Santoso</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
