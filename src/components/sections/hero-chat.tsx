"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { chatConversations } from "@/lib/data/chat-conversations";
import { cn } from "@/lib/utils";

const ROTATE_MS = 8000;
const SLIDE_OUT_MS = 450;

export function HeroChat() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const paused = useRef(false);

  useEffect(() => {
    // reduced motion: tampil percakapan pertama saja, nda ganti otomatis
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let swap: ReturnType<typeof setTimeout>;
    const timer = setInterval(() => {
      if (paused.current) return;
      setLeaving(true);
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % chatConversations.length);
        setLeaving(false);
      }, SLIDE_OUT_MS);
    }, ROTATE_MS);
    return () => {
      clearInterval(timer);
      clearTimeout(swap);
    };
  }, []);

  return (
    <div
      aria-label="Contoh percakapan konsultasi"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      className="relative border border-on-background bg-surface p-6 shadow-[10px_10px_0_0_var(--color-primary)]"
    >
      <div className="flex items-center gap-3 border-b border-border-subtle pb-4">
        <Image
          src="/logo3.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 border border-border-subtle bg-white object-contain p-1.5"
        />
        <div>
          <p className="font-display font-bold">Pomalaa Dev</p>
          <p className="text-xs text-secondary">Biasanya balas dalam 1 jam</p>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className={cn(
            "transition duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
            leaving && "-translate-x-10 opacity-0",
          )}
        >
          <div
            key={index}
            className="chat-slide-in min-h-[340px] space-y-3 pt-5 text-[15px] leading-relaxed"
          >
            {chatConversations[index].map((msg, i) => (
              <p
                key={i}
                style={{ "--i": i } as React.CSSProperties}
                className={cn(
                  "chat-bubble max-w-[80%] px-4 py-3",
                  msg.from === "client"
                    ? "ml-auto bg-primary-soft"
                    : "bg-surface-container",
                )}
              >
                {msg.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
