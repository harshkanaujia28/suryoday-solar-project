import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionHeading } from "@/layouts/SiteLayout";
import { SavingsCalculator } from "@/components/calculator/SavingsCalculator";
import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/common/Reveal";
import { FaCheckCircle, FaFileAlt } from "react-icons/fa";

export const Route = createFileRoute("/subsidy")({
  head: () => ({
    meta: [
      { title: "PM Surya Ghar Solar Subsidy — Apply With Suryoday" },
      { name: "description", content: "Get up to ₹78,000 subsidy under PM Surya Ghar Muft Bijli Yojana. We handle eligibility, documents and DISCOM application end-to-end." },
      { property: "og:title", content: "Solar Subsidy — Up to ₹78,000 | Suryoday" },
      { property: "og:description", content: "PM Surya Ghar subsidy assistance — eligibility, documents, application." },
      { property: "og:url", content: "/subsidy" },
    ],
    links: [{ rel: "canonical", href: "/subsidy" }],
  }),
  component: Subsidy,
});

const SLABS = [
  { kw: "Up to 2 kW", amt: "₹30,000 per kW" },
  { kw: "2 kW – 3 kW", amt: "₹18,000 per additional kW" },
  { kw: "Above 3 kW", amt: "Capped at ₹78,000 total" },
];

const ELIGIBILITY = [
  "Indian resident with own home",
  "Valid electricity connection (DISCOM)",
  "Roof area available (≈100 sq ft per kW)",
  "First-time solar applicant",
];

const DOCS = ["Aadhaar Card", "PAN Card", "Latest Electricity Bill", "Property Ownership Proof", "Cancelled Cheque / Bank Passbook", "Passport-size Photo"];

function Subsidy() {
  return (
    <SiteLayout>
      <PageHero eyebrow="PM Surya Ghar Yojana" title="Get Up To ₹78,000 Solar Subsidy" subtitle="The government pays a chunk of your solar installation. We take care of the entire application." />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 h-full">
              <h3 className="font-display text-xl font-bold">Subsidy Slabs</h3>
              <ul className="mt-4 space-y-3">
                {SLABS.map((s) => (
                  <li key={s.kw} className="rounded-xl bg-orange-50 p-3 text-sm">
                    <div className="font-semibold">{s.kw}</div>
                    <div className="text-muted-foreground">{s.amt}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 h-full">
              <h3 className="font-display text-xl font-bold">Eligibility</h3>
              <ul className="mt-4 space-y-2">
                {ELIGIBILITY.map((e) => (
                  <li key={e} className="flex gap-2 text-sm"><FaCheckCircle className="mt-1 text-[var(--color-solar-green)]" />{e}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 h-full">
              <h3 className="font-display text-xl font-bold">Documents Required</h3>
              <ul className="mt-4 space-y-2">
                {DOCS.map((d) => (
                  <li key={d} className="flex gap-2 text-sm"><FaFileAlt className="mt-1 text-[var(--color-solar-blue)]" />{d}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-to-b from-orange-50/30 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Estimate" title="How Much Subsidy Will You Get?" />
          <SavingsCalculator />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <div className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[var(--color-solar-orange)]">Apply Now</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">We File Your Application — Free</h2>
            <p className="mt-3 text-muted-foreground">Skip the portal hassle. Share your details and we'll submit your PM Surya Ghar application on your behalf at no extra cost.</p>
          </div>
          <LeadForm source="subsidy-page" />
        </div>
      </section>
    </SiteLayout>
  );
}
