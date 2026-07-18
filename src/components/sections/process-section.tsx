import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/data/process-steps";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="mx-auto max-w-(--container-max-width) px-margin-mobile py-32 md:px-margin-desktop"
    >
      <Reveal>
        <div className="mb-20 text-center">
          <h2 className="font-display text-headline-lg mb-4">
            Dari Ide sampai Siap Dipakai
          </h2>
          <p className="text-body-lg text-secondary">
            Prosesnya jelas dari awal, gak bertele-tele.
          </p>
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-border-subtle md:block -z-10" />
        <div className="grid gap-12 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100}>
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-border-subtle bg-surface shadow-sm">
                <span className="font-display text-2xl font-bold text-on-background">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display mb-2 text-center font-bold">
                {step.title}
              </h3>
              <p className="text-body-md text-center text-secondary">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
