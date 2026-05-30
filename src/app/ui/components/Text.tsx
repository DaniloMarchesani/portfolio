import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { inter } from "../utils/fonts";

type TextTag = "p" | "span" | "strong" | "em" | "small";

interface IText {
  as?: TextTag;
  variant?: "muted" | "paragraph" | "small" | "label";
  children: ReactNode;
  className?: string;
}

export default function Text<T extends TextTag = "p">({
  as,
  children,
  className = "",
  variant = "paragraph",
  ...props
}: IText & Omit<ComponentPropsWithoutRef<T>, keyof IText>) {
  const Component = (as ??
    (variant === "small" ? "small" : "p")) as ElementType;

  switch (variant) {
    case "muted":
      return (
        <Component
          className={`${inter.className} ${className} text-sm text-neutral-700 dark:text-neutral-500`}
          {...props}
        >
          {children}
        </Component>
      );
    case "small":
      return (
        <Component
          className={`${inter.className} ${className} text-xs md:text-sm text-neutral-800 dark:text-neutral-100`}
          {...props}
        >
          {children}
        </Component>
      );
    case "label":
      return (
        <Component
          className={`${inter.className} ${className} text-sm font-medium`}
          {...props}
        >
          {children}
        </Component>
      );
    case "paragraph":
      return (
        <Component className={`${inter.className} ${className}`} {...props}>
          {children}
        </Component>
      );
    default:
      return (
        <Component className={`${inter.className} ${className}`} {...props}>
          {children}
        </Component>
      );
  }
}
