import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "./ui/components/Container";
import Header from "./ui/components/Header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danilo Marchesani",
  description: "My portfolio a little safe place for me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
