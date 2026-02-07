import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import "flowbite";
import NavbarComponent from "../components/navbar/NavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";

import { inter, suwannaphum } from './font';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "Ecommerce TL Express",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reiciendis natus similique atque doloribus, accusantium fugit maiores ducimus accusamus non.",
  openGraph : {
    title: "TL Express Logostic ",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reiciendis natus similique atque doloribus, accusantium fugit maiores ducimus accusamus non.",
    images: ['https://rainy-magenta-3ty3osbnm9.edgeone.app/2025-09-05%2021.11.31.jpg'],
  }
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${suwannaphum.variable}`}>
        <header>
          <NavbarComponent/>
        </header>
<Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
