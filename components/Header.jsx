"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle intersection observer for active link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#pricing", label: "Pricing" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 backdrop-blur-2xl bg-[#0a0a0a]/40 border-b border-[#ff6600]/10 shadow-sm"
          : "py-5 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-[#ff6600]/10"
      }`}
    >
      <div className="container mx-auto px-2 md:px-4 max-w-[80vw]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/cvai.png"
                  alt="CV_AI"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
            </div>
            <motion.span
              className="font-bold text-xl text-white"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/">Resume AI</Link>
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2 text-[#b0b0b0] hover:text-[#ff6600] transition-colors duration-200"
                onClick={() => setActiveLink(link.href.substring(1))}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#ff6600] transition-all duration-300 ${
                    activeLink === link.href.substring(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className="text-[#ff6600] hover:bg-[#ff6600]/10 hover:text-[#ff6600] transition-all duration-200"
                >
                  <Link href={"https://app.cvai.dev/dashboard"}>Log In</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  style={{
                    background: "linear-gradient(to right, #ff6600, #ff8533)",
                    borderColor: "#ff6600",
                    color: "white",
                    boxShadow: "0 4px 14px rgba(255, 102, 0, 0.25)",
                  }}
                  className="hover:opacity-90 transition-all duration-200"
                >
                  <Link href={"https://app.cvai.dev/dashboard"}>
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#b0b0b0] hover:text-[#ff6600] hover:bg-[#ff6600]/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-[#ff6600]/10"
          >
            <div className="container mx-auto px-4 py-5 flex flex-col gap-4 max-w-[80vw]">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-3 px-4 text-[#b0b0b0] hover:text-[#ff6600] hover:bg-[#ff6600]/5 rounded-md transition-colors duration-200"
                    onClick={() => {
                      setActiveLink(link.href.substring(1));
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 mt-2 border-t border-[#ff6600]/10 pt-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-[#b0b0b0] hover:text-[#ff6600] hover:bg-[#ff6600]/10"
                >
                  <Link href={"https://app.cvai.dev/dashboard"}>Log In</Link>
                </Button>
                <Button
                  style={{
                    background: "linear-gradient(to right, #ff6600, #ff8533)",
                    borderColor: "#ff6600",
                    color: "white",
                  }}
                  className="w-full hover:opacity-90 transition-all duration-200"
                >
                  <Link href={"https://app.cvai.dev/dashboard"}>Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
