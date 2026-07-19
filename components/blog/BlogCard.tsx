import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "compact";
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#e8e4db] shadow-sm hover:shadow-md transition-shadow duration-300",
        variant === "compact" && "flex-row"
      )}
    >
      {/* Cover image */}
      <div className={cn(
        "relative overflow-hidden flex-shrink-0",
        variant === "default" ? "aspect-[16/9] w-full" : "w-32 sm:w-40 aspect-square"
      )}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes={variant === "default"
            ? "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            : "160px"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category chip */}
        <span className="absolute top-3 left-3 bg-[#c8a951] text-[#0d1f17] text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className={cn(
        "flex flex-col",
        variant === "default" ? "p-5" : "p-4 flex-1 min-w-0"
      )}>
        <h3 className={cn(
          "font-display font-bold text-[#132a1f] group-hover:text-[#1b3a2d] transition-colors line-clamp-2 mb-2",
          variant === "default" ? "text-lg" : "text-sm"
        )}>
          {post.title}
        </h3>

        {variant === "default" && (
          <p className="text-sm text-[#555] line-clamp-2 mb-4 flex-1">
            {post.excerpt}
          </p>
        )}

        {/* Meta row */}
        <div className={cn(
          "flex items-center gap-3 text-[#767676]",
          variant === "default" ? "text-xs mt-auto" : "text-[11px]"
        )}>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime} min
          </span>
          <span className="w-1 h-1 rounded-full bg-[#c8a951]" />
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
          {variant === "default" && (
            <>
              <span className="w-1 h-1 rounded-full bg-[#c8a951]" />
              <span className="font-medium text-[#132a1f]">{post.author}</span>
            </>
          )}
        </div>

        {variant === "default" && (
          <div className="mt-4 flex items-center gap-1.5 text-[#1b3a2d] text-sm font-semibold">
            Read article
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </Link>
  );
}
