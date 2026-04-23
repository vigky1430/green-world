import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about GreenWorld Landscaping — our story, our team, and our commitment to sustainable, beautiful outdoor spaces.",
};

const team = [
  { name: "James Hargreaves",  role: "Founder & Head Horticulturalist", emoji: "👨‍🌾", exp: "22 yrs" },
  { name: "Sophie Marsh",      role: "Lead Garden Designer",             emoji: "👩‍🎨", exp: "14 yrs" },
  { name: "Carlos Rivera",     role: "Senior Arborist",                  emoji: "🧑‍🌳", exp: "16 yrs" },
  { name: "Priya Nair",        role: "Irrigation & Water Systems Lead",  emoji: "👩‍🔧", exp: "11 yrs" },
  { name: "Tom Aldridge",      role: "Hard Landscaping Specialist",      emoji: "👨‍🏗️", exp: "18 yrs" },
  { name: "Emily Chen",        role: "Client Relations Manager",         emoji: "👩‍💼", exp: "9 yrs"  },
];

const values = [
  { icon: "♻️", title: "Sustainability",    desc: "We prioritise eco-friendly materials, native planting and water-saving solutions in every project." },
  { icon: "🏆", title: "Excellence",        desc: "Award-winning workmanship backed by a 5-year guarantee on all hard landscaping." },
  { icon: "🤝", title: "Partnership",       desc: "We listen first. Your vision drives every decision from design to final planting." },
  { icon: "💡", title: "Innovation",        desc: "Blending traditional horticultural wisdom with smart irrigation tech and design software." },
];

const milestones = [
  { year: "2005", event: "Founded in a small garden shed in eco city with a single van and big dreams." },
  { year: "2009", event: "Expanded to a 20-strong team and won our first regional landscaping award." },
  { year: "2013", event: "Launched our Smart Irrigation division, installing 300+ systems across the region." },
  { year: "2017", event: "Completed our 1,000th project — a 15-acre estate transformation." },
  { year: "2021", event: "Certified carbon-neutral and pledged to plant 10,000 trees over 5 years." },
  { year: "2025", event: "Celebrating 20 years with 3,500+ projects and 85 expert team members." },
];

