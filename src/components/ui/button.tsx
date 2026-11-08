import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "dark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: undefined;
}

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  href: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-on-primary",
  secondary:
    "border border-on-background text-on-background hover:bg-on-background hover:text-background",
  dark: "bg-on-background text-background",
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps | ButtonAsAnchorProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 font-medium transition hover:-translate-y-px active:scale-[0.98]",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
