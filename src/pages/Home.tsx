import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/* ─── image URLs ─────────────────────────────────────────────── */
const IMG = {
  heroBg:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC_hHhMWT91fxOMG1u1ZODUxV8BdmnJdbxiChYpYgdsR_ABRzX6RWzgwPNzoy4NcANv-a7Eqpl4yWrtQU3GDCEhxqUP5GN1zPZfQt8yQnrpBqPSLPgZuJ28qiL428pEALpXjSKumsuCToZ7cRS1_VnW549_vwBkvFmIUIAEu_NmMCXyBMrfnFILjEZIl2MCusXxhooWV_XvNdU-4nXr4ulzWrgRoSlwsqUmiVOeqZoxsmg_d-PMy3tACBkDd_8Ip_Zw2zewF7aHNpk',
  heroFern:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDfxvlzEayXpiuoGCI76WRqfesF0pGL-VOxfHPc4mx-5h4SVlwav0rrP8ZKN3zAwzG3vM-3JYwzo8_fcU7Gc4xttJOQjrSQOhhlT9TmekJy1WOkOQ8lSqsDmRfnnHel9F7QsLePWHm5nWPQxBStwbzL60yO5WMUfLBJnWGnP1DFOahzuOg0xdwUbsHrgxK4xbeNTnYmUeT3mFgUHQqYUZs7NCX5jUBuYCUizdiOXn2xQ1oTbSjaa-9UzKQ0iGQDJGc5RKkYP9UBu_U',
  heroPatio:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBoH2E8epzQy7h3hIcPGtowudTwWk5MMCrkhj0rYb1xXSswBMzgXD-cMPzL7IxSXgTzJt9hdo751Bb0HrFajRH5JrAHZfJluOaW5jhQCmuk5tiNSVf1a6gje7V20wcC2fCiDHyq9zxG2U94JFFiLy2kRax9IdiLmuFpn65xN8jU2jGjmQHZSR-s2Ems8ddUk6DFliJQLqOC8dsNjHlYVudBPU_gow5-ilaXxPc9VQyp-FY6oUSSPH5kVQg7PJbu3wqhsLEVI6ydBzk',
  bentoArchitecture:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDGYm1dh5zGH516JZjGxeGtcCO_yQG0j08u8L7izpFSelfhtbpvSiSNxfbnsULSXYMyEUpPqFuE9NrInemVMtryfP8BI4S-GSKs1lD8OnG8qU_0TOh--5t_37SOK9ZBjzEGAynstYf7HBsXhDcb9nnrF9xGybA5u69popVL1PemLms39vfwQBK7MT-RJcjBQhzyqS_GSc8ZNxfagI-P3z0fE9uSsEzqX_sWC0IzDzKtTEV7kTLiGMoFe-uT_3Liny1jJ1fpVBij8fM',
  bentoCare:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDr7dncE5tnRxv_pi0qnnfB0e8iiNNy3Jj163ZE0Yd1UfwF9UU6nmZrKkfOIyXnWjtGKV9hSm6qt6tQSSxtsb1FTHnR55z4702OfTFmFy6yhU5ac2JNdM-jgWixiOzZ0mCtGbKLq9t2hPqcX5nrTdd2qCvJkJz5_8yOX93Jb_TgQJXrvJ3NinMJinTXHFOMaSJuab_5d4CvZAMtmuRz6QX9jDn9tTX7Ua8sbUNFvHkyoReaBWeugtN1pFdibVq3cIbU149Qqluec_Q',
  bentoIrrigation:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDOdu5IlmQLrCPdZZ0hLDIZ9wisvMLmBXsTmHHmKCG5u_vitDZ5zL2D2Wxv3gg3bF3IL0SzAaNJm6OPFyL62thYWU2pKZsVQJSmdM6JPv_BLjoDqHv0GBE1jo3sTLdZN-BvcRdjAeKbA_FD48acn8f0Ue1mtwDQbVqk7D-0eq2KFwNoKTLypU-2Cb-WQ3F4QBPibyMigEZYsyWhWQj914jKsaEhAL-ysOmAankupRNfzsYqyT3nrQDd2X8R2_yyZU7DrT-zOiiLfdQ',
  bentoHardscape:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC39ZNE7zbpuu_uAQvxBACaf15O363tefCXVm6eKnUyrFF-_MOQ8rN5-fpOeYTywtNdwYIWz7ftWyhloWI4NLBfrA6ptXgkBtRAD1JvjZRW6WEY3zn6W0tiSL0cWs_L_jwyo60xJP5Zvyvdu04poVEQsBAvb-tgGr617KdhrmY6_JIGTYEmPCrbQti6Gdgq3vGXM7ihKpUUj8QFNzceIN_YSJK2F8enDos1c1UL_pMEXQ8DjEDTliQEaYmdvbe3cat3WcR_OiOiqFI',
  whyTeam:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDteqB5jUi1_-jUEC4_C6KKf7BorZtUh6BA173ZyFMQmYVRnC7vNQ1G7xgq09oYkvjI2jeiGRIdxnICcFIqwS-sKqbkd_vmek_56vXhVx8_n7ruJNeXQeknpWWXPVHqqbeUqEFqE8myvhRbEv1pl9QBCEfBDVkgESaMJVeTYE1BQe3vE5XAqrTlXiQ-T_bKWdO7HhOF36zGMC6V2dttWr_Z4HWIBs3_OA8zA1Jy-dPEcQWVvXbpTcBI2Q18VK7gLcMPBbTexB8Zjf8',
  ctaBg:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBDj7nzt6UNksWCbPLD8eKUUMi2qUEG4C2UVb0kg6rgeTepff4c8m99fnD4Ymuw23T1zeBrtdc5PhgWHJuSdOfc1AWtCu3JKSpJpJ8MmYoo3iiJpHfeXD0_XwhtfLKIEK54wZjDHzcI4FYp5gV1A-KIFDHhDMnB3qsT6OT8ZK7r9u_I3QPb2td2IgxJurBcsw3j-plkrW0uP6VfgAKj8Ekoe6GAJxv8tl0XWYlZ6zTf9ga-jk5dwlcyAn8c_N0PfJSJYQiZcVBSjqc',
};

