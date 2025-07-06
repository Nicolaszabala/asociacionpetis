import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asociación Petís - Apoio á Crianza e á Lactancia en Pontevedra",
  description: "Asociación de apoio á crianza e á lactancia en Pontevedra. O teu espazo seguro para que nunca máis te sintas soa, insegura ou xulgada.",
  keywords: "asociación, crianza, lactancia, Pontevedra, apoio, familias, petís",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
