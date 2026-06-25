import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionHeading } from "@/layouts/SiteLayout";
import { Stats, FinalCTA } from "@/components/home/Sections";
import { Reveal } from "@/components/common/Reveal";
import { FaBullseye, FaEye, FaHeart, FaAward, FaCheckCircle } from "react-icons/fa";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Suryoday Solar Energy" },
      { name: "description", content: "10+ years of premium solar installations. Learn about our mission, vision and team of certified solar experts." },
      { property: "og:title", content: "About — Suryoday Solar Energy" },
      { property: "og:description", content: "Trusted MNRE solar partner with 500+ installations across India." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { Icon: FaBullseye, title: "Our Mission", desc: "Make clean, affordable solar energy accessible to every Indian home and business." },
  { Icon: FaEye, title: "Our Vision", desc: "Be India's most trusted solar brand by 2030 — known for quality, honesty and lifetime support." },
  { Icon: FaHeart, title: "Our Values", desc: "Customer first. Premium components only. Transparent pricing. Long-term partnership." },
];

const CERTS = ["MNRE Approved", "ISO 9001:2015", "Tier-1 Panel Partner", "DISCOM Empanelled", "GST Registered", "Make In India"];

function About() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="Brightening India, One Rooftop At A Time" subtitle="A decade of premium solar craftsmanship — built on honesty, quality and lasting partnerships." />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 lg:items-center">
          <Reveal>
            <div className="aspect-square w-full rounded-3xl gradient-hero p-8 shadow-premium">
              <div className="h-full w-full rounded-2xl gradient-sunrise grid place-items-center text-white">
                <div className="text-center">
                  <div className="font-display text-6xl font-bold">10+</div>
                  <div className="mt-2 text-sm uppercase tracking-widest">Years Powering India</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[var(--color-solar-orange)]">Our Story</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Built By Engineers, Trusted By Thousands</h2>
            <p className="mt-4 text-muted-foreground">
              Suryoday Solar Energy was founded in 2015 by a small team of solar engineers who believed Indian families deserved better than overpriced, under-engineered rooftop systems. Today we've installed over 500 projects across 7 states with a NPS that puts us in the top 5% of installers nationally.
            </p>
            <p className="mt-3 text-muted-foreground">
              Every panel we install is Tier-1. Every inverter is from a brand we'd put on our own roof. Every system we hand over comes with a 5-year free service contract — because we measure success in decades, not invoices.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {CERTS.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm font-medium">
                  <FaCheckCircle className="text-[var(--color-solar-green)]" />{c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-to-b from-orange-50/30 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Stand For" title="Mission · Vision · Values" />
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 hover:shadow-premium transition">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-sunrise text-white shadow-glow">
                    <v.Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" title="Meet The Team Behind The Sun" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Arun Sharma", role: "Founder & CEO" },
              { name: "Neha Patil", role: "Head of Engineering" },
              { name: "Rajesh Kumar", role: "Operations Director" },
              { name: "Priya Iyer", role: "Customer Success" },
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5">
                  <div className="mx-auto h-24 w-24 rounded-full gradient-sunrise grid place-items-center text-3xl font-bold text-white shadow-glow">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="mt-4 font-display text-lg font-bold">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                  <div className="mt-3 flex justify-center gap-2 text-[var(--color-solar-yellow)]"><FaAward /><FaAward /><FaAward /></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
