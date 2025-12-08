"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/LandingPage/Footer";
import {
  Sparkles,
  FileText,
  Zap,
  CheckCircle,
  Download,
  Palette,
  Target,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI-Powered Content",
    description:
      "Our AI resume builder analyzes your experience and generates professional, impactful bullet points automatically.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "ATS-Optimized",
    description:
      "Every resume is optimized to pass Applicant Tracking Systems, so your application reaches hiring managers.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Professional Templates",
    description:
      "Choose from beautiful, professionally designed templates that make your AI CV stand out.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Build in Minutes",
    description:
      "Create your complete resume in under 10 minutes with our intelligent online AI resume builder.",
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Instant PDF Export",
    description:
      "Download your polished resume as a PDF instantly, ready to send to employers.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Multiple Formats",
    description:
      "Export in PDF, DOCX, or share via link. Your resume maker AI adapts to your needs.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload or Start Fresh",
    description:
      "Import your existing resume or start from scratch. Our AI CV maker guides you through every step.",
  },
  {
    number: "02",
    title: "AI Enhancement",
    description:
      "Let the AI resume builder optimize your content with powerful, achievement-focused language.",
  },
  {
    number: "03",
    title: "Customize & Download",
    description:
      "Choose a template, customize colors, and download your ATS-friendly resume instantly.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Developer",
    content:
      "This free AI resume builder helped me land 3 interviews in my first week. The ATS optimization really works!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Marketing Manager",
    content:
      "Best AI resume builder I've used. The AI suggestions transformed my boring resume into something impressive.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Data Analyst",
    content:
      "The online AI resume builder is incredibly easy to use. Created a professional CV in just 15 minutes.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Is this AI resume builder really free?",
    answer:
      "Yes! Our free AI resume builder lets you create and download professional resumes at no cost. We believe everyone deserves access to powerful resume tools.",
  },
  {
    question: "What makes this the best AI resume builder?",
    answer:
      "Our AI CV maker uses advanced language models to generate impactful content, optimize for ATS systems, and provide intelligent suggestions based on your industry and experience level.",
  },
  {
    question: "Will my resume pass ATS systems?",
    answer:
      "Absolutely. Every resume created with our online AI resume builder is automatically optimized for Applicant Tracking Systems with proper formatting, keywords, and structure.",
  },
  {
    question: "Can I use this AI CV maker on mobile?",
    answer:
      "Yes! Our resume maker AI is fully responsive and works seamlessly on desktop, tablet, and mobile devices.",
  },
  {
    question: "How is this different from other resume builders?",
    answer:
      "Unlike basic templates, our AI resume builder actively helps write your content, suggests improvements, and ensures your resume is optimized for both ATS and human recruiters.",
  },
];

export default function AIResumeBuilderPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff6600]/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#ff6600]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff6600]/10 rounded-full blur-[120px]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto px-6"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#ff6600] bg-[#ff6600]/10 rounded-full border border-[#ff6600]/20">
              #1 AI Resume Builder
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Free AI Resume Builder
              </span>
              <br />
              <span className="text-[#ff6600]">That Gets You Hired</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Create professional, ATS-optimized resumes in minutes with our
              <strong className="text-white"> best AI resume builder</strong>.
              Join thousands who've landed their dream jobs with our{" "}
              <strong className="text-white">AI CV maker</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://app.cvai.dev/dashboard/candidate">
                <Button className="px-8 py-6 text-lg font-semibold bg-[#ff6600] hover:bg-[#ff6600]/90 text-white rounded-lg shadow-lg shadow-orange-500/25 transition-all duration-300">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Build Your Resume Free
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg font-semibold border-gray-700 hover:border-[#ff6600]/50 text-white rounded-lg transition-all duration-300"
                >
                  See How It Works
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-gray-500 text-sm">
              ✓ No credit card required &nbsp; ✓ Free forever &nbsp; ✓
              ATS-optimized
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#ff6600]/10">
              <img
                src="/resume-builder-hero.png"
                alt="AI Resume Builder Interface - Create professional ATS-optimized resumes with our free AI CV maker"
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-400"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5 text-[#ff6600]" />
              <span>10,000+ Resumes Created</span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <Star className="w-5 h-5 text-[#ff6600]" />
              <span>4.9/5 User Rating</span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <Target className="w-5 h-5 text-[#ff6600]" />
              <span>95% ATS Pass Rate</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" aria-labelledby="features-heading">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2
                id="features-heading"
                className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                Why Choose Our AI Resume Builder?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Our online AI resume builder combines cutting-edge AI technology
                with proven resume best practices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-[#ff6600]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#ff6600]/10 rounded-xl flex items-center justify-center text-[#ff6600] mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-b from-transparent via-[#ff6600]/5 to-transparent"
        aria-labelledby="how-it-works-heading"
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2
                id="how-it-works-heading"
                className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                Build Your Resume in 3 Easy Steps
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Our resume maker AI guides you through a simple process to
                create a standout resume.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="relative p-8 bg-black border border-white/10 rounded-2xl text-center"
                >
                  <span className="text-6xl font-bold text-[#ff6600]/20 absolute top-4 left-6">
                    {step.number}
                  </span>
                  <div className="relative z-10 pt-8">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link href="https://app.cvai.dev/dashboard/candidate">
                <Button className="px-8 py-6 text-lg font-semibold bg-[#ff6600] hover:bg-[#ff6600]/90 text-white rounded-lg shadow-lg shadow-orange-500/25 transition-all duration-300">
                  Start Building Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2
                id="testimonials-heading"
                className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                Loved by Job Seekers
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                See why thousands choose our free AI resume builder to land
                their dream jobs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.blockquote
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#ff6600] fill-[#ff6600]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <footer>
                    <cite className="not-italic">
                      <span className="font-semibold text-white block">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {testimonial.role}
                      </span>
                    </cite>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-20 bg-gradient-to-b from-transparent via-[#ff6600]/5 to-transparent"
        aria-labelledby="faq-heading"
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2
                id="faq-heading"
                className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Everything you need to know about our AI CV maker.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  variants={itemVariants}
                  className="group p-6 bg-black border border-white/10 rounded-xl hover:border-[#ff6600]/30 transition-all duration-300"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-[#ff6600] group-open:rotate-180 transition-transform duration-300">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-400">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" aria-labelledby="cta-heading">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-[#ff6600]/20 to-[#ff6600]/10 border border-[#ff6600]/30 rounded-3xl"
          >
            <motion.div variants={itemVariants}>
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                Ready to Build Your Perfect Resume?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of job seekers who've used our best AI resume
                builder to land interviews and get hired. Start creating your
                professional resume today – it's completely free.
              </p>
              <Link href="https://app.cvai.dev/dashboard/candidate">
                <Button className="px-10 py-6 text-xl font-semibold bg-[#ff6600] hover:bg-[#ff6600]/90 text-white rounded-lg shadow-lg shadow-orange-500/25 transition-all duration-300">
                  <Sparkles className="w-6 h-6 mr-2" />
                  Create Your Free Resume
                </Button>
              </Link>
              <p className="mt-4 text-gray-500 text-sm">
                No signup required • Export to PDF instantly
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
