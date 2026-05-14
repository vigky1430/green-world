import type { Metadata } from "next";
import Link from "next/link";
import { ServicesGallery } from "./ServicesList";

const PAGE_URL = "https://www.greenworld.sg/services";

export const metadata: Metadata = {
  title: "Landscaping Services in Singapore | Garden Design, Hydroculture & More",
  description:
    "Explore GreenWorld Landscaping's full range of services: landscape design & build, garden maintenance, hydroculture, fresh floral displays, tree planting, green wall installation, and artificial turf in Singapore.",
  keywords: [
    "landscaping services Singapore",
    "landscape design and build",
    "hydroculture service",
    "fresh floral display",
    "landscape maintenance",
    "tree planting",
    "green wall installation",
    "artificial turf",
    "outdoor garden design",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Landscaping Services in Singapore | GreenWorld Landscaping",
    description:
      "Full-service landscaping in Singapore: design, maintenance, hydroculture, floral displays, tree planting, green walls, and artificial turf.",
    url: PAGE_URL,
    images: [
      {
        url: "https://www.greenworld.sg/images/hydro-culture/hydro-culture-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional landscaping services by GreenWorld Landscaping Singapore",
      },
    ],
  },
  twitter: {
    title: "Landscaping Services in Singapore | GreenWorld Landscaping",
    description:
      "Full-service landscaping in Singapore: design, maintenance, hydroculture, floral displays, tree planting, green walls, and artificial turf.",
    images: ["https://www.greenworld.sg/images/hydro-culture/hydro-culture-1.jpeg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover brightness-[0.4]" alt="panoramic view of a perfectly manicured luxury estate garden" src="/images/hydro-culture/hydro-culture-1.jpeg" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <span className="inline-block py-1 px-4 bg-tertiary-container text-on-tertiary-container rounded-full text-sm font-bold mb-6 tracking-wider uppercase">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">Mastering the Art of <br/><span className="text-secondary-fixed">Natural Spaces</span></h1>
          <p className="text-xl text-surface-container-highest max-w-2xl mx-auto font-light leading-relaxed">From sustainable maintenance to architectural design, we provide a comprehensive suite of landscaping solutions tailored for the modern environment.</p>
        </div>
      </header>

      {/* Services Bento Grid */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-on-surface mb-4">Specialization Areas</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <ServicesGallery />
      </main>

      {/* Call to Action Section */}
      <section className="bg-surface-container-highest py-20 border-t border-outline-variant">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-on-surface">Ready to cultivate your vision?</h2>
          <p className="text-lg text-on-surface-variant mb-10">Whether it's routine maintenance or a total landscape transformation, our team is ready to bring expertise to your garden.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all inline-block text-center">
              Schedule a Consultation
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto bg-white border-2 border-primary text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-container/10 transition-all inline-block text-center">
              Download Price Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
