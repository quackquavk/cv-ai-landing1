"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.7 },
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
    { href: "https://app.cvai.dev", label: "Pricing" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 backdrop-blur-2xl bg-background/60 border-b border-foreground/[0.06] shadow-lg shadow-background/20"
          : "py-5 backdrop-blur-md bg-background/40 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-2 md:px-4 max-w-[80vw]">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }}>
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
              </motion.div>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 ml-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wide"
                onClick={() => setActiveLink(link.href.substring(1))}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] brand-gradient-bg transition-all duration-300 ${
                    activeLink === link.href.substring(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden sm:flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-300 font-medium"
                >
                  <Link href={"https://app.cvai.dev/dashboard"}>Log In</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="brand-gradient-bg text-white font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:brightness-110 transition-all duration-300 border-0">
                  <Link href={"https://app.cvai.dev/dashboard"}>
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-accent hover:bg-accent/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-b border-foreground/[0.06]"
          >
            <div className="container mx-auto px-4 py-5 flex flex-col gap-4 max-w-[80vw]">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors duration-300 font-medium"
                    onClick={() => {
                      setActiveLink(link.href.substring(1));
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 mt-2 border-t border-foreground/[0.06] pt-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                >
                  <Link href={"https://app.cvai.dev/dashboard"}>Log In</Link>
                </Button>
                <Button className="w-full brand-gradient-bg text-white font-semibold hover:brightness-110 transition-all duration-300 border-0">
                  <Link href={"https://app.cvai.dev/dashboard"}>
                    Get Started
                  </Link>
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
