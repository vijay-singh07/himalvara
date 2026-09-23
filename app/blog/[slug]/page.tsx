import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, Tag, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import type { ContentBlock } from "@/types";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Himalvara Travels`,
    description: post.excerpt,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="font-display text-2xl font-bold text-[#132a1f] mt-10 mb-4">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="font-display text-xl font-bold text-[#132a1f] mt-7 mb-3">
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={i} className="text-[#444] leading-[1.85] mb-5">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={i} className="mb-5 space-y-2">
          {block.items?.map((item, j) => (
            <li key={j} className="flex gap-3 text-[#444] leading-relaxed">
              <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#c8a951] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout": {
      const styles = {
        info: "bg-[#f0f9f5] border-[#1b3a2d]/20 text-[#1b3a2d]",
        veteran: "bg-[#fdf7e8] border-[#c8a951]/40 text-[#5c3d00]",
        warning: "bg-[#fff8f0] border-[#d97706]/30 text-[#7c4a00]",
      };
      const variant = block.variant ?? "info";
      return (
        <div key={i} className={`border-l-4 rounded-r-xl px-5 py-4 mb-5 ${styles[variant]}`}>
          {block.text && <p className="text-sm leading-relaxed font-medium">{block.text}</p>}
          {block.items && (
            <ul className="mt-2 space-y-1.5">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-2 text-sm">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 opacity-60" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    default:
      return null;
  }
}

const BASE = "https://www.himalvara.com";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== slug && (p.category === post.category || p.featured)
  ).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Himalvara Travels",
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/himalvara-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
    ],
  };

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
      {/* ── Cover ───────────────────────────────────────────── */}
      <section className="relative h-[420px] sm:h-[480px] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17]/90 via-[#0d1f17]/50 to-[#0d1f17]/30" />

        <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-12 pb-10 max-w-4xl mx-auto w-full left-0 right-0">
          <nav className="flex items-center gap-1.5 text-white/50 text-xs font-medium mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80 truncate max-w-[200px]">{post.title}</span>
          </nav>

          <span className="inline-flex mb-4 bg-[#c8a951] text-[#0d1f17] text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full w-fit">
            {post.category}
          </span>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#c8a951] flex items-center justify-center flex-shrink-0 border-2 border-white/20">
                <span className="text-[#0d1f17] text-xs font-bold leading-none">
                  {post.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">{post.author}</p>
                {post.authorRole && (
                  <p className="text-white/50 text-[11px] mt-0.5">{post.authorRole}</p>
                )}
              </div>
            </div>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* ── Article ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Body */}
          <article className="lg:max-w-[680px] w-full">
            {/* Excerpt lead */}
            <p className="text-lg text-[#333] font-medium leading-[1.75] border-l-4 border-[#c8a951] pl-5 mb-8">
              {post.excerpt}
            </p>

            {/* Content blocks */}
            <div>
              {post.content?.map((block, i) => renderBlock(block, i))}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-[#e8e4db] flex flex-wrap gap-2">
                <Tag className="w-4 h-4 text-[#767676] mt-0.5" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold text-[#1b3a2d] bg-[#e8f5f1] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author bio */}
            {post.authorBio && (
              <div className="mt-10 bg-[#f9f7f2] rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-14 h-14 rounded-full bg-[#1b3a2d] flex items-center justify-center flex-shrink-0 border-2 border-[#c8a951]/30">
                  <span className="text-[#c8a951] text-lg font-bold leading-none">
                    {post.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-[#132a1f]">{post.author}</p>
                  {post.authorRole && (
                    <p className="text-xs text-[#c8a951] font-semibold tracking-wide uppercase mb-2">{post.authorRole}</p>
                  )}
                  <p className="text-sm text-[#555] leading-relaxed">{post.authorBio}</p>
                </div>
              </div>
            )}

            {/* Back link */}
            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1b3a2d] hover:text-[#0d1f17] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-[80px] space-y-8">
              {/* CTA */}
              <div className="bg-[#0d1f17] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-1.5 mb-3">
                  <svg className="w-3 h-3 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                  </svg>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">
                    Plan Your Trek
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold mb-2 leading-snug">
                  Ready to experience the Himalayas?
                </h3>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">
                  Every trek is led by a veteran guide. Zero incidents. Zero fatalities.
                </p>
                <Link
                  href="/packages"
                  className="block w-full bg-[#c8a951] hover:bg-[#b8963f] text-[#0d1f17] font-bold text-sm text-center py-3 rounded-xl transition-colors"
                >
                  Browse Treks
                </Link>
                <Link
                  href="/contact"
                  className="block w-full border border-white/20 hover:border-white/40 text-white text-sm text-center py-3 rounded-xl transition-colors mt-2"
                >
                  Get a Free Quote
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-display text-base font-bold text-[#132a1f] mb-4">
                    More Articles
                  </h3>
                  <div className="space-y-3">
                    {related.map((rp) => (
                      <BlogCard key={rp.id} post={rp} variant="compact" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
