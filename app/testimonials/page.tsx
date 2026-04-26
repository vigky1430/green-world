import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Green World Landscaping",
  description:
    "Hear from the homeowners and businesses we've helped transform into green paradises.",
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface Testimonial {
  no: string;
  clientName: string;
  clientType: string;
  starRating: number;
  feedback: string;
  dateReceived: string;
  featured: boolean;
  source: string;
  notes: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Convert "Alice Smith" → "AS" */
function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/** Cycle through avatar colour pairs based on row index */
const AVATAR_COLOURS = [
  "bg-secondary-container text-on-secondary-container",
  "bg-primary-fixed text-on-primary-fixed-variant",
  "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  "bg-secondary-fixed text-on-secondary-fixed-variant",
  "bg-primary-fixed-dim text-on-primary-fixed-variant",
  "bg-tertiary-fixed-dim text-on-tertiary-fixed-variant",
];

function avatarColour(index: number): string {
  return AVATAR_COLOURS[index % AVATAR_COLOURS.length];
}

// ─── Data Fetching ────────────────────────────────────────────────────────────

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbwzOBGngJMAE5g_o-v2f7snNBWownrB7CTpk6ra7vacBux_R_3g9Fgu3zH8jJzMnj4UlXEnasHq0a/pub?gid=0&single=true&output=csv";

/** Parse a single CSV line, correctly handling quoted fields */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  // Strip Windows-style carriage return
  const cleaned = line.replace(/\r$/, "");

  for (let i = 0; i < cleaned.length; i++) {
    const ch = cleaned[i];

    if (ch === '"') {
      // Escaped quote inside a quoted field ("" → ")
      if (inQuotes && cleaned[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current.trim());
  return result;
}

async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch(SHEET_CSV_URL, {
      cache: "no-store", // disable cache during debugging
    });

    if (!res.ok) return [];

    const text = await res.text();
    const lines = text.trim().split("\n");

    if (lines.length > 1) {
      const sampleCols = parseCSVLine(lines[1]);
    }

    const mapped = lines.slice(1).map((line) => {
      const cols = parseCSVLine(line);
      return {
        no: cols[0] ?? "",
        clientName: cols[1] ?? "",
        clientType: cols[2] ?? "",
        starRating: parseInt(cols[3] ?? "0", 10) || 0,
        feedback: cols[4] ?? "",
        dateReceived: cols[5] ?? "",
        featured: cols[6]?.trim().toUpperCase() === "TRUE",
        source: cols[7] ?? "",
        notes: cols[8] ?? "",
      } satisfies Testimonial;
    });

    const filtered = mapped.filter(
      (t) => t.featured && t.clientName.length > 0 && t.feedback.length > 0
    );

    return filtered;
  } catch (err) {
    console.error("[Testimonials] fetch error:", err);
    return [];
  }
}

// ─── Star Rating Component ────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  const clamped = Math.min(5, Math.max(0, rating));
  return (
    <div className="flex text-primary mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined"
          style={{
            fontVariationSettings: i < clamped ? '"FILL" 1' : '"FILL" 0',
          }}
        >
          star
        </span>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function TestimonialsPage() {
  const testimonials = await fetchTestimonials();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="lush landscaped residential garden with stone paths, vibrant manicured green grass, and ornamental shrubs in soft afternoon sunlight"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQf7novEdpfqoKx2NEKLby040HSIvRqU1on51eagqGTw8msfgD9Fhsf5wCQJHnFuV-2rOtudryscruR24bpUWPOtctRqw21G47vsco11JZNDO4M0x-z1mAKtbaCH0GxOmDK5Cmy_7KkilwohhYoAYDXHx6xAhPwMsOHlxwbabJ-u_uoqRKzfZikW-NqArJZJlP3I3eHfZR_iu4QkgXnSkN6y8-c7CAb73PYjKMxbJniL4jRrJ3-D4ac-cXtzajzk61QhgW6zALp_Y"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
            What Our Clients Say
          </h1>
          <p className="text-xl text-on-primary-container max-w-2xl mx-auto font-medium">
            Hear from the homeowners and businesses we&apos;ve helped transform
            into green paradises.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        {testimonials.length === 0 ? (
          <div className="text-center py-20 text-on-surface-variant">
            <span className="material-symbols-outlined text-6xl mb-4 block opacity-40">
              rate_review
            </span>
            <p className="text-xl font-medium">No featured testimonials yet.</p>
            <p className="text-sm mt-2 opacity-60">
              Mark a row as <strong>Featured on Website = TRUE</strong> in the
              Google Sheet to display it here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={t.no || index}
                className="bg-surface-container-low p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between h-full"
              >
                {/* Stars + Quote */}
                <div>
                  <StarRating rating={t.starRating} />
                  <p className="text-on-surface-variant italic text-lg leading-relaxed mb-6 font-medium">
                    &ldquo;{t.feedback}&rdquo;
                  </p>
                </div>

                {/* Avatar + Name */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0 ${avatarColour(index)}`}
                  >
                    {getInitials(t.clientName)}
                  </div>
                  <div>
                    <p className="font-headline font-bold text-on-surface">
                      {t.clientName}
                    </p>
                    <p className="text-sm text-outline">{t.clientType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
