import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Why You're Not Landing a Developer Job (And How to Fix It) | 2025",
  description:
    "78% of junior dev resumes never reach recruiters. Learn why 3 developers went from 150+ rejections to multiple offers using semantic AI matching. Real case studies, actionable fixes.",
  keywords:
    "software developer not getting interviews, junior developer job search, entry level developer jobs, bootcamp graduate jobs, ATS resume optimization, semantic job matching, developer career advice",
  openGraph: {
    type: "article",
    title: "Why You're Not Landing a Developer Job (And How to Fix It) | 2025",
    description:
      "78% of junior dev resumes never reach recruiters. Learn why 3 developers went from 150+ rejections to multiple offers using semantic AI matching. Real case studies, actionable fixes.",
    url: "https://resumeai.com/blog/junior-developer-not-getting-interviews",
  },
};

export default function BlogPostLayout({ children }) {
  return <div className={`${poppins.variable} font-sans`}>{children}</div>;
}
