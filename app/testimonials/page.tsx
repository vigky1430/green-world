import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials | Green World Landscaping",
  description: "Hear from the homeowners and businesses we've helped transform into green paradises.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="lush landscaped residential garden with stone paths, vibrant manicured green grass, and ornamental shrubs in soft afternoon sunlight" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQf7novEdpfqoKx2NEKLby040HSIvRqU1on51eagqGTw8msfgD9Fhsf5wCQJHnFuV-2rOtudryscruR24bpUWPOtctRqw21G47vsco11JZNDO4M0x-z1mAKtbaCH0GxOmDK5Cmy_7KkilwohhYoAYDXHx6xAhPwMsOHlxwbabJ-u_uoqRKzfZikW-NqArJZJlP3I3eHfZR_iu4QkgXnSkN6y8-c7CAb73PYjKMxbJniL4jRrJ3-D4ac-cXtzajzk61QhgW6zALp_Y" />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">What Our Clients Say</h1>
          <p className="text-xl text-on-primary-container max-w-2xl mx-auto font-medium">Hear from the homeowners and businesses we've helped transform into green paradises.</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Testimonial 1 */}
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex text-primary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant italic text-lg leading-relaxed mb-6 font-medium">"Excellent landscaping work. Professional and on time!"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">SM</div>
              <div>
                <p className="font-headline font-bold text-on-surface">Sarah Mitchell</p>
                <p className="text-sm text-outline">Residential Client</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex text-primary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant italic text-lg leading-relaxed mb-6 font-medium">"Very reliable team and great service quality. My backyard looks like a resort now."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant font-bold">JD</div>
              <div>
                <p className="font-headline font-bold text-on-surface">James Donovan</p>
                <p className="text-sm text-outline">Estate Owner</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex text-primary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant italic text-lg leading-relaxed mb-6 font-medium">"Their attention to detail with the stone patio was incredible. Truly craftsmen at work."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant font-bold">RK</div>
              <div>
                <p className="font-headline font-bold text-on-surface">Robert King</p>
                <p className="text-sm text-outline">Homeowner</p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex text-primary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant italic text-lg leading-relaxed mb-6 font-medium">"Managing our commercial property was a breeze once Green World took over the maintenance."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant font-bold">AL</div>
              <div>
                <p className="font-headline font-bold text-on-surface">Amanda Lee</p>
                <p className="text-sm text-outline">Property Manager</p>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex text-primary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant italic text-lg leading-relaxed mb-6 font-medium">"The sustainable irrigation system they installed has saved us so much water and our lawn is greener than ever."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-fixed-dim flex items-center justify-center text-on-primary-fixed-variant font-bold">GT</div>
              <div>
                <p className="font-headline font-bold text-on-surface">Greg Thompson</p>
                <p className="text-sm text-outline">Eco-conscious Client</p>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex text-primary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant italic text-lg leading-relaxed mb-6 font-medium">"Fair pricing and honest communication. They treated my garden as if it were their own."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed-variant font-bold">HB</div>
              <div>
                <p className="font-headline font-bold text-on-surface">Helen Brooks</p>
                <p className="text-sm text-outline">Retiree</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-primary text-white py-20 px-6 mt-12 overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img alt="abstract garden texture with leaves and sunlight patterns" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Hq5kO_AluohuloW26TbQI6LNZF_Dyg1KdlUbQhtVpSOUWkraHt5q97I46JgNDW7TKCWXpey5V65eTNLdwLOZ4XCoKY_d2KKylZSEUOvVcLvTtw7LlQ5WKHbNqvfLumfDyOlHeh-rTs1eeGR5EhofPffqfJ4-B084pnIEgC6shr_QbEE4LR9jOu0D2LLL2jE7xKOD4roUIngG_Egp5l-cXDBWgaNrH1Th3X0H6cXdOhRkEnzuuGR-QHkTkGrG2A01Ho4Ar80ij_Q" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Enjoyed our service?</h2>
          <p className="text-lg text-primary-fixed-dim mb-10 max-w-xl mx-auto">Your feedback helps us grow and continue providing the best landscaping services in the region. Leave your review today!</p>
          <Link href="/contact-us" className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
            Leave a Review
            <span className="material-symbols-outlined">rate_review</span>
          </Link>
        </div>
      </section> */}
    </>
  );
}
