import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

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
          className={`${className} text-sm text-secondary`}
          {...props}
        >
          {children}
        </Component>
      );
    case "small":
      return (
        <Component
          className={`${className} text-xs md:text-sm text-copy`}
          {...props}
        >
          {children}
        </Component>
      );
    case "label":
      return (
        <Component className={`${className} text-sm font-medium`} {...props}>
          {children}
        </Component>
      );
    case "paragraph":
      return (
        <Component className={className} {...props}>
          {children}
        </Component>
      );
    default:
      return (
        <Component className={className} {...props}>
          {children}
        </Component>
      );
  }
}
