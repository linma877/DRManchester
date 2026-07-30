import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Rock & Porous Materials Platform",
  description: "Multiscale imaging, dynamic experiments and AI for predictive porous materials at The University of Manchester.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Digital Rock & Porous Materials Platform",
    description: "From Imaging Matter to Predictive Matter",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Digital Rock & Porous Materials Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Rock & Porous Materials Platform",
    description: "From Imaging Matter to Predictive Matter",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
