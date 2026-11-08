import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/whatsapp";
import { INSTAGRAM_URL } from "@/lib/social";

export function FinalCtaSection() {
  return (
    <section className="bg-primary text-on-primary">
      <div className="mx-auto flex max-w-(--container-max-width) flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center">
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Cerita mi dulu, gratis ji.
        </h2>
        <div className="flex flex-col items-start gap-3">
          {/* selalu gelap di atas kuning, nda ikut tema */}
          <Button
            href={getWhatsappLink("Halo Pomalaa Dev, mau ka konsultasi dulu.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#141414] text-[#fafaf8]"
          >
            <MessageCircle size={20} />
            Konsultasi gratis
          </Button>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4"
          >
            atau DM Instagram @pomalaa.dev
          </a>
        </div>
      </div>
    </section>
  );
}
