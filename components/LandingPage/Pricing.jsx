import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Crown, Users, User } from "lucide-react";

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
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
    price: 0,
    originalPrice: null,
    period: "forever",
    description: "Everything you need to grow:",
    features: ["Basic features", "Limited searches"],
    highlighted: false,
    badge: null,
    buttonText: "Get Started Free",
    buttonLink: `${process.env.NEXT_PUBLIC_SCRUM_API_URL || "https://app.cvai.dev"}/auth/google`,
    footnote: null,
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: 99,
    originalPrice: 149,
    period: "year",
    description: "Everything you need to grow:",
    features: [
      "Private Folder",
      "Unlimited CV uploads",
      "Access to LinkedIn bots",
      "Unlimited semantic search",
      "Priority support",
      "All future updates",
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
    price: 299,
    originalPrice: 499,
    period: null,
    description: "Everything in Premium, forever:",
    features: [
      "Private Folder",
      "Unlimited CV uploads",
      "Access to LinkedIn bots",
      "Unlimited semantic search",
      "Limited to first 100 users only!",
    ],
    highlighted: false,
    badge: "BEST VALUE",
    buttonText: "Get Lifetime Access",
    buttonLink: "https://app.cvai.dev/pricing",
    footnote: "One-time payment. Lifetime access.",
  },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("recruiters");

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      id="pricing"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 bg-background text-foreground relative"
    >
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
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
              className="max-w-lg mx-auto"
            >
              <div className="relative rounded-xl overflow-hidden border border-accent bg-card p-8 flex flex-col">
                <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-1.5 text-sm font-medium">
                  Free Forever
                </div>

                <div className="mt-6 mb-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">For Candidates</h3>
                  <p className="text-muted-foreground mb-6">
                    Everything you need to land your dream job
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-6xl font-bold">$0</span>
                    <span className="text-muted-foreground ml-2 text-lg">
                      /forever
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {candidateFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${process.env.NEXT_PUBLIC_SCRUM_API_URL || "https://app.cvai.dev"}/auth/google`}
                  className="block px-6 py-3.5 text-base font-medium rounded-lg transition-colors duration-200 bg-accent hover:bg-accent/90 text-white text-center"
                >
                  Get Started Free
                </a>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  No credit card required
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="recruiters"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch"
            >
              {recruiterPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-xl overflow-hidden border ${
                    plan.highlighted
                      ? "border-accent"
                      : plan.badge
                        ? "border-accent/50"
                        : "border-border"
                  } bg-card p-6 md:p-8 flex flex-col h-full transition-colors duration-200 hover:border-accent/60`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-1.5 text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  {plan.badge && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-1.5 text-sm font-bold tracking-wider">
                      {plan.badge}
                    </div>
                  )}

                  <div className={`mb-6 ${plan.highlighted || plan.badge ? "mt-6" : ""}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {plan.id === "lifetime" && (
                        <Crown className="w-5 h-5 text-amber-500" />
                      )}
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline">
                      {plan.originalPrice && (
                        <span className="text-xl text-muted-foreground line-through mr-2">
                          ${plan.originalPrice}
                        </span>
                      )}
                      <span className="text-4xl font-bold">${plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground ml-1 text-sm">
                          /{plan.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <a
                      href={plan.buttonLink}
                      className={`block w-full py-3 text-sm font-medium rounded-lg transition-colors duration-200 text-center whitespace-nowrap ${
                        plan.highlighted
                          ? "bg-accent hover:bg-accent/90 text-white"
                          : plan.badge
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                            : "bg-background border border-border hover:border-accent/50 text-foreground"
                      }`}
                    >
                      {plan.buttonText}
                    </a>
                    {plan.footnote && (
                      <p className="text-center text-xs text-muted-foreground mt-2">
                        {plan.footnote}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
