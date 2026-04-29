import type { Metadata } from "next";
import Link from "next/link";
import ProjectsGallery from "./ProjectsGallery";

export const metadata: Metadata = {
  title: "Our Portfolio of Living Masterpieces | Green World Landscaping",
  description: "Explore our collection of architectural landscapes where organic fluidity meets structural precision.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 mb-24 max-w-screen-2xl mx-auto pt-8">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2 pt-12 md:pt-24">
            <h1 className="font-headline text-[2.5rem] md:text-[3.5rem] leading-tight tracking-[-0.02em] font-extrabold text-on-surface mb-6">
              Our Portfolio of<br />
              <span className="text-gradient">Living Masterpieces</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
              We don't just plant; we sculpt space. Explore our collection of architectural landscapes where organic fluidity meets structural precision, creating enduring environments.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low relative">
              <img alt="Architectural garden with precise stone pathways and lush structural planting" className="object-cover w-full h-full p-1 rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ0W475DRESrxl6ArokrX9VspOZGywkBViWeUmWIQJGbAFepDRYqmNvEHMOADwEY0rR85G2S2mi8-IF8BL0pxb5KQrmGvweu45Mtzt-s742EbQxR8Jb5RgFlt_ehC0UwKVG8R6He8WbYigcXXf69PQK09LTu8ESdNvCIeKxdiQjCSp0tFDrDGneBAPVv90VnaO7lc3rQAdDp1QAY5SzSxH2MyTxc97WES2Ta9jFhIA8yUkRkrVWET-2jkpp_AZtVvGE6Iuac_rgIU" />
            </div>
          </div>
        </div>
      </section>

      <ProjectsGallery />

      {/* Before & After Transformation */}
      <section className="bg-surface-container-low py-16 md:py-24 mb-32">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-[1.75rem] font-bold text-on-surface mb-4">Structural Transformation</h2>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto">Witness the precision of our process. From raw earth to architectural refinement.</p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-1 toned-shadow relative">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto relative group overflow-hidden rounded-tl-lg rounded-bl-lg lg:rounded-bl-none">
                <img alt="Overgrown, unstructured backyard space" className="object-cover w-full h-full grayscale-[50%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrTpRjea78EzrqrY4V15MwJN4oP0ipf8ny629E2s8aD55Snv6DtJltw6dkpLqQ-_A4juznHrudaZO0YmmRuO6K3ErTEMzfI8EicSQWQrz0Krh7fHLiTNz8OIkXI3xppwG4PXRX6Rmx63DgAA30YlNLcUH9wChv16KHjt5TAVgpqKl6j_TjsWInpOwzxMxzUasDDUJHZLXn8nLajPeQnWzyfnRdiybnhd5R6Ck6jdw8iXcYRUFQMECg0e_acx-PHXqal4fEi1lIqxI" />
                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-sm font-label text-xs font-bold uppercase text-on-surface">Before</div>
              </div>
              <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto relative overflow-hidden rounded-tr-lg rounded-br-lg lg:rounded-tr-none">
                <img alt="Transformed precise modern garden with stone steps" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwgZVe49ZFTganrUTimqIPzORHnFzbZT14XxaJ47flQ68XUJX5uSNoqj_hN9vZ8fMdQoRqRlX64e5634fRzTwvaLGkQvFPsKb2xRJsB6qgi68uSPXC-9Ktt7WOluCOHYzt7ytCMv0PFb2qxunkT2QVQKAn7izMPD9sVcQImNhWm0uVF3OyOKXupyMs5znTxWwc-WTHJiXuN_DqJxF4ONc7sfzYD7QBB9zdX1IK8e3x3cjk0QTQ0Ai4IThEGOI4IR3UC7GGmbQGmss" />
                <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-sm font-label text-xs font-bold uppercase text-primary">After</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 max-w-3xl mx-auto text-center mb-16">
        <h2 className="font-headline text-[2.5rem] font-bold text-on-surface mb-6">Have a Vision? Let's Build It.</h2>
        <p className="font-body text-lg text-on-surface-variant mb-10">Schedule a consultation to discuss the structural and botanical requirements of your next project.</p>
        <Link href="/contact-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-on-primary gradient-primary rounded-md shadow-md hover:shadow-lg transition-all scale-100 hover:scale-[1.02]">
          Start the Process
          <span className="material-symbols-outlined ml-2" style={{ fontVariationSettings: '"FILL" 0' }}>arrow_forward</span>
        </Link>
      </section>
    </>
  );
}
