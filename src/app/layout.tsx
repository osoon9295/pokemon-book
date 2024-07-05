import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon-Book",
  description: "1세대 포켓몬 정보",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="text-4xl w-fit mx-auto mt-10 mb-5  py-4 px-12 font-bold bg-amber-500 rounded-full">
          Pokémon
        </header>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
