import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notosans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lakshya - Portfolio",
  description: "All about me - a portfolio website",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notosans.className} antialiased bg-slate-950 text-amber-50 text-xl`}
      >
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}