export default function AboutUsPage() {
  return (
    <>
      {/* ─── PAGE BANNER ─────────────────────────────── */}
      <section id="about-banner" className="page-banner">
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="section-tag animate-fadeInUp" style={{ justifyContent: "center", marginBottom: "1rem" }}>Our Story</div>
          <h1 className="font-serif animate-fadeInUp delay-100" style={{ fontSize: "clamp(2rem,5vw,3.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15 }}>
            Rooted in Passion,<br />Grown with Purpose
          </h1>
          <p className="animate-fadeInUp delay-200" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.0625rem", marginTop: "1rem", maxWidth: "560px", margin: "1rem auto 0" }}>
            18 years transforming outdoor spaces across the region — and counting.
          </p>
        </div>
      </section>

      {/* ─── STORY ───────────────────────────────────── */}
      <section id="our-story" style={{ padding: "6rem 0", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "4rem", alignItems: "center" }}>
          {/* Visual */}
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "4/3", borderRadius: "1.5rem",
              background: "linear-gradient(135deg,#f0faf0 0%,#dcf5dc 50%,#b8ebb8 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "7rem",
              boxShadow: "0 30px 80px rgba(45,163,45,0.15)",
            }} className="animate-float">
              🌿
            </div>
            <div style={{
              position: "absolute", top: "-1.5rem", right: "-1.5rem",
              background: "var(--gw-green-500)", color: "#fff", borderRadius: "1.25rem",
              padding: "1.25rem 1.5rem", textAlign: "center",
              boxShadow: "0 10px 40px rgba(45,163,45,0.4)",
            }}>
              <div className="font-serif" style={{ fontSize: "2rem", fontWeight: 800 }}>2005</div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", opacity: 0.85 }}>ESTABLISHED</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="section-tag animate-fadeInRight" style={{ marginBottom: "1rem" }}>Who We Are</div>
            <h2 className="font-serif animate-fadeInRight delay-100" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 700, color: "var(--gw-dark)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
              A Family Business Built on a Love of Nature
            </h2>
            <p style={{ color: "#4a6b4a", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.9375rem" }}>
              GreenWorld was founded in 2005 by James Hargreaves — a passionate horticulturalist with a vision to bring professional, sustainable landscaping to homes and businesses throughout the region.
            </p>
            <p style={{ color: "#4a6b4a", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.9375rem" }}>
              What began as a one-man operation with a single van has grown into a 85-strong team of certified arborists, garden designers, irrigation engineers and hard landscapers — all united by the same commitment to excellence and the natural world.
            </p>
            <Link href="/contact-us" id="about-contact-cta" className="btn-primary">Work With Us →</Link>
          </div>
        </div>
      </section>

      {/* ─── VALUES ──────────────────────────────────── */}
      <section id="our-values" style={{ padding: "6rem 0", background: "#f8fcf8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ justifyContent: "center", marginBottom: "1rem" }}>What Drives Us</div>
            <h2 className="font-serif" style={{ fontSize: "clamp(1.875rem,4vw,2.75rem)", fontWeight: 700, color: "var(--gw-dark)" }}>Our Core Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`animate-fadeInUp delay-${(i + 1) * 100}`}
                style={{
                  background: "#fff", border: "1px solid #e8f5e8", borderRadius: "1.25rem", padding: "2rem",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--gw-dark)", marginBottom: "0.625rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#4a6b4a", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ────────────────────────────────────── */}
      <section id="our-team" style={{ padding: "6rem 0", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ justifyContent: "center", marginBottom: "1rem" }}>The People Behind the Green</div>
            <h2 className="font-serif" style={{ fontSize: "clamp(1.875rem,4vw,2.75rem)", fontWeight: 700, color: "var(--gw-dark)" }}>Meet Our Expert Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
            {team.map((member, i) => (
              <div
                key={member.name}
                id={`team-${member.name.toLowerCase().replace(/\s/g, "-")}`}
                className={`animate-fadeInUp delay-${(i % 3 + 1) * 100}`}
                style={{
                  background: "#f8fcf8", border: "1px solid #e8f5e8",
                  borderRadius: "1.25rem", padding: "2rem", textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{
                  width: "80px", height: "80px", margin: "0 auto 1rem",
                  borderRadius: "50%", background: "linear-gradient(135deg,#dcf5dc,#86d886)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.25rem",
                }}>
                  {member.emoji}
                </div>
                <h3 style={{ fontWeight: 700, color: "var(--gw-dark)", marginBottom: "0.375rem", fontSize: "1rem" }}>{member.name}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--gw-green-600)", fontWeight: 600, marginBottom: "0.5rem" }}>{member.role}</p>
                <span style={{ fontSize: "0.8125rem", color: "#7a9a7a", background: "#e8f5e8", padding: "0.25rem 0.75rem", borderRadius: "9999px" }}>
                  {member.exp} experience
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ────────────────────────────────── */}
      <section id="our-history" style={{ padding: "6rem 0", background: "var(--gw-dark)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-tag" style={{ justifyContent: "center", marginBottom: "1rem" }}>Our Journey</div>
            <h2 className="font-serif" style={{ fontSize: "clamp(1.875rem,4vw,2.75rem)", fontWeight: 700, color: "#fff" }}>20 Years of Growth</h2>
          </div>
          <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
            {/* Line */}
            <div style={{ position: "absolute", left: "0", top: 0, bottom: 0, width: "2px", background: "rgba(45,163,45,0.3)", marginLeft: "44px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {milestones.map((m, i) => (
                <div key={m.year} className={`animate-fadeInLeft delay-${(i + 1) * 100}`} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: "90px", height: "40px", flexShrink: 0,
                    background: "var(--gw-green-600)", borderRadius: "9999px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, color: "#fff", fontSize: "0.875rem",
                  }}>
                    {m.year}
                  </div>
                  <div style={{ paddingTop: "0.5rem" }}>
                    <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: "0.9375rem" }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
