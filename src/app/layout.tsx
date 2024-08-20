import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Container, Navbar } from "./_shared/components";
import { Footer } from "./_shared/components/footer";

const kanit = Kanit({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danilo's web corner",
  description: "Generated with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${kanit.className} antialiased`}>
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
