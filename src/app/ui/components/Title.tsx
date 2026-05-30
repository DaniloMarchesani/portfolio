import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { playfair } from "../utils/fonts";

type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps<T extends TitleTag> {
  as?: T;
  children: ReactNode;
  className?: string;
}

export default function Title<T extends TitleTag = "h2">({
  as,
  children,
  className = "",
  ...props
}: TitleProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TitleProps<T>>) {
  const Component = (as ?? "h2") as ElementType;
  const weight = Component === "h1" ? "font-extrabold" : "font-bold";

  return (
    <Component
      className={`${playfair.className} ${weight} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
