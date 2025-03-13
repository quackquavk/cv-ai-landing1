import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import InputLabel from "../ui/InputLabel";
import {
  Calendar,
  ChevronRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

// Animation variants
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

// Footer navigation links
const footerLinks = [
  {
    title: "Affiliates",
    links: [
      { name: "CV-AI", href: "https://cvai.dev" },
      { name: "POS App", href: "https://rebuzzpos.com" },
      { name: "Ordering App", href: "https://" },
      { name: "Outsourcing", href: "https://nextoffice.dev" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Content Library", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Case Studies", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "mail@rebuzzllc.com", href: "mailto:mail@rebuzzllc.com" },
      { name: "+1 929 483 3345", href: "tel:+19294833345" },
      { name: "Delaware, USA", href: "#" },
    ],
  },
]

// Social media links
const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setSubscribed(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }, 1000);
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-black text-white relative border-t border-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />

      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-[#ff6600] mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Rebuzz AI
              </span>
            </div>

            <p className="text-gray-400 max-w-md">
              AI-powered content calendar generation to help you plan, create,
              and schedule your content strategy with just a click.
            </p>

            {/* Newsletter subscription
            <div className="pt-2">
              <h4 className="text-lg font-medium mb-3">Stay updated</h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <InputLabel
                    suppressHydrationWarning
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 hover:border-white/30 transition-colors"
                    disabled={isSubscribing || subscribed}
                  />
                  <Button
                    type="submit"
                    className={`relative px-5 py-3 font-medium rounded-lg 
                      transition-all duration-300 ease-out text-white
                      ${
                        isSubscribing || subscribed
                          ? "bg-[#ff6600]/80"
                          : "hover:bg-[#ff6600cf] bg-[#ff6600]"
                      } 
                      shadow-md shadow-[#000000] border-b-2 border-[#b1591e]`}
                    disabled={isSubscribing || subscribed}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1">
                      {isSubscribing ? (
                        "Subscribing..."
                      ) : subscribed ? (
                        "Subscribed!"
                      ) : (
                        <>
                          Subscribe
                          <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </span>
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div> */}
          </motion.div>

          {/* Navigation links */}
          {footerLinks.map((section) => (
            <motion.div
              variants={itemVariants}
              key={section.title}
              className="space-y-4"
            >
              <h4 className="text-lg font-medium">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 my-8"
        />

        {/* Bottom section with social links and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div variants={itemVariants} className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Rebuzz AI. All rights reserved.
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Cookies
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
