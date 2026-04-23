import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what GreenWorld Landscaping clients say about their garden transformations. Genuine reviews from happy homeowners and businesses.",
};

const testimonials = [
  {
    id:      "margaret-h",
    name:    "Margaret Henderson",
    role:    "Homeowner, Perthshire",
    rating:  5,
    avatar:  "👩‍🦳",
    service: "Garden Design",
    quote:   "GreenWorld completely transformed our overgrown plot into a paradise. James and Sophie listened to every one of our ideas and delivered something far beyond our expectations. The planting plan is breathtaking in all four seasons.",
  },
  {
    id:      "david-m",
    name:    "David McAllister",
    role:    "Business Owner, Edinburgh",
    rating:  5,
    avatar:  "👨‍💼",
    service: "Commercial Landscaping",
    quote:   "We hired GreenWorld to maintain our corporate campus. The team is unfailingly professional, always punctual, and the grounds look immaculate 365 days a year. Our clients always comment on how welcoming the exterior looks.",
  },
  {
    id:      "fiona-r",
    name:    "Fiona Robertson",
    role:    "Property Developer, Glasgow",
    rating:  5,
    avatar:  "👷‍♀️",
    service: "Hard Landscaping",
    quote:   "As a developer I need contractors I can trust. GreenWorld delivered our show-home gardens on time and on budget every time. Their hard landscaping quality is second to none — I wouldn't use anyone else.",
  },
  {
    id:      "tom-b",
    name:    "Tom & Elaine Barclay",
    role:    "Homeowners, Cotswolds",
    rating:  5,
    avatar:  "👫",
    service: "Country Cottage Garden",
    quote:   "We had a very clear vision for our cottage garden and GreenWorld made it a reality. The planting choices are perfect and the team worked with such care. We now spend every weekend out there — it's our happy place.",
  },
  {
    id:      "rajesh-k",
    name:    "Rajesh Kumar",
    role:    "Hotel Manager, St Andrews",
    rating:  5,
    avatar:  "🧑‍💼",
    service: "Irrigation Systems",
    quote:   "The smart irrigation system GreenWorld installed has reduced our water bill by 35% and our gardens have never looked better. The team explained everything clearly and the aftercare support is excellent.",
  },
  {
    id:      "sarah-w",
    name:    "Sarah Whitfield",
    role:    "Homeowner, Edinburgh",
    rating:  5,
    avatar:  "👩‍🎨",
    service: "Lawn Care",
    quote:   "I'd given up on ever having a nice lawn — it was mostly moss and weeds. After one season on GreenWorld's lawn care programme it's transformed into a lush green carpet. The team are so friendly and knowledgeable.",
  },
  {
    id:      "angus-f",
    name:    "Angus Fraser",
    role:    "Estate Manager, Highlands",
    rating:  5,
    avatar:  "👨‍🌾",
    service: "Tree Surgery",
    quote:   "We have 200-year-old oaks that needed specialist care. GreenWorld's arborists were incredibly knowledgeable, respectful of the trees and left absolutely no mess. I trust them implicitly with our most precious specimens.",
  },
  {
    id:      "claire-d",
    name:    "Claire Dunbar",
    role:    "Restaurant Owner, Perth",
    rating:  5,
    avatar:  "👩‍🍳",
    service: "Seasonal Planting",
    quote:   "Our restaurant terrace looks absolutely stunning thanks to GreenWorld's seasonal planting programme. Guests regularly ask about the flowers and our reviews mention the beautiful outdoor space. Worth every penny.",
  },
];

const stats = [
  { value: "3,500+", label: "Happy Clients" },
  { value: "4.9★",  label: "Average Rating" },
  { value: "97%",   label: "Would Recommend" },
  { value: "12+",   label: "Industry Awards" },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* ─── BANNER ──────────────────────────────────── */}
      <section id="testimonials-banner" className="page-banner">
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="section-tag animate-fadeInUp" style={{ justifyContent: "center", marginBottom: "1rem" }}>Client Reviews</div>
          <h1 className="font-serif animate-fadeInUp delay-100" style={{ fontSize: "clamp(2rem,5vw,3.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15 }}>
            What Our Clients<br />
            <span className="gw-gradient-text">Say About Us</span>
          </h1>
          <p className="animate-fadeInUp delay-200" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.0625rem", marginTop: "1rem", maxWidth: "520px", margin: "1rem auto 0" }}>
            Real words from real people whose outdoor spaces we&apos;ve had the privilege of transforming.
          </p>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────── */}
      <section id="review-stats" style={{ background: "var(--gw-dark)", padding: "3.5rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "1.5rem" }}>
          {stats.map((s, i) => (
            <div key={s.label} className={`stat-card animate-fadeInUp delay-${(i + 1) * 100}`}>
              <div className="font-serif" style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 800, color: "#86d886", marginBottom: "0.375rem" }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURED TESTIMONIAL ────────────────────── */}
      <section id="featured-review" style={{ padding: "5rem 0", background: "#f8fcf8" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{
            background: "linear-gradient(135deg,#2da32d,#155015)",
            borderRadius: "2rem", padding: "3.5rem",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}>
            <div style={{ fontSize: "5rem", position: "absolute", top: "-1rem", left: "2rem", opacity: 0.15, fontFamily: "serif", lineHeight: 1 }}>&ldquo;</div>
            <p style={{ fontSize: "clamp(1.125rem,2.5vw,1.5rem)", color: "#fff", lineHeight: 1.7, fontStyle: "italic", marginBottom: "2rem", position: "relative", zIndex: 1 }}>
              &ldquo;GreenWorld didn&apos;t just landscape our garden — they gave our family a reason to be outside together. The care, the craft and the communication throughout our 8-month project were simply outstanding.&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem" }}>👨‍👩‍👧‍👦</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, color: "#fff" }}>The Campbell Family</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>Homeowners, Perthshire • Garden Transformation, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS GRID ───────────────────────── */}
      <section id="testimonials-grid" style={{ padding: "3rem 0 6rem", background: "#f8fcf8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "1.5rem" }}>
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              id={`review-${t.id}`}
              className={`testimonial-card animate-fadeInUp delay-${(i % 4 + 1) * 100}`}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} style={{ color: "#f59e0b", fontSize: "1.1rem" }}>★</span>
                ))}
              </div>

              {/* Service badge */}
              <span style={{
                display: "inline-block", fontSize: "0.75rem", fontWeight: 600,
                color: "var(--gw-green-700)", background: "#f0faf0",
                border: "1px solid #dcf5dc", padding: "0.25rem 0.625rem",
                borderRadius: "9999px", marginBottom: "1rem",
              }}>
                {t.service}
              </span>

              {/* Quote */}
              <blockquote style={{ fontSize: "0.9375rem", color: "#2a452a", lineHeight: 1.75, marginBottom: "1.5rem", fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  background: "linear-gradient(135deg,#dcf5dc,#86d886)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem", flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--gw-dark)", fontSize: "0.9375rem" }}>{t.name}</div>
                  <div style={{ color: "var(--gw-green-600)", fontSize: "0.8125rem", fontWeight: 500 }}>{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────── */}
      <section id="testimonials-cta" style={{ padding: "5rem 0", background: "linear-gradient(135deg,#1f831f,#155015)", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 className="font-serif" style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            Join 3,500+ Happy Clients
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.0625rem", marginBottom: "2rem" }}>
            Your dream garden is one free consultation away.
          </p>
          <Link href="/contact-us" id="testimonials-contact-btn" className="btn-outline">Book Your Free Consultation →</Link>
        </div>
      </section>
    </>
  );
}
