import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import TrpcProvider from "@/components/home/trpcProvider";
import Footer from "@/components/home/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CPCT Mock Test",
  description: "Test your knowledge and excel in your learning journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-linear-to-r from-[#f1f7ff] to-[#fdfeff]`}
        >
          <TrpcProvider>
            {children}
            <Footer />
            <Toaster position="bottom-right" theme="system" />
          </TrpcProvider>
        </body>
      </html>
    </>
  );
};