import { Reveal } from "@/components/ui/reveal";
import { PosMockup } from "@/components/sections/pos-mockup";
import { whyUsItems } from "@/lib/data/why-us";

export function WhyUsSection() {
  return (
    <section className="overflow-hidden bg-inverse-surface py-32 text-on-inverse-surface">
      <div className="mx-auto max-w-(--container-max-width) px-margin-mobile md:px-margin-desktop">
        <div className="grid items-center gap-24 md:grid-cols-2">
          <Reveal className="min-w-0">
            <PosMockup />
          </Reveal>

          <Reveal className="min-w-0">
            <h2 className="font-display text-headline-lg mb-10 break-words">
              Teknologi Harusnya Bikin Gampang
            </h2>
            <div className="space-y-8">
              {whyUsItems.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary">
                    <item.icon className="text-on-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-display mb-2 text-xl font-bold">
                      {item.title}
                    </h4>
                    <p className="text-body-md text-on-inverse-surface-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
