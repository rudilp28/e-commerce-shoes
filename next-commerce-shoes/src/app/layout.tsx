import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navibar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Shoes",
  description: "My First E-commerce Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navibar />
        <main className="bg-slate-700 h-screen p-16">
        {children}
        </main>
      </body>
    </html>
  );
}
