import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/layouts/SiteLayout";
import { SERVICES } from "@/data/content";
import { LeadForm } from "@/components/forms/LeadForm";
import { FinalCTA } from "@/components/home/Sections";
import { Reveal } from "@/components/common/Reveal";
import { FaCheck } from "react-icons/fa";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Solar Services — Residential, Commercial & Industrial | Suryoday" },
      { name: "description", content: "Complete solar services: rooftop installation, commercial solar, industrial plants, solar water pumps and maintenance AMC." },
      { property: "og:title", content: "Solar Services — Suryoday Solar Energy" },
      { property: "og:description", content: "Residential, commercial, industrial solar and AMC services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Services" title="End-to-End Solar Solutions" subtitle="From a 1 kW home rooftop to a 5 MW industrial plant — one team, one warranty, one promise." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug}>
              <div id={s.slug} className={`grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden rounded-3xl shadow-premium">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-72 w-full object-cover sm:h-96" />
                </div>
                <div>
                  <div className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[var(--color-solar-orange)]">Service {i + 1}</div>
                  <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground sm:text-lg">{s.short}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <FaCheck className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-solar-green)]" />{b}
                      </li>
                    ))}
                  </ul>
                  <a href="#quote" className="mt-6 inline-flex items-center rounded-full gradient-sunrise px-6 py-3 text-sm font-bold text-white shadow-premium hover:shadow-glow">Get Quote →</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="quote" className="bg-gradient-to-b from-orange-50/30 to-white py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <div className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[var(--color-solar-orange)]">Free Quote</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Tell Us About Your Project</h2>
            <p className="mt-3 text-muted-foreground">Fill the form and our solar expert will call you within 30 minutes with a tailored proposal.</p>
          </div>
          <LeadForm source="services-page" fields={["name", "phone", "city", "bill", "message"]} />
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
