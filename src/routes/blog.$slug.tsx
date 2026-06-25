import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/layouts/SiteLayout";
import { BLOG_POSTS } from "@/data/content";
import { LeadForm } from "@/components/forms/LeadForm";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Suryoday Blog` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/blog/${loaderData.post.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${loaderData.post.slug}` }] : [],
  }),
  component: BlogPost,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-40 text-center">
        <h1 className="font-display text-3xl font-bold">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-flex rounded-full gradient-sunrise px-6 py-3 text-white">Back to blog</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => <div className="p-20 text-center">{error.message}</div>,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link to="/blog" className="text-sm text-[var(--color-solar-orange)] hover:underline">← Back to blog</Link>
          <div className="mt-6 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[var(--color-solar-orange)]">{post.category}</div>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{post.title}</h1>
          <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
            <span>{post.date}</span><span>·</span><span>{post.read}</span>
          </div>
          <div className="my-8 aspect-video rounded-3xl gradient-hero grid place-items-center text-7xl">☀️</div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
            <p>India's rooftop solar market is growing at over 40% year-on-year — and there's never been a better time to make the switch. In this guide we walk through everything you need to know to make an informed decision.</p>
            <h2 className="font-display text-2xl font-bold mt-8">Why this matters</h2>
            <p>With electricity tariffs rising 5–8% annually across most DISCOMs and panel prices at all-time lows, the payback math has never been more favourable. A typical 5 kW residential system now pays itself back in under 4 years — and continues to generate free power for the next 21.</p>
            <h2 className="font-display text-2xl font-bold mt-8">Key takeaways</h2>
            <ul>
              <li>Tier-1 panels with 25-year linear warranty are the new baseline</li>
              <li>Net metering policy varies by state — check your DISCOM</li>
              <li>Subsidies are claimed post-commissioning via the PM Surya Ghar portal</li>
              <li>Hybrid systems with battery backup are now within 20% of pure on-grid pricing</li>
            </ul>
            <p>If you have questions about your specific situation, get in touch — our solar experts are happy to walk you through the numbers with no obligation.</p>
          </div>
          <div className="mt-12">
            <LeadForm source={`blog-${post.slug}`} cta="Get Free Solar Quote" />
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
