import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Software Developer Job Opportunities | 3x More Matches | 2025",
  description:
    "Discover how software developers access 3x more job opportunities through AI-powered semantic matching. Real case studies show 68% average salary increases.",
  keywords:
    "software developer job opportunities, remote software developer jobs, AI job matching for developers, international developer opportunities, semantic job search technology, offshore developer hiring",
  openGraph: {
    type: "article",
    title: "Software Developer Job Opportunities | 3x More Matches | 2025",
    description:
      "Discover how software developers access 3x more job opportunities through AI-powered semantic matching. Real case studies show 68% average salary increases.",
    url: "https://resumeai.com/blog/software-developer-job-opportunities-ai-matching",
  },
};

export default function BlogPostLayout({ children }) {
  return <div className={`${poppins.variable} font-sans`}>{children}</div>;
}
