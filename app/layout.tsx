import type { Metadata } from "next";
import "@picocss/pico/css/pico.cyan.min.css";
import "./globals.css";
import Header from "@/components/layout/header";
import { Analytics } from "@vercel/analytics/react";

import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "krisnaadi",
  description: "krisnaadi full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
