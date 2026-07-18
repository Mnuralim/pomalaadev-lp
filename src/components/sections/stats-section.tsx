import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/data/stats";

export function StatsSection() {
  return (
    <section className="mx-auto max-w-(--container-max-width) px-margin-mobile py-24 md:px-margin-desktop">
      <div className="grid gap-gutter md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 100}>
            <div className="rounded-xl border border-border-subtle bg-surface p-8 text-center shadow-sm">
              <div className="font-display text-headline-lg mb-2 text-on-background">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
