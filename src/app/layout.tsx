import type { Metadata } from "next";
import { inter } from "./ui/utils/fonts";
import "./globals.css";
import Container from "./ui/components/Container";
import Footer from "./ui/components/footer";
import Header from "./ui/components/header";

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
