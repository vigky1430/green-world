import type { Metadata } from "next";
import Link from "next/link";

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

      {/* Categories/Filters */}
      <section className="px-6 mb-16 max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap gap-4 border-b border-surface-variant pb-4">
          <button className="font-label text-xs uppercase tracking-[0.05em] px-4 py-2 font-bold text-primary border-b-2 border-primary -mb-[17px]">All Projects</button>
          <button className="font-label text-xs uppercase tracking-[0.05em] px-4 py-2 text-on-surface-variant hover:text-primary transition-colors">Residential</button>
          <button className="font-label text-xs uppercase tracking-[0.05em] px-4 py-2 text-on-surface-variant hover:text-primary transition-colors">Commercial</button>
          <button className="font-label text-xs uppercase tracking-[0.05em] px-4 py-2 text-on-surface-variant hover:text-primary transition-colors">Green Walls</button>
          <button className="font-label text-xs uppercase tracking-[0.05em] px-4 py-2 text-on-surface-variant hover:text-primary transition-colors">Maintenance</button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 mb-24 md:mb-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Project 1 (Large) */}
          <article className="col-span-1 lg:col-span-7 bg-surface-container-lowest rounded-xl toned-shadow flex flex-col group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
            <div className="aspect-video w-full p-1 relative overflow-hidden rounded-t-xl">
              <img alt="Marina Bay Penthouse terrace with minimalist stone and structural plants" className="object-cover w-full h-full rounded-lg transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsHkN3eGk33ruFuoway9UwYh_5b0LLuArohy7kbTVQBop935qvvzCHdtHCIVlZGwyz749Wlb9mwLFYPLeQs_gvdqHh72m_H6-tZOo1aexnok9C5hivR5tzmY_EN1J0hKZaTxjXKXMrj5xY5nxeIyGkb10maqneOxbSkD5ykPp5B_e8EfcdC58mor6y2M7J37BHbVXbOc9MBV2SYJcogeJMjSM7QFjXSOvri4cPBgBBlgZrz-p_YDPyr9q9sKrIYGhlP5wwKYYWh3w" />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="font-label text-xs uppercase tracking-[0.05em] text-outline mb-2">Residential • Full Scope</div>
                <h3 className="font-headline text-[1.75rem] font-bold text-on-surface mb-2">Marina Bay Penthouse</h3>
                <p className="font-body text-on-surface-variant mb-6">A high-altitude sanctuary blending sleek stone surfaces with resilient, structural flora to withstand urban elements while providing a serene retreat.</p>
              </div>
              <div className="flex items-center text-primary font-medium text-sm">
                View Case Study <span className="material-symbols-outlined ml-2 text-lg" style={{ fontVariationSettings: '"FILL" 0' }}>arrow_forward</span>
              </div>
            </div>
          </article>

          {/* Project 2 (Small) */}
          <article className="col-span-1 lg:col-span-5 bg-surface-container-lowest rounded-xl toned-shadow flex flex-col group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
            <div className="aspect-[4/3] w-full p-1 relative overflow-hidden rounded-t-xl">
              <img alt="Corporate campus courtyard with geometric water feature" className="object-cover w-full h-full rounded-lg transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPvTrNQ81wFG52LunCHnNn5G45oEWQWAxfKh9atNM5WGvMatzahpA30fVzeLAH2xKOtFyxLHjTm_nxSijI6WcJYSTI6No17-Pgzl9t71qa7sxxi39Sm5a7BuNv99nUn57gUW3oRV4W8CvSginQ76Yn0kZZRenXs8MM73zFk-5yTi_Xl8d_cuxH08hG4mmVltrxsjV1Dg8YWMScFw4PNrodZJ1oz-H_rXqWg5TneXGO_ucwJV3NxfiM798Kq8g6mbDvinDNAItsmow" />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="font-label text-xs uppercase tracking-[0.05em] text-outline mb-2">Commercial • Water Feature</div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Apex Tech Campus</h3>
                <p className="font-body text-sm text-on-surface-variant mb-4">A reflective courtyard designed to foster focus and calm amidst a bustling corporate environment.</p>
              </div>
              <div className="flex items-center text-primary font-medium text-sm">
                View Case Study <span className="material-symbols-outlined ml-2 text-lg" style={{ fontVariationSettings: '"FILL" 0' }}>arrow_forward</span>
              </div>
            </div>
          </article>

          {/* Project 3 (Small) */}
          <article className="col-span-1 lg:col-span-5 bg-surface-container-lowest rounded-xl toned-shadow flex flex-col group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
            <div className="aspect-[4/3] w-full p-1 relative overflow-hidden rounded-t-xl">
              <img alt="Massive indoor green wall in a lobby" className="object-cover w-full h-full rounded-lg transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgph6UkkcfN9rU_vYTeRtGpKohjHXqVRSVmAdp2eFlAGnrP_k5NuOIPHtLYzfDQscbZav-MJDpCBHXqql4oKmw3iaBdrv6Uv6hElE-LZ3sl7Vkx6Ch2sLHdyeqMKO1NEPYBel7jCps7c4tH8iBVPEF70fHyE-hEa_KM9aWFzaxi-XBoMzO4F25BR5zIsFUCvyQ0l1Al_ViBdiYESiFDjwOin8sHWn5OlyVhtA-Z2Bfk6P3trv4rB6dy5IBs2dEKS9E2KA-Tx7Vc8A" />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="font-label text-xs uppercase tracking-[0.05em] text-outline mb-2">Green Walls • Installation</div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">The Verdant Atrium</h3>
                <p className="font-body text-sm text-on-surface-variant mb-4">A three-story living wall that acts as the biological lungs for a premier downtown commercial tower.</p>
              </div>
              <div className="flex items-center text-primary font-medium text-sm">
                View Case Study <span className="material-symbols-outlined ml-2 text-lg" style={{ fontVariationSettings: '"FILL" 0' }}>arrow_forward</span>
              </div>
            </div>
          </article>

          {/* Project 4 (Large) */}
          <article className="col-span-1 lg:col-span-7 bg-surface-container-lowest rounded-xl toned-shadow flex flex-col group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
            <div className="aspect-video w-full p-1 relative overflow-hidden rounded-t-xl">
              <img alt="Minimalist residential backyard with concrete walls and native grasses" className="object-cover w-full h-full rounded-lg transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkW19pTePcyUS8RCygUMqqs-L_DYlfCCXskgfNuMGgpIOj73euoqLVZ0-ni7KPPtW_WhhAWukgCyQI9tl0t5l_HgYaAG--aly_KbHDHQh6DrYPHzGrK3ZQBgEmnzXZ9FH8zkqCJ9cR6mIWsrNusggyL4uubhwQ_G0E-CGsmyP-r2dzN5zjTdHZaGUsXcvoU9eGPkwKozvZsHl2DJnZkZOKqG4uYAq4ALk8b0LPKr41_j5l2dm599bq6XjdktpwTr3j0CwnQb1c300" />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="font-label text-xs uppercase tracking-[0.05em] text-outline mb-2">Residential • Desert Modern</div>
                <h3 className="font-headline text-[1.75rem] font-bold text-on-surface mb-2">Echo Canyon Retreat</h3>
                <p className="font-body text-on-surface-variant mb-6">Embracing the arid climate with a zero-water design that utilizes native structural succulents and architectural concrete forms.</p>
              </div>
              <div className="flex items-center text-primary font-medium text-sm">
                View Case Study <span className="material-symbols-outlined ml-2 text-lg" style={{ fontVariationSettings: '"FILL" 0' }}>arrow_forward</span>
              </div>
            </div>
          </article>

        </div>
      </section>

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
