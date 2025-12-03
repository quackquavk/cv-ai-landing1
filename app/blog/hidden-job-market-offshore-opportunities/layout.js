import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Hidden Job Market: Triple Your Career with Offshore Jobs | ResumeAI",
  description:
    "Discover why 70% of jobs are never advertised and how offshore opportunities can triple your career options. Learn to access the hidden global job market.",
  keywords:
    "hidden job market, offshore opportunities, remote work economy, international job opportunities, cross-border hiring, global remote jobs",
  openGraph: {
    type: "article",
    title: "Hidden Job Market: Triple Your Career with Offshore Jobs",
    description:
      "Discover why 70% of jobs are never advertised and how offshore opportunities can triple your career options.",
    url: "https://resumeai.com/blog/hidden-job-market-offshore-opportunities",
  },
};

export default function BlogPostLayout({ children }) {
  return <div className={`${poppins.variable} font-sans`}>{children}</div>;
}
