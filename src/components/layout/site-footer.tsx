import Link from "next/link";
import { Globe, AtSign, Share2, MapPin } from "lucide-react";
import { navLinks } from "@/lib/data/nav-links";
import { Logo } from "@/components/ui/logo";
import { getWhatsappLink } from "@/lib/whatsapp";

const legalLinks = [
  { label: "Kebijakan Privasi", href: "/kebijakan-privasi", external: false },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan", external: false },
  { label: "Keamanan", href: "/keamanan", external: false },
  {
    label: "Kontak",
    href: getWhatsappLink("Halo, saya mau tanya-tanya dulu."),
    external: true,
  },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: AtSign, href: "#", label: "Email" },
  { icon: Share2, href: "#", label: "Share" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-background py-20">
      <div className="mx-auto max-w-(--container-max-width) px-margin-mobile md:px-margin-desktop">
        <div className="mb-20 grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <Logo size={32} />
              <span className="font-display text-headline-md font-bold tracking-tighter text-on-background">
                Pomalaa Dev
              </span>
            </div>
            <p className="text-body-md mb-4 max-w-xs text-secondary">
              Kami bantu usaha bikin website, aplikasi, dan sistem yang
              beneran kepake.
            </p>
            <div className="mb-8 flex items-center gap-2 text-body-md text-secondary">
              <MapPin size={16} className="shrink-0" />
              <span>Pomalaa, Kolaka, Sulawesi Tenggara</span>
            </div>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-secondary transition-all hover:border-on-background hover:text-on-background"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-label-md mb-6 font-bold uppercase tracking-widest text-on-background">
              Perusahaan
            </h5>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md text-secondary transition-colors hover:text-on-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-label-md mb-6 font-bold uppercase tracking-widest text-on-background">
              Legalitas
            </h5>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-md text-secondary transition-colors hover:text-on-background"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-body-md text-secondary transition-colors hover:text-on-background"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 md:flex-row">
          <p className="text-secondary text-sm">
            © 2026 Pomalaa Dev. Dibangun untuk bekerja.
          </p>
          <div className="flex gap-8 text-secondary text-sm">
            <a
              href="mailto:hello@pomalaadev.com"
              className="hover:text-on-background"
            >
              hello@pomalaadev.com
            </a>
            <a
              href={getWhatsappLink("Halo, saya mau tanya-tanya dulu.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-on-background"
            >
              +62 851-7699-6948
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
