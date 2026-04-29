import type { Metadata } from "next";
import Link from "next/link";
import { ServicesGallery } from "./ServicesList";

export const metadata: Metadata = {
  title: "Our Services | Green World Landscaping",
  description: "Comprehensive suite of landscaping solutions tailored for the modern environment.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover brightness-[0.4]" alt="panoramic view of a perfectly manicured luxury estate garden" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABvEuMf1o1sh2wkOibWcTZZN0tNJuESecHMS1wYuYYb2xcn0Q8T5x08eUiOhwZ7oub2JamLH7JcHc60OyNwxsVygtmbAvKgOJxZMVYhO-k38gWKxxC-Rn5uQ6scga9__rgVIxcsRQPVS_imVTcvYM38CEbRH-j6n4IyrZQCa1uRQMTE59hT-bR98yMvioIMTYsghmI017kXa88K6Ty99qWGGcCOjRX8gLgRjvhCqNsyRt3onT6Ta0MTnVB7-b2j8Al-GJq9NJDl6o" />
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
