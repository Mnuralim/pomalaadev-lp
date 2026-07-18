import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ClientLogosSection } from "@/components/sections/client-logos-section";
import { StatsSection } from "@/components/sections/stats-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { faqItems } from "@/lib/data/faq";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pomalaa Dev",
  description:
    "Kami bantu usaha membangun website, aplikasi, dan sistem digital yang mempercepat pekerjaan, merapikan operasional, dan menambah kepercayaan pelanggan.",
  url: "https://pomalaa.dev",
  email: "hello@pomalaadev.com",
  telephone: "+6285176996948",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pomalaa, Kolaka",
    addressRegion: "Sulawesi Tenggara",
    addressCountry: "ID",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <ClientLogosSection />
        <StatsSection />
        <ServicesSection />
        <ProjectsSection />
        <TechStackSection />
        <WhyUsSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
