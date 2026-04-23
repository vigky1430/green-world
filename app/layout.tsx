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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
