import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore GreenWorld's full range of landscaping services — lawn care, garden design, tree surgery, irrigation, seasonal planting and hard landscaping.",
};

const services = [
  {
    id: "lawn-care",
    icon: "🌱",
    title: "Lawn Care",
    tagline: "Lush, healthy turf all year round",
    desc: "Our lawn care programmes cover everything from precision mowing and scarification to fertilisation, aeration and weed control. We tailor the schedule to your grass type, soil conditions and garden usage.",
    features: ["Regular mowing & edging", "Seasonal fertilisation", "Aeration & scarification", "Moss & weed treatment", "Overseeding & repair", "Lawn health assessments"],
    price: "From £45/visit",
  },
  {
    id: "garden-design",
    icon: "🌺",
    title: "Garden Design",
    tagline: "Bespoke designs that tell your story",
    desc: "Our award-winning designers create tailored planting plans and layout concepts that work with your natural environment, lifestyle and budget — from intimate courtyard gardens to sweeping rural landscapes.",
    features: ["Site survey & soil analysis", "3D concept renders", "Planting plans", "Materials selection", "Project management", "Post-project care guide"],
    price: "From £350/design",
  },
  {
    id: "tree-surgery",
    icon: "🌳",
    title: "Tree Surgery",
    tagline: "Expert care from certified arborists",
    desc: "Our fully qualified arborists carry out crown reduction, pruning, dead-wooding and safe tree removal. We handle TPO and conservation area applications and leave your garden clean and tidy.",
    features: ["Crown reduction & lifting", "Deadwood removal", "Full tree removal", "Stump grinding", "TPO applications", "Emergency call-out"],
    price: "From £120/tree",
  },
  {
    id: "irrigation",
    icon: "💧",
    title: "Irrigation Systems",
    tagline: "Smart water use for thriving gardens",
    desc: "We design, install and maintain drip irrigation, sprinkler and rainwater harvesting systems for gardens of all sizes. Smart controllers mean your plants get exactly what they need — nothing more.",
    features: ["Custom system design", "Drip & sprinkler installation", "Smart controller setup", "Rainwater harvesting", "Seasonal winterisation", "Annual service plans"],
    price: "From £250/system",
  },
  {
    id: "seasonal-planting",
    icon: "🍂",
    title: "Seasonal Planting",
    tagline: "Year-round colour and interest",
    desc: "We keep your borders bursting with colour across every season with carefully chosen bulbs, bedding, perennials and structural plants suited to your local climate and soil.",
    features: ["Spring & summer bedding", "Autumn & winter interest", "Bulb planting programmes", "Container displays", "Wildlife-friendly planting", "Cut flower gardens"],
    price: "From £85/season",
  },
  {
    id: "hard-landscaping",
    icon: "🧱",
    title: "Hard Landscaping",
    tagline: "Built to last, designed to impress",
    desc: "Patios, paths, retaining walls, raised beds, pergolas and garden buildings — our skilled craftspeople work with natural stone, porcelain, timber and brick to create outdoor spaces you'll love for decades.",
    features: ["Natural stone & porcelain patios", "Driveways & paths", "Raised beds & retaining walls", "Pergolas & garden rooms", "Fencing & gates", "Outdoor lighting"],
    price: "From £1,200/project",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── BANNER ──────────────────────────────────── */}
      <section id="services-banner" className="page-banner">
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="section-tag animate-fadeInUp" style={{ justifyContent: "center", marginBottom: "1rem" }}>What We Offer</div>
          <h1 className="font-serif animate-fadeInUp delay-100" style={{ fontSize: "clamp(2rem,5vw,3.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15 }}>
            Landscaping Services<br />
            <span className="gw-gradient-text">For Every Space</span>
          </h1>
          <p className="animate-fadeInUp delay-200" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.0625rem", marginTop: "1rem", maxWidth: "560px", margin: "1rem auto 0" }}>
            From a single lawn treatment to a complete garden transformation — we have the expertise.
          </p>
        </div>
      </section>

      {/* ─── SERVICES GRID ───────────────────────────── */}
      <section id="all-services" style={{ padding: "6rem 0", background: "#f8fcf8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={`service-${svc.id}`}
              className={`animate-fadeInUp delay-${(i % 3 + 1) * 100}`}
              style={{
                background: "#fff", border: "1px solid #e8f5e8", borderRadius: "1.5rem", padding: "2.5rem",
                display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.5rem", alignItems: "start" }}>
                {/* Icon */}
                <div style={{
                  width: "72px", height: "72px", borderRadius: "1.125rem",
                  background: "var(--gw-green-50)", border: "1px solid #dcf5dc",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", flexShrink: 0,
                }}>
                  {svc.icon}
                </div>

                <div>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--gw-green-600)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{svc.tagline}</span>
                  <h2 className="font-serif" style={{ fontSize: "1.625rem", fontWeight: 700, color: "var(--gw-dark)", margin: "0.25rem 0 0.75rem", lineHeight: 1.2 }}>{svc.title}</h2>
                  <p style={{ color: "#4a6b4a", lineHeight: 1.75, fontSize: "0.9375rem", marginBottom: "1.25rem", maxWidth: "640px" }}>{svc.desc}</p>

                  {/* Features */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {svc.features.map((f) => (
                      <span key={f} style={{
                        background: "#f0faf0", border: "1px solid #dcf5dc",
                        color: "var(--gw-green-700)", fontSize: "0.8125rem", fontWeight: 500,
                        padding: "0.3rem 0.75rem", borderRadius: "9999px",
                      }}>
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: "1.375rem", fontWeight: 800, color: "var(--gw-green-600)", marginBottom: "0.25rem" }}>{svc.price}</div>
                <div style={{ fontSize: "0.8125rem", color: "#7a9a7a", marginBottom: "1rem" }}>No hidden costs</div>
                <Link href="/contact-us" id={`cta-${svc.id}`} className="btn-primary" style={{ whiteSpace: "nowrap" }}>
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────── */}
      <section id="our-process" style={{ padding: "6rem 0", background: "var(--gw-dark)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ justifyContent: "center", marginBottom: "1rem" }}>How It Works</div>
            <h2 className="font-serif" style={{ fontSize: "clamp(1.875rem,4vw,2.75rem)", fontWeight: 700, color: "#fff" }}>Our Simple 4-Step Process</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem" }}>
            {[
              { num: "01", title: "Free Consultation", desc: "We visit your property to discuss your vision, assess the space and understand your budget." },
              { num: "02", title: "Detailed Proposal",  desc: "You receive a full written quote with drawings, materials breakdown and timeline." },
              { num: "03", title: "Skilled Execution",  desc: "Our certified team gets to work — on time, on budget and with minimal disruption." },
              { num: "04", title: "Ongoing Aftercare",  desc: "Seasonal check-ins and maintenance plans to keep your garden looking its best." },
            ].map((step, i) => (
              <div key={step.num} className={`animate-fadeInUp delay-${(i + 1) * 100}`} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1.25rem", padding: "2rem" }}>
                <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--gw-green-500)", opacity: 0.5, marginBottom: "0.75rem", lineHeight: 1 }}>{step.num}</div>
                <h3 style={{ fontWeight: 700, color: "#fff", marginBottom: "0.625rem", fontSize: "1.0625rem" }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────── */}
      <section id="services-cta" style={{ padding: "5rem 0", background: "linear-gradient(135deg,#1f831f,#155015)", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 className="font-serif" style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.0625rem", marginBottom: "2rem" }}>
            Call us for a free 15-minute phone consultation and we&apos;ll point you in the right direction.
          </p>
          <Link href="/contact-us" id="services-contact-btn" className="btn-outline">Book a Call →</Link>
        </div>
      </section>
    </>
  );
}
