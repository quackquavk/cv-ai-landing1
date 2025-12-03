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
      "Yes, uploading your resume and creating your profile is completely free for candidates.",
  },
  {
    question: "What happens to my resume after I upload it?",
    answer:
      "Your resume is parsed into a structured format and stored securely. Recruiters can search for candidates matching their requirements, and you'll be notified when there's a potential match.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "We accept PDF, DOC, and DOCX formats. For best results, use a clean, well-formatted resume.",
  },
  
  {
    question: "Can I update my resume and profile information later?",
    answer:
      "Absolutely! You can update your resume, salary expectations, availability, and other details anytime through your dashboard.",
  },
  {
    question: "What information should I include in my profile?",
    answer:
      "Beyond your resume, add your expected salary range, availability (immediate, 2 weeks notice, etc.), preferred work arrangements, and any specific requirements you have.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Yes, your data is encrypted and stored securely. Only verified recruiters on our platform can access candidate profiles.",
  },
];

const generalFAQs = [
  {
    question: "How does semantic search work?",
    answer:
      "Unlike traditional keyword matching, our semantic search understands the meaning and context of skills and experience, so recruiters find better matches even if exact keywords don't match.",
  },
  {
    question: "Can I delete my profile anytime?",
    answer:
      "Yes, you have full control over your data and can delete your profile at any time.",
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
