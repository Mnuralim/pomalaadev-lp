import { Star, User } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-(--container-max-width) px-margin-mobile py-32 md:px-margin-desktop">
      <Reveal>
        <div className="mb-20 text-center">
          <h2 className="font-display text-headline-lg mb-4">
            Kata Mereka yang Sudah Memakai
          </h2>
          <p className="text-body-lg text-secondary">
            Bukan klaim kami sendiri. Ini pengalaman langsung dari yang sudah bekerja sama.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-gutter md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal
            key={testimonial.name}
            delay={index * 100}
            className="rounded-xl border border-border-subtle bg-surface p-10"
          >
            <div className="mb-6 flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-body-lg mb-8 text-on-background">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-surface-container-low">
                <User className="text-secondary" size={20} />
              </div>
              <div>
                <div className="text-label-md font-bold text-on-background">
                  {testimonial.name}
                </div>
                <div className="text-[12px] text-secondary">{testimonial.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
