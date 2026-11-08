import Link from "next/link";
import { MapPin } from "lucide-react";
import { navLinks } from "@/lib/data/nav-links";
import { Logo } from "@/components/ui/logo";
import { getWhatsappLink } from "@/lib/whatsapp";
import { INSTAGRAM_URL } from "@/lib/social";

const legalLinks = [
  { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  { label: "Keamanan", href: "/keamanan" },
];

const contactLinks = [
  {
    label: "WhatsApp +62 851-7699-6948",
    href: getWhatsappLink("Halo Pomalaa Dev, mau ka tanya-tanya dulu."),
  },
  { label: "Instagram @pomalaa.dev", href: INSTAGRAM_URL },
  { label: "hello@pomalaadev.com", href: "mailto:hello@pomalaadev.com" },
];

const linkClass = "text-secondary transition-colors hover:text-on-background";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto grid max-w-(--container-max-width) gap-12 px-5 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <Logo size={28} />
            <span className="font-display text-lg font-bold tracking-tight">
              Pomalaa Dev
            </span>
          </div>
          <p className="mt-4 max-w-xs text-secondary">
            Jasa digital dari Pomalaa. Aplikasi, CV lamaran, sampai urusan
            pajak.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-secondary">
            <MapPin size={16} className="shrink-0" />
            Pomalaa, Kolaka, Sulawesi Tenggara
          </p>
        </div>

        <nav aria-label="Halaman" className="md:col-span-2">
          <h2 className="font-display font-bold">Menu</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="font-display font-bold">Hubungi kami</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-display font-bold">Legal</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border-subtle">
        <p className="mx-auto max-w-(--container-max-width) px-5 py-6 text-sm text-secondary">
          © 2026 Pomalaa Dev
        </p>
      </div>
    </footer>
  );
}
