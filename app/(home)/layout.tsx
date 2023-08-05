import { Analytics } from "@vercel/analytics/react";
import "../_styles/globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Développement Web | Dylan - Narbonne, France",
  description:
    "Découvrez le portfolio de développement web de dylan, basé à Narbonne, France. Avec 2 ans d'expérience en développement web, je crée des sites web attrayants et performants en utilisant Next.js et d'autres technologies web modernes.",
  keywords: [
    "Portfolio",
    "Développement Web",
    "Web Developer",
    "Narbonne",
    "France",
    "Expérience",
    "Projets",
    "Compétences",
  ],
  authors: [{ name: "Dylan Jansana", url: "https://www.dylanjansana.fr/" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <div className="relative flex flex-col gap-section bg-primary-black text-white md:gap-0 md:px-0 lg:items-center">
          <Analytics />
          {children}
        </div>
      </body>
    </html>
  );
}
