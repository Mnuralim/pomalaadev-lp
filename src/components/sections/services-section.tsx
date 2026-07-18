import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data/services";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-(--container-max-width) px-margin-mobile py-32 md:px-margin-desktop"
    >
      <Reveal>
        <SectionHeading
          title="Layanan yang Bisa Anda Andalkan"
          description="Dari website sampai sistem internal, semua kami buat sesuai cara kerja usaha Anda sehari-hari."
        />
      </Reveal>
      <div className="grid gap-gutter sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 75}>
            <div className="scale-hover rounded-xl border border-border-subtle bg-surface p-8 md:p-10">
              <service.icon className="mb-6 text-primary" size={40} />
              <h3 className="font-display mb-4 text-xl font-bold">
                {service.title}
              </h3>
              <p className="text-body-md text-secondary">{service.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
