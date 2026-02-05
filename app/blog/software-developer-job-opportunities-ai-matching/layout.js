import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Software Developer Job Opportunities | 3x More Matches with AI | ResumeAI",
  description:
    "Discover how software developers access 3x more job opportunities through AI-powered semantic matching. Real case studies show 68% average salary increases.",
  keywords:
    "software developer job opportunities, remote software developer jobs, AI job matching for developers, international developer opportunities, semantic job search technology, offshore developer hiring",
  openGraph: {
    type: "article",
    title: "Software Developer Job Opportunities | 3x More Matches with AI",
    description:
      "Discover how software developers access 3x more job opportunities through AI-powered semantic matching.",
    url: "https://cvai.dev/blog/software-developer-job-opportunities-ai-matching",
    siteName: "ResumeAI",
    images: [
      {
        url: "/resume-builder-hero.png",
        width: 1200,
        height: 630,
        alt: "Software Developer Job Opportunities Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Developer Job Opportunities | 3x More Matches with AI",
    description:
      "Discover how software developers access 3x more job opportunities through AI-powered semantic matching.",
    images: ["/resume-builder-hero.png"],
  },
  alternates: {
    canonical:
      "https://cvai.dev/blog/software-developer-job-opportunities-ai-matching",
  },
};

export default function BlogPostLayout({ children }) {
  return <div className={`${poppins.variable} font-sans`}>{children}</div>;
}
