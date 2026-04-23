import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | GreenWorld Landscaping",
    default: "GreenWorld Landscaping – Transform Your Outdoor Space",
  },
  description:
    "GreenWorld Landscaping delivers premium lawn care, garden design, tree surgery, and irrigation solutions across the region. Let us transform your outdoor space.",
  keywords: ["landscaping", "lawn care", "garden design", "tree surgery", "green world"],
  openGraph: {
    siteName: "GreenWorld Landscaping",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Work+Sans:wght@300;400;500;600;900&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
