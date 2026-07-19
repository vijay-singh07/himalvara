"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlogCard } from "./BlogCard";
import type { BlogPost } from "@/types";
import { BLOG_CATEGORIES, type BlogCategory } from "@/data/blog";

export function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  const filtered = activeCategory === "All"
    ? rest
    : rest.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── Featured Post Hero ──────────────────────────────── */}
      {featured && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-8">
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative block rounded-2xl overflow-hidden h-[420px] sm:h-[480px]"
          >
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17]/90 via-[#0d1f17]/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#c8a951] text-[#0d1f17] text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                  {featured.category}
                </span>
                <span className="text-white/50 text-[10px] font-semibold tracking-[0.18em] uppercase">
                  Featured
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 max-w-2xl leading-tight">
                {featured.title}
              </h2>
              <p className="text-white/75 text-sm max-w-xl line-clamp-2 mb-5">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {featured.authorImage && (
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={featured.authorImage} alt={featured.author} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <span className="text-white text-sm font-semibold">{featured.author}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span className="flex items-center gap-1.5 text-white/60 text-xs">
                  <Clock className="w-3 h-3" />
                  {featured.readTime} min read
                </span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span className="flex items-center gap-1.5 text-white/60 text-xs">
                  <Calendar className="w-3 h-3" />
                  {new Date(featured.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>

                <div className="ml-auto flex items-center gap-1.5 text-white text-sm font-semibold">
                  Read
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── Filter Bar ──────────────────────────────────────── */}
      <div className="sticky top-[64px] z-20 bg-white/95 backdrop-blur-md border-b border-[#e4e4e4] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-0.5">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-[#0d1f17] text-white"
                    : "bg-[#f0ebe0] text-[#555] hover:bg-[#e8f5f1] hover:text-[#1b3a2d]"
                )}
              >
                {cat}
                {cat !== "All" && (
                  <span className={cn(
                    "ml-1.5 text-[10px] font-bold",
                    activeCategory === cat ? "text-white/60" : "text-[#767676]"
                  )}>
                    {rest.filter((p) => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <p className="text-sm text-[#767676] mb-7">
          <span className="font-semibold text-[#132a1f]">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "article" : "articles"}
          {activeCategory !== "All" && (
            <> — <span className="font-semibold text-[#132a1f]">{activeCategory}</span></>
          )}
        </p>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-2xl text-[#132a1f] mb-2">No articles found</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="text-sm font-semibold text-[#1b3a2d] underline underline-offset-2"
            >
              Show all articles
            </button>
          </div>
        )}
      </div>
    </>
  );
}
