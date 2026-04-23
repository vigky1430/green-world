import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact GreenWorld Landscaping for a free consultation and quote. Reach us by phone, email, WhatsApp or our online enquiry form.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
