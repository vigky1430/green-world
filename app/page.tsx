import type { Metadata } from "next";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Green World Landscaping | Transform Your Vision",
  description: "Transforming ordinary outdoor spaces into breathtaking sustainable sanctuaries. Expert design, meticulous maintenance, and organic care for your environment.",
};

import ImageSlideshow from "./components/ImageSlideshow";

export default function HomePage() {
  const startDate = new Date("2024-11-25");
  const today = new Date();
  let yearsExperience = today.getFullYear() - startDate.getFullYear();
  if (
    today.getMonth() < startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())
  ) {
    yearsExperience--;
  }
  yearsExperience = Math.max(0, yearsExperience);

  const workingImages = [
    "/images/working images/working-image-1.jpeg",
    "/images/working images/working-image-2.jpeg",
    "/images/working images/working-image-3.jpeg",
    "/images/working images/working-image-4.jpeg",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-20" alt="lush sprawling garden with manicured lawn, architectural shrubs, and soft morning sunlight filtering through oak trees" src="/images/home-hero-bg.webp" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold uppercase tracking-wider">
              <span className="material-symbols-outlined !text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>eco</span>
              Professional Landscaping Services
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight">
              We Make{" "}
              <span className="inline-flex">
                {"Greenery".split("").map((char, index) => (
                  <span
                    key={index}
                    className="animate-wave inline-block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#00ac3f] to-primary bg-[length:200%_auto] animate-gradient-x">
                      {char}
                    </span>
                  </span>
                ))}
              </span>{" "}
              For Your Vision
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Transforming ordinary outdoor spaces into breathtaking sustainable sanctuaries. Expert design, meticulous maintenance, and organic care for your environment.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact-us" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:shadow-xl transition-all">
                Get Quote
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              {/* <Link href="/contact-us" className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-surface-container-high transition-all">
                Contact Us
              </Link> */}
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4 h-[500px]">
            <div className="space-y-4 pt-12">
              <div className="h-64 rounded-2xl overflow-hidden shadow-2xl group">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="close up of vibrant green fern leaves with dew drops in a professional garden setting" src="/images/WhatsApp Image 2026-05-03 at 7.00.10 PM.jpeg" />
              </div>
              <div className="h-40 rounded-2xl bg-tertiary-container flex items-center justify-center p-6 text-on-tertiary-container text-center">
                <div className="space-y-1">
                  <AnimatedCounter end={yearsExperience} suffix="+" className="text-4xl font-black" />
                  <div className="text-sm font-medium uppercase tracking-widest">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-40 rounded-2xl bg-secondary flex items-center justify-center p-6 text-on-secondary text-center">
                <div className="space-y-1">
                  <AnimatedCounter end={10} suffix="+" className="text-4xl font-black" />
                  <div className="text-sm font-medium uppercase tracking-widest">Projects Completed</div>
                </div>
              </div>
              <div className="h-80 rounded-2xl overflow-hidden shadow-2xl group">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="modern backyard patio design with limestone pavers and lush surrounding garden beds" src="/images/WhatsApp Image 2026-05-03 at 6.50.51 PM.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights - Bento Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Crafting Natural Masterpieces</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">From residential retreats to commercial landscapes, we provide end-to-end solutions that harmonize with nature.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-surface-container h-[400px]">
              <Link href="/services">
                  <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="large scale landscape architectural project with stone paths and diverse ornamental plants" src="/images/WhatsApp Image 2026-05-03 at 6.54.33 PM.jpeg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-on-primary">
                    <h3 className="text-3xl font-bold mb-2">Landscape Design and Build works</h3>
                    <p className="text-on-primary-container/90 max-w-md">Custom design plans that blend aesthetics with functionality for your unique space.</p>
                  </div>
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-surface-container h-[400px]">
              <Link href="/services">
                  <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="professional gardener trimming hedges with precision tools in a formal garden" src="/images/WhatsApp Image 2026-05-03 at 7.03.52 PM.jpeg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-on-primary">
                    <h3 className="text-2xl font-bold mb-2">Landscape maintenance</h3>
                    <p className="text-on-primary-container/90">Year-round maintenance to keep your greenery thriving and pristine.</p>
                  </div>
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-surface-container h-[400px]">
              <Link href="/services">
                  <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="vibrant and seasonal fresh flower floral display arrangement" src="/images/floral-display/floral-display-1.jpeg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-on-primary">
                    <h3 className="text-2xl font-bold mb-2">Fresh Flower Floral Display</h3>
                    <p className="text-on-primary-container/90">Vibrant and seasonal floral arrangements for events or daily aesthetics.</p>
                  </div>
              </Link>
            </div>
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-surface-container h-[400px]">
              <Link href="/services">
                  <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="modern hydroculture planting solution for indoor environment" src="/images/hydro-culture/hydro-culture-1.jpeg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-on-primary">
                    <h3 className="text-3xl font-bold mb-2">Hydroculture Service</h3>
                    <p className="text-on-primary-container/90 max-w-md">Soil-less planting solutions for indoor and unique outdoor spaces.</p>
                  </div>
              </Link>
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <ImageSlideshow images={workingImages} />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-on-primary p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-lg italic">"We don't just plant trees, we grow ecosystems that inspire the soul."</p>
                <div className="mt-4 font-bold">- Raja, Manager</div>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold text-primary">Rooted in Excellence</h2>
                <p className="text-on-surface-variant text-lg">Since 2025, we've been the trusted partner for premium landscaping solutions that respect the environment.</p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>eco</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-on-surface mb-1">Eco-Conscious Approach</h4>
                    <p className="text-on-surface-variant">We prioritize native species and sustainable materials in every design.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-on-surface mb-1">Certified Expertise</h4>
                    <p className="text-on-surface-variant">Our team consists of licensed horticulturists and master landscapers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>psychology_alt</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-on-surface mb-1">Vision-First Design</h4>
                    <p className="text-on-surface-variant">We translate your personal style into a living, breathing landscape.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl bg-primary text-on-primary overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img className="w-full h-full object-cover" alt="abstract top down texture of lush green hedge leaves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDj7nzt6UNksWCbPLD8eKUUMi2qUEG4C2UVb0kg6rgeTepff4c8m99fnD4Ymuw23T1zeBrtdc5PhgWHJuSdOfc1AWtCu3JKSpJpJ8MmYoo3iiJpHfeXD0_XwhtfLKIEK54wZjDHzcI4FYp5gV1A-KIFDHhDMnB3qsT6OT8ZK7r9u_I3QPb2td2IgxJurBcsw3j-plkrW0uP6VfgAKj8Ekoe6GAJxv8tl0XWYlZ6zTf9ga-jk5dwlcyAn8c_N0PfJSJYQiZcVBSjqc" />
          </div>
          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black">Ready to transform your space?</h2>
              <p className="text-xl text-on-primary-container max-w-xl">Join hundreds of homeowners who have elevated their living environment with our expert care.</p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/contact-us">
              <button className="bg-secondary-fixed text-on-secondary-fixed px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary-fixed-dim transition-all shadow-lg hover:-translate-y-1 cursor-pointer">
                Book Your Consultation
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
