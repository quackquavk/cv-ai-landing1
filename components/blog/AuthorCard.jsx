"use client";
import React from "react";
import Image from "next/image";

// Author data - centralized for easy updates
export const authors = {
  resumeai: {
    name: "ResumeAI Team",
    role: "Career Technology Experts",
    bio: "The ResumeAI team combines expertise in AI, recruitment technology, and career development to help job seekers land their dream roles. Our insights are based on analyzing thousands of successful job placements.",
    image: "/cvai.png",
    social: {
      website: "https://cvai.dev",
    },
  },
};

const AuthorCard = ({
  authorId = "resumeai",
  publishedDate,
  updatedDate,
  readTime = "8 min read",
  category = "Career Development",
}) => {
  const author = authors[authorId] || authors.resumeai;

  return (
    <div className="border-t border-b border-accent/20 py-6 my-8">
      <div className="flex items-start gap-4">
        <Image
          src={author.image}
          alt={author.name}
          width={56}
          height={56}
          className="rounded-full border-2 border-accent/30 object-cover"
        />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-semibold text-foreground">{author.name}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground text-sm">{author.role}</span>
          </div>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {author.bio}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <time dateTime={publishedDate}>
              Published: {formatDate(publishedDate)}
            </time>
            {updatedDate && (
              <>
                <span>•</span>
                <time dateTime={updatedDate} className="text-accent">
                  Updated: {formatDate(updatedDate)}
                </time>
              </>
            )}
            <span>•</span>
            <span>{readTime}</span>
            <span>•</span>
            <span>{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to format dates
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Article Schema generator for blog posts
export function generateArticleSchema({
  title,
  description,
  publishedDate,
  updatedDate,
  authorId = "resumeai",
  url,
  image = "https://cvai.dev/resume-builder-hero.png",
}) {
  const author = authors[authorId] || authors.resumeai;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    author: {
      "@type": "Organization",
      name: author.name,
      url: author.social.website,
    },
    publisher: {
      "@type": "Organization",
      name: "ResumeAI",
      logo: {
        "@type": "ImageObject",
        url: "https://cvai.dev/cvai.png",
      },
    },
    datePublished: publishedDate,
    dateModified: updatedDate || publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

// Breadcrumb Schema generator
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export default AuthorCard;
