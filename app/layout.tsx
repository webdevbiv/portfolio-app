import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/Main/StarBackground";
import NavBar from "@/components/NavBar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space Portfolio by WEBDEVBIV",
  description: "Personal Portfolio App by WEBDEVBIV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col ${geistSans.variable} ${geistMono.variable}  antialiased bg-[#030014] `}
      >
        <NavBar />
        {children}
        <StarsCanvas />
      </body>
    </html>
  );
}
