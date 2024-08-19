import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Container, Navbar } from "./_shared/components";

const kanit = Kanit({ weight: ["200", "300", "400", "500", "700", "800", "900"], subsets: ["latin"]});

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
    <html lang="en">
      <body className={kanit.className}>
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
