import { ReactNode } from "react";

interface IText {
  variant?:
    | "title"
    | "subtitle"
    | "large"
    | "medium"
    | "muted"
    | "paragraph"
    | "small";
  children: ReactNode;
  className?: string;
}

export default function Text({ children, className, variant }: IText) {
  switch (variant) {
    case "title":
      return (
        <h1 className={`text-3xl md:text-3xl font-medium ${className} `}>
          {children}
        </h1>
      );
    case "subtitle":
      return (
        <h2 className={`$text-xl md:text-2xl font-semibold ${className} `}>
          {children}
        </h2>
      );
    case "large":
      return (
        <h3 className={`${className} text-xl md:text-3xl font-semibold`}>
          {children}
        </h3>
      );
    case "medium":
      return <h4 className={`${className} text-md md:text-md `}>{children}</h4>;
    case "muted":
      return (
        <p
          className={`${className} text-sm md:text-base text-neutral-700 dark:text-neutral-300`}
        >
          {children}
        </p>
      );
    case "small":
      return (
        <p
          className={`${className} text-xs md:text-sm text-neutral-800 dark:text-neutral-100`}
        >
          {children}
        </p>
      );
    case "paragraph":
      return <p className={`${className}`}>{children}</p>;
    default:
      return <span className={`${className}`}>{children}</span>;
  }
}
