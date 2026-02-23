"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";

// All blog articles data for internal linking
export const blogArticles = [
  {
    slug: "ai-resume-builder-guide",
    title: "AI Resume Builder: Create ATS-Optimized Resumes That Actually Get Interviews",
    description:
      "Learn how to build professional, ATS-friendly resumes with AI assistance. 5 customizable templates and instant PDF export.",
    category: "Resume Building",
    readTime: "8 min",
    keywords: ["AI resume builder", "ATS optimization", "resume templates"],
  },
  {
    slug: "junior-developer-not-getting-interviews",
    title: "Why You're Not Landing a Developer Job (And How 3 Junior Devs Broke Through)",
    description:
      "78% of junior dev resumes never reach recruiters. Real case studies show how to fix this with semantic AI matching.",
    category: "Career Development",
    readTime: "15 min",
    keywords: ["junior developer", "job search", "ATS", "career advice"],
  },
  {
    slug: "hidden-job-market-offshore-opportunities",
    title: "The Hidden Job Market: Why Offshore Opportunities Could Triple Your Career Options",
    description:
      "70% of jobs are never advertised. Learn how to access the hidden global job market and triple your opportunities.",
    category: "Career Development",
    readTime: "8 min",
    keywords: ["hidden job market", "remote work", "offshore jobs", "global opportunities"],
  },
  {
    slug: "software-developer-job-opportunities-ai-matching",
    title: "How Software Developers Access 3x More Opportunities Through AI Job Matching",
    description:
      "Discover how semantic AI technology helps developers find 3x more relevant job opportunities with 68% higher salaries.",
    category: "Career Development",
    readTime: "12 min",
    keywords: ["software developer jobs", "AI matching", "semantic search", "tech careers"],
  },
];

// Get related articles based on current article slug
export function getRelatedArticles(currentSlug, limit = 3) {
  return blogArticles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, limit);
}

// Related Articles Component
const RelatedArticles = ({ currentSlug, title = "Continue Reading" }) => {
  const relatedArticles = getRelatedArticles(currentSlug);

  return (
    <section className="py-12 border-t border-accent/20">
      <h2 className="text-2xl font-bold mb-8 text-foreground">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group block bg-muted/30 border border-accent/10 rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <span className="text-accent">{article.category}</span>
              <span>•</span>
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {article.description}
            </p>
            <span className="inline-flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
              Read more <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

// Inline Article Link Component for use within content
export const InlineArticleLink = ({ slug, children }) => {
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return <span>{children}</span>;

  return (
    <Link
      href={`/blog/${slug}`}
      className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
    >
      {children || article.title}
    </Link>
  );
};

export default RelatedArticles;
