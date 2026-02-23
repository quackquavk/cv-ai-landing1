"use client";
import React from 'react';
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/LandingPage/Footer";
import { Toaster } from "@/components/ui/toaster";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Sample policy sections
const policySections = [
  {
    title: "Privacy Policy",
    content: "At Resume AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site."
  },
  {
    title: "Information We Collect",
    content: "We collect information that you provide directly to us, including but not limited to your name, email address, phone number, and any other information you choose to provide. We also automatically collect certain information about your device when you use our services, including your IP address, browser type, operating system, and other technical information."
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, to develop new features, and to protect our services and our users. We may also use your information to send you marketing communications, but you can opt out of these communications at any time."
  },
  {
    title: "Information Sharing and Disclosure",
    content: "We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described in this Privacy Policy. We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer service."
  },
  {
    title: "Data Security",
    content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure."
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information. To exercise these rights, please contact us using the information provided below."
  },
  {
    title: "Changes to This Privacy Policy",
    content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. You are advised to review this Privacy Policy periodically for any changes."
  },
  {
    title: "Contact Us",
    content: "If you have any questions about this Privacy Policy, please contact us at mail@rebuzzllc.com."
  }
];

const PolicyPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background text-foreground relative"
    >
      <Header />
      
      {/* Policy Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-gray-200 to-foreground bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-white">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" suppressHydrationWarning>
              Last Updated: 04/04/2025
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Policy Content */}
      <section className="relative py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {policySections.map((section, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-muted/40 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-4 text-accent">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <Toaster />
    </motion.div>
  );
};

export default PolicyPage;