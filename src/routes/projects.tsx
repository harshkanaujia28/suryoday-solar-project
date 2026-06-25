import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/layouts/SiteLayout";
import { ProjectsGrid } from "@/components/projectCards/ProjectsGrid";
import { FinalCTA } from "@/components/home/Sections";

const FILTERS = ["All", "Residential", "Commercial", "Industrial"] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — 500+ Solar Installations | Suryoday" },
      { name: "description", content: "Browse our portfolio of residential, commercial and industrial solar installations across India." },
      { property: "og:title", content: "Projects — Suryoday Solar Energy" },
      { property: "og:description", content: "500+ rooftop and ground-mount solar installations delivered." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<typeof FILTERS[number]>("All");
  return (
    <SiteLayout>
      <PageHero eyebrow="Portfolio" title="500+ Projects. One Standard. Premium." subtitle="Real installations, real capacities, real savings — across homes, schools, hospitals and factories." />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  filter === f
                    ? "gradient-sunrise text-white shadow-premium"
                    : "bg-white text-foreground ring-1 ring-border hover:ring-[var(--color-solar-orange)]"
                }`}>
                {f}
              </button>
            ))}
          </div>
          <ProjectsGrid filter={filter} />
        </div>
      </section>
      <FinalCTA />
    </SiteLayout>
  );
}
