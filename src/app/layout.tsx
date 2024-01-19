import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const generateMetadata = async () => {
  return {
    title: "CS Landing Page",
    description: "This is the landing page of CamelStudio",
  };
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr' className='!scroll-smooth'>
      <body>{children}</body>
    </html>
  );
}

export { generateMetadata };
