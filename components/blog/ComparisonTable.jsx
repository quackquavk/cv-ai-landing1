"use client";
import React from "react";
import { Check, X, Minus } from "lucide-react";
import Link from "next/link";

// Comparison data for resume builders
const comparisonData = {
  features: [
    { name: "Free tier available", resumeai: true, rezi: "limited", jobscan: "limited", teal: true },
    { name: "AI-powered content writing", resumeai: true, rezi: true, jobscan: false, teal: "limited" },
    { name: "ATS optimization score", resumeai: true, rezi: true, jobscan: true, teal: true },
    { name: "Semantic skill matching", resumeai: true, rezi: false, jobscan: false, teal: false },
    { name: "Real-time preview", resumeai: true, rezi: true, jobscan: false, teal: true },
    { name: "Multiple templates", resumeai: "5+", rezi: "20+", jobscan: "limited", teal: "10+" },
    { name: "PDF export", resumeai: true, rezi: true, jobscan: true, teal: true },
    { name: "Job matching", resumeai: true, rezi: false, jobscan: true, teal: true },
    { name: "Recruiter visibility", resumeai: true, rezi: false, jobscan: false, teal: false },
    { name: "Global remote job access", resumeai: true, rezi: false, jobscan: false, teal: false },
  ],
  pricing: {
    resumeai: { free: "5 resumes", paid: "Coming soon" },
    rezi: { free: "1 resume", paid: "$29/mo" },
    jobscan: { free: "5 scans/mo", paid: "$49.95/mo" },
    teal: { free: "Limited", paid: "$29/mo" },
  },
};

const FeatureIcon = ({ value }) => {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-500" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-red-500" />;
  }
  if (value === "limited") {
    return <Minus className="w-5 h-5 text-yellow-500" />;
  }
  return <span className="text-white font-medium">{value}</span>;
};

// Comparison Table Schema for SEO
export const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "Table",
  about: "Comparison of AI Resume Builder Tools",
  description:
    "Detailed feature comparison between ResumeAI, Rezi.ai, Jobscan, and Teal HQ resume building and optimization tools.",
};

const ComparisonTable = ({ showCTA = true }) => {
  return (
    <div className="my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
        How ResumeAI Compares to Alternatives
      </h2>
      <p className="text-gray-400 mb-8">
        See how our AI resume builder stacks up against other popular tools in 2026.
      </p>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#ff6600]/20">
              <th className="text-left py-4 px-4 text-gray-400 font-medium">
                Feature
              </th>
              <th className="text-center py-4 px-4">
                <span className="text-[#ff6600] font-bold">ResumeAI</span>
              </th>
              <th className="text-center py-4 px-4 text-white">Rezi.ai</th>
              <th className="text-center py-4 px-4 text-white">Jobscan</th>
              <th className="text-center py-4 px-4 text-white">Teal HQ</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.features.map((feature, index) => (
              <tr
                key={index}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-4 px-4 text-gray-300">{feature.name}</td>
                <td className="py-4 px-4 text-center bg-[#ff6600]/5">
                  <div className="flex justify-center">
                    <FeatureIcon value={feature.resumeai} />
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center">
                    <FeatureIcon value={feature.rezi} />
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center">
                    <FeatureIcon value={feature.jobscan} />
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center">
                    <FeatureIcon value={feature.teal} />
                  </div>
                </td>
              </tr>
            ))}
            {/* Pricing Row */}
            <tr className="border-t-2 border-[#ff6600]/30">
              <td className="py-4 px-4 text-white font-semibold">Free Tier</td>
              <td className="py-4 px-4 text-center bg-[#ff6600]/5 text-[#ff6600] font-medium">
                {comparisonData.pricing.resumeai.free}
              </td>
              <td className="py-4 px-4 text-center text-gray-400">
                {comparisonData.pricing.rezi.free}
              </td>
              <td className="py-4 px-4 text-center text-gray-400">
                {comparisonData.pricing.jobscan.free}
              </td>
              <td className="py-4 px-4 text-center text-gray-400">
                {comparisonData.pricing.teal.free}
              </td>
            </tr>
            <tr>
              <td className="py-4 px-4 text-white font-semibold">Paid Plan</td>
              <td className="py-4 px-4 text-center bg-[#ff6600]/5 text-[#ff6600] font-medium">
                {comparisonData.pricing.resumeai.paid}
              </td>
              <td className="py-4 px-4 text-center text-gray-400">
                {comparisonData.pricing.rezi.paid}
              </td>
              <td className="py-4 px-4 text-center text-gray-400">
                {comparisonData.pricing.jobscan.paid}
              </td>
              <td className="py-4 px-4 text-center text-gray-400">
                {comparisonData.pricing.teal.paid}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {comparisonData.features.slice(0, 6).map((feature, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a]/60 border border-[#ff6600]/10 rounded-lg p-4"
          >
            <h4 className="text-white font-medium mb-3">{feature.name}</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <FeatureIcon value={feature.resumeai} />
                <span className="text-[#ff6600]">ResumeAI</span>
              </div>
              <div className="flex items-center gap-2">
                <FeatureIcon value={feature.rezi} />
                <span className="text-gray-400">Rezi.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <FeatureIcon value={feature.jobscan} />
                <span className="text-gray-400">Jobscan</span>
              </div>
              <div className="flex items-center gap-2">
                <FeatureIcon value={feature.teal} />
                <span className="text-gray-400">Teal HQ</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-green-500" />
          <span>Full support</span>
        </div>
        <div className="flex items-center gap-2">
          <Minus className="w-4 h-4 text-yellow-500" />
          <span>Limited/Partial</span>
        </div>
        <div className="flex items-center gap-2">
          <X className="w-4 h-4 text-red-500" />
          <span>Not available</span>
        </div>
      </div>

      {/* CTA */}
      {showCTA && (
        <div className="mt-8 p-6 bg-gradient-to-r from-[#ff6600]/20 to-[#ff6600]/10 border border-[#ff6600]/30 rounded-xl text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Ready to try the most feature-complete free resume builder?
          </h3>
          <p className="text-gray-300 mb-4">
            Join 10,000+ job seekers who chose ResumeAI for semantic job matching.
          </p>
          <Link
            href="https://app.cvai.dev/dashboard/resumes"
            className="inline-block bg-[#ff6600] hover:bg-[#ff6600]/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Build Your Resume Free
          </Link>
        </div>
      )}
    </div>
  );
};

export default ComparisonTable;
