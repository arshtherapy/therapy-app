import type { Metadata } from "next";
import {  Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";
import dynamic from "next/dynamic";

const Toaster = dynamic(
  () => import("@/components/ui/toaster").then((mod) => mod.Toaster),
  { ssr: true }
);

const Sonner = dynamic(
  () => import("@/components/ui/sonner").then((mod) => mod.Toaster),
  { ssr: true }
);

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Arsh Paediatric Rehabilitation Center | Therapy & Care in Ahmedabad",
  description:
    "Arsh Center offers specialized pediatric therapy, rehabilitation, and care services for children in Ahmedabad. Compassionate care tailored to each child's needs.",
  keywords:
    "pediatric therapy, child rehabilitation, autism therapy, speech therapy, occupational therapy, physiotherapy, child development, Ahmedabad",
  metadataBase: new URL("https://www.arshchildtherapy.com"),
  alternates: {
    canonical: "https://www.arshchildtherapy.com/", // ✅ FULL URL is required
  },
  openGraph: {
    title: "Arsh Paediatric Rehabilitation Center",
    description:
      "Specialized pediatric therapy and rehabilitation services in Ahmedabad",
    url: "https://www.arshchildtherapy.com", // ✅ use www if you're redirecting to it
    siteName: "Arsh Paediatric Rehabilitation Center",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.arshchildtherapy.com/og-image.jpg", // ✅ full URL is safer for OG images
        width: 1200,
        height: 630,
        alt: "Arsh Paediatric Rehabilitation Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arsh Paediatric Rehabilitation Center",
    description:
      "Specialized pediatric therapy and rehabilitation services in Ahmedabad",
    site: "@ArshCenter",
    creator: "@ArshCenter",
    images: ["https://www.arshchildtherapy.com/twitter-image.jpg"], // ✅ full URL
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "85271136de209d99",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}