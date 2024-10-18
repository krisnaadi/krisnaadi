import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@picocss/pico/css/pico.zinc.min.css';
import Header from "@/components/layout/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header/>
          {children}
      </body>
    </html>
  );
}