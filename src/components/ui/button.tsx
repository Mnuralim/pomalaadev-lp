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
  primary: "bg-primary text-on-primary shadow-sm",
  secondary: "bg-surface border border-border-subtle text-on-background",
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
    "scale-hover active-tap inline-flex items-center justify-center rounded-xl px-8 py-4 text-label-md font-bold",
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
