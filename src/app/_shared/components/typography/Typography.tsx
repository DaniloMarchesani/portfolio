import { FC } from "react";
import { ITypographyProps } from "./interface";
import { Redressed } from "next/font/google";

const redressed = Redressed({
  weight: "400",
  subsets: ["latin"],
});

export const Typography: FC<ITypographyProps> = ({
  children,
  variant = "paragraph",
  className= ""
}) => {
  if (variant === "paragraph") return <p className={`text-justify max-w-[600px] mt-6 text-[#555] font-light ${className}`}>{children}</p>;
  if (variant === "title")
    return <h1 className={`${redressed.className} text-2xl mt-2 md:text-4xl lg:text-6xl ${className}`}>{children}</h1>;
  if (variant === "subtitle")
    return <h3 className={`text-xl text-[#555] ${className}`}>{children}</h3>;
};