/* ─── Bento grid data ────────────────────────────────────────── */
const services = [
  {
    id: 'landscape-architecture',
    title: 'Landscape Architecture',
    desc: 'Custom design plans that blend aesthetics with functionality for your unique space.',
    img: IMG.bentoArchitecture,
    alt: 'Large scale landscape architectural project with stone paths and diverse ornamental plants',
    wide: true,
  },
  {
    id: 'seasonal-care',
    title: 'Seasonal Care',
    desc: 'Year-round maintenance to keep your greenery thriving and pristine.',
    img: IMG.bentoCare,
    alt: 'Professional gardener trimming hedges with precision tools in a formal garden',
    wide: false,
  },
  {
    id: 'smart-irrigation',
    title: 'Smart Irrigation',
    desc: 'Water-efficient systems designed for sustainability.',
    img: IMG.bentoIrrigation,
    alt: 'Automated irrigation system spraying water over a lush green golf course at sunset',
    wide: false,
  },
  {
    id: 'hardscape-design',
    title: 'Hardscape Design',
    desc: 'Beautiful stone work, patios, and retaining walls that last a lifetime.',
    img: IMG.bentoHardscape,
    alt: 'Modern outdoor living area with a stone fire pit and built-in wooden seating surrounded by plants',
    wide: true,
  },
];

