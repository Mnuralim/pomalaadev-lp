import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { HeroChat } from "@/components/sections/hero-chat";
import { getWhatsappLink } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-(--container-max-width) items-center gap-12 px-5 pb-16 pt-14 md:grid-cols-12 md:pt-20">
      <Reveal className="md:col-span-6">
        <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
          Urusan digital ta&apos;,{" "}
          <span className="bg-primary px-1 text-on-primary">kami mi</span> yang
          urus.
        </h1>
        <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-secondary">
          Aplikasi kantor, CV lamaran, sampai lapor SPT. Satu tempat ji,
          orangnya dekat di Pomalaa.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={getWhatsappLink("Halo Pomalaa Dev, mau ka konsultasi dulu.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} />
            Konsultasi gratis
          </Button>
          <Button href="#layanan" variant="secondary">
            Lihat layanan
          </Button>
        </div>
      </Reveal>
      <Reveal className="md:col-span-6" delay={100}>
        <HeroChat />
      </Reveal>
    </section>
  );
}
