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

// Sample Terms of Service sections
const tosSections = [
  {
    title: "Terms of Service",
    content: "Welcome to Resume AI. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and we will notify you of any changes by posting the new Terms of Service on this page."
  },
  {
    title: "Use of Our Services",
    content: "You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that violates any applicable laws or regulations, or in any manner that could damage, disable, overburden, or impair our services."
  },
  {
    title: "User Accounts",
    content: "To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security."
  },
  {
    title: "Intellectual Property",
    content: "All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are owned by Resume AI or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our services without our prior written consent."
  },
  {
    title: "User Content",
    content: "You retain all rights to any content you submit, post, or display on or through our services. By submitting, posting, or displaying content on or through our services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content in any media formats and through any media channels."
  },
  {
    title: "Prohibited Uses",
    content: "You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that violates any applicable laws or regulations, or in any manner that could damage, disable, overburden, or impair our services. You also agree not to attempt to gain unauthorized access to any portion of our services or any other accounts, computer systems, or networks connected to our services."
  },
  {
    title: "Disclaimer of Warranties",
    content: "Our services are provided on an 'as is' and 'as available' basis, without any warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, timely, secure, or error-free, or that defects will be corrected. We make no warranties or representations about the accuracy, reliability, timeliness, or completeness of the content provided through our services."
  },
  {
    title: "Limitation of Liability",
    content: "In no event shall Resume AI, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services."
  },
  {
    title: "Indemnification",
    content: "You agree to defend, indemnify, and hold harmless Resume AI, its directors, employees, partners, agents, suppliers, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of these Terms."
  },
  {
    title: "Termination",
    content: "We may terminate or suspend your account and bar access to our services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of these Terms."
  },
  {
    title: "Governing Law",
    content: "These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the federal or state courts located within the United States."
  },
  {
    title: "Changes to Terms",
    content: "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
  },
  {
    title: "Contact Us",
    content: "If you have any questions about these Terms, please contact us at mail@rebuzzllc.com."
  }
];

const TermsOfServicePage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background text-foreground relative"
    >
      <Header />
      
      {/* Terms of Service Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-gray-200 to-foreground bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-white">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Last Updated: 04/04/2025
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Terms of Service Content */}
      <section className="relative py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {tosSections.map((section, index) => (
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

export default TermsOfServicePage;
