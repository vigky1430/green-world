import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Green World Landscaping, our mission, vision, and commitment to sustainable landscapes.",
};

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-bold tracking-wider mb-6">ESTABLISHED 1998</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface leading-tight mb-6">Cultivating the Future of <span className="text-primary">Sustainable Landscapes</span></h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg mb-8 font-body">
              We blend innovative technology with ecological wisdom to create outdoor spaces that aren't just beautiful, but are living systems designed to thrive for generations.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-12 h-12 rounded-full border-4 border-surface" alt="professional landscape architect smiling in a sunny outdoor setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkmy3dD5DRAaKD9p3IZ8_t8py21q_T7vCdtqbUxq0aZfpaVvBy2weOFZ9LfYdsr_iNFOCvyxPPlLi8Wp_RFoApgc7dHVnLCYsnOr0zUhmdK1IPipljnSIxQmw-5KpVJFqRdrLtAj3pfp5qfkIX4A4J7llEIPsJ9xaVCkLKAfIuVu9USuIseLlguVHtYQb565IgHv-kpq1cs2U8A0bMStBxJ16XI9hNCvS8cT3we_bMshlDDUkvVYiWS8dlO8ByCsGU6WsD7JGBVs4" />
                <img className="w-12 h-12 rounded-full border-4 border-surface" alt="botanical expert examining a native plant species in a garden" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs39f1stQg9e4_0gCCc31w3yCV7xnsm5smGUIfdXzCknt9U5HfvBXdYqX5JxIwm4G5vb61KPQXHifzfeYEkYBH0bZiSbRuKwapuzGYhRY1iEJlaA3sDVDRaJvLokK2qTfVKADIUK7uDzYSpH6IYynkHl-3OFczl8vF62nK4JN-jBwhL_9RMKfDXSWurIwVChSo9KVE_NfMLWq9pg0F9d4nw7rSbglK88KpEnsvq6JSsbpSiPJCaCyapiY1T9DqkM8I8ls0JJkewTU" />
                <img className="w-12 h-12 rounded-full border-4 border-surface" alt="sustainable design consultant working on a site plan at a wooden desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxyda8GVEjnC9vn7JoxMgjbTyJu9YdWGNMqrOkyMMzhK6W9u5GunwriJW6IM3zIBvvnbqI4AMvoggRi55gMY0lw1VYMHhry1Q3kCU2BJkYhUz4CMBj9Dlla_RczBUZYq8n3MsGYe2081MMJ_BbDdOvXMm5SgoaaIup5B4g0TfZf6Khd2qTIMc8TRAlvKBEFsyGtTm6PNPRgdTlOyCSpvB7lXyy3PoOtMUqUgr-iuZq6n51l9x15bsSvZca2rIEbE3Veneh7PSzK-E" />
              </div>
              <div className="text-sm">
                <p className="font-bold text-on-surface">Join 500+ Happy Clients</p>
                <p className="text-on-surface-variant">Expert-led sustainable projects</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="overhead view of a modern sustainable garden design featuring native plants, stone walkways, and a smart irrigation system" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApJlJvFqKkHIfWZ9h5jRSIaP6PqGyACIFQZCCBH-j1CmAltwDuLJT1bkHtG9qj3qgn8djmHCj2jYyts3VkYGavyNHrdFDpDr8gT5dI2NiX2BDNGnKmyoFSD_VPA_OjerU0hq_UVj8NuMHtKhjvI3CjHxvDME0z4pmHM5rgxQffM_7SvfZe2t1GwBkC3p1J_oBTlOyYw5YiDsimln522fOlXIgNcmFLH2kvmSxh0rOk3Lgw3lmfj1d0d2IVUn3zQvvjZVQeMaolwhA" />
            </div>
            <div className="absolute -bottom-6 -left-4 md:-left-6 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4 border border-surface-container-high">
              <div className="bg-primary-container p-3 rounded-lg">
                <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>eco</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Eco-Friendly Materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Bento Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Mission Card */}
          <div className="md:col-span-2 bg-primary-container text-on-primary-container p-8 md:p-12 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl mb-6">flag</span>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed opacity-90">
                To redefine the relationship between urban living and nature through precision landscaping and ecological restoration. We strive to provide every client with a sanctuary that supports local biodiversity while offering unparalleled aesthetic value.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black">25+</span>
                <span className="text-sm uppercase tracking-tighter font-bold opacity-75">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black">1.2k</span>
                <span className="text-sm uppercase tracking-tighter font-bold opacity-75">Hectares Restored</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-surface-container-highest p-8 md:p-12 rounded-2xl border border-outline-variant flex flex-col">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">visibility</span>
            <h2 className="text-4xl font-bold mb-6 text-on-surface">Our Vision</h2>
            <p className="text-lg leading-relaxed text-on-surface-variant mb-6">
              A world where every landscape serves as a carbon sink and a haven for wildlife.
            </p>
            <ul className="space-y-4 mt-auto">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                <span className="font-medium">Net-Zero Operations</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                <span className="font-medium">Smart Irrigation</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                <span className="font-medium">Biodiversity Leadership</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values / Innovation Section */}
      <section className="p-8 py-24 6 bg-surface-dim">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-on-surface mb-4">Innovation at Our Core</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body">We don't just use tools; we pioneer new methods to ensure your landscape is smart, sustainable, and stunning.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-surface rounded-xl p-8 hover:shadow-xl transition-shadow border border-surface-container-high group">
              <div className="bg-secondary-fixed text-on-secondary-fixed w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-on-surface">Smart Tech</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Automated soil monitoring and weather-responsive maintenance systems.</p>
            </div>
            <div className="bg-surface rounded-xl p-8 hover:shadow-xl transition-shadow border border-surface-container-high group">
              <div className="bg-secondary-fixed text-on-secondary-fixed w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">water_drop</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-on-surface">Hydro-Efficiency</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Advanced rainwater harvesting and greywater recycling integration.</p>
            </div>
            <div className="bg-surface rounded-xl p-8 hover:shadow-xl transition-shadow border border-surface-container-high group">
              <div className="bg-secondary-fixed text-on-secondary-fixed w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">potted_plant</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-on-surface">Native Species</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Specialized focus on endemic flora to ensure low maintenance and high resilience.</p>
            </div>
            <div className="bg-surface rounded-xl p-8 hover:shadow-xl transition-shadow border border-surface-container-high group">
              <div className="bg-secondary-fixed text-on-secondary-fixed w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">solar_power</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-on-surface">Solar Lighting</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Fully integrated, self-sustaining illumination designs for evening ambiance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="bg-inverse-surface text-inverse-on-surface rounded-3xl flex flex-col md:flex-row items-stretch">
          <div className="flex-1 p-8 py-12 md:p-12 lg:p-20">
            <h2 className="text-4xl font-bold mb-8">Committed to the <span className="text-primary-fixed">Environment</span></h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 rounded-full bg-primary-fixed"></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Circular Materials</h4>
                  <p className="opacity-70 text-sm">We source 90% of our hardscaping materials from recycled or sustainable local quarries, reducing our carbon footprint.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 rounded-full bg-primary-fixed"></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Chemical-Free Care</h4>
                  <p className="opacity-70 text-sm">Our maintenance programs utilize 100% organic fertilizers and biological pest control methods.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 rounded-full bg-primary-fixed"></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Education First</h4>
                  <p className="opacity-70 text-sm">Every project includes a "Green Growth Guide" to help our clients maintain their new ecosystem sustainably.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 min-h-[400px] relative">
            <img className="absolute inset-0 w-full h-full object-cover rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none" alt="vibrant garden showing healthy soil, blooming wildflowers, and a modern birdbath attracting local birds" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_0XRkjzwbdmcRH6GoHvPnVReVKCa9CZE3G5woSQ039mIjwVfp_8SwPal6R9SsBcAH3Ktizt2RQDU2SKbZONCnH_VGKLXckYP0fav7uP1x1WAYMYeGeFOhUIfjYGvhYGyH-8x0FEuQVn4fPKv8vn-A5YLeg1-spur3U4ofXZSMZCZQBGc3LLDKV3ApnVV3_RBDtkPviYYle3zn6ro3-6cLV03TF6M8DYz9AsL7FI54Lbjff5ptGUwRqddUzPOQBHKdqg43ZRcXCB0" />
          </div>
        </div>
      </section>
    </>
  );
}
