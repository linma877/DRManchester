import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://syn4dtwin.com"),
  title: "Syn4Dtwin V1.0 — 4D Digital Rock Intelligence",
  description: "An integrated workspace for 3D and 4D CT image processing, AI segmentation, quantification and simulation.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Syn4Dtwin V1.0",
    description: "From CT data to a predictive digital rock twin.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syn4Dtwin V1.0",
    description: "From CT data to a predictive digital rock twin.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
