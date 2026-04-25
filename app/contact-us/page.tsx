import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Green World Landscaping",
  description: "Get in touch with Green World Landscaping for your next project.",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-mesh">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface mb-6 tracking-tight">
          Let's Grow <span className="text-primary">Something Beautiful</span>
        </h1>
        <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto">
          From residential gardens to commercial green spaces, we're here to bring your vision to life.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Inquiry Form */}
        <ContactForm />

        {/* Right Column: Manager & Info Bento */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Liaison Card */}
          <div className="bg-primary-container text-on-primary-container rounded-2xl p-8 overflow-hidden relative group">
            <div className="relative z-10 flex flex-col md:flex-row gap-6">
              {/* <img alt="Professional portrait of a friendly manager named Raja" className="w-24 h-24 rounded-full object-cover border-4 border-on-primary-container/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc8v_Fp4xJ1h2HVwG75bg17pOese199vEMBnHgtblKSsPyWZqo5eXM8vrzkcy0eEGnZKYaSd00KEJvyG1NrcZF-kHbwwlq6ibLgFn22OgRQ-hEUZs5ONZqjw-B5y26Qo7dr3qwh-UUP7eB_HKrJqfhWunhKfmyjY1lmGqPUDSFZP47MA8xAU4QhmemIizheeeqmCzdU0jFQBHbhg9v_JnEjyfujWlRYZq9WQAF4TTTATU63EXdo3Q_8sD2fvz2lbgPPBdGDmfP2sA" /> */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-on-primary-container/80 mb-1 block">Direct Liaison</span>
                <h3 className="font-headline text-2xl font-extrabold mb-1">Raja</h3>
                <p className="text-sm font-medium opacity-90 mb-4">Operations Manager</p>
                <div className="flex flex-col gap-2">
                  <a className="flex items-center gap-2 text-sm hover:underline" href="tel:+15551234567">
                    <span className="material-symbols-outlined text-lg">call</span>
                    (555) 123-4567
                  </a>
                  <a className="flex items-center gap-2 text-sm hover:underline" href="mailto:raja@greenworld.com">
                    <span className="material-symbols-outlined text-lg">mail</span>
                    raja@greenworld.com
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">nature_people</span>
            </div>
          </div>

          {/* Office Address & Map Bento */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-surface-container-high rounded-2xl p-6 md:p-8 border border-outline-variant/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-on-surface">Office Address</h4>
                  <p className="text-on-surface-variant leading-relaxed">123 Everlasting Way, Suite 400<br />Green Valley, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-on-surface">Working Hours</h4>
                  <p className="text-on-surface-variant leading-relaxed">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden h-64 relative border border-outline-variant/30">
              <div className="absolute inset-0 bg-neutral-200">
                <img alt="Stylized map view" className="w-full h-full object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsDfSpYXhOPnuiwRTsF21XuHBTRGJHd7_w5STqb6jn6ndmkxPry9VkXWrWTBOvAzuIgfqiZ5pIsJC2WT0obO3YMav_RYPN0BNY_w6eQ-8XJ9ZUynVn8SKvuOdg28EgYcyrNfVq5dmuejAH5xatLb9AnTohW9bt0YW5xtuAhtxLRQQRUIJeWibrGNXtewFINK5EmW4TwZ_CFgLyD4Ub4KEwLPj8knwI5FTbWJnop8XO5WGAGZOa-yMqt0vLmHFqdaNU6Hx4CImFfYQ" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary p-3 rounded-full shadow-lg ring-8 ring-primary/20">
                    <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: '"FILL" 1' }}>home_pin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
