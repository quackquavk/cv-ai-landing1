import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://cvai.dev"),
  title: {
    default: "ResumeAI - Free AI Resume Builder & Candidate Matching Platform",
    template: "%s | ResumeAI",
  },
  description:
    "Build ATS-optimized resumes with AI. Recruiters: Find top candidates faster with semantic search and AI-powered matching. Free for job seekers.",
  keywords: [
    "AI resume builder",
    "ATS-friendly resume",
    "candidate matching",
    "AI recruitment",
    "resume optimization",
    "semantic search",
    "free resume builder",
    "AI CV maker",
  ],
  authors: [{ name: "ResumeAI Team" }],
  creator: "ResumeAI",
  publisher: "ResumeAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cvai.dev",
    siteName: "ResumeAI",
    title: "ResumeAI - Free AI Resume Builder & Candidate Matching Platform",
    description:
      "Build ATS-optimized resumes with AI. Recruiters: Find top candidates faster with semantic search and AI-powered matching. Free for job seekers.",
    images: [
      {
        url: "/resume-builder-hero.png",
        width: 1200,
        height: 630,
        alt: "ResumeAI - AI-Powered Resume Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ResumeAI - Free AI Resume Builder & Candidate Matching Platform",
    description:
      "Build ATS-optimized resumes with AI. Find top candidates faster with semantic search.",
    images: ["/resume-builder-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cvai.dev",
  },
};

// Organization Schema (JSON-LD)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ResumeAI",
  url: "https://cvai.dev",
  logo: "https://cvai.dev/cvai.png",
  description:
    "AI-powered resume builder and candidate matching platform. Build ATS-optimized resumes and find top talent with semantic search.",
  foundingDate: "2025",
  contactPoint: {
    "@type": "ContactPoint",
    email: "mail@rebuzzllc.com",
    contactType: "customer support",
  },
  sameAs: [],
};

// WebSite Schema (JSON-LD)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ResumeAI",
  url: "https://cvai.dev",
  description:
    "Free AI Resume Builder & Candidate Matching Platform with semantic search technology.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://app.cvai.dev/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// SoftwareApplication Schema (JSON-LD)
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ResumeAI Resume Builder",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "10000",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
      </head>
      <body className={` ${poppins.variable} `}>
        <AuthProvider>
          <Toaster />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
