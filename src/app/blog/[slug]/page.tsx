// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import PageCta from "@/app/components/PageCta"
import { blogPostMap, blogPosts } from "@/lib/blog-posts"
import { SITE_URL, createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"
import { entityIds } from "@/lib/schema"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPostMap[slug]

  if (!post) {
    return createPageMetadata({
      title: "Blogbeitrag nicht gefunden",
      description: "Der angeforderte Blogbeitrag konnte nicht gefunden werden.",
      path: `/blog/${slug}`,
      noindex: true,
    })
  }

  return createPageMetadata({
    title: `${post.title} | Kinemo Blog`,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: post.tags,
    image: post.image,
  })
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPostMap[slug]
  if (!post) return notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.excerpt,
    image: post.image,
    author: { "@id": entityIds.organization },
    publisher: { "@id": entityIds.organization },
    isPartOf: { "@id": entityIds.website },
    about: post.tags.map((name) => ({ "@type": "Thing", name })),
    url: `${SITE_URL}/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  }

  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-white dark:bg-[#061b26]">
        <header className="border-b border-white/10 bg-[#061b26] px-6 py-16 text-white md:py-24">
          <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="font-mono text-xs uppercase tracking-[0.2em] text-[#50C9E1] hover:text-white">
              ← Blog & Wissen
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <time dateTime={post.date} className="text-sm text-white/55">
                {new Date(post.date).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              {post.tags.map((tag) => (
                <span key={tag} className="border border-[#50C9E1]/25 px-2 py-1 text-xs font-medium text-[#50C9E1]">#{tag}</span>
              ))}
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] md:text-5xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{post.excerpt}</p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <article
            className="prose prose-lg prose-neutral dark:prose-invert max-w-none
              prose-headings:text-[#08415C] dark:prose-headings:text-white
              prose-a:text-[#50C9E1] prose-li:text-gray-700 dark:prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </div>
        <PageCta
          title="Vom Fachbeitrag zur konkreten Prüfentscheidung."
          description="Wir übertragen die Methodik auf Ihr Bauteil und Ihre Fragestellung."
          label="Prüfaufgabe besprechen"
        />
      </main>
    </>
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}
