'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home',          href: '/'             },
  { label: 'About Us',      href: '/about-us'     },
  { label: 'Services',      href: '/services'     },
  { label: 'Projects',      href: '/projects'     },
  { label: 'Testimonials',  href: '/testimonials' },
  { label: 'Contact Us',    href: '/contact-us'   },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>

          {/* Logo */}
          <Link href="/" id="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: 'linear-gradient(135deg,#2da32d,#196519)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.25rem',
            }}>🌿</div>
            <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: '1.375rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
              Green<span style={{ color: '#86d886' }}>World</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0 }} className="nav-desktop">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                    style={{
                      display: 'block',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      color: active ? '#86d886' : 'rgba(255,255,255,0.8)',
                      fontWeight: active ? 600 : 500,
                      fontSize: '0.9375rem',
                      textDecoration: 'none',
                      background: active ? 'rgba(134,216,134,0.12)' : 'transparent',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA button (desktop) */}
          <Link href="/contact-us" id="nav-cta" className="btn-primary nav-cta-desktop" style={{ padding: '0.625rem 1.5rem', fontSize: '0.9375rem' }}>
            Get a Quote
          </Link>

          {/* Hamburger (mobile) */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column', gap: '5px',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '4px',
            }}
            className="mobile-hamburger"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '2px', transition: 'all 0.3s ease' }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-menu" style={{
            background: 'rgba(13,26,13,0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '1rem 0 1.5rem',
          }}>
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  style={{
                    display: 'block', padding: '0.75rem 1rem',
                    color: active ? '#86d886' : 'rgba(255,255,255,0.85)',
                    fontWeight: active ? 600 : 500,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    borderLeft: active ? '3px solid #86d886' : '3px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div style={{ padding: '0.75rem 1rem 0' }}>
              <Link href="/contact-us" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
