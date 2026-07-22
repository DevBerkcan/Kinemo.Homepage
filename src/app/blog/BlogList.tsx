"use client"

import Link from "next/link"
import { Scan, Search } from "lucide-react"
import { useMemo, useState } from "react"
import type { BlogPost } from "@/lib/blog-posts"

export type BlogCardPost = Pick<BlogPost, "slug" | "title" | "excerpt" | "date" | "tags">

type BlogListProps = {
  posts: BlogCardPost[]
}

export default function BlogList({ posts }: BlogListProps) {
  const [search, setSearch] = useState("")

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("de-DE")
    return [...posts]
      .filter((post) => !term || `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLocaleLowerCase("de-DE").includes(term))
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  }, [posts, search])

  return (
    <section aria-labelledby="blog-list-title" className="bg-white px-6 py-16 dark:bg-[#061b26] md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#1f9cb1] dark:text-[#50C9E1]">Fachbeiträge</p>
            <h2 id="blog-list-title" className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#08415C] dark:text-white md:text-4xl">Wissen für Entwicklung und Qualität.</h2>
          </div>
          <label className="relative block w-full md:w-80">
            <span className="sr-only">Beiträge durchsuchen</span>
            <Search aria-hidden="true" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Thema oder Begriff"
              className="min-h-12 w-full border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-[#50C9E1] dark:border-white/15 dark:bg-[#0f2b3b] dark:text-white"
            />
          </label>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="group overflow-hidden border border-gray-200 bg-white transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#0f2b3b]">
                <div aria-hidden="true" className="relative flex h-48 items-center justify-center overflow-hidden bg-[#061b26] [background-image:linear-gradient(rgba(80,201,225,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(80,201,225,.08)_1px,transparent_1px)] [background-size:32px_32px]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#50C9E1]/35 text-[#50C9E1] transition-transform duration-500 group-hover:scale-110">
                    <Scan className="h-8 w-8" />
                  </div>
                  <span className="absolute bottom-4 left-5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#50C9E1]">{post.tags[0]}</span>
                </div>
                <div className="p-6">
                  <time dateTime={post.date} className="font-mono text-xs uppercase tracking-[0.16em] text-gray-500 dark:text-white/50">
                    {new Date(post.date).toLocaleDateString("de-DE")}
                  </time>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-[#08415C] dark:text-white">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#1f9cb1] dark:hover:text-[#50C9E1]">{post.title}</Link>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-white/70">{post.excerpt}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => <span key={tag} className="bg-[#50C9E1]/15 px-2 py-1 text-xs font-medium text-[#08415C] dark:text-[#50C9E1]">#{tag}</span>)}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex border-b border-[#50C9E1] pb-1 text-sm font-semibold text-[#08415C] dark:text-[#50C9E1]">Beitrag lesen</Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p role="status" className="border border-dashed border-gray-300 px-6 py-12 text-center text-gray-600 dark:border-white/15 dark:text-gray-300">Keine Beiträge zu „{search}“ gefunden.</p>
        )}
      </div>
    </section>
  )
}
