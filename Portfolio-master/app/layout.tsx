import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vitor Ramos | Desenvolvedor Full-Stack",
  description: "Portfólio de Vitor Ramos, desenvolvedor full-stack focado em interfaces limpas, APIs e automações.",
  openGraph: {
    title: "Vitor Ramos | Desenvolvedor Full-Stack",
    description: "Projetos, habilidades e trajetória de Vitor Ramos.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
