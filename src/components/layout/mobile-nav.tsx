"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/data/nav-links";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWhatsappLink } from "@/lib/whatsapp";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Tutup menu" : "Buka menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-on-background"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={cn(
          "fixed inset-x-0 top-20 z-40 origin-top border-b border-border-subtle bg-background transition-all duration-200",
          open
            ? "pointer-events-auto scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0",
        )}
      >
        <div className="flex flex-col gap-6 px-margin-mobile py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-label-md text-on-background"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={getWhatsappLink(
              "Halo, saya mau diskusikan proyek website/aplikasi.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full py-3"
            onClick={() => setOpen(false)}
          >
            Diskusikan Proyek
          </Button>
        </div>
      </div>
    </div>
  );
}
