import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexora — Transforma datos en decisiones",
  description:
    "Plataforma SaaS de análisis operativo. Unifica datos, automatiza reportes y toma decisiones basadas en insights reales.",
  keywords: ["SaaS", "Análisis", "Datos", "Reportes", "Decisiones", "Nexora"],
  authors: [{ name: "MaoDev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
