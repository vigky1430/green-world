import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#fcfdf6] dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-xl font-black text-[#2e7d32] dark:text-[#66bb6a] font-headline">
            <img alt="Green World Landscaping Logo" className="h-12 w-auto object-contain" src="/logo.svg" />
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 font-body">Premium landscaping services dedicated to sustainable beauty and architectural excellence.</p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer">
              <span className="material-symbols-outlined">public</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer">
              <span className="material-symbols-outlined">phone_in_talk</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6">Services</h4>
          <ul className="space-y-4">
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/services">Landscape maintenance</Link></li>
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/services">Landscape Design & Build</Link></li>
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/services">Irrigation Systems</Link></li>
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/services">Construction Works</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/contact-us">contact</Link></li>
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/about-us">Sustainability</Link></li>
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/testimonials">Testimonials</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-primary mb-6">Our Location</h4>
          <div className="rounded-xl overflow-hidden h-32 border border-outline-variant">
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
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">32 Marsiling Dr, Singapore 730032</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-neutral-200 dark:border-neutral-800 text-center md:text-left">
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">© 2024 Green World Landscaping. All rights reserved.</p>
      </div>
    </footer>
  );
}
