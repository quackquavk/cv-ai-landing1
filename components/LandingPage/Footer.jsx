"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "AI Resume Builder", href: "/ai-resume-builder" },
      {
        name: "LinkedIn Auto Apply",
        href: "https://app.cvai.dev/dashboard/candidate",
      },
      {
        name: "Candidate Search",
        href: "https://app.cvai.dev/dashboard/candidate",
      },
    ],
  },
  {
    title: "Affiliates",
    links: [
      { name: "Rebuzz AI", href: "https://rebuzzai.com" },
      { name: "POS App", href: "https://rebuzzpos.com" },
      { name: "Ordering App", href: "https://shop.rebuzzpos.com" },
      { name: "Outsourcing", href: "https://nextoffice.dev" },
      { name: "Brandbuilder", href: "https://brandbuilder.com.np" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog/ai-resume-builder-guide" },
      { name: "mail@rebuzzllc.com", href: "mailto:mail@rebuzzllc.com" },
      { name: "+1 929 483 3345", href: "tel:+19294833345" },
      { name: "Delaware, USA", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export default function Footer() {
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-background text-foreground relative overflow-hidden"
    >
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px brand-gradient-bg opacity-20" />

      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[200px] brand-gradient-bg opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center">
              <Image
                src={
                  mounted
                    ? isDark
                      ? "/assets/resumeai_logo_white.webp"
                      : "/assets/resumeai_logo_black.webp"
                    : "/assets/resumeai_logo_white.webp"
                }
                alt="Resume AI"
                width={150}
                height={50}
                className="object-contain"
                priority
              />
            </div>

            <p className="text-muted-foreground max-w-md leading-relaxed">
              Precision-engineered AI for candidate sourcing. Find, assess, and
              connect with top talent—all with just a click.
            </p>

            <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
              // BUILT WITH AI
            </span>
          </motion.div>

          {/* Navigation links */}
          {footerLinks.map((section) => (
            <motion.div
              variants={itemVariants}
              key={section.title}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                        {...(isExternal && { target: "_blank" })}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider with gradient */}
        <motion.div
          variants={itemVariants}
          className="relative my-8"
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-border" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-px brand-gradient-bg opacity-30" />
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div variants={itemVariants} className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-foreground/[0.08] hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 text-muted-foreground hover:text-accent"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60"
          >
            &copy; {new Date().getFullYear()} ResumeAI. All rights reserved.
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 text-sm">
            <a
              href="/policy"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/tos"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Cookies
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
