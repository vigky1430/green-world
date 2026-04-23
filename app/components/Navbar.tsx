"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact-us' },
  ];

  return (
    <nav className="bg-[#fcfdf6] dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8 md:py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <img alt="Green World Landscaping Logo" className="h-9 md:h-12 w-auto object-contain" src="/logo.svg" />
          <span className="text-[20px] md:text-2xl font-semibold text-[#2e7d32] dark:text-[#66bb6a]">Green World</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name}
                href={link.path}
                className={`transition-colors duration-200 ease-in-out ${
                  isActive 
                    ? "text-[#2e7d32] dark:text-[#66bb6a] font-semibold border-b-2 border-[#2e7d32] pb-1" 
                    : "text-neutral-600 dark:text-neutral-400 font-medium hover:text-[#2e7d32] dark:hover:text-[#66bb6a]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link href="/contact-us" className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-container transition-all shadow-md inline-block">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center p-1 text-neutral-600 hover:text-[#2e7d32] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#fcfdf6] dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-lg py-4 px-8 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 transition-colors duration-200 ease-in-out ${
                  isActive 
                    ? "text-[#2e7d32] dark:text-[#66bb6a] font-bold border-l-4 border-[#2e7d32] pl-3" 
                    : "text-neutral-600 dark:text-neutral-400 font-medium hover:text-[#2e7d32] dark:hover:text-[#66bb6a] pl-4"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link 
            href="/contact-us" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="bg-primary text-on-primary text-center px-6 py-3 rounded-lg font-semibold hover:bg-primary-container transition-all shadow-md mt-2"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
