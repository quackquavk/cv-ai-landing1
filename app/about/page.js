"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/LandingPage/Footer";
import Link from "next/link";
import {
  Target,
  Users,
  Zap,
  Globe,
  Shield,
  TrendingUp,
  Mail,
} from "lucide-react";

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

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ResumeAI",
  url: "https://cvai.dev",
  logo: "https://cvai.dev/cvai.png",
  description:
    "ResumeAI is an AI-powered resume builder and candidate matching platform that uses semantic search technology to connect job seekers with opportunities and help recruiters find top talent faster.",
  foundingDate: "2025",
  founder: {
    "@type": "Organization",
    name: "Rebuzz LLC",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "mail@rebuzzllc.com",
    contactType: "customer support",
    availableLanguage: "English",
  },
  sameAs: [],
  knowsAbout: [
    "Artificial Intelligence",
    "Resume Building",
    "Applicant Tracking Systems",
    "Semantic Search",
    "Recruitment Technology",
    "Career Development",
  ],
};

const stats = [
  { number: "10,000+", label: "Resumes Created" },
  { number: "95%", label: "ATS Pass Rate" },
  { number: "4.9/5", label: "User Rating" },
  { number: "3x", label: "More Job Matches" },
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Mission-Driven",
    description:
      "We believe everyone deserves access to opportunities that match their skills, not just their keywords. Our mission is to eliminate the barriers between qualified candidates and their dream jobs.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI-First Innovation",
    description:
      "We leverage cutting-edge semantic AI technology to understand the true meaning behind skills and experience, going beyond simple keyword matching to create genuine connections.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "User-Centric Design",
    description:
      "Every feature we build starts with the user. We continuously gather feedback and iterate to ensure our tools genuinely help job seekers and recruiters succeed.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Opportunity",
    description:
      "We're breaking down geographic barriers to connect talent with opportunities worldwide. Location shouldn't limit your career potential.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Privacy & Security",
    description:
      "Your data is yours. We use industry-standard encryption and never sell personal information to third parties. You control your profile visibility.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Continuous Improvement",
    description:
      "We analyze thousands of successful job placements to continuously improve our matching algorithms and provide data-driven career insights.",
  },
];

const expertise = [
  {
    area: "AI & Machine Learning",
    description:
      "Our team includes specialists in natural language processing, semantic search, and machine learning who have developed AI systems used by millions.",
  },
  {
    area: "Recruitment Technology",
    description:
      "With backgrounds at leading HR tech companies and recruiting firms, we understand the pain points of both job seekers and recruiters firsthand.",
  },
  {
    area: "Career Development",
    description:
      "Our career advisors have helped thousands of professionals navigate job searches, from entry-level positions to executive roles.",
  },
  {
    area: "ATS Systems",
    description:
      "We've reverse-engineered major Applicant Tracking Systems to understand exactly what makes resumes pass or fail automated screening.",
  },
];

export default function AboutPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-black text-white relative"
    >
      {/* Organization Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff6600]/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#ff6600]/20 rounded-full blur-[120px]" />

        <motion.div
          variants={containerVariants}
          className="relative z-10 container mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Building the Future of
              </span>
              <br />
              <span className="text-[#ff6600]">Career Connections</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              ResumeAI combines advanced AI technology with deep recruitment
              expertise to help job seekers land their dream roles and
              recruiters find exceptional talent.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#0a0a0a]/60 border border-[#ff6600]/20 rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#ff6600] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  ResumeAI was born from a simple frustration:{" "}
                  <strong className="text-white">
                    qualified candidates were being rejected by robots before
                    humans ever saw their applications
                  </strong>
                  . We watched talented developers, designers, and professionals
                  send hundreds of applications into the void, filtered out by
                  keyword-matching systems that couldn't understand the true
                  depth of their skills.
                </p>
                <p>
                  We knew there had to be a better way. What if AI could
                  understand context and meaning, not just keywords? What if
                  "built scalable microservices" could match with "distributed
                  systems architecture" even without exact keyword overlap?
                </p>
                <p>
                  That's why we built ResumeAI—a platform that uses{" "}
                  <strong className="text-white">
                    semantic AI technology
                  </strong>{" "}
                  to understand the real meaning behind skills and experience.
                  Our system recognizes that a bootcamp graduate's intensive
                  project experience can be just as valuable as years of
                  traditional work, and that a developer in Bangalore is just as
                  capable as one in San Francisco.
                </p>
                <p>
                  Today, we're helping thousands of job seekers create
                  ATS-optimized resumes and connecting them with opportunities
                  they'd never find on traditional job boards. We're also
                  helping recruiters find exceptional talent faster, using AI
                  that understands skills rather than just scanning for
                  keywords.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#ff6600]/5 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div variants={containerVariants}>
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our Values
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The principles that guide everything we build
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-[#0a0a0a]/60 border border-[#ff6600]/10 rounded-xl hover:border-[#ff6600]/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#ff6600]/10 rounded-xl flex items-center justify-center text-[#ff6600] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div variants={containerVariants}>
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our Expertise
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Deep knowledge across the recruitment and AI landscape
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-[#0a0a0a]/60 border border-[#ff6600]/10 rounded-xl"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#ff6600]">
                    {item.area}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-[#ff6600]/20 to-[#ff6600]/10 border border-[#ff6600]/30 rounded-3xl"
          >
            <Mail className="w-12 h-12 text-[#ff6600] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Have questions about ResumeAI? Want to partner with us? We'd love
              to hear from you.
            </p>
            <a
              href="mailto:mail@rebuzzllc.com"
              className="inline-block bg-[#ff6600] hover:bg-[#ff6600]/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Contact Us
            </a>
            <p className="text-gray-500 text-sm mt-4">mail@rebuzzllc.com</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
