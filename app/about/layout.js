import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "About ResumeAI | Our Mission to Transform Job Search with AI",
  description:
    "Learn about ResumeAI's mission to help job seekers and recruiters connect through AI-powered semantic matching technology. Meet the team building the future of recruitment.",
  keywords:
    "about ResumeAI, AI resume builder company, semantic job matching, recruitment technology, career technology",
  openGraph: {
    type: "website",
    title: "About ResumeAI | Our Mission to Transform Job Search with AI",
    description:
      "Learn about ResumeAI's mission to help job seekers and recruiters connect through AI-powered semantic matching.",
    url: "https://cvai.dev/about",
    siteName: "ResumeAI",
    images: [
      {
        url: "/resume-builder-hero.png",
        width: 1200,
        height: 630,
        alt: "About ResumeAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ResumeAI | Our Mission to Transform Job Search with AI",
    description:
      "Learn about ResumeAI's mission to help job seekers and recruiters connect through AI-powered semantic matching.",
    images: ["/resume-builder-hero.png"],
  },
  alternates: {
    canonical: "https://cvai.dev/about",
  },
};

export default function AboutLayout({ children }) {
  return <div className={`${poppins.variable} font-sans`}>{children}</div>;
}
