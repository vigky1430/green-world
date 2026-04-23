import Link from 'next/link';

const footerLinks = {
  'Quick Links': [
    { label: 'Home',          href: '/'             },
    { label: 'About Us',      href: '/about-us'     },
    { label: 'Services',      href: '/services'     },
    { label: 'Projects',      href: '/projects'     },
    { label: 'Testimonials',  href: '/testimonials' },
    { label: 'Contact Us',    href: '/contact-us'   },
  ],
  'Services': [
    { label: 'Lawn Care',          href: '/services' },
    { label: 'Garden Design',      href: '/services' },
    { label: 'Tree Surgery',       href: '/services' },
    { label: 'Irrigation Systems', href: '/services' },
    { label: 'Seasonal Planting',  href: '/services' },
  ],
  'Contact': [
    { label: '📍 123 Green Lane, Eco City',  href: '#' },
    { label: '📞 +1 (800) 473-3696',         href: 'tel:+18004733696' },
    { label: '✉️ hello@greenworld.com',       href: 'mailto:hello@greenworld.com' },
    { label: '🕒 Mon–Sat 8am – 6pm',         href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--gw-dark)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-sans)' }}>
      {/* Main footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        {/* Brand column */}
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg,#2da32d,#196519)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>🌿</div>
            <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: '1.375rem', fontWeight: 700, color: '#fff' }}>
              Green<span style={{ color: '#86d886' }}>World</span>
            </span>
          </Link>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Transforming outdoor spaces into breathtaking landscapes since 2005. Rooted in nature, driven by passion.
          </p>
          {/* Socials */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { icon: '𝕏', label: 'Twitter',   href: '#', id: 'footer-twitter'   },
              { icon: 'in', label: 'LinkedIn',  href: '#', id: 'footer-linkedin'  },
              { icon: 'f',  label: 'Facebook',  href: '#', id: 'footer-facebook'  },
              { icon: '📷', label: 'Instagram', href: '#', id: 'footer-instagram' },
            ].map((s) => (
              <a
                key={s.id}
                id={s.id}
                href={s.href}
                aria-label={s.label}
                style={{
                  width: '38px', height: '38px',
                  borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '0.85rem', fontWeight: 700,
                  textDecoration: 'none', transition: 'all 0.25s ease',
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1rem', marginBottom: '1rem', letterSpacing: '0.02em' }}>{title}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.2s ease' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', maxWidth: '1280px', margin: '0 auto', padding: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)' }}>
          © {new Date().getFullYear()} GreenWorld Landscaping. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
            <a key={item} href="#" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s ease' }}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
