import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Menu } from "@/components/Menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "Next.js examples | %s",
    default: "Next.js examples",
  },
  description: "Examples with next.js, server components, and more.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-2`}
      >
        <div className="pb-2 mb-4 border-gradient font-bold text-lg underline">
          <Menu />
        </div>
        <noscript className="font-bold text-red-800 text-lg font-mono">
          <div>_________________________________</div>
          <div>_________ JS IS DISABLED _________</div>
        </noscript>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
