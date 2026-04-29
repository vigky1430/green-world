"use client";

import { useRef, useState, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";

function ContactFormContent() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("loading");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setStatus("error");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl px-6 py-8  md:p-12 shadow-xl border border-outline-variant/30">
      <h2 className="font-headline text-3xl font-bold mb-8 text-on-surface">Project Inquiry</h2>
      
      {status === "success" ? (
        <div className="bg-primary/10 text-primary p-8 rounded-2xl border border-primary/20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
          </div>
          <h3 className="font-headline text-2xl font-bold mb-2">Inquiry Sent Successfully!</h3>
          <p className="mb-6">Thank you for reaching out. Our team will get back to you shortly.</p>
          <button 
            onClick={() => setStatus("idle")}
            className="px-6 py-3 bg-primary text-on-primary rounded-xl font-bold hover:shadow-lg transition-all"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">Name</label>
              <input name="name" required className="w-full px-4 py-3 rounded-xl border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="John Doe" type="text" />
            </div>
            <div className="space-y-2">
              <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">Phone</label>
              <input name="phone" required className="w-full px-4 py-3 rounded-xl border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="+1 (555) 000-0000" type="tel" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">Email</label>
            <input name="email" required className="w-full px-4 py-3 rounded-xl border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="john@example.com" type="email" />
          </div>
          
          <div className="space-y-2">
            <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">Service</label>
            <select name="service" defaultValue={preselectedService} required className="w-full px-4 py-3 rounded-xl border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none">
              <option value="">Select a service...</option>
              <option value="Landscape maintenance">Landscape maintenance</option>
              <option value="Landscape Design and Build works">Landscape Design and Build works</option>
              <option value="Grass and Tree cutting Services">Grass and Tree cutting Services</option>
              <option value="Water Features Installation">Water Features Installation</option>
              <option value="Artificial Turf Service">Artificial Turf Service</option>
              <option value="Hydroculture Service">Hydroculture Service</option>
              <option value="Irrigation System Installation">Irrigation System Installation</option>
              <option value="Fresh Flowers Floral Display">Fresh Flowers Floral Display</option>
              <option value="Live and Artificial Green Wall Installation">Live and Artificial Green Wall Installation</option>
              <option value="Construction Works">Construction Works</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">Message</label>
            <textarea name="message" required className="w-full px-4 py-3 rounded-xl border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Tell us about your project dreams..." rows={5}></textarea>
          </div>
          
          <button 
            disabled={status === "loading"}
            className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed" 
            type="submit"
          >
            {status === "loading" ? "Sending..." : "Send Inquiry"}
            {status !== "loading" && <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>send</span>}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-sm mt-2 font-medium">Failed to send message. Please check your connection and try again.</p>
          )}
        </form>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-12 shadow-xl animate-pulse">Loading form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
