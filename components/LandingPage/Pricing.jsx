import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Users, User } from "lucide-react";
import AdaptivePricingSection from "@/components/ui/adaptive-pricing-section";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const candidateFeatures = [
  "LinkedIn Job Apply Bot",
  "AI Resume Builder",
  "ATS Optimizer",
  "5 Professional Templates",
  "Real-time Resume Preview",
];

const recruiterPlans = [
  {
    id: "free",
    name: "Free Plan",
    price: "$0",
    period: "/forever",
    subtitle: "FREE",
    description: "Everything you need to grow:",
    features: [
      { text: "Basic features", included: true },
      { text: "Limited searches", included: true },
    ],
    highlighted: false,
    badge: null,
    buttonText: "Get Started Free",
    buttonLink: `${process.env.NEXT_PUBLIC_SCRUM_API_URL || "https://app.cvai.dev"}/auth/google`,
    footnote: null,
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "$99",
    period: "/year",
    subtitle: "PREMIUM",
    description: "Everything you need to grow:",
    features: [
      { text: "Private Folder", included: true },
      { text: "Unlimited CV uploads", included: true },
      { text: "Access to LinkedIn bots", included: true },
      { text: "Unlimited semantic search", included: true },
      { text: "Priority support", included: true },
      { text: "All future updates", included: true },
    ],
    highlighted: true,
    badge: null,
    buttonText: "Subscribe Now",
    buttonLink: "https://app.cvai.dev/pricing",
    footnote: "Recurring subscription. Cancel anytime.",
  },
  {
    id: "lifetime",
    name: "Premium Lifetime",
    price: "$299",
    period: null,
    subtitle: "LIFETIME",
    description: "Everything in Premium, forever:",
    features: [
      { text: "Private Folder", included: true },
      { text: "Unlimited CV uploads", included: true },
      { text: "Access to LinkedIn bots", included: true },
      { text: "Unlimited semantic search", included: true },
      { text: "Limited to first 100 users only!", included: true },
    ],
    highlighted: false,
    badge: { text: "BEST VALUE" },
    buttonText: "Get Lifetime Access",
    buttonLink: "https://app.cvai.dev/pricing",
    footnote: "One-time payment. Lifetime access.",
  },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("recruiters");

  const candidateTier = {
    name: "Free",
    subtitle: "CANDIDATES",
    price: "$0",
    period: "/forever",
    description: "Everything you need to land your dream job",
    badge: { text: "FREE FOREVER" },
    features: candidateFeatures.map((feature) => ({
      text: feature,
      included: true,
    })),
    buttonText: "Get Started Free",
    buttonLink: `${process.env.NEXT_PUBLIC_SCRUM_API_URL || "https://app.cvai.dev"}/auth/google`,
    highlighted: false,
  };

  const transformedRecruiterTiers = recruiterPlans.map((plan) => ({
    name: plan.name,
    subtitle: plan.subtitle,
    price: plan.price,
    period: plan.period,
    description: plan.description,
    badge: plan.badge,
    features: plan.features,
    buttonText: plan.buttonText,
    buttonLink: plan.buttonLink,
    highlighted: plan.highlighted,
    footerText: plan.footnote,
    footerLink: plan.buttonLink,
  }));

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      id="pricing"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 bg-background text-foreground relative"
    >
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-4 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Free for candidates. Powerful tools for recruiters.
          </p>

          <div className="flex items-center justify-center mt-8 bg-muted rounded-xl p-1.5 max-w-xs mx-auto">
            <button
              onClick={() => setActiveTab("candidates")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 flex-1 justify-center ${
                activeTab === "candidates"
                  ? "bg-accent text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="w-4 h-4" />
              Candidates
            </button>
            <button
              onClick={() => setActiveTab("recruiters")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 flex-1 justify-center ${
                activeTab === "recruiters"
                  ? "bg-accent text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="w-4 h-4" />
              Recruiters
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "candidates" ? (
            <motion.div
              key="candidates"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <AdaptivePricingSection
                title=""
                subtitle=""
                tiers={[candidateTier]}
              />
            </motion.div>
          ) : (
            <motion.div
              key="recruiters"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AdaptivePricingSection
                title=""
                subtitle=""
                tiers={transformedRecruiterTiers}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}