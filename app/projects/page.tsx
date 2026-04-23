import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse GreenWorld's portfolio of completed landscaping projects — garden transformations, patios, planting schemes and more.",
};

const projects = [
  {
    id:       "highland-estate",
    title:    "Highland Estate Gardens",
    category: "Garden Design",
    location: "Highlands, Scotland",
    area:     "12 acres",
    duration: "8 months",
    emoji:    "🏡",
    gradient: "linear-gradient(135deg,#2da32d,#86d886)",
    desc:     "Complete landscape redesign for a 12-acre Highland estate including formal parterre garden, wildflower meadow and ornamental lake.",
  },
  {
    id:       "urban-terrace",
    title:    "Modern Urban Terrace",
    category: "Hard Landscaping",
    location: "Edinburgh, Scotland",
    area:     "120 m²",
    duration: "6 weeks",
    emoji:    "🌆",
    gradient: "linear-gradient(135deg,#196519,#4cbf4c)",
    desc:     "Striking roof terrace transformation with porcelain paving, raised planters, pergola and smart irrigation for a city centre penthouse.",
  },
  {
    id:       "country-cottage",
    title:    "Country Cottage Garden",
    category: "Planting Design",
    location: "Cotswolds, England",
    area:     "0.5 acres",
    duration: "4 months",
    emoji:    "🌸",
    gradient: "linear-gradient(135deg,#c49a52,#e5d4b0)",
    desc:     "Romantic cottage garden with traditional herbaceous borders, rose arches and a productive kitchen garden.",
  },
  {
    id:       "corporate-grounds",
    title:    "Corporate Campus Grounds",
    category: "Commercial Landscaping",
    location: "Glasgow, Scotland",
    area:     "3 acres",
    duration: "5 months",
    emoji:    "🏢",
    gradient: "linear-gradient(135deg,#155015,#2da32d)",
    desc:     "Year-round grounds maintenance and seasonal planting for a 3-acre corporate campus with 500+ daily visitors.",
  },
  {
    id:       "coastal-garden",
    title:    "Coastal Wind-Break Garden",
    category: "Tree Surgery & Planting",
    location: "St Andrews, Scotland",
    area:     "1.2 acres",
    duration: "10 weeks",
    emoji:    "🌊",
    gradient: "linear-gradient(135deg,#196519,#b8ebb8)",
    desc:     "Salt-tolerant planting design with strategic windbreaks and native coastal species to create a sheltered seaside garden.",
  },
  {
    id:       "kitchen-garden",
    title:    "Walled Kitchen Garden",
    category: "Garden Design & Build",
    location: "Perthshire, Scotland",
    area:     "0.75 acres",
    duration: "6 months",
    emoji:    "🥕",
    gradient: "linear-gradient(135deg,#946427,#e5d4b0)",
    desc:     "Full restoration of a Victorian walled kitchen garden with raised beds, glasshouse renovation and orchard replanting.",
  },
];

const categories = ["All", "Garden Design", "Hard Landscaping", "Planting Design", "Commercial Landscaping", "Tree Surgery & Planting", "Garden Design & Build"];

export default function ProjectsPage() {
  return (
    <>
      {/* ─── BANNER ──────────────────────────────────── */}
      <section id="projects-banner" className="page-banner">
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="section-tag animate-fadeInUp" style={{ justifyContent: "center", marginBottom: "1rem" }}>Our Portfolio</div>
          <h1 className="font-serif animate-fadeInUp delay-100" style={{ fontSize: "clamp(2rem,5vw,3.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15 }}>
            Projects We&apos;re<br />
            <span className="gw-gradient-text">Proud Of</span>
          </h1>
          <p className="animate-fadeInUp delay-200" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.0625rem", marginTop: "1rem", maxWidth: "520px", margin: "1rem auto 0" }}>
            Every project is a unique story. Browse a selection of our favourite transformations.
          </p>
        </div>
      </section>

      {/* ─── FILTER TABS ─────────────────────────────── */}
      <section style={{ padding: "2.5rem 0 0", background: "#f8fcf8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
            {categories.map((cat, i) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
                style={{
                  padding: "0.5rem 1.125rem",
                  borderRadius: "9999px",
                  border: "1.5px solid",
                  borderColor: i === 0 ? "var(--gw-green-500)" : "#d1e8d1",
                  background: i === 0 ? "var(--gw-green-500)" : "#fff",
                  color: i === 0 ? "#fff" : "#4a6b4a",
                  fontSize: "0.875rem", fontWeight: 600, cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS GRID ───────────────────────────── */}
      <section id="projects-grid" style={{ padding: "3rem 0 6rem", background: "#f8fcf8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "1.75rem" }}>
            {projects.map((proj, i) => (
              <article
                key={proj.id}
                id={`project-${proj.id}`}
                className={`animate-fadeInUp delay-${(i % 3 + 1) * 100}`}
                style={{
                  background: "#fff", border: "1px solid #e8f5e8",
                  borderRadius: "1.5rem", overflow: "hidden",
                  transition: "all 0.35s ease", cursor: "pointer",
                }}
              >
                {/* Visual hero */}
                <div style={{
                  height: "220px", background: proj.gradient,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "5rem", position: "relative",
                }}>
                  {proj.emoji}
                  <span style={{
                    position: "absolute", top: "1rem", right: "1rem",
                    background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "#fff", fontSize: "0.75rem", fontWeight: 700,
                    padding: "0.3rem 0.75rem", borderRadius: "9999px", letterSpacing: "0.06em",
                  }}>
                    {proj.category.toUpperCase()}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "1.75rem" }}>
                  <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--gw-dark)", marginBottom: "0.5rem" }}>{proj.title}</h2>
                  <p style={{ fontSize: "0.9375rem", color: "#4a6b4a", lineHeight: 1.65, marginBottom: "1.25rem" }}>{proj.desc}</p>

                  {/* Meta chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    {[
                      { icon: "📍", label: proj.location },
                      { icon: "📐", label: proj.area },
                      { icon: "📅", label: proj.duration },
                    ].map((m) => (
                      <span key={m.label} style={{
                        display: "flex", alignItems: "center", gap: "0.375rem",
                        background: "#f0faf0", border: "1px solid #dcf5dc",
                        color: "var(--gw-green-700)", fontSize: "0.8125rem",
                        padding: "0.3rem 0.75rem", borderRadius: "9999px",
                      }}>
                        {m.icon} {m.label}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact-us" id={`project-cta-${proj.id}`} className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.625rem 1.25rem" }}>
                    Start a Similar Project →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────── */}
      <section id="projects-cta" style={{ padding: "5rem 0", background: "linear-gradient(135deg,#1f831f,#155015)", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 className="font-serif" style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            Have a Project in Mind?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.0625rem", marginBottom: "2rem" }}>
            Tell us your vision and we&apos;ll bring it to life. Every great garden starts with a conversation.
          </p>
          <Link href="/contact-us" id="projects-contact-btn" className="btn-outline">Get in Touch →</Link>
        </div>
      </section>
    </>
  );
}
