"use client";

import { useState } from "react";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  longDesc: string;
  features?: string[];
  images: string[];
  color: "primary" | "surface" | "high";
  gridSpan: string;
};

const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Landscape maintenance",
    icon: "potted_plant",
    shortDesc: "Ongoing seasonal cleanup, turf management, and soil enrichment for a large suburban estate.",
    longDesc: "Our comprehensive maintenance programs are designed to keep your landscape in peak condition throughout the year. We combine traditional horticultural wisdom with modern soil science to ensure your plants thrive.",
    features: ["Seasonal Cleanup", "Turf Management", "Soil Enrichment", "General Upkeep"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjCWnxAh8uXiHdgI3Dah90l3_OlkVKwSh8-kyVsChZTQPIB33VTLa_acrHKWCFd_NX5bqNvyE52ByYGlw1cejQ4a8eotspmjFlkjouDndBBnKie9vGKI80Yv0ikHLj5-sAXc3Ud0b-Ft0vXvJ9zv4IH4xaobNE3WkZMTvLIwPbYedIFWjCBvuBbaFRJJId-NjcjgYWfsCZMVrMC9cfA0Bucfn-_ovMI6gWaGF-aMAmCFEL-u-o1s68brCqu3AWByMYWZ5XxMCBoWg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDr7dncE5tnRxv_pi0qnnfB0e8iiNNy3Jj163ZE0Yd1UfwF9UU6nmZrKkfOIyXnWjtGKV9hSm6qt6tQSSxtsb1FTHnR55z4702OfTFmFy6yhU5ac2JNdM-jgWixiOzZ0mCtGbKLq9t2hPqcX5nrTdd2qCvJkJz5_8yOX93Jb_TgQJXrvJ3NinMJinTXHFOMaSJuab_5d4CvZAMtmuRz6QX9jDn9tTX7Ua8sbUNFvHkyoReaBWeugtN1pFdibVq3cIbU149Qqluec_Q"
    ],
    color: "surface",
    gridSpan: "md:col-span-4 lg:col-span-8",
  },
  {
    id: "s2",
    title: "Landscape Design and Build works",
    icon: "architecture",
    shortDesc: "Conceptualizing and constructing bespoke landscapes that merge aesthetic vision with functional engineering.",
    longDesc: "From initial concept to final construction, we handle every aspect of your landscape transformation. Our design-build approach ensures that the original vision is preserved while maintaining strict quality control through the build phase.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQDfCgM1JaVHIVN66bpdm_af9Ddrsi6sOuqwC2sNT_lSQo5_-jDBM-VslDrSRONMOGTOJdIhvOVyfk5cisEsTea204GphzXKI-iBTWY8Wi0sYr9l5WxyU2TfIBB9qIy79mZGAxsIVI1ndRr6XvEx-oacgEZxwes707DWdUF3sEuorDDjhzIwT18QhuNuUePhPC4EhDb672XP-1YerFAEL0vYId1Uta5EVcamv0hnxxQ11PVhzTx9zQ8Iugo9rSBCBArRwugoqnFe0",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ0W475DRESrxl6ArokrX9VspOZGywkBViWeUmWIQJGbAFepDRYqmNvEHMOADwEY0rR85G2S2mi8-IF8BL0pxb5KQrmGvweu45Mtzt-s742EbQxR8Jb5RgFlt_ehC0UwKVG8R6He8WbYigcXXf69PQK09LTu8ESdNvCIeKxdiQjCSp0tFDrDGneBAPVv90VnaO7lc3rQAdDp1QAY5SzSxH2MyTxc97WES2Ta9jFhIA8yUkRkrVWET-2jkpp_AZtVvGE6Iuac_rgIU"
    ],
    color: "primary",
    gridSpan: "md:col-span-4 lg:col-span-4",
  },
  {
    id: "s3",
    title: "Grass and Tree cutting Services",
    icon: "yard",
    shortDesc: "Expert tree health assessments, pruning, and precise grass cutting.",
    longDesc: "Our arborist-led team provides expert care for your trees and turf. We focus on long-term plant health, using precision techniques to enhance growth and prevent disease.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVGJOGknMHiC3KVg6zR-9Pw6KDp-4IFgh9GQjyoKr2UySFLpsqLU-aP-9chDXTcpDB4yaNP8hliym09rPZf7PiGefvDNqt-VhVUAN7spSm3tk4b_b_RTsPU-PAglqpWH-0tdF7V0EY1M7HKGIjwGrETg9_YfTNEF6jBDCdfJIpNMRiQJxmymyQLOWEtK7VPkXqrf3KM7UsMgQLgsMSH7dkNuCge4xXOCoh63bpfQiTXbc7kCsoNw3osAeGKINj3zRhs6c5EdRDn5I"
    ],
    color: "surface",
    gridSpan: "md:col-span-2 lg:col-span-4",
  },
  {
    id: "s4",
    title: "Water Features Installation",
    icon: "water_drop",
    shortDesc: "Serene waterfalls, koi ponds, and architectural fountains.",
    longDesc: "Water brings life and tranquility to any outdoor space. We specialize in creating custom water features that are both beautiful and sustainable, incorporating advanced filtration and circulation systems.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCv-b2STqB-GgpwEd7inlkOHmDDdwk9_3pa3HVNNMSjSOBN1d7M3Xgl7s9QV7lbD36AmGDPq-P2YVfMgTUtM-LWvEi9jHuFAetpjAZ3s8J4Rfm1ZnwRS921EAF3fsMUGGgz8H-cfOUoXJpPTjYX2w1Th-OP9ulcUjuOepMZf_Je-9OUiKoT1C8svIFX0O_l4YdSMdTy68sL5xUyrghDbZCvfzFK2UOozjYy__m8fyS60tz3K_WABWMCXkXZH1i4MocKymv86wA4GZk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPvTrNQ81wFG52LunCHnNn5G45oEWQWAxfKh9atNM5WGvMatzahpA30fVzeLAH2xKOtFyxLHjTm_nxSijI6WcJYSTI6No17-Pgzl9t71qa7sxxi39Sm5a7BuNv99nUn57gUW3oRV4W8CvSginQ76Yn0kZZRenXs8MM73zFk-5yTi_Xl8d_cuxH08hG4mmVltrxsjV1Dg8YWMScFw4PNrodZJ1oz-H_rXqWg5TneXGO_ucwJV3NxfiM798Kq8g6mbDvinDNAItsmow"
    ],
    color: "surface",
    gridSpan: "md:col-span-2 lg:col-span-4",
  },
  {
    id: "s5",
    title: "Construction Works",
    icon: "foundation",
    shortDesc: "Structural masonry, retaining walls, and custom hardscaping projects.",
    longDesc: "Our construction team excels in precision hardscaping and structural landscaping. We use durable materials and proven engineering methods to create lasting outdoor foundations.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqGNaiTU37_R6Qx-C52zHsH8TK9chdCrKCY1ma7MLGnehZTOG53u2dLUGACYxlsePm9Q4ZwDfw1FI4HR7s_YxTNszIsXjBj845pDphmX5olK9k4LaSRhf9cHHUKl6J9l_dpnFeG_vfG5r41OH5nKgDQgy2cGIlklgps5HX0dnVIKjE3p83O0yM972QV77apEHeSJlDQr6nwbJg_qntHnmNRvIWOcG_j7atgQvCJD2rEuI4vWsIhgU74wfvu9w7eA_mTd-tZbAYh9I",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkW19pTePcyUS8RCygUMqqs-L_DYlfCCXskgfNuMGgpIOj73euoqLVZ0-ni7KPPtW_WhhAWukgCyQI9tl0t5l_HgYaAG--aly_KbHDHQh6DrYPHzGrK3ZQBgEmnzXZ9FH8zkqCJ9cR6mIWsrNusggyL4uubhwQ_G0E-CGsmyP-r2dzN5zjTdHZaGUsXcvoU9eGPkwKozvZsHl2DJnZkZOKqG4uYAq4ALk8b0LPKr41_j5l2dm599bq6XjdktpwTr3j0CwnQb1c300"
    ],
    color: "surface",
    gridSpan: "md:col-span-2 lg:col-span-4",
  },
  {
    id: "s6",
    title: "Artificial Turf Service",
    icon: "energy_savings_leaf",
    shortDesc: "Premium quality, low-maintenance artificial grass installation.",
    longDesc: "Transform your lawn with our premium artificial turf solutions. Perfect for high-traffic areas or spots where natural grass struggles, our turf looks and feels like the real thing without the maintenance.",
    images: ["/images/artificial_turf.png"],
    color: "high",
    gridSpan: "md:col-span-4 lg:col-span-3",
  },
  {
    id: "s7",
    title: "Hydroculture Service",
    icon: "science",
    shortDesc: "Soil-less planting solutions for indoor and unique outdoor spaces.",
    longDesc: "Embrace the future of planting with our hydroculture services. Ideal for corporate offices and modern homes, these systems offer cleaner, more controlled plant growth with minimal mess.",
    images: ["/images/hydroculture_setup.png"],
    color: "high",
    gridSpan: "md:col-span-4 lg:col-span-3",
  },
  {
    id: "s8",
    title: "Irrigation System Installation",
    icon: "water",
    shortDesc: "Automated, water-efficient watering systems.",
    longDesc: "Optimize your water usage with our smart irrigation systems. We design and install automated solutions that react to weather conditions and soil moisture, ensuring your garden gets exactly what it needs.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDOdu5IlmQLrCPdZZ0hLDIZ9wisvMLmBXsTmHHmKCG5u_vitDZ5zL2D2Wxv3gg3bF3IL0SzAaNJm6OPFyL62thYWU2pKZsVQJSmdM6JPv_BLjoDqHv0GBE1jo3sTLdZN-BvcRdjAeKbA_FD48acn8f0Ue1mtwDQbVqk7D-0eq2KFwNoKTLypU-2Cb-WQ3F4QBPibyMigEZYsyWhWQj914jKsaEhAL-ysOmAankupRNfzsYqyT3nrQDd2X8R2_yyZU7DrT-zOiiLfdQ"],
    color: "high",
    gridSpan: "md:col-span-4 lg:col-span-3",
  },
  {
    id: "s9",
    title: "Fresh Flowers Floral Display",
    icon: "local_florist",
    shortDesc: "Vibrant and seasonal floral arrangements for events or daily aesthetics.",
    longDesc: "Bring color and fragrance to your space with our custom floral displays. We source the freshest seasonal blooms to create stunning arrangements that elevate any environment.",
    images: ["/images/fresh_floral_display.png"],
    color: "high",
    gridSpan: "md:col-span-4 lg:col-span-3",
  },
  {
    id: "s10",
    title: "Live and Artificial Green Wall Installation",
    icon: "filter_vintage",
    shortDesc: "Transform vertical spaces into lush, living art pieces or ultra-realistic artificial green accents.",
    longDesc: "Our green walls are architectural focal points. Whether you choose living plants for air purification or premium artificial foliage for zero maintenance, we create vertical gardens that inspire.",
    images: ["/images/green_wall_installation.png"],
    color: "high",
    gridSpan: "md:col-span-4 lg:col-span-12",
  },
];

