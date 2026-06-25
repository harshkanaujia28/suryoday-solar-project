import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/layouts/SiteLayout";
import { BLOG_POSTS } from "@/data/content";
import { Reveal } from "@/components/common/Reveal";
import { useState } from "react";
import { FaSearch, FaClock } from "react-icons/fa";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Solar Tips, Subsidies & Industry News | Suryoday" },
      { name: "description", content: "Solar guides, subsidy explainers and India solar industry news from Suryoday Solar Energy." },
      { property: "og:title", content: "Suryoday Solar Blog" },
      { property: "og:description", content: "Solar guides and industry news." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];
  const filtered = BLOG_POSTS.filter(
    (p) => (cat === "All" || p.category === cat) && p.title.toLowerCase().includes(q.toLowerCase()),
  );
  const [featured, ...rest] = filtered;

  return (
    <SiteLayout>
      <PageHero eyebrow="Insights" title="The Suryoday Solar Blog" subtitle="Guides, calculators and the latest from India's solar revolution." />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="w-full rounded-full border border-border bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-[var(--color-solar-orange)]" />
            </div>
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button key={c} onClick={() => setCat(c)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold ${cat === c ? "gradient-sunrise text-white" : "bg-white ring-1 ring-border hover:ring-[var(--color-solar-orange)]"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {featured && (
            <Reveal>
              <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group mb-10 grid overflow-hidden rounded-3xl bg-white shadow-premium ring-1 ring-black/5 md:grid-cols-2">
                <div className="aspect-video gradient-sunrise md:aspect-auto" />
                <div className="p-7 md:p-10">
                  <div className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[var(--color-solar-orange)]">Featured · {featured.category}</div>
                  <h2 className="mt-3 font-display text-2xl font-bold group-hover:text-[var(--color-solar-orange)] sm:text-3xl">{featured.title}</h2>
                  <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{featured.date}</span><span className="inline-flex items-center gap-1"><FaClock />{featured.read}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-premium transition-all">
                  <div className="aspect-video gradient-hero relative">
                    <div className="absolute inset-0 grid place-items-center text-4xl">☀️</div>
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-solar-orange)]">{p.category}</div>
                    <h3 className="mt-2 font-display text-lg font-bold group-hover:text-[var(--color-solar-orange)]">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{p.date}</span><span>·</span><span>{p.read}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && <p className="mt-10 text-center text-muted-foreground">No articles found.</p>}
        </div>
      </section>
    </SiteLayout>
  );
}
