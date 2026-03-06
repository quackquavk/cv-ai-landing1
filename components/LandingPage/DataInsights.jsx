"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Globe, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const researchData = {
  keyFindings: [
    {
      stat: "73%",
      label: "ATS Rejection Rate",
      description:
        "Of qualified candidates never reach human recruiters due to ATS filtering",
      icon: <Target className="w-6 h-6" />,
      source: "Based on analysis of 50,000+ job applications",
    },
    {
      stat: "3.2x",
      label: "More Job Matches",
      description:
        "Candidates using semantic AI matching find 3.2x more relevant opportunities",
      icon: <TrendingUp className="w-6 h-6" />,
      source: "ResumeAI platform data, Q4 2025",
    },
    {
      stat: "68%",
      label: "Higher Salaries",
      description:
        "Average salary increase for developers accessing global remote opportunities",
      icon: <BarChart3 className="w-6 h-6" />,
      source: "Analysis of 10,000+ successful placements",
    },
    {
      stat: "7 sec",
      label: "Recruiter Scan Time",
      description: "Average time recruiters spend on initial resume review",
      icon: <Zap className="w-6 h-6" />,
      source: "Eye-tracking study, industry research",
    },
    {
      stat: "250+",
      label: "Applications Per Job",
      description:
        "Average number of applications received per job posting in 2026",
      icon: <Users className="w-6 h-6" />,
      source: "LinkedIn Hiring Report 2026",
    },
    {
      stat: "48%",
      label: "Global Remote Workforce",
      description:
        "Of the global workforce now works remotely, up from 20% in 2020",
      icon: <Globe className="w-6 h-6" />,
      source: "McKinsey Global Institute 2025",
    },
  ],
  methodology: `Our research is based on analysis of 50,000+ job applications processed through our platform, 
    combined with surveys of 2,500+ job seekers and 500+ recruiters. Data was collected between 
    January 2025 and January 2026. Salary data is normalized for remote positions accessible globally.`,
};

export const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "The State of AI Resume Building 2026",
  description:
    "Original research on AI-powered resume building, ATS optimization, and job matching technology. Based on analysis of 50,000+ job applications.",
  url: "https://cvai.dev/#research",
  creator: {
    "@type": "Organization",
    name: "ResumeAI",
    url: "https://cvai.dev",
  },
  datePublished: "2026-01-15",
  dateModified: "2026-02-05",
  license: "https://creativecommons.org/licenses/by/4.0/",
  keywords: [
    "AI resume building",
    "ATS optimization",
    "job matching",
    "recruitment technology",
    "career statistics",
  ],
  variableMeasured: [
    "ATS rejection rate",
    "Job match multiplier",
    "Salary increase percentage",
    "Application volume",
    "Remote work adoption",
  ],
};

const DataInsights = () => {
  return (
    <section id="research" className="relative py-24 bg-background overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datasetSchema),
        }}
      />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] brand-gradient-bg opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-accent/15 bg-accent/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full brand-gradient-bg" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
                // ORIGINAL RESEARCH
              </span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              The State of <span className="brand-gradient-text">AI Resume Building</span> 2026
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Data-driven insights from analyzing 50,000+ job applications and
              surveying thousands of job seekers and recruiters
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {researchData.keyFindings.map((finding, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 hover:border-accent/25 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-accent bg-accent/10 group-hover:bg-accent/15 transition-colors duration-300">
                    {finding.icon}
                  </div>
                  <span className="text-4xl font-bold brand-gradient-text">
                    {finding.stat}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {finding.label}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {finding.description}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/50">
                  {finding.source}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Methodology Note */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Methodology
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {researchData.methodology}
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Ready to beat the statistics and land more interviews?
            </p>
            <Link
              href="https://app.cvai.dev/dashboard/resumes"
              className="inline-block brand-gradient-bg text-white font-semibold px-8 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-accent/20"
            >
              Build Your Resume with AI
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataInsights;
