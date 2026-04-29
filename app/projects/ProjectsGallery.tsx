"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
};

const CATEGORIES = [
  "All",
  "Landscape maintenance",
  "Landscape Design and Build works",
  "Grass and Tree cutting Services",
  "Water Features Installation",
  "Artificial Turf Service",
  "Hydroculture Service",
  "Irrigation System Installation",
  "Fresh Flowers Floral Display",
  "Live and Artificial Green Wall Installation",
  "Construction Works",
];

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Marina Bay Penthouse",
    description: "A high-altitude sanctuary blending sleek stone surfaces with resilient, structural flora to withstand urban elements.",
    category: "Landscape Design and Build works",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsHkN3eGk33ruFuoway9UwYh_5b0LLuArohy7kbTVQBop935qvvzCHdtHCIVlZGwyz749Wlb9mwLFYPLeQs_gvdqHh72m_H6-tZOo1aexnok9C5hivR5tzmY_EN1J0hKZaTxjXKXMrj5xY5nxeIyGkb10maqneOxbSkD5ykPp5B_e8EfcdC58mor6y2M7J37BHbVXbOc9MBV2SYJcogeJMjSM7QFjXSOvri4cPBgBBlgZrz-p_YDPyr9q9sKrIYGhlP5wwKYYWh3w",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ0W475DRESrxl6ArokrX9VspOZGywkBViWeUmWIQJGbAFepDRYqmNvEHMOADwEY0rR85G2S2mi8-IF8BL0pxb5KQrmGvweu45Mtzt-s742EbQxR8Jb5RgFlt_ehC0UwKVG8R6He8WbYigcXXf69PQK09LTu8ESdNvCIeKxdiQjCSp0tFDrDGneBAPVv90VnaO7lc3rQAdDp1QAY5SzSxH2MyTxc97WES2Ta9jFhIA8yUkRkrVWET-2jkpp_AZtVvGE6Iuac_rgIU",
    ],
  },
  {
    id: "p2",
    title: "Apex Tech Campus",
    description: "A reflective courtyard designed to foster focus and calm amidst a bustling corporate environment.",
    category: "Water Features Installation",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPvTrNQ81wFG52LunCHnNn5G45oEWQWAxfKh9atNM5WGvMatzahpA30fVzeLAH2xKOtFyxLHjTm_nxSijI6WcJYSTI6No17-Pgzl9t71qa7sxxi39Sm5a7BuNv99nUn57gUW3oRV4W8CvSginQ76Yn0kZZRenXs8MM73zFk-5yTi_Xl8d_cuxH08hG4mmVltrxsjV1Dg8YWMScFw4PNrodZJ1oz-H_rXqWg5TneXGO_ucwJV3NxfiM798Kq8g6mbDvinDNAItsmow",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCv-b2STqB-GgpwEd7inlkOHmDDdwk9_3pa3HVNNMSjSOBN1d7M3Xgl7s9QV7lbD36AmGDPq-P2YVfMgTUtM-LWvEi9jHuFAetpjAZ3s8J4Rfm1ZnwRS921EAF3fsMUGGgz8H-cfOUoXJpPTjYX2w1Th-OP9ulcUjuOepMZf_Je-9OUiKoT1C8svIFX0O_l4YdSMdTy68sL5xUyrghDbZCvfzFK2UOozjYy__m8fyS60tz3K_WABWMCXkXZH1i4MocKymv86wA4GZk",
    ],
  },
  {
    id: "p3",
    title: "The Verdant Atrium",
    description: "A three-story living wall that acts as the biological lungs for a premier downtown commercial tower.",
    category: "Live and Artificial Green Wall Installation",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgph6UkkcfN9rU_vYTeRtGpKohjHXqVRSVmAdp2eFlAGnrP_k5NuOIPHtLYzfDQscbZav-MJDpCBHXqql4oKmw3iaBdrv6Uv6hElE-LZ3sl7Vkx6Ch2sLHdyeqMKO1NEPYBel7jCps7c4tH8iBVPEF70fHyE-hEa_KM9aWFzaxi-XBoMzO4F25BR5zIsFUCvyQ0l1Al_ViBdiYESiFDjwOin8sHWn5OlyVhtA-Z2Bfk6P3trv4rB6dy5IBs2dEKS9E2KA-Tx7Vc8A",
      "/images/green_wall_installation.png",
    ],
  },
  {
    id: "p4",
    title: "Echo Canyon Retreat",
    description: "Embracing the arid climate with a zero-water design that utilizes native structural succulents and architectural concrete forms.",
    category: "Construction Works",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkW19pTePcyUS8RCygUMqqs-L_DYlfCCXskgfNuMGgpIOj73euoqLVZ0-ni7KPPtW_WhhAWukgCyQI9tl0t5l_HgYaAG--aly_KbHDHQh6DrYPHzGrK3ZQBgEmnzXZ9FH8zkqCJ9cR6mIWsrNusggyL4uubhwQ_G0E-CGsmyP-r2dzN5zjTdHZaGUsXcvoU9eGPkwKozvZsHl2DJnZkZOKqG4uYAq4ALk8b0LPKr41_j5l2dm599bq6XjdktpwTr3j0CwnQb1c300",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqGNaiTU37_R6Qx-C52zHsH8TK9chdCrKCY1ma7MLGnehZTOG53u2dLUGACYxlsePm9Q4ZwDfw1FI4HR7s_YxTNszIsXjBj845pDphmX5olK9k4LaSRhf9cHHUKl6J9l_dpnFeG_vfG5r41OH5nKgDQgy2cGIlklgps5HX0dnVIKjE3p83O0yM972QV77apEHeSJlDQr6nwbJg_qntHnmNRvIWOcG_j7atgQvCJD2rEuI4vWsIhgU74wfvu9w7eA_mTd-tZbAYh9I",
    ],
  },
  {
    id: "p5",
    title: "Estate Turf Renewal",
    description: "A complete overhaul using premium artificial turf for a perfectly green, maintenance-free lawn year-round.",
    category: "Artificial Turf Service",
    images: [
      "/images/artificial_turf.png",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFvZGF6S2EKpIL5NWbiaTmGY-bLhCdTlcEv0jQdLk1w0xr9W5BzDGndEIBznkmO-vMIcIqfYpETfvoZvlit0szSJsYbDZZpAxgLC3iG1hKmEVb6kBYfU2oILkPPF6RjFWKguLfAwHCjPLWq8XKDCueiVUTTmzLlxXeGP0X29tNfefF_lhr1jtIXSiNvgVqtEYRfRHj_Poz1yUBtfpp37ARQaG1srzYxM7U_sauMCzzUv4VUg7juWuIAmXBwxSCRa5vp6Yd79hBOaM",
    ],
  },
  {
    id: "p6",
    title: "Smart Irrigation Overhaul",
    description: "Upgrading a massive commercial property with the latest in water-efficient automated irrigation systems.",
    category: "Irrigation System Installation",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdu5IlmQLrCPdZZ0hLDIZ9wisvMLmBXsTmHHmKCG5u_vitDZ5zL2D2Wxv3gg3bF3IL0SzAaNJm6OPFyL62thYWU2pKZsVQJSmdM6JPv_BLjoDqHv0GBE1jo3sTLdZN-BvcRdjAeKbA_FD48acn8f0Ue1mtwDQbVqk7D-0eq2KFwNoKTLypU-2Cb-WQ3F4QBPibyMigEZYsyWhWQj914jKsaEhAL-ysOmAankupRNfzsYqyT3nrQDd2X8R2_yyZU7DrT-zOiiLfdQ",
    ],
  },
  {
    id: "p7",
    title: "Seasonal Floral Design",
    description: "Vibrant and seasonal floral arrangements for a luxury event venue.",
    category: "Fresh Flowers Floral Display",
    images: [
      "/images/fresh_floral_display.png",
    ],
  },
  {
    id: "p8",
    title: "Corporate Hydroculture",
    description: "Soil-less planting solutions installed throughout a modern tech office for clean, indoor greenery.",
    category: "Hydroculture Service",
    images: [
      "/images/hydroculture_setup.png",
    ],
  },
  {
    id: "p9",
    title: "City Park Tree Care",
    description: "Expert tree health assessments, pruning, and precise grass cutting for a local community park.",
    category: "Grass and Tree cutting Services",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVGJOGknMHiC3KVg6zR-9Pw6KDp-4IFgh9GQjyoKr2UySFLpsqLU-aP-9chDXTcpDB4yaNP8hliym09rPZf7PiGefvDNqt-VhVUAN7spSm3tk4b_b_RTsPU-PAglqpWH-0tdF7V0EY1M7HKGIjwGrETg9_YfTNEF6jBDCdfJIpNMRiQJxmymyQLOWEtK7VPkXqrf3KM7UsMgQLgsMSH7dkNuCge4xXOCoh63bpfQiTXbc7kCsoNw3osAeGKINj3zRhs6c5EdRDn5I",
    ],
  },
  {
    id: "p10",
    title: "Suburban Routine Upkeep",
    description: "Ongoing seasonal cleanup, turf management, and soil enrichment for a large suburban estate.",
    category: "Landscape maintenance",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjCWnxAh8uXiHdgI3Dah90l3_OlkVKwSh8-kyVsChZTQPIB33VTLa_acrHKWCFd_NX5bqNvyE52ByYGlw1cejQ4a8eotspmjFlkjouDndBBnKie9vGKI80Yv0ikHLj5-sAXc3Ud0b-Ft0vXvJ9zv4IH4xaobNE3WkZMTvLIwPbYedIFWjCBvuBbaFRJJId-NjcjgYWfsCZMVrMC9cfA0Bucfn-_ovMI6gWaGF-aMAmCFEL-u-o1s68brCqu3AWByMYWZ5XxMCBoWg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDr7dncE5tnRxv_pi0qnnfB0e8iiNNy3Jj163ZE0Yd1UfwF9UU6nmZrKkfOIyXnWjtGKV9hSm6qt6tQSSxtsb1FTHnR55z4702OfTFmFy6yhU5ac2JNdM-jgWixiOzZ0mCtGbKLq9t2hPqcX5nrTdd2qCvJkJz5_8yOX93Jb_TgQJXrvJ3NinMJinTXHFOMaSJuab_5d4CvZAMtmuRz6QX9jDn9tTX7Ua8sbUNFvHkyoReaBWeugtN1pFdibVq3cIbU149Qqluec_Q",
    ],
  }
];

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = PROJECTS.filter((p) =>
    activeCategory === "All" ? true : p.category === activeCategory
  );

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      {/* Categories/Filters */}
      <section className="px-6 mb-12 max-w-screen-2xl mx-auto">
        <div className="border-b border-surface-variant pb-2">
          <div className="overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-4 whitespace-nowrap md:whitespace-normal w-max md:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-label text-xs sm:text-sm uppercase tracking-[0.05em] px-4 py-2 transition-all rounded-full border ${
                    activeCategory === cat
                      ? "bg-primary text-on-primary border-primary font-bold shadow-md"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high border-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 mb-24 md:mb-32 max-w-screen-2xl mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-on-surface-variant">
            <span className="material-symbols-outlined text-5xl mb-4 opacity-50">imagesmode</span>
            <h3 className="text-xl font-bold">No projects found in this category</h3>
            <p>Check back later for updates!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => openModal(project)}
                className="bg-surface-container-lowest rounded-2xl toned-shadow flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden border border-outline-variant/30"
              >
                <div className="aspect-[4/3] w-full relative overflow-hidden">
                  <img
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    src={project.images[0]}
                  />
                  {project.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 backdrop-blur-sm">
                      <span className="material-symbols-outlined !text-sm">photo_library</span>
                      {project.images.length}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="font-label text-xs uppercase tracking-[0.05em] text-primary font-bold mb-2 truncate">
                      {project.category}
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center text-primary font-bold text-sm group-hover:text-tertiary-container transition-colors">
                    View Gallery <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: '"FILL" 0' }}>arrow_forward</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Modal Carousel */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white bg-black/50 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-colors z-10"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          <div
            className="relative w-full max-w-6xl h-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl bg-black">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain select-none animate-in fade-in zoom-in-95 duration-300"
              />

              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 p-3 rounded-full backdrop-blur-md transition-all group"
                  >
                    <span className="material-symbols-outlined text-3xl group-hover:-translate-x-1 transition-transform">chevron_left</span>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 p-3 rounded-full backdrop-blur-md transition-all group"
                  >
                    <span className="material-symbols-outlined text-3xl group-hover:translate-x-1 transition-transform">chevron_right</span>
                  </button>
                </>
              )}
            </div>

            {/* Image Indicator / Info */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between w-full gap-4 text-white">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-headline font-bold">{selectedProject.title}</h3>
                <p className="text-white/70 text-sm">{selectedProject.category}</p>
              </div>
              
              {selectedProject.images.length > 1 && (
                <div className="flex items-center gap-2">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
