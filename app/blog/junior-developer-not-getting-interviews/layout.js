import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Why You're Not Landing a Developer Job (And How to Fix It) | ResumeAI",
  description:
    "78% of junior dev resumes never reach recruiters. Learn why 3 developers went from 150+ rejections to multiple offers using semantic AI matching. Real case studies, actionable fixes.",
  keywords:
    "software developer not getting interviews, junior developer job search, entry level developer jobs, bootcamp graduate jobs, ATS resume optimization, semantic job matching, developer career advice",
  openGraph: {
    type: "article",
    title: "Why You're Not Landing a Developer Job (And How to Fix It)",
    description:
      "78% of junior dev resumes never reach recruiters. Learn why 3 developers went from 150+ rejections to multiple offers using semantic AI matching.",
    url: "https://cvai.dev/blog/junior-developer-not-getting-interviews",
    siteName: "ResumeAI",
    images: [
      {
        url: "/resume-builder-hero.png",
        width: 1200,
        height: 630,
        alt: "Junior Developer Job Search Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why You're Not Landing a Developer Job (And How to Fix It)",
    description:
      "78% of junior dev resumes never reach recruiters. Real case studies and actionable fixes.",
    images: ["/resume-builder-hero.png"],
  },
  alternates: {
    canonical: "https://cvai.dev/blog/junior-developer-not-getting-interviews",
  },
};

export default function BlogPostLayout({ children }) {
  return <div className={`${poppins.variable} font-sans`}>{children}</div>;
}
