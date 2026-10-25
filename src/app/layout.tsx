import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.css";
import Container from "@/components/layout/Container";
import { geistMono } from "@/lib/fonts";
import Painting from "@/components/layout/Painting";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danilo Marchesani",
  description: "My portfolio a little corner of the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} scroll-smooth`}>
      <body className={`${geist.className} antialiased`}>
        <Container aside={<Painting />}>{children}</Container>
      </body>
    </html>
  );
}
