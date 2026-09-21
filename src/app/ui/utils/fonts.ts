import { Geist_Mono, Playfair_Display } from "next/font/google";

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const playfair = Playfair_Display({
  style: "normal",
  subsets: ["latin"],
  weight: ["700", "800"],
});
