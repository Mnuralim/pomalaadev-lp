import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/data/services";

export function ServicesSection() {
  const [main, cv, tax] = services;

  return (
    <section
      id="layanan"
      className="mx-auto max-w-(--container-max-width) scroll-mt-20 px-5 py-24"
    >
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Tiga urusan, satu tempat ji.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <Reveal className="border border-border-subtle bg-surface md:col-span-2 md:row-span-2">
          {/* shortcut: foto placeholder picsum, ganti dengan foto asli */}
          <Image
            src="https://picsum.photos/seed/pomalaa-app-office/1200/600"
            alt=""
            width={1200}
            height={600}
            className="aspect-[2/1] w-full object-cover"
          />
          <div className="p-8">
            <main.icon size={30} strokeWidth={1.75} />
            <h3 className="mt-4 font-display text-2xl font-bold">{main.title}</h3>
            <p className="mt-3 max-w-[55ch] leading-relaxed text-secondary">
              {main.description}
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {main.items?.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check size={16} className="mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="bg-primary p-8 text-on-primary" delay={100}>
          <cv.icon size={30} strokeWidth={1.75} />
          <h3 className="mt-4 font-display text-2xl font-bold">{cv.title}</h3>
          <p className="mt-3 leading-relaxed">{cv.description}</p>
        </Reveal>

        <Reveal className="bg-inverse-surface p-8 text-on-inverse-surface" delay={150}>
          <tax.icon size={30} strokeWidth={1.75} className="text-primary" />
          <h3 className="mt-4 font-display text-2xl font-bold">{tax.title}</h3>
          <p className="mt-3 leading-relaxed text-on-inverse-surface-secondary">
            {tax.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
