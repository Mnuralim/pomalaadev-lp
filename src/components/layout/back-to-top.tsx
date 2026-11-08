"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { scrollToTop } from "@/lib/scroll-to-top";

export function BackToTop() {
  const sentinel = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sentinel.current;
    if (!node) return;
    // tombol muncul setelah titik 600px dari atas sudah lewat layar
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sentinel}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[600px] h-px w-px"
      />
      <button
        type="button"
        aria-label="Kembali ke atas"
        onClick={scrollToTop}
        tabIndex={visible ? 0 : -1}
        className={cn(
          "fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center border border-on-background bg-primary text-on-primary shadow-[4px_4px_0_0_var(--color-on-background)] transition duration-300 hover:-translate-y-0.5 active:scale-95",
          visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
