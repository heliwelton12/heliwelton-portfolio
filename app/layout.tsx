import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heliwelton Fernandes | Dev Web",
  description: "Portfólio de Heliwelton Fernandes, Dev Web e Bacharel em Sistemas de Informação.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
