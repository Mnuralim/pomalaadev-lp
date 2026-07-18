import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { techStack } from "@/lib/data/tech-stack";

export function TechStackSection() {
  return (
    <section className="mx-auto max-w-(--container-max-width) px-margin-mobile py-32 md:px-margin-desktop">
      <Reveal>
        <SectionHeading
          eyebrow="Di Balik Layar"
          title="Teknologi yang Kami Pakai"
          description="Bukan asal ikut tren. Tiap tools dipilih karena udah terbukti awet dipakai jangka panjang."
        />
      </Reveal>
      <Reveal className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-7">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="tech-card group flex flex-col items-center justify-center gap-4 rounded-xl border border-border-subtle bg-surface p-8 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center text-on-background grayscale transition-all duration-300 group-hover:grayscale-0">
              <tech.icon size={32} />
            </div>
            <span className="text-label-md font-bold tracking-tight text-on-background">
              {tech.name}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
