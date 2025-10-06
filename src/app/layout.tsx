"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Exo_2 } from "next/font/google";
import Header from "@/app/home/header";
import Footer from "@/app/home/footer";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // poids que tu veux utiliser
  variable: "--font-titles",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={exo2.className}>
      <body
        className={`${geistSans.variable}  ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
