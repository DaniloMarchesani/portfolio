import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "./ui/components/Container";
import Footer from "./ui/components/footer";
import Header from "./ui/components/header";
import TerminalButton from "./ui/components/terminal-toggle";

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
      <body className={`${inter.className} antialiased tracking-tight`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
        <TerminalButton />
      </body>
    </html>
  );
}
