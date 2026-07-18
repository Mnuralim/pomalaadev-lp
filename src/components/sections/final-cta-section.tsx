import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/whatsapp";

export function FinalCtaSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-(--container-max-width) px-margin-mobile md:px-margin-desktop">
        <Reveal className="relative overflow-hidden rounded-[40px] bg-inverse-surface p-16 text-center text-on-inverse-surface md:p-24">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary blur-[120px]" />
          </div>
          <h2 className="font-display text-headline-lg md:text-headline-xl relative z-10 mb-8 font-bold">
            Ada Proses yang Kerasa <br /> Bisa Lebih Simpel?
          </h2>
          <p className="text-body-lg relative z-10 mx-auto mb-12 max-w-xl text-on-inverse-surface-secondary">
            Ceritakan aja kebutuhan usaha Anda. Kami bantu lihat apakah
            website, aplikasi, atau sistem internal jadi jawabannya.
          </p>
          <Button
            href={getWhatsappLink("Halo, saya mau ceritakan proyek saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 px-12 py-5"
          >
            Ceritakan Proyek Anda
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