export function ServicesGallery() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedService.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedService) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedService.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            onClick={() => openModal(service)}
            className={`${service.gridSpan} group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl ${
              service.color === "primary"
                ? "bg-primary text-on-primary"
                : service.color === "surface"
                ? "bg-surface-container-low border border-outline-variant"
                : "bg-surface-container-high border border-outline-variant hover:bg-surface-bright"
            } p-8`}
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className={`${
                service.color === "primary" 
                ? "bg-white/20 backdrop-blur-sm" 
                : "bg-primary-container text-on-primary-container"
              } w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${service.color === "primary" ? "text-white" : "text-primary"}`}>
                {service.title}
              </h3>
              
              {service.id === 's1' && service.features && (
                 <ul className="grid grid-cols-2 gap-2 text-sm font-medium text-on-surface-variant mb-6">
                    {service.features.map(f => (
                        <li key={f} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm text-primary">check_circle</span> {f}
                        </li>
                    ))}
                 </ul>
              )}

              {service.id !== 's1' && (
                <p className={`mb-8 flex-1 ${service.color === "primary" ? "text-on-primary-container/80" : "text-on-surface-variant"}`}>
                  {service.shortDesc}
                </p>
              )}

              <div className={`rounded-lg overflow-hidden ${service.id === 's1' ? 'h-64' : 'h-40'} mb-6 mt-auto`}>
                <img alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={service.images[0]} />
              </div>
              
              {service.id === 's2' ? (
                 <Link onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 font-bold hover:underline" href="/projects">
                    Explore Portfolio <span className="material-symbols-outlined">arrow_forward</span>
                 </Link>
              ) : (
                <div className="flex items-center gap-2 font-bold text-sm">
                   View Details <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail View */}
      {selectedService && (
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
            className="bg-surface rounded-3xl overflow-hidden w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="md:w-1/2 relative bg-black h-[300px] md:h-auto">
              <img
                src={selectedService.images[currentImageIndex]}
                alt={`${selectedService.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover select-none"
              />
              
              {selectedService.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full backdrop-blur-md transition-all"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full backdrop-blur-md transition-all"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {selectedService.images.map((_, idx) => (
                        <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/40'}`} />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Info Section */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center gap-3 text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">{selectedService.icon}</span>
                <h2 className="text-3xl font-headline font-bold text-on-surface">{selectedService.title}</h2>
              </div>
              
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                  {selectedService.longDesc}
                </p>
                
                {selectedService.features && (
                  <div className="mb-10">
                    <h4 className="text-sm uppercase tracking-widest font-bold text-primary mb-4">Core Deliverables</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-on-surface">
                          <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-outline-variant">
                <Link 
                   href={`/contact-us?service=${encodeURIComponent(selectedService.title)}`}
                   onClick={closeModal}
                   className="flex-1 bg-primary text-on-primary px-6 py-4 rounded-xl font-bold text-center hover:shadow-lg transition-all"
                >
                  Request Quote
                </Link>
                {selectedService.id === 's2' && (
                  <Link 
                    href="/projects"
                    onClick={closeModal}
                    className="flex-1 bg-surface-container-high text-on-surface px-6 py-4 rounded-xl font-bold text-center hover:bg-surface-bright transition-all"
                  >
                    View Portfolio
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
