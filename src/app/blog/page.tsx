import BlogList, { type BlogCardPost } from "@/app/blog/BlogList"
import PageHero from "@/app/components/PageHero"
import { blogPosts } from "@/lib/blog-posts"
import { createBreadcrumbJsonLd, createPageMetadata, SITE_URL } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Blog und Wissen zu industrieller CT",
  description: "Fachbeiträge zu industrieller CT, Röntgenanalyse, Fehleranalyse und Qualitätssicherung.",
  path: "/blog",
  keywords: ["industrielle CT Wissen", "Röntgenanalyse Blog", "zerstörungsfreie Prüfung"],
})

export default function BlogPage() {
  const blogCards: BlogCardPost[] = blogPosts.map(({ slug, title, excerpt, date, tags }) => ({
    slug,
    title,
    excerpt,
    date,
    tags,
  }))
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Blog", path: "/blog" },
  ])
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Kinemo Blog",
    description: "Fachbeiträge zu industrieller CT, Röntgenanalyse, Fehleranalyse und Qualitätssicherung.",
    url: `${SITE_URL}/blog`,
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  }

  return (
    <main className="bg-white text-gray-900 dark:bg-[#061b26] dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Blog & Wissen"
        title="Technisches Wissen für bessere Prüfentscheidungen."
        description="Grundlagen, Verfahren und Einordnungen rund um industrielle CT, Röntgenanalyse und zerstörungsfreie Qualitätssicherung."
        code="KNOWLEDGE / NDT"
      />
      <BlogList posts={blogCards} />
    </main>
  )
}
