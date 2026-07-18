"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
}

const LOGO_ASPECT_RATIO = 571 / 437;

export function Logo({ size = 40, className }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- required mount-gate to avoid SSR/client theme hydration mismatch
    setMounted(true);
  }, []);

  const src =
    mounted && resolvedTheme === "dark" ? "/logo3-dark.png" : "/logo3.png";

  return (
    <Image
      src={src}
      alt="Pomalaa Dev"
      width={Math.round(size * LOGO_ASPECT_RATIO)}
      height={size}
      className={cn("object-contain", className)}
      priority
    />
  );
}
