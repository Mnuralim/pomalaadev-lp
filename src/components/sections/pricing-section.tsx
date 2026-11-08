import { Reveal } from "@/components/ui/reveal";
import { priceGroups } from "@/lib/data/pricing";

export function PricingSection() {
  return (
    <section id="harga" className="scroll-mt-20 border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-(--container-max-width) px-5 py-24">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight">
            Kisaran harga, biar nda kaget.
          </h2>
          <p className="mt-4 max-w-[60ch] text-secondary">
            Harga pastinya tergantung kebutuhan ta&apos;. Konsultasinya tetap
            gratis ji.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {priceGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                <group.icon size={20} strokeWidth={1.75} />
                {group.title}
              </h3>
              <dl className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <div key={item.name} className="flex justify-between gap-4">
                    <dt>{item.name}</dt>
                    <dd className="font-medium">{item.price}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
