import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { faqItems } from "@/lib/data/faq";

export function FaqSection() {
  return (
    <section className="bg-background py-32">
      <div className="mx-auto max-w-[800px] px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="font-display text-headline-lg mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 50}>
              <details
                className="group rounded-xl border border-border-subtle bg-surface"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                  <span className="text-label-md font-bold text-on-background">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className="transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="text-body-md px-6 pb-6 text-secondary">
                  {item.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
