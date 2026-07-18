import { clientLogos } from "@/lib/data/client-logos";

export function ClientLogosSection() {
  return (
    <section className="border-y border-border-subtle bg-background py-16">
      <div className="mx-auto max-w-(--container-max-width) px-margin-mobile text-center md:px-margin-desktop">
        <p className="mb-10 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
          Dipercaya tim yang serius mau ngembangin usahanya
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale transition-all duration-500 hover:grayscale-0 md:gap-24">
          {clientLogos.map((logo) => (
            <div
              key={logo}
              className="font-display text-headline-md font-bold text-on-background"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
