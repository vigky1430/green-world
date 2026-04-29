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
                  <p className="text-on-surface-variant leading-relaxed">32 Marsiling Dr,<br />Singapore 730032</p>
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

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden h-64 border border-outline-variant/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5523747105854!2d103.7727924!3d1.4433779999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da12fdd5f7c5a3%3A0x3939cda18ca38cde!2s32%20Marsiling%20Dr%2C%20Singapore%20730032!5e0!3m2!1sen!2sin!4v1777483746767!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Green World Landscaping Office Location"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
