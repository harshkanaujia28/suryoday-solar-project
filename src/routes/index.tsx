import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionHeading } from "@/layouts/SiteLayout";
import { Hero } from "@/components/home/Hero";
import { TrustBar, Stats, WhyUs, ProcessSection, FAQ, Testimonials, FinalCTA } from "@/components/home/Sections";
import { ServiceCards } from "@/components/home/ServiceCards";
import { SavingsCalculator } from "@/components/calculator/SavingsCalculator";
import { ProjectsGrid } from "@/components/projectCards/ProjectsGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suryoday Solar Energy — Premium Solar Installation in India" },
      { name: "description", content: "Reduce electricity bills by up to 90% with reliable solar solutions for homes, businesses and industries. MNRE approved. 500+ projects." },
      { property: "og:title", content: "Suryoday Solar Energy — Premium Solar Installation in India" },
      { property: "og:description", content: "Reduce electricity bills by up to 90% with premium solar from a trusted MNRE-approved installer." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Stats />
      <WhyUs />
      <section id="calculator" className="bg-gradient-to-b from-white to-orange-50/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Savings Calculator" title="See How Much You Could Save" />
          <SavingsCalculator />
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Services" title="Solar Solutions For Every Need" desc="From rooftop residential to MW-scale industrial — we do it all." />
          <ServiceCards />
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-blue-50/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Project Showcase" title="500+ Installations & Counting" />
          <ProjectsGrid />
        </div>
      </section>
      <ProcessSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}
