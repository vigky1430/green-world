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
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/services">Residential Design</Link></li>
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/services">Commercial Care</Link></li>
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/services">Smart Irrigation</Link></li>
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/services">Tree Surgery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/about-us">Careers</Link></li>
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/about-us">Sustainability</Link></li>
            <li><Link className="text-neutral-500 dark:text-neutral-400 hover:underline decoration-[#66bb6a] transition-all opacity-80 hover:opacity-100" href="/testimonials">Testimonials</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-primary mb-6">Our Location</h4>
          <div className="rounded-xl overflow-hidden h-32 border border-outline-variant">
            <img className="w-full h-full object-cover" data-alt="map view showing local city streets and park areas" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO6b6gWsb5ryl9o-egBLmFRkUtuY3AI0ZTKJ0xPRc5mn0zKNue5aoSAx3T_9du6ogI4r18WjE2EYqiMaU_xwggqcqe9BsgR1IoAm4vXilv6u3JWJcYy_SZhpd02PF0XNfW78zYO9pedX8wcXV8IiYnwnShoosQYlKCKB34IdJ_3M-cxUCSZDLvwrQH7BZTAaJcYXMYey_A8Wxqonl4_QMYOr19amq5BvKYQ_uXKpqbe6tBIA3K-Uqx9kIz9JJfr4cgCNiHi3qx_gg" />
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">123 Green Way, Eco City, OR 97201</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-neutral-200 dark:border-neutral-800 text-center md:text-left">
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">© 2024 Green World Landscaping. All rights reserved.</p>
      </div>
    </footer>
  );
}
