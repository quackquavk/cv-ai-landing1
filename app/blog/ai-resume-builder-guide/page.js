"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/LandingPage/Footer";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AIResumeBuilderBlogPost = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-black text-white relative"
    >
      <Header />

      <article className="relative py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <motion.header variants={itemVariants} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent leading-tight">
              AI Resume Builder: Create ATS-Optimized Resumes That Actually Get
              Interviews
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <time dateTime="2025-12-06">December 6, 2025</time>
              <span>•</span>
              <span>Resume Building</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </motion.header>

          {/* Hook */}
          <motion.section variants={itemVariants} className="mb-12">
            <p className="text-gray-300 leading-relaxed mb-6">
              The average job posting receives{" "}
              <strong className="text-white">over 250 applications</strong>.
              Only 4-6 candidates typically get interviews. Your resume has
              about 7 seconds to make an impression before it's discarded.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              But here's what most job seekers don't realize: before your resume
              even reaches human eyes, it passes through Applicant Tracking
              Systems (ATS) that eliminate 75% of applications automatically.
              Poor formatting, missing keywords, or wrong file structures mean
              your qualifications never get considered.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              That's why we built the{" "}
              <strong className="text-white">Resume AI Builder</strong>—a tool
              that combines beautiful design with ATS optimization, helping you
              create resumes that both robots and humans love.
            </p>
          </motion.section>

          {/* Featured Snippet */}
          <motion.div
            variants={itemVariants}
            className="bg-[#ff6600]/10 border border-[#ff6600]/30 rounded-xl p-6 my-8"
          >
            <h2 className="text-xl font-semibold mb-3 text-[#ff6600]">
              What Makes Resume AI Different?
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#ff6600] mr-3 mt-1">✓</span>
                <span>
                  <strong className="text-white">
                    5 Professional Templates
                  </strong>{" "}
                  - Classic, Modern, Minimal, Professional, and Creative designs
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6600] mr-3 mt-1">✓</span>
                <span>
                  <strong className="text-white">ATS-Optimized Format</strong> -
                  Every template passes major ATS systems
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6600] mr-3 mt-1">✓</span>
                <span>
                  <strong className="text-white">Real-Time Preview</strong> -
                  See changes instantly as you type
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6600] mr-3 mt-1">✓</span>
                <span>
                  <strong className="text-white">Import from CV</strong> -
                  Auto-populate from your existing CV data
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6600] mr-3 mt-1">✓</span>
                <span>
                  <strong className="text-white">Instant PDF Export</strong> -
                  Download print-ready resumes in seconds
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Why Traditional Resume Building Fails */}
          <motion.section
            variants={itemVariants}
            id="problem"
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#ff6600]">
              Why Traditional Resume Building Fails
            </h2>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              The ATS Problem
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Most candidates spend hours crafting beautiful resumes in Word or
              Canva, only to have them rejected before a human ever sees them.
              Why? Applicant Tracking Systems can't read:
            </p>
            <ul className="space-y-3 mb-6 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✗</span>
                <span>Complex tables and multi-column layouts</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✗</span>
                <span>Headers and footers with contact information</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✗</span>
                <span>Images, icons, and graphics embedded in text</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✗</span>
                <span>Unusual fonts that don't convert properly</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✗</span>
                <span>
                  Creative section headers like "My Journey" or "The Story"
                </span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              The Time Problem
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              The average job seeker spends{" "}
              <strong className="text-white">3-4 hours</strong> creating a
              single resume. When you're applying to 50+ positions, that's weeks
              of work—especially if you're customizing for each role.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              The Design Problem
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Not everyone is a designer. But in 2025, a plain text resume
              doesn't cut it. You need something that's visually appealing,
              scannable, and professional—without spending hours learning design
              tools.
            </p>
          </motion.section>

          {/* How Resume AI Builder Works */}
          <motion.section
            variants={itemVariants}
            id="how-it-works"
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#ff6600]">
              How Resume AI Builder Works
            </h2>

            <div className="space-y-8">
              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#ff6600] rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  Choose Your Template
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Select from 5 professionally designed templates. Each one is
                  tested for ATS compatibility while maintaining visual appeal.
                  Whether you prefer classic elegance, modern minimalism, or
                  creative flair—we have you covered.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#ff6600] rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  Import or Enter Your Information
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Already have a CV in our system? One click imports your
                  education, experience, skills, and projects. Starting fresh?
                  Our intuitive editor guides you through each section with
                  helpful prompts and examples.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#ff6600] rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  Customize in Real-Time
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  See your resume update live as you type. Adjust fonts, colors,
                  spacing, and layout. Drag sections to reorder priorities.
                  Every change is auto-saved so you never lose work.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#ff6600] rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  Download and Apply
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Export your resume as a perfectly formatted PDF, ready for any
                  job application. The output is optimized for both ATS parsing
                  and human readability.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Template Showcase */}
          <motion.section
            variants={itemVariants}
            id="templates"
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#ff6600]">
              5 Professional Templates for Every Industry
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Classic
                </h3>
                <p className="text-gray-300 text-sm">
                  Timeless design perfect for traditional industries like
                  finance, law, and consulting. Clean lines, professional fonts,
                  and balanced whitespace.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Modern
                </h3>
                <p className="text-gray-300 text-sm">
                  Contemporary layout with accent colors and modern typography.
                  Ideal for tech, startups, and creative agencies.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Minimal
                </h3>
                <p className="text-gray-300 text-sm">
                  Less is more. Maximum content focus with subtle design
                  elements. Perfect when you want your experience to speak for
                  itself.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Professional
                </h3>
                <p className="text-gray-300 text-sm">
                  Executive-level presentation with sophisticated color schemes.
                  Best for senior roles and management positions.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6 md:col-span-2">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Creative
                </h3>
                <p className="text-gray-300 text-sm">
                  Stand out with unique layouts and bold design choices. Perfect
                  for designers, marketers, and creative professionals who want
                  to showcase their personality.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Resume Sections */}
          <motion.section
            variants={itemVariants}
            id="sections"
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#ff6600]">
              Complete Resume Sections
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our builder supports all the sections you need for a comprehensive
              resume:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Contact Information",
                "Professional Summary",
                "Work Experience",
                "Education",
                "Skills & Expertise",
                "Projects & Portfolio",
                "Certifications",
                "Languages",
                "Interests",
                "Awards & Achievements",
                "Publications",
                "References",
              ].map((section, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-lg p-4 text-center"
                >
                  <span className="text-white font-medium">{section}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Statistics */}
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#ff6600]">
              The Numbers Speak
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-[#ff6600] mb-2">
                  75%
                </div>
                <p className="text-gray-300">
                  Of resumes are rejected by ATS before reaching humans
                </p>
              </div>
              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-[#ff6600] mb-2">
                  7 sec
                </div>
                <p className="text-gray-300">
                  Average time recruiters spend on initial resume scan
                </p>
              </div>
              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-[#ff6600] mb-2">
                  250+
                </div>
                <p className="text-gray-300">
                  Average applications per job posting
                </p>
              </div>
              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-[#ff6600] mb-2">
                  5 min
                </div>
                <p className="text-gray-300">
                  Time to create a professional resume with Resume AI
                </p>
              </div>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#ff6600]">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Is Resume AI Builder free to use?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes! Free users can create up to 5 resumes with access to all
                  templates. Premium users enjoy unlimited resumes and advanced
                  features like AI-powered content suggestions.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Are the templates really ATS-compatible?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Absolutely. Every template is tested against major ATS systems
                  including Workday, Greenhouse, Lever, and Taleo. We use clean
                  HTML structure, standard fonts, and proper heading hierarchy.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Can I import my existing CV?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes! If you've uploaded your CV to Resume AI, you can import
                  all your information into the resume builder with one click.
                  Experience, education, skills, and projects are automatically
                  populated.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  What format does the resume download in?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Resumes download as PDF files, which is the most widely
                  accepted format by employers and ATS systems. The PDF
                  maintains perfect formatting across all devices and platforms.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="bg-gradient-to-r from-[#ff6600]/20 to-[#ff6600]/10 border border-[#ff6600]/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to Build Your Perfect Resume?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Stop spending hours on resume formatting. Create a professional,
                ATS-optimized resume in minutes. Your next interview is waiting.
              </p>
              <Link
                href="https://app.cvai.dev/dashboard/resumes"
                className="inline-block bg-[#ff6600] hover:bg-[#ff6600]/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Start Building Free
              </Link>
              <p className="text-gray-400 text-sm mt-4">
                No credit card required • 5 free resumes • All templates
                included
              </p>
            </div>
          </motion.section>
        </div>
      </article>

      <Footer />
    </motion.div>
  );
};

export default AIResumeBuilderBlogPost;
