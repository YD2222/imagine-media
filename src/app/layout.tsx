import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/custom-cursor";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imagine Media — Photographe & Vidéaste de Mariage à Marrakech",
  description:
    "Imagine Media, photographe et vidéaste à Marrakech. Reportages de mariage haut de gamme, films et portraits d'exception. 5.0★ sur Google, disponible 24h/24.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-paper text-ink antialiased">
        <SmoothScroll>
          <CustomCursor />
          <SiteHeader />
          <PageTransition>
            <main>{children}</main>
            <SiteFooter />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
