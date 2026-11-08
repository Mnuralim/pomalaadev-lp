import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { testimonial } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center">
      <Reveal>
        <Quote size={44} className="mx-auto fill-primary text-primary" />
        <blockquote className="mt-6 font-display text-3xl font-semibold leading-snug md:text-4xl">
          “{testimonial.quote}”
        </blockquote>
        <p className="mt-6 text-secondary">
          {testimonial.name}, {testimonial.role}
          {testimonial.sample && <span className="text-sm"> (contoh)</span>}
        </p>
      </Reveal>
    </section>
  );
}
