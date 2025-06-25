import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "./ui/components/Container";
import Footer from "./ui/components/footer";
import Header from "./ui/components/Header";

export const metadata: Metadata = {
  title: "Danilo Marchesani",
  description: "My portfolio a little corner of the web.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased tracking-tight`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
