import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/layouts/SiteLayout";
import { LeadForm } from "@/components/forms/LeadForm";
import { SITE } from "@/data/site";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import { Reveal } from "@/components/common/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Suryoday Solar Energy" },
      { name: "description", content: `Reach Suryoday Solar Energy — ${SITE.phone}. Free site visit and proposal in 24 hours.` },
      { property: "og:title", content: "Contact Suryoday Solar Energy" },
      { property: "og:description", content: "Free site visit and proposal in 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE.name,
          telephone: SITE.phone,
          email: SITE.email,
          address: SITE.address,
          openingHours: "Mo-Sa 09:00-19:00",
        }),
      },
    ],
  }),
  component: Contact,
});

const INFO = [
  { Icon: FaMapMarkerAlt, label: "Office", value: SITE.address },
  { Icon: FaPhoneAlt, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
  { Icon: FaEnvelope, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { Icon: FaClock, label: "Hours", value: SITE.hours },
];

function Contact() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Get In Touch" title="Let's Power Your Future" subtitle="Call, message or fill the form. Free site visit, no obligation." />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="space-y-4">
              {INFO.map((it) => (
                <a key={it.label} href={it.href ?? "#"} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 hover:shadow-premium transition-all">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-sunrise text-white">
                    <it.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{it.label}</div>
                    <div className="font-medium">{it.value}</div>
                  </div>
                </a>
              ))}
              <div className="flex gap-3">
                <a href={`tel:${SITE.phoneRaw}`} className="flex-1 rounded-full gradient-sunrise px-5 py-3 text-center text-sm font-bold text-white shadow-premium">
                  📞 Call Now
                </a>
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-premium">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 aspect-video">
                <iframe title="Office map" src="https://www.openstreetmap.org/export/embed.html?bbox=73.8%2C18.5%2C73.9%2C18.6&layer=mapnik" className="h-full w-full" loading="lazy" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm source="contact-page" fields={["name", "phone", "email", "city", "bill", "message"]} cta="Send Inquiry" />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
