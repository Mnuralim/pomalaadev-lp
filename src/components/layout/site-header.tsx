"use client";

import Link from "next/link";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { navLinks } from "@/lib/data/nav-links";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";
import { getWhatsappLink } from "@/lib/whatsapp";

export function SiteHeader() {
  const hidden = useScrollDirection();

  return (
    <header
      className={cn(
        "glass-nav fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-background/80 transition-transform duration-300",
        hidden && "-translate-y-full",
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-(--container-max-width) items-center justify-between px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <span className="text-body-lg font-display font-bold tracking-tighter text-on-background">
            Pomalaa Dev
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-label-md text-secondary transition-colors hover:text-on-background"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            href={getWhatsappLink(
              "Halo, saya mau diskusikan proyek website/aplikasi.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-6 py-3 md:inline-flex"
          >
            Diskusikan Proyek
          </Button>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
