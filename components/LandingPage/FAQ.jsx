"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const candidateFAQs = [
  {
    question: "Is ResumeAI free to use?",
    answer:
      "Yes, uploading your resume and creating your profile is completely free for candidates. You can build professional, ATS-optimized resumes without any cost using our AI-powered resume builder. Free users get access to all 5 professional templates, real-time preview, and can create up to 5 resumes. Premium features are available for users who need unlimited resumes and advanced AI-powered content suggestions, but the core functionality remains free forever. We believe everyone deserves access to powerful career tools regardless of their financial situation.",
  },
  {
    question: "What happens to my resume after I upload it?",
    answer:
      "Your resume is parsed into a structured format using our advanced AI technology and stored securely with industry-standard encryption. Our semantic AI analyzes your skills, experience, and qualifications to understand the true depth of your capabilities—not just keywords. Recruiters using our platform can then search for candidates matching their requirements using semantic search technology, which understands context and meaning. When there's a potential match between your profile and a job opportunity, you'll receive a notification. Your data is never sold to third parties, and you maintain full control over your profile visibility.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "We accept PDF, DOC, and DOCX formats for resume uploads. PDF format typically provides the most consistent parsing results across our AI systems because it preserves formatting reliably. For best results, use a clean, well-formatted resume without complex tables, graphics, or unusual fonts that might confuse parsing algorithms. Avoid putting important information in headers, footers, or text boxes, as these can sometimes be missed by document parsers. If you're unsure about your format, our resume builder can help you create a perfectly optimized document from scratch.",
  },
  {
    question: "Can I update my resume and profile information later?",
    answer:
      "Absolutely! You can update your resume, salary expectations, availability, and other profile details anytime through your dashboard. We actually recommend keeping your profile current to improve your visibility to recruiters and receive more relevant job matches. When you update your information, our AI re-analyzes your profile to ensure you're being matched with the most suitable opportunities. There's no limit to how many times you can update your profile, and changes are reflected immediately in our search system.",
  },
  {
    question: "What information should I include in my profile?",
    answer:
      "Beyond your resume, we recommend adding your expected salary range (helps filter for roles within your target compensation), availability status (immediate, 2 weeks notice, 1 month notice, etc.), preferred work arrangements (remote, hybrid, on-site), location preferences including willingness to relocate, and any specific requirements you have for your next role. The more complete your profile, the better our semantic AI can match you with suitable opportunities. You can also add links to your portfolio, GitHub, LinkedIn, or other professional profiles to showcase your work.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Yes, your data is encrypted and stored securely using industry-standard security protocols including AES-256 encryption at rest and TLS 1.3 for data in transit. Only verified recruiters on our platform can access candidate profiles, and they must agree to our terms of service regarding data usage. You have full control over your profile visibility and can choose to hide your profile from search results at any time. We never sell your personal information to third parties or use it for advertising purposes. You can also request a complete deletion of your data at any time through your account settings.",
  },
  {
    question: "How does semantic search work?",
    answer:
      "Unlike traditional keyword matching that only finds exact text matches, our semantic search uses advanced AI to understand the meaning and context of skills and experience. For example, it recognizes that 'built REST APIs' relates to 'backend development,' 'microservices architecture,' and 'API design'—even if those exact words don't appear on your resume. This means recruiters find better matches based on actual capabilities rather than keyword stuffing, and candidates get discovered for opportunities they're genuinely qualified for. Our semantic AI also understands skill relationships, so experience with React implies knowledge of JavaScript, component-based architecture, and frontend development.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#0a0a0a]/40 border border-[#ff6600]/10 rounded-xl overflow-hidden hover:border-[#ff6600]/30 transition-colors duration-300"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
      >
        <h3 className="text-lg font-semibold text-white group-hover:text-[#ff6600] transition-colors duration-300 pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="text-[#ff6600]" size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-300 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to know about ResumeAI
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* For Candidates Section */}
            <motion.div variants={itemVariants} className="mb-12">
              {/* <h3 className="text-2xl font-bold text-[#ff6600] mb-6">
                For Candidates
              </h3> */}
              <div className="space-y-4">
                {candidateFAQs.map((faq, index) => (
                  <FAQItem
                    key={`candidate-${index}`}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === `candidate-${index}`}
                    onClick={() => handleToggle(`candidate-${index}`)}
                  />
                ))}
              </div>
            </motion.div>

            {/* General Section */}
            {/* <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-[#ff6600] mb-6">
                General
              </h3>
              <div className="space-y-4">
                {generalFAQs.map((faq, index) => (
                  <FAQItem
                    key={`general-${index}`}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === `general-${index}`}
                    onClick={() => handleToggle(`general-${index}`)}
                  />
                ))}
              </div>
            </motion.div> */}

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="mt-12 text-center bg-gradient-to-r from-[#ff6600]/20 to-[#ff6600]/10 border border-[#ff6600]/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Can't find the answer you're looking for? Feel free to reach out
                to our team.
              </p>
              <a
                href="mailto:mail@rebuzzllc.com"
                className="inline-block bg-[#ff6600] hover:bg-[#ff6600]/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Contact Support
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
