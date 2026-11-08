import { Plus } from "lucide-react";
import { faqItems } from "@/lib/data/faq";

export function FaqSection() {
  return (
    <section id="tanya" className="scroll-mt-20 border-t border-border-subtle bg-surface">
      <div className="mx-auto grid max-w-(--container-max-width) gap-12 px-5 py-24 md:grid-cols-12">
        <h2 className="font-display text-4xl font-bold tracking-tight md:col-span-4">
          Biasa ditanya.
        </h2>
        <div className="divide-y divide-border-subtle border-y border-border-subtle md:col-span-8">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  size={20}
                  className="shrink-0 transition-transform group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 text-secondary">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
