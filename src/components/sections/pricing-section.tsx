import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/lib/data/pricing";
import { cn } from "@/lib/utils";
import { getWhatsappLink } from "@/lib/whatsapp";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-32">
      <div className="mx-auto max-w-(--container-max-width) px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mb-20 text-center">
            <h2 className="font-display text-headline-lg mb-4">
              Paket Sesuai Kebutuhan
            </h2>
            <p className="text-body-lg text-secondary">
              Tiap usaha beda kebutuhan. Ceritakan aja mau bikin apa, nanti kami bantu hitungin biayanya.
            </p>
          </div>
        </Reveal>

        <div className="grid items-end gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Reveal
              key={tier.name}
              className={cn(
                "relative rounded-xl border border-border-subtle bg-surface p-10",
                tier.featured &&
                  "z-10 border-2 border-primary p-12 shadow-2xl lg:scale-105",
              )}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-on-primary">
                  Paling Populer
                </div>
              )}
              <h3 className="font-display mb-2 text-xl font-bold">{tier.name}</h3>
              <p className="text-body-md mb-8 text-secondary">
                {tier.description}
              </p>
              <div className="font-display text-headline-lg mb-8">
                {tier.price}{" "}
                <span className="text-label-md font-normal text-secondary">
                  {tier.priceSuffix}
                </span>
              </div>
              <ul className="mb-10 space-y-4">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-body-md flex items-center gap-3"
                  >
                    <Check
                      className={tier.featured ? "text-success" : "text-primary"}
                      size={20}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={getWhatsappLink(
                  `Halo, saya tertarik dengan paket ${tier.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant={tier.featured ? "primary" : "secondary"}
                className={cn(
                  "w-full rounded-lg py-4",
                  tier.featured && "shadow-lg shadow-primary/20",
                  !tier.featured && "hover:bg-surface-container",
                )}
              >
                {tier.ctaLabel}
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
