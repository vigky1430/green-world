import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Green World Landscaping",
  description: "Comprehensive suite of landscaping solutions tailored for the modern environment.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover brightness-[0.4]" alt="panoramic view of a perfectly manicured luxury estate garden" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABvEuMf1o1sh2wkOibWcTZZN0tNJuESecHMS1wYuYYb2xcn0Q8T5x08eUiOhwZ7oub2JamLH7JcHc60OyNwxsVygtmbAvKgOJxZMVYhO-k38gWKxxC-Rn5uQ6scga9__rgVIxcsRQPVS_imVTcvYM38CEbRH-j6n4IyrZQCa1uRQMTE59hT-bR98yMvioIMTYsghmI017kXa88K6Ty99qWGGcCOjRX8gLgRjvhCqNsyRt3onT6Ta0MTnVB7-b2j8Al-GJq9NJDl6o" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <span className="inline-block py-1 px-4 bg-tertiary-container text-on-tertiary-container rounded-full text-sm font-bold mb-6 tracking-wider uppercase">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">Mastering the Art of <br/><span className="text-secondary-fixed">Natural Spaces</span></h1>
          <p className="text-xl text-surface-container-highest max-w-2xl mx-auto font-light leading-relaxed">From sustainable maintenance to architectural design, we provide a comprehensive suite of landscaping solutions tailored for the modern environment.</p>
        </div>
      </header>

      {/* Services Bento Grid */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-on-surface mb-4">Specialization Areas</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">
          
          {/* Landscape Maintenance */}
          <div className="md:col-span-4 lg:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-8 border border-outline-variant hover:shadow-xl transition-all duration-300">
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-primary-container text-on-primary-container w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">potted_plant</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Landscape Maintenance</h3>
              <img alt="Professional landscape maintenance team at work" className="w-full h-64 object-cover rounded-lg mb-6 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjCWnxAh8uXiHdgI3Dah90l3_OlkVKwSh8-kyVsChZTQPIB33VTLa_acrHKWCFd_NX5bqNvyE52ByYGlw1cejQ4a8eotspmjFlkjouDndBBnKie9vGKI80Yv0ikHLj5-sAXc3Ud0b-Ft0vXvJ9zv4IH4xaobNE3WkZMTvLIwPbYedIFWjCBvuBbaFRJJId-NjcjgYWfsCZMVrMC9cfA0Bucfn-_ovMI6gWaGF-aMAmCFEL-u-o1s68brCqu3AWByMYWZ5XxMCBoWg" />
              <ul className="grid grid-cols-2 gap-2 text-sm font-medium text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Seasonal Cleanup</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Turf Management</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Irrigation Audits</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Soil Enrichment</li>
              </ul>
            </div>
          </div>
          
          {/* Design & Build */}
          <div className="md:col-span-4 lg:col-span-4 group relative overflow-hidden rounded-xl bg-primary text-on-primary p-8 hover:shadow-xl transition-all duration-300">
            <div className="relative z-10">
              <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">architecture</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Design &amp; Build</h3>
              <p className="text-on-primary-container/80 mb-8">Conceptualizing and constructing bespoke landscapes that merge aesthetic vision with functional site-specific engineering.</p>
              <div className="rounded-lg overflow-hidden h-64 mb-6">
                <img alt="Modern architectural landscape design project" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQDfCgM1JaVHIVN66bpdm_af9Ddrsi6sOuqwC2sNT_lSQo5_-jDBM-VslDrSRONMOGTOJdIhvOVyfk5cisEsTea204GphzXKI-iBTWY8Wi0sYr9l5WxyU2TfIBB9qIy79mZGAxsIVI1ndRr6XvEx-oacgEZxwes707DWdUF3sEuorDDjhzIwT18QhuNuUePhPC4EhDb672XP-1YerFAEL0vYId1Uta5EVcamv0hnxxQ11PVhzTx9zQ8Iugo9rSBCBArRwugoqnFe0" />
              </div>
              <Link className="inline-flex items-center gap-2 font-bold hover:underline" href="/projects">
                Explore Portfolio <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          
          {/* Water Features */}
          <div className="md:col-span-2 lg:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container p-6 border border-outline-variant hover:border-primary transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary-container text-on-secondary-container w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <h3 className="font-bold text-lg">Water Features</h3>
            </div>
            <p className="text-on-surface-variant text-sm mb-4">Serene waterfalls, koi ponds, and architectural fountains.</p>
            <img alt="Modern stone water feature" className="w-full h-40 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv-b2STqB-GgpwEd7inlkOHmDDdwk9_3pa3HVNNMSjSOBN1d7M3Xgl7s9QV7lbD36AmGDPq-P2YVfMgTUtM-LWvEi9jHuFAetpjAZ3s8J4Rfm1ZnwRS921EAF3fsMUGGgz8H-cfOUoXJpPTjYX2w1Th-OP9ulcUjuOepMZf_Je-9OUiKoT1C8svIFX0O_l4YdSMdTy68sL5xUyrghDbZCvfzFK2UOozjYy__m8fyS60tz3K_WABWMCXkXZH1i4MocKymv86wA4GZk" />
          </div>
          
          {/* Timber Decking */}
          <div className="md:col-span-2 lg:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container p-6 border border-outline-variant hover:border-primary transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary-container text-on-secondary-container w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">deck</span>
              </div>
              <h3 className="font-bold text-lg">Timber Decking</h3>
            </div>
            <p className="text-on-surface-variant text-sm mb-4">High-quality hardwood and composite decking solutions.</p>
            <img alt="Luxury timber outdoor deck" className="w-full h-40 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSL4iMfDZ8-yVjVfsciEVTKK5hSpKRGgs5fUQFeB5H2Zh83_90T0K8WbZsSASUKVN_G0UQjhFC2gin05xts9BW635oqKYqTgxUBTkxoZLvSeHuwQmINbuvkU4ZJdmiLaj1PhEj0ukoojhbZ17tKKe_3UoPxDsGxdSNhgC1Tkjr6zzj-xRuiy3FOSfTq5g5ZVVj0QYeSbhuASdkYS5JF1BCvYB3-LBW629iwrVD0NbT0PKeHYr_KHjPH-dw478dtvfBCM_3Gh_x-OA" />
          </div>
          
          {/* Cleaning */}
          <div className="md:col-span-2 lg:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container p-6 border border-outline-variant hover:border-primary transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary-container text-on-secondary-container w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">cleaning_services</span>
              </div>
              <h3 className="font-bold text-lg">Cleaning</h3>
            </div>
            <p className="text-on-surface-variant text-sm mb-4">Professional pressure washing and deep cleaning for hardscapes.</p>
            <img alt="Pressure washing a stone patio" className="w-full h-40 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD8lZtfi-y2MAcfoTRQlm2pNLslOF2u5SCgk3DQ8QNYhW3Pe4Pv5vUdaxN3Yck9ePy-K0jACdzl8NzWnT1nLoVu7jWQZoybU_qXpL81XuyQweVrkFAJdE4gwNNauF3-o_EQ3wzWmfJWqFKvs1kmxh6gMWIFvejmGNfljfB1dO_zzCqlp8GnmANcp34NWIolEDuY8RPHz-Gs3OfA_Kh650JTbvX5btSsVgnP8KIlJ43-962JsEV6aIlbCquog4sYkEcMZX2KQ7XzQc" />
          </div>
          
          {/* Additional Services Small Cards */}
          <div className="md:col-span-4 lg:col-span-3 bg-surface-container-high p-5 rounded-xl border border-outline-variant hover:bg-surface-bright transition-colors overflow-hidden">
            <span className="material-symbols-outlined text-primary mb-3">energy_savings_leaf</span>
            <h4 className="font-bold mb-1">Sustainable Turf</h4>
            <p className="text-xs text-on-surface-variant mb-3">Eco-friendly grass and drought-resistant sod installation.</p>
            <img alt="Lush sustainable turf" className="w-full h-24 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFvZGF6S2EKpIL5NWbiaTmGY-bLhCdTlcEv0jQdLk1w0xr9W5BzDGndEIBznkmO-vMIcIqfYpETfvoZvlit0szSJsYbDZZpAxgLC3iG1hKmEVb6kBYfU2oILkPPF6RjFWKguLfAwHCjPLWq8XKDCueiVUTTmzLlxXeGP0X29tNfefF_lhr1jtIXSiNvgVqtEYRfRHj_Poz1yUBtfpp37ARQaG1srzYxM7U_sauMCzzUv4VUg7juWuIAmXBwxSCRa5vp6Yd79hBOaM" />
          </div>
          
          <div className="md:col-span-4 lg:col-span-3 bg-surface-container-high p-5 rounded-xl border border-outline-variant hover:bg-surface-bright transition-colors overflow-hidden">
            <span className="material-symbols-outlined text-primary mb-3">lightbulb</span>
            <h4 className="font-bold mb-1">Smart Lighting</h4>
            <p className="text-xs text-on-surface-variant mb-3">Low-voltage LED systems with smart controls.</p>
            <img alt="Outdoor garden lighting" className="w-full h-24 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqaWqdqcljaS-oNfU3lx5bgn1L-2I1MmsFwtVe8Zy2b81wlYgvsRDZF2vquM1dR8VZrzIVVQLHAcUkJrp3wGnYA_QLFryE1MJd6uPezaK8v3mdCH6qytNKxvklGBfdpWt8jVJr1cFFk02I9_zA4BWz-LkPrK1MUzY0QWNi5fsY23AJXdM7cc2s8r8ETSuh0WuxcHdvJntpVwKBboDbgyDc7wcogL4Tf6rqCGmtRKLvu6_kuz55le6kI2LuhavakFkgww7o3-FSzME" />
          </div>
          
          <div className="md:col-span-4 lg:col-span-3 bg-surface-container-high p-5 rounded-xl border border-outline-variant hover:bg-surface-bright transition-colors overflow-hidden">
            <span className="material-symbols-outlined text-primary mb-3">fence</span>
            <h4 className="font-bold mb-1">Fencing &amp; Screens</h4>
            <p className="text-xs text-on-surface-variant mb-3">Custom cedar lattices to modern steel panels.</p>
            <img alt="Modern decorative garden fence" className="w-full h-24 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD628nOczCNw1B9h4EMy463Ws0RptvOToS6Jo3Srar25rfKVHCcj6itO_chTzRiVRvxqqhQLCnDaIzt4z7q6MXExkFNDWlaZF4sl2K22Wbg9X9oUWehuvhycgRTks9qR4KZc7NbxjDBksRdbMMXiaGejbf_1FlO1cETvTO-9lZONG3Pr-d3xavG65bwGBikhQP27SPdEweKPD9y65eD5xqpKJstwHI2Y7ZZDffRGoW-rEAN50yOx0hE3AyK_Q8tOYNg2OsBfaK82c4" />
          </div>
          
          <div className="md:col-span-4 lg:col-span-3 bg-surface-container-high p-5 rounded-xl border border-outline-variant hover:bg-surface-bright transition-colors overflow-hidden">
            <span className="material-symbols-outlined text-primary mb-3">yard</span>
            <h4 className="font-bold mb-1">Arboriculture</h4>
            <p className="text-xs text-on-surface-variant mb-3">Expert tree health assessments and pruning.</p>
            <img alt="Professional tree care" className="w-full h-24 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVGJOGknMHiC3KVg6zR-9Pw6KDp-4IFgh9GQjyoKr2UySFLpsqLU-aP-9chDXTcpDB4yaNP8hliym09rPZf7PiGefvDNqt-VhVUAN7spSm3tk4b_b_RTsPU-PAglqpWH-0tdF7V0EY1M7HKGIjwGrETg9_YfTNEF6jBDCdfJIpNMRiQJxmymyQLOWEtK7VPkXqrf3KM7UsMgQLgsMSH7dkNuCge4xXOCoh63bpfQiTXbc7kCsoNw3osAeGKINj3zRhs6c5EdRDn5I" />
          </div>
          
          <div className="md:col-span-4 lg:col-span-4 bg-surface-container-high p-5 rounded-xl border border-outline-variant hover:bg-surface-bright transition-colors overflow-hidden">
            <span className="material-symbols-outlined text-primary mb-3">eco</span>
            <h4 className="font-bold mb-1">Organic Pest Control</h4>
            <p className="text-xs text-on-surface-variant mb-3">Biological management of garden pests safely.</p>
            <img alt="Ladybug for organic pest control" className="w-full h-28 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMKKef2tPvJm1OgZSMuhFpiVuuZGgPNXPPB_njr2KbuURmiMwGbasSeJuoEG8_MW0xUz8o3mtgrK2hGhoDn3YvBj8nBvMaqmJF__cKpRB_Z4i6YXvpEP1wdRVn-mAvEn056X05HGd4V6i1KkRvoILk9wzgB-MKcI9PLShnWsJjdKSaXF3gmXUk9r5JuXt6FY_mFQaQngPvxZCtQR1yptKYkr2iKEdLDf-qCDepRAMcs7y07sy2bpaB4v87CGRRYk1V8iXhuXHNr44" />
          </div>
          
          <div className="md:col-span-4 lg:col-span-4 bg-surface-container-high p-5 rounded-xl border border-outline-variant hover:bg-surface-bright transition-colors overflow-hidden">
            <span className="material-symbols-outlined text-primary mb-3">foundation</span>
            <h4 className="font-bold mb-1">Retaining Walls</h4>
            <p className="text-xs text-on-surface-variant mb-3">Structural masonry and dry-stone walling.</p>
            <img alt="Stone retaining wall construction" className="w-full h-28 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqGNaiTU37_R6Qx-C52zHsH8TK9chdCrKCY1ma7MLGnehZTOG53u2dLUGACYxlsePm9Q4ZwDfw1FI4HR7s_YxTNszIsXjBj845pDphmX5olK9k4LaSRhf9cHHUKl6J9l_dpnFeG_vfG5r41OH5nKgDQgy2cGIlklgps5HX0dnVIKjE3p83O0yM972QV77apEHeSJlDQr6nwbJg_qntHnmNRvIWOcG_j7atgQvCJD2rEuI4vWsIhgU74wfvu9w7eA_mTd-tZbAYh9I" />
          </div>
          
          <div className="md:col-span-4 lg:col-span-4 bg-surface-container-high p-5 rounded-xl border border-outline-variant hover:bg-surface-bright transition-colors overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="material-symbols-outlined text-primary mb-3">science</span>
                <h4 className="font-bold mb-1">Soil Analysis</h4>
                <p className="text-xs text-on-surface-variant mb-3">Laboratory testing for nutrient optimization.</p>
              </div>
            </div>
            <img alt="Soil testing in laboratory" className="w-full h-28 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBznkN3M0BekBPxd22NSMA62fUk7Wb53z6i5oWV2TOC8NVPFX3NIMkpBib60UgUKuqJqp8AzsGSlob7-iaRU3N8o0Nsh0XgKXQEbS90F1GPdAHEAoTT2_55pJ8Dqxc8YBi8xHbbyLeludurdQcFjfYkKP72B6ToXGlDlzhvGeLiqrfSdQX23R8rDeKBxbsSIIZ8wANLczDzKfSDiyGLhDGy68kKa3RrUWlm3slWIJGRwh2fgK5pT3TrbDjPKObaArzpqXu5O0K_l1E" />
          </div>
          
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="bg-surface-container-highest py-20 border-t border-outline-variant">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-on-surface">Ready to cultivate your vision?</h2>
          <p className="text-lg text-on-surface-variant mb-10">Whether it's routine maintenance or a total landscape transformation, our team is ready to bring expertise to your garden.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all inline-block text-center">
              Schedule a Consultation
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto bg-white border-2 border-primary text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-container/10 transition-all inline-block text-center">
              Download Price Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
