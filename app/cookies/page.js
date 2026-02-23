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

// Sample Cookies Policy sections
const cookiesSections = [
  {
    title: "Cookies Policy",
    content: "This Cookies Policy explains how Resume AI uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them."
  },
  {
    title: "What are Cookies?",
    content: "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information. Cookies set by the website owner (in this case, Resume AI) are called 'first-party cookies'. Cookies set by parties other than the website owner are called 'third-party cookies'. Third-party cookies enable third-party features or functionality to be provided on or through the website."
  },
  {
    title: "Why do we use Cookies?",
    content: "We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as 'essential' or 'strictly necessary' cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for analytics and other purposes."
  },
  {
    title: "Types of Cookies We Use",
    content: "Our website uses the following types of cookies: Essential Cookies, Performance Cookies, Functionality Cookies, and Targeting Cookies. Essential cookies are necessary for the website to function and cannot be switched off in our systems. Performance cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. Functionality cookies enable the website to provide enhanced functionality and personalization. Targeting cookies may be set through our site by our advertising partners."
  },
  {
    title: "How Can You Control Cookies?",
    content: "You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided below. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly."
  },
  {
    title: "Do Not Track Signals",
    content: "Some browsers have incorporated 'Do Not Track' (DNT) features that can send a signal to the websites you visit indicating you do not wish to be tracked. Because there is not yet a common understanding of how to interpret the DNT signal, our website does not currently respond to browser DNT signals."
  },
  {
    title: "How Often Will We Update This Cookies Policy?",
    content: "We may update this Cookies Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookies Policy regularly to stay informed about our use of cookies and related technologies."
  },
  {
    title: "Where Can You Obtain Further Assistance?",
    content: "If you have any questions about our use of cookies or other technologies, please contact us at mail@rebuzzllc.com."
  }
];

const CookiesPolicyPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background text-foreground relative"
    >
      <Header />
      
      {/* Cookies Policy Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-gray-200 to-foreground bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-white">
              Cookies Policy
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Last Updated: 04/04/2025
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Cookies Policy Content */}
      <section className="relative py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {cookiesSections.map((section, index) => (
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

export default CookiesPolicyPage;
