import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "center" | "left";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "center",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-container px-3 py-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-headline-lg mb-4">{title}</h2>
      {description && (
        <p
          className={cn(
            "text-body-lg text-secondary",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
