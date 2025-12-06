import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "AI Resume Builder: Create ATS-Optimized Resumes in Minutes | Resume AI",
  description:
    "Build professional, ATS-friendly resumes with AI assistance. 5 customizable templates, real-time preview, and instant PDF export. Stand out from 500+ applicants per job posting.",
  keywords:
    "AI resume builder, ATS resume maker, professional resume template, resume builder free, resume AI, cv builder, job application resume, developer resume, tech resume builder",
  openGraph: {
    type: "article",
    title:
      "AI Resume Builder: Create ATS-Optimized Resumes in Minutes | Resume AI",
    description:
      "Build professional, ATS-friendly resumes with AI assistance. 5 customizable templates, real-time preview, and instant PDF export. Stand out from 500+ applicants per job posting.",
    url: "https://resumeai.com/blog/ai-resume-builder-guide",
  },
};

export default function BlogPostLayout({ children }) {
  return <div className={`${poppins.variable} font-sans`}>{children}</div>;
}
