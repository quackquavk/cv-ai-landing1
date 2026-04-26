"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Globe, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";
import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
} from "@/components/ui/animated-card-chart";
import { springConfigs, staggerDelay } from "@/components/ui/animated-card-chart";
import {
  ATSVisualization,
  NeuralNetworkVisualization,
  SalaryVisualization,
  ScanVisualization,
  ApplicationsVisualization,
  RemoteVisualization,
} from "@/components/ui/research-visualizations";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,  // 50ms stagger (down from 100ms) — Apple-tight rhythm
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...springConfigs.snappy,  // stiffness: 350, damping: 28
    },
  },
};

// Original research data - "The State of AI Resume Building 2026"
const researchData = {
  keyFindings: [
    {
      stat: "73%",
      label: "ATS Rejection Rate",
      description:
        "Of qualified candidates never reach human recruiters due to ATS filtering",
      icon: <Target className="w-5 h-5" />,
      source: "Based on analysis of 50,000+ job applications",
    },
    {
      stat: "3.2x",
      label: "More Job Matches",
      description:
        "Candidates using semantic AI matching find 3.2x more relevant opportunities",
      icon: <TrendingUp className="w-5 h-5" />,
      source: "ResumeAI platform data, Q4 2025",
    },
    {
      stat: "68%",
      label: "Higher Salaries",
      description:
        "Average salary increase for developers accessing global remote opportunities",
      icon: <BarChart3 className="w-5 h-5" />,
      source: "Analysis of 10,000+ successful placements",
    },
    {
      stat: "7 sec",
      label: "Recruiter Scan Time",
      description: "Average time recruiters spend on initial resume review",
      icon: <Zap className="w-5 h-5" />,
      source: "Eye-tracking study, industry research",
    },
    {
      stat: "250+",
      label: "Applications Per Job",
      description:
        "Average number of applications received per job posting in 2026",
      icon: <Users className="w-5 h-5" />,
      source: "LinkedIn Hiring Report 2026",
    },
    {
      stat: "48%",
      label: "Global Remote Workforce",
      description:
        "Of the global workforce now works remotely, up from 20% in 2020",
      icon: <Globe className="w-5 h-5" />,
      source: "McKinsey Global Institute 2025",
    },
  ],
  methodology: `Our research is based on analysis of 50,000+ job applications processed through our platform,
    combined with surveys of 2,500+ job seekers and 500+ recruiters. Data was collected between
    January 2025 and January 2026. Salary data is normalized for remote positions accessible globally.`,
};

// Dataset Schema for SEO
const datasetSchema = {
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

// Visualization components mapped to each stat
const visualizations = [
  ATSVisualization,         // 0: ATS Rejection - Funnel
  NeuralNetworkVisualization, // 1: Job Matches - Neural Network
  SalaryVisualization,     // 2: Salaries - Ascending Bars
  ScanVisualization,       // 3: Scan Time - Eye Tracking
  ApplicationsVisualization, // 4: Applications - Stacked Pile
  RemoteVisualization,     // 5: Remote Work - Globe
];

const DataInsights = () => {
  return (
    <section id="research" className="relative py-20 bg-background">
      {/* Dataset Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datasetSchema),
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-[#533afd]/10 border border-[#533afd]/20 text-[#533afd] rounded-sm" style={{ fontFeatureSettings: '"ss01" on' }}>
              Original Research
            </span>
            <h2 className="text-4xl md:text-5xl font-[300] tracking-tight mb-4 text-[--ds-raw-navy-975]" style={{ fontFeatureSettings: '"ss01" on' }}>
              The State of AI Resume Building 2026
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Data-driven insights from analyzing 50,000+ job applications and
              surveying thousands of job seekers and recruiters
            </p>
          </motion.div>

          {/* Enhanced Stats Grid with Unique Visualizations */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {researchData.keyFindings.map((finding, index) => {
              const Visualization = visualizations[index];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex justify-center"
                >
                  <AnimatedCard className="w-full max-w-[356px]">
                    <CardVisual>
                      <Visualization />
                    </CardVisual>
                    <CardBody>
                      <CardTitle>{finding.label}</CardTitle>
                      <p className="text-2xl font-[300] text-[#533afd] mb-1" style={{ fontFeatureSettings: '"ss01" on' }}>
                        {finding.stat}
                      </p>
                      <CardDescription>{finding.description}</CardDescription>
                      <p className="text-xs text-muted-foreground/60 italic mt-2">
                        {finding.source}
                      </p>
                    </CardBody>
                  </AnimatedCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Methodology Note */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-[--ds-raw-white] border border-[--ds-raw-border] rounded-sm p-6 shadow-elevated">
              <h3 className="text-lg font-[300] tracking-tight text-[--ds-raw-navy-975] mb-3" style={{ fontFeatureSettings: '"ss01" on' }}>
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
              className="inline-block bg-[#533afd] hover:bg-[#4434d4] text-white font-[400] px-8 py-3 rounded-sm transition-colors"
              style={{ fontFeatureSettings: '"ss01" on' }}
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