/* ─── Why Choose Us features ─────────────────────────────────── */
const features = [
  {
    icon: 'eco',
    title: 'Eco-Conscious Approach',
    desc: 'We prioritize native species and sustainable materials in every design.',
  },
  {
    icon: 'verified',
    title: 'Certified Expertise',
    desc: 'Our team consists of licensed horticulturists and master landscapers.',
  },
  {
    icon: 'psychology_alt',
    title: 'Vision-First Design',
    desc: 'We translate your personal style into a living, breathing landscape.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   HOME COMPONENT
═══════════════════════════════════════════════════════════════ */
const Home: React.FC = () => {
  return (
    <main className="animate-fade-in">

      {/* ── Hero Section ──────────────────────────────────────── */}
      <section className="hero-section" aria-label="Hero">
        {/* Background image + gradient overlay */}
        <div className="hero-bg">
          <img
            className="hero-bg-img"
            src={IMG.heroBg}
            alt="Lush sprawling garden with manicured lawn and soft morning sunlight"
          />
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-inner">
          {/* Left: Copy */}
          <div className="hero-content">
            <span className="hero-badge">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: '0.875rem' }}
              >
                eco
              </span>
              Premium Landscaping Services
            </span>

            <h1 className="hero-title">We Make Greenery For Your Vision</h1>

            <p className="hero-subtitle">
              Transforming ordinary outdoor spaces into breathtaking sustainable sanctuaries. Expert
              design, meticulous maintenance, and organic care for your environment.
            </p>

            <div className="hero-actions">
              <Link to="/contact">
                <button id="hero-get-quote" className="btn btn-primary">
                  Get Free Quote
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
              <Link to="/contact">
                <button id="hero-contact" className="btn btn-secondary">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Image mosaic */}
          <div className="hero-image-grid" aria-hidden="true">
            {/* Column 1 */}
            <div className="hero-col-top">
              <div className="hero-img-tall">
                <img src={IMG.heroFern} alt="Close up of vibrant green fern leaves with dew drops" />
              </div>
              <div className="hero-stat-card hero-stat-card--tertiary">
                <div>
                  <div className="hero-stat-number">15+</div>
                  <div className="hero-stat-label">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="hero-col-bottom">
              <div className="hero-stat-card hero-stat-card--secondary">
                <div>
                  <div className="hero-stat-number">500+</div>
                  <div className="hero-stat-label">Projects Completed</div>
                </div>
              </div>
              <div className="hero-img-wide">
                <img
                  src={IMG.heroPatio}
                  alt="Modern backyard patio design with limestone pavers and lush surrounding garden beds"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Bento Grid ───────────────────────────────── */}
      <section className="services-section" aria-label="Services">
        <div className="section-header">
          <h2 className="section-title">Crafting Natural Masterpieces</h2>
          <p className="section-subtitle">
            From residential retreats to commercial landscapes, we provide end-to-end solutions that
            harmonize with nature.
          </p>
        </div>

        <div className="bento-grid">
          {services.map((svc) => (
            <Link
              key={svc.id}
              to="/services"
              className={`bento-card${svc.wide ? ' bento-card--wide' : ''}`}
            >
              <img className="bento-card-img" src={svc.img} alt={svc.alt} />
              <div className="bento-card-overlay" />
              <div className="bento-card-body">
                <h3 className="bento-card-title">{svc.title}</h3>
                <p className="bento-card-desc">{svc.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section className="why-us-section" aria-label="Why Choose Us">
        <div className="why-us-inner">
          {/* Image + quote */}
          <div className="why-us-image-wrap">
            <div className="why-us-img">
              <img
                src={IMG.whyTeam}
                alt="Team of landscaping professionals discussing a site plan in a sunny garden"
              />
            </div>
            <blockquote className="why-us-quote">
              <p>"We don't just plant trees, we grow ecosystems that inspire the soul."</p>
              <strong>— Marcus Green, Lead Designer</strong>
            </blockquote>
          </div>

          {/* Features */}
          <div className="why-us-content">
            <div className="why-us-heading">
              <h2 className="section-title">Rooted in Excellence</h2>
              <p>
                Since 2009, we've been the trusted partner for premium landscaping solutions that
                respect the environment.
              </p>
            </div>

            <ul className="feature-list" role="list">
              {features.map((feat) => (
                <li key={feat.icon} className="feature-item">
                  <div className="feature-icon" aria-hidden="true">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {feat.icon}
                    </span>
                  </div>
                  <div className="feature-text">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="cta-section" aria-label="Call to action">
        <div className="cta-inner">
          <div className="cta-bg" aria-hidden="true">
            <img src={IMG.ctaBg} alt="" />
          </div>
          <div className="cta-body">
            <div className="cta-text">
              <h2>Ready to transform your space?</h2>
              <p>
                Join hundreds of homeowners who have elevated their living environment with our
                expert care.
              </p>
            </div>
            <Link to="/contact">
              <button id="cta-book-consultation" className="btn btn-cta">
                Book Your Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
