'use client';

import { useState } from 'react';

const contactMethods = [
  { icon: '📍', title: 'Visit Us',        detail: '123 Green Lane, Eco City, EH1 2GW',  sub: 'Mon–Sat 8am – 6pm' },
  { icon: '📞', title: 'Call Us',         detail: '+1 (800) 473-3696',                  sub: 'Mon–Fri 8am – 5pm' },
  { icon: '✉️', title: 'Email Us',        detail: 'hello@greenworld.com',               sub: 'We reply within 24 hrs' },
  { icon: '💬', title: 'WhatsApp',        detail: '+1 (800) 473-3697',                  sub: 'Quick questions welcome' },
];

const services = [
  'Lawn Care', 'Garden Design', 'Tree Surgery', 'Irrigation Systems', 'Seasonal Planting', 'Hard Landscaping', 'Other',
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '', budget: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ─── BANNER ──────────────────────────────────── */}
      <section id="contact-banner" className="page-banner">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-tag animate-fadeInUp" style={{ justifyContent: 'center', marginBottom: '1rem' }}>Get In Touch</div>
          <h1 className="font-serif animate-fadeInUp delay-100" style={{ fontSize: 'clamp(2rem,5vw,3.75rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15 }}>
            Let&apos;s Create Your<br />
            <span className="gw-gradient-text">Dream Garden</span>
          </h1>
          <p className="animate-fadeInUp delay-200" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', marginTop: '1rem', maxWidth: '520px', margin: '1rem auto 0' }}>
            Every great landscape starts with a conversation. Reach out and we&apos;ll get back to you within one working day.
          </p>
        </div>
      </section>

      {/* ─── CONTACT METHODS ─────────────────────────── */}
      <section id="contact-methods" style={{ padding: '4rem 0', background: '#f8fcf8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.25rem' }}>
          {contactMethods.map((method, i) => (
            <div
              key={method.title}
              id={`contact-method-${method.title.toLowerCase().replace(/\s/g, '-')}`}
              className={`animate-fadeInUp delay-${(i + 1) * 100}`}
              style={{ background: '#fff', border: '1px solid #e8f5e8', borderRadius: '1.25rem', padding: '1.75rem', textAlign: 'center', transition: 'all 0.3s ease' }}
            >
              <div style={{ fontSize: '2.25rem', marginBottom: '0.875rem' }}>{method.icon}</div>
              <h3 style={{ fontWeight: 700, color: 'var(--gw-dark)', marginBottom: '0.375rem', fontSize: '1rem' }}>{method.title}</h3>
              <p style={{ fontWeight: 600, color: 'var(--gw-green-600)', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{method.detail}</p>
              <p style={{ fontSize: '0.8125rem', color: '#7a9a7a' }}>{method.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FORM + MAP ──────────────────────────────── */}
      <section id="contact-form-section" style={{ padding: '2rem 0 6rem', background: '#f8fcf8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* FORM */}
          <div style={{ background: '#fff', border: '1px solid #e8f5e8', borderRadius: '1.5rem', padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌿</div>
                <h2 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--gw-dark)', marginBottom: '0.75rem' }}>
                  Thank You, {formData.name.split(' ')[0]}!
                </h2>
                <p style={{ color: '#4a6b4a', lineHeight: 1.7 }}>
                  We&apos;ve received your enquiry and a member of our team will be in touch within one working day.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: 'var(--gw-dark)', marginBottom: '0.375rem' }}>Send Us a Message</h2>
                <p style={{ color: '#4a6b4a', fontSize: '0.9375rem', marginBottom: '2rem' }}>Fill in the form below and we&apos;ll prepare your free quote.</p>

                <form id="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--gw-dark)', marginBottom: '0.375rem' }}>Full Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={handleChange}
                        className="gw-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--gw-dark)', marginBottom: '0.375rem' }}>Phone Number</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+44 7700 900000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="gw-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--gw-dark)', marginBottom: '0.375rem' }}>Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="gw-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--gw-dark)', marginBottom: '0.375rem' }}>Service Required</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="gw-input"
                      style={{ appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--gw-dark)', marginBottom: '0.375rem' }}>Approximate Budget</label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="gw-input"
                      style={{ appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="">Select a range…</option>
                      {['Under £500', '£500 – £1,500', '£1,500 – £5,000', '£5,000 – £15,000', '£15,000+', 'Not sure yet'].map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--gw-dark)', marginBottom: '0.375rem' }}>Tell Us About Your Project *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      placeholder="Describe your outdoor space and what you'd like to achieve…"
                      value={formData.message}
                      onChange={handleChange}
                      className="gw-input gw-textarea"
                    />
                  </div>

                  <button id="contact-submit" type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                    Send Enquiry →
                  </button>
                  <p style={{ fontSize: '0.8125rem', color: '#7a9a7a', textAlign: 'center' }}>
                    By submitting you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* SIDEBAR */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Map placeholder */}
            <div style={{
              background: 'linear-gradient(135deg,#f0faf0 0%,#dcf5dc 50%,#b8ebb8 100%)',
              borderRadius: '1.5rem', aspectRatio: '4/3',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              border: '1px solid #e8f5e8',
              gap: '0.75rem',
            }}>
              <div style={{ fontSize: '3.5rem' }}>🗺️</div>
              <div style={{ fontWeight: 700, color: 'var(--gw-dark)' }}>123 Green Lane</div>
              <div style={{ fontSize: '0.875rem', color: '#4a6b4a' }}>Eco City, EH1 2GW</div>
            </div>

            {/* FAQs */}
            <div style={{ background: '#fff', border: '1px solid #e8f5e8', borderRadius: '1.5rem', padding: '2rem' }}>
              <h3 style={{ fontWeight: 700, color: 'var(--gw-dark)', marginBottom: '1.25rem', fontSize: '1.0625rem' }}>Frequently Asked Questions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { q: 'How quickly can you start?', a: 'Usually within 2–4 weeks of your quote being accepted, depending on the season.' },
                  { q: 'Are you fully insured?',     a: 'Yes — we carry £5m public liability insurance and all staff are DBS-checked.' },
                  { q: 'Do you offer payment plans?', a: 'Yes — for projects over £2,000 we offer staged payments aligned to project milestones.' },
                  { q: 'Do you work year-round?',    a: 'Absolutely. Some services like lawn care are seasonal, but our team works all year.' },
                ].map((item) => (
                  <div key={item.q} style={{ borderBottom: '1px solid #e8f5e8', paddingBottom: '1rem' }}>
                    <p style={{ fontWeight: 600, color: 'var(--gw-dark)', fontSize: '0.9rem', marginBottom: '0.375rem' }}>{item.q}</p>
                    <p style={{ color: '#4a6b4a', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
