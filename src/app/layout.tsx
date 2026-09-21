import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Container from "./ui/components/Container";
import Footer from "./ui/components/footer";
import Header from "./ui/components/header";
import { geistMono } from "./ui/utils/fonts";

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
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
