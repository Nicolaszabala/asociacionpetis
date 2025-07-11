import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Navigation from "@/components/Navigation";

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
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
