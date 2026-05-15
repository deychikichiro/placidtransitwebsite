import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const googleFontsUrl =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700&display=swap";

export const metadata: Metadata = {
  title: {
    default: "Placid Transit LLC | Professional Moving Services in Chicago & Suburbs",
    template: "%s | Placid Transit LLC",
  },
  description:
    "Placid Transit LLC offers professional local, long-distance, commercial, specialty, junk removal, and handyman moving services in Chicago, IL and surrounding areas including Indiana and Wisconsin borders.",
  keywords: [
    "moving company Chicago",
    "movers Chicago suburbs",
    "commercial movers Illinois",
    "specialty movers Chicago",
    "junk removal Chicago",
    "packing unpacking service Chicago",
    "Placid Transit LLC",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={googleFontsUrl} rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
