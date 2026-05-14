import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const BASE_URL = "https://www.greenworld.com.sg";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | GreenWorld Landscaping",
    default: "GreenWorld Landscaping – Premium Landscaping in Singapore",
  },
  description:
    "GreenWorld Landscaping delivers premium lawn care, garden design, hydroculture, floral displays, and landscape maintenance in Singapore. Transform your outdoor space today.",
  keywords: [
    "landscaping Singapore",
    "lawn care Singapore",
    "garden design Singapore",
    "hydroculture Singapore",
    "floral display Singapore",
    "landscape maintenance",
    "tree planting Singapore",
    "green wall installation",
    "green world landscaping",
    "outdoor space transformation",
  ],
  authors: [{ name: "GreenWorld Landscaping", url: BASE_URL }],
  creator: "GreenWorld Landscaping",
  publisher: "GreenWorld Landscaping",
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
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: BASE_URL,
    siteName: "GreenWorld Landscaping",
    title: "GreenWorld Landscaping – Premium Landscaping in Singapore",
    description:
      "Transform your outdoor space with GreenWorld Landscaping. Expert garden design, hydroculture, floral displays, and landscape maintenance in Singapore.",
    images: [
      {
        url: "/images/home-hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "GreenWorld Landscaping – Premium Landscaping in Singapore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenWorld Landscaping – Premium Landscaping in Singapore",
    description:
      "Transform your outdoor space with GreenWorld Landscaping. Expert garden design, hydroculture, floral displays, and landscape maintenance in Singapore.",
    images: ["/images/home-hero-bg.webp"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  themeColor: "#2e7d32",
  category: "landscaping",
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
        {/* Local Business JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${BASE_URL}/#business`,
              name: "GreenWorld Landscaping",
              description:
                "Premium landscaping services in Singapore including garden design, hydroculture, floral displays, landscape maintenance, tree planting, and green wall installation.",
              url: BASE_URL,
              logo: `${BASE_URL}/logo.svg`,
              image: `${BASE_URL}/images/home-hero-bg.webp`,
              telephone: "+6592434946",
              email: "gogreenworld03@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "10 Admiralty Street #01-43",
                addressLocality: "Singapore",
                postalCode: "757695",
                addressCountry: "SG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 1.4624441,
                longitude: 103.8125315,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              sameAs: [],
              priceRange: "$$",
              currenciesAccepted: "SGD",
              paymentAccepted: "Cash, Bank Transfer",
              areaServed: {
                "@type": "Country",
                name: "Singapore",
              },
              serviceType: [
                "Landscape Design",
                "Landscape Maintenance",
                "Hydroculture",
                "Floral Display",
                "Tree Planting",
                "Green Wall Installation",
                "Artificial Turf",
              ],
              foundingDate: "2024",
              slogan: "We Make Greenery For Your Vision",
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
