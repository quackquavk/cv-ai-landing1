import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "AI Resume Builder: Create ATS-Optimized Resumes in Minutes | ResumeAI",
  description:
    "Build professional, ATS-friendly resumes with AI assistance. 5 customizable templates, real-time preview, and instant PDF export. Stand out from 500+ applicants per job posting.",
  keywords:
    "AI resume builder, ATS resume maker, professional resume template, resume builder free, resume AI, cv builder, job application resume, developer resume, tech resume builder",
  openGraph: {
    type: "article",
    title: "AI Resume Builder: Create ATS-Optimized Resumes in Minutes",
    description:
      "Build professional, ATS-friendly resumes with AI assistance. 5 customizable templates, real-time preview, and instant PDF export.",
    url: "https://cvai.dev/blog/ai-resume-builder-guide",
    siteName: "ResumeAI",
    images: [
      {
        url: "/resume-builder-hero.png",
        width: 1200,
        height: 630,
        alt: "AI Resume Builder Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Builder: Create ATS-Optimized Resumes in Minutes",
    description:
      "Build professional, ATS-friendly resumes with AI assistance. 5 customizable templates.",
    images: ["/resume-builder-hero.png"],
  },
  alternates: {
    canonical: "https://cvai.dev/blog/ai-resume-builder-guide",
  },
};

export default function BlogPostLayout({ children }) {
  return <div className={`${poppins.variable} font-sans`}>{children}</div>;
}
