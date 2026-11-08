import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/data/process-steps";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  return (
    <section className="border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-(--container-max-width) px-5 py-24">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight">
            Begini ji caranya.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <li>
                <div
                  className={cn(
                    "h-1 w-full",
                    i === 0 ? "bg-primary" : "bg-border-subtle",
                  )}
                />
                <h3 className="mt-5 font-display text-xl font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-secondary">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
