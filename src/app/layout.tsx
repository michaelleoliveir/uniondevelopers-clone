import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Union Developers",
  description: "Clonando a página do Union Developers utilizando Next.js, Typescript e Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} antialiased`}>
        <main className="pt-16 overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
