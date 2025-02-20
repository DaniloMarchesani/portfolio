import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "./ui/components/Container";
import Header from "./ui/components/Header";

export const metadata: Metadata = {
  title: "Danilo Marchesani",
  description: "My portfolio a little safe place for me",
};

const inter = Inter({
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "500", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
