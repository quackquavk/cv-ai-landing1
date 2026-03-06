"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const blogPosts = [
  {
    title: "AI Resume Builder: Create ATS-Optimized Resumes in Minutes",
    excerpt:
      "Stop losing to ATS systems. Build professional resumes with 5 customizable templates, real-time preview, and instant PDF export. Stand out from 250+ applicants per job posting.",
    category: "Resume Building",
    readTime: "8 min read",
    slug: "/blog/ai-resume-builder-guide",
  },
  {
    title: "Why You're Not Landing a Developer Job (And How to Fix It)",
    excerpt:
      "78% of junior developer resumes never reach human recruiters. Discover the real reasons your applications disappear and how 3 developers went from 150+ rejections to multiple offers.",
    category: "Career Development",
    readTime: "15 min read",
    slug: "/blog/junior-developer-not-getting-interviews",
  },
  {
    title: "The Hidden Job Market: Offshore Opportunities",
    excerpt:
      "Unlock global remote opportunities with 2-3x higher salaries. Learn how semantic AI matching connects you with companies hiring worldwide.",
    category: "Remote Work",
    readTime: "12 min read",
    slug: "/blog/hidden-job-market-offshore-opportunities",
  },
];

const BlogShowcase = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent-magenta opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent/70 mb-4">
              // LATEST INSIGHTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Data-Backed <span className="brand-gradient-text">Career Frameworks</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert advice on landing your dream developer job and navigating
              the modern job market
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <Link href={post.slug}>
                  <div className="h-full glass-card rounded-2xl p-6 hover:border-accent/25 transition-all duration-300 cursor-pointer">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 brand-gradient-text font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      <span>Read More</span>
                      <ArrowRight
                        size={16}
                        className="text-accent group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogShowcase;
