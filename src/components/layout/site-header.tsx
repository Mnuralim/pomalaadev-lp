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
import { scrollToTop } from "@/lib/scroll-to-top";

export function SiteHeader() {
  const hidden = useScrollDirection();

  return (
    <header
      className={cn(
        "glass-nav sticky top-0 z-50 border-b border-border-subtle bg-background/90 transition-transform duration-300",
        hidden && "-translate-y-full",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-(--container-max-width) items-center justify-between px-5">
        <Link
          href="/"
          aria-label="Pomalaa Dev, kembali ke atas"
          onClick={(e) => {
            // di beranda: gulir ke atas; di halaman lain: Link bawa ke beranda
            if (window.location.pathname === "/") {
              e.preventDefault();
              scrollToTop();
            }
          }}
          className="flex items-center gap-3"
        >
          <Logo size={32} />
          <span className="font-display text-lg font-bold tracking-tight text-on-background">
            Pomalaa Dev
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-secondary transition-colors hover:text-on-background"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            href={getWhatsappLink("Halo Pomalaa Dev, mau ka konsultasi dulu.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            className="hidden px-4 py-2.5 text-sm md:inline-flex"
          >
            Konsultasi gratis
          </Button>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
