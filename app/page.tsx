import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "GreenWorld Landscaping – premium lawn care, garden design, and outdoor transformations. Get your free quote today.",
};

const services = [
  { icon: "🌱", title: "Lawn Care",          desc: "Expert mowing, fertilising, aerating and weed control to keep your lawn lush and healthy year-round." },
  { icon: "🌺", title: "Garden Design",      desc: "Bespoke planting plans and hard-landscaping layouts crafted by award-winning designers." },
  { icon: "🌳", title: "Tree Surgery",       desc: "Safe, professional pruning, crown reduction and removal by fully-certified arborists." },
  { icon: "💧", title: "Irrigation Systems", desc: "Smart, water-efficient drip and sprinkler systems installed and maintained for your garden." },
  { icon: "🍂", title: "Seasonal Planting",  desc: "Year-round colour with seasonal bulbs, bedding and border plants chosen for your soil and aspect." },
  { icon: "🧱", title: "Hard Landscaping",   desc: "Patios, paths, raised beds, pergolas and fencing built to last from premium materials." },
];

const stats = [
  { value: "18+",   label: "Years Experience" },
  { value: "3,500+", label: "Projects Completed" },
  { value: "97%",   label: "Client Satisfaction" },
  { value: "85+",   label: "Expert Team Members" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg,#0d1a0d 0%,#142014 40%,#1c2e1c 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "76px",
        }}
      >
        {/* Decorative rings */}
        {[400, 700, 1000].map((size, i) => (
          <div
            key={i}
            className="hero-ring"
            style={{
              width: size, height: size,
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              opacity: 0.4 - i * 0.1,
            }}
          />
        ))}

        {/* Glowing orb */}
        <div style={{
          position: "absolute", top: "20%", right: "10%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,163,45,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ maxWidth: "680px" }}>
            <div className="section-tag animate-fadeInUp" style={{ marginBottom: "1.5rem" }}>
              <span>🌿</span> Award-winning Landscaping
            </div>

            <h1
              className="font-serif animate-fadeInUp delay-100"
              style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: "1.5rem" }}
            >
              We Shape Nature<br />
              <span className="gw-gradient-text">Into Beauty</span>
            </h1>

            <p className="animate-fadeInUp delay-200" style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "rgba(255,255,255,0.72)", marginBottom: "2.5rem", maxWidth: "540px" }}>
              From lush lawns to stunning garden designs — our expert team turns your outdoor vision into a living masterpiece. Trusted by over 3,500 happy clients.
            </p>

            <div className="animate-fadeInUp delay-300" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <Link href="/contact-us" id="hero-cta-primary" className="btn-primary">
                Get a Free Quote →
              </Link>
              <Link href="/projects" id="hero-cta-secondary" className="btn-outline">
                View Our Work
              </Link>
            </div>

            {/* Trust badges */}
            <div className="animate-fadeInUp delay-400" style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center" }}>
              {["✅ Fully Insured", "🏆 Award Winning", "♻️ Eco Friendly"].map((badge) => (
                <span key={badge} style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", fontWeight: 500 }}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────── */}
      <section id="stats" style={{ background: "var(--gw-dark)", padding: "4rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1.5rem" }}>
          {stats.map((s, i) => (
            <div key={s.label} className={`stat-card animate-fadeInUp delay-${(i + 1) * 100}`}>
              <div className="font-serif" style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#86d886", marginBottom: "0.5rem" }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────── */}
      <section id="services-preview" style={{ padding: "6rem 0", background: "#f8fcf8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag animate-fadeInUp" style={{ marginBottom: "1rem", justifyContent: "center" }}>What We Offer</div>
            <h2 className="font-serif animate-fadeInUp delay-100" style={{ fontSize: "clamp(1.875rem,4vw,3rem)", fontWeight: 700, color: "var(--gw-dark)", marginBottom: "1rem" }}>
              Our Core Services
            </h2>
            <p className="animate-fadeInUp delay-200" style={{ color: "#4a6b4a", maxWidth: "560px", margin: "0 auto", fontSize: "1.0625rem", lineHeight: 1.7 }}>
              Comprehensive landscape solutions tailored to every outdoor space — from intimate gardens to grand estates.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
            {services.map((svc, i) => (
              <div key={svc.title} className={`service-card animate-fadeInUp delay-${(i % 3 + 1) * 100}`} style={{ position: "relative", zIndex: 0 }}>
                <div className="service-icon">{svc.icon}</div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--gw-dark)", marginBottom: "0.625rem", position: "relative", zIndex: 1 }}>{svc.title}</h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "#4a6b4a", position: "relative", zIndex: 1 }}>{svc.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/services" id="services-all-btn" className="btn-primary">
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY US ────────────────────────────────────── */}
      <section id="why-us" style={{ padding: "6rem 0", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "4rem", alignItems: "center" }}>
          {/* Text */}
          <div>
            <div className="section-tag animate-fadeInLeft" style={{ marginBottom: "1rem" }}>Why Choose Us</div>
            <h2 className="font-serif animate-fadeInLeft delay-100" style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 700, color: "var(--gw-dark)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              Passionate About Every Blade of Grass
            </h2>
            <p className="animate-fadeInLeft delay-200" style={{ color: "#4a6b4a", lineHeight: 1.75, marginBottom: "2rem" }}>
              We combine horticultural expertise with genuine passion. Every project gets the same care and attention, whether it&apos;s a window box or a 10-acre estate.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Certified arborists and horticulturalists on every project",
                "Sustainable, eco-friendly practices and materials",
                "Transparent pricing — no hidden costs, ever",
                "5-year workmanship guarantee on hard landscaping",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.9375rem", color: "#2a452a" }}>
                  <span style={{ color: "var(--gw-green-500)", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about-us" id="about-cta" className="btn-primary">Learn About Us →</Link>
          </div>

          {/* Visual */}
          <div className="animate-fadeInRight delay-200" style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "1", borderRadius: "2rem",
              background: "linear-gradient(135deg,#dcf5dc 0%,#b8ebb8 50%,#86d886 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "8rem",
              boxShadow: "0 30px 80px rgba(45,163,45,0.2)",
            }} className="animate-float">
              🌳
            </div>
            {/* Badge */}
            <div style={{
              position: "absolute", bottom: "-1.5rem", left: "50%", transform: "translateX(-50%)",
              background: "#fff", border: "1px solid #e8f5e8", borderRadius: "1rem",
              padding: "1rem 1.75rem", boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              textAlign: "center", whiteSpace: "nowrap",
            }}>
              <div className="font-serif" style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--gw-green-600)" }}>18+</div>
              <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#4a6b4a", letterSpacing: "0.05em" }}>YEARS OF EXCELLENCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────── */}
      <section id="cta-banner" style={{ padding: "5rem 0", background: "linear-gradient(135deg,#1f831f 0%,#155015 100%)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2 className="font-serif" style={{ fontSize: "clamp(1.875rem,4vw,3rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            Ready to Transform Your Outdoor Space?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.0625rem", marginBottom: "2.5rem", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Get a free, no-obligation consultation and quote from our expert team today.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact-us" id="banner-cta" className="btn-outline">
              Book a Free Consultation →
            </Link>
            <Link href="/projects" id="banner-projects" style={{ ...{}, color: "rgba(255,255,255,0.75)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500, fontSize: "1rem", padding: "0.875rem 1rem" }}>
              See our projects ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
