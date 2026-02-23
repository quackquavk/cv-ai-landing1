import { motion } from "framer-motion";
import { useState } from "react";
import { Check, HelpCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
  hover: {
    y: -10,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// Pricing plans data
const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: 9.99,
    period: "month",
    description: "Perfect for individuals and small content creators",
    features: [
      "10 content calendars per month",
      "30 days of content per calendar",
      "Basic holiday recommendations",
      "Email support",
      "1 user",
    ],
    highlighted: false,
    buttonText: "Get Started",
  },
  {
    id: "pro",
    name: "Pro",
    price: 24.99,
    period: "month",
    description: "Ideal for growing businesses and marketing teams",
    features: [
      "Unlimited content calendars",
      "60 days of content per calendar",
      "Advanced holiday recommendations",
      "Country-specific content ideas",
      "Priority email support",
      "3 team members",
    ],
    highlighted: true,
    buttonText: "Get Pro",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 99.99,
    period: "month",
    description: "For large organizations with complex content needs",
    features: [
      "Unlimited everything",
      "90 days of content per calendar",
      "Custom AI training on your brand voice",
      "API access",
      "Dedicated account manager",
      "Unlimited team members",
      "White-label options",
    ],
    highlighted: false,
    buttonText: "Contact Sales",
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("month");

  // Calculate yearly price (20% discount)
  const getPrice = (monthlyPrice) => {
    if (billingPeriod === "year") {
      return (monthlyPrice * 12 * 0.8).toFixed(2);
    }
    return monthlyPrice.toFixed(2);
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      id="pricing"
      viewport={{ once: false }}
      className="py-20 bg-background text-foreground relative"
    >
      <div className="absolute inset-0 " />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that's right for your content strategy
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={() => setBillingPeriod("month")}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                billingPeriod === "month"
                  ? "bg-accent text-white"
                  : "bg-background border border-border text-foreground hover:border-accent/40"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("year")}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                billingPeriod === "year"
                  ? "bg-accent text-white"
                  : "bg-background border border-border text-foreground hover:border-accent/40"
              }`}
            >
              Yearly <span className="text-xs font-medium ml-1">Save 20%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
              className={`relative rounded-xl overflow-hidden border ${
                plan.highlighted ? "border-accent" : "border-border"
              } bg-card p-8 flex flex-col h-full`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    ${getPrice(plan.price)}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    /{billingPeriod === "month" ? "month" : "year"}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`relative px-6 py-3 text-lg font-medium rounded-lg 
                  transition-all duration-300 ease-out text-foreground ${
                    plan.highlighted
                      ? "hover:bg-accent/90 bg-accent text-white shadow-md shadow-accent/20"
                      : "bg-background border border-border hover:border-accent/50"
                  }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {plan.highlighted && <Sparkles className="w-5 h-5" />}
                  {plan.buttonText}
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 text-center max-w-3xl mx-auto hidden"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-accent" />
            <h3 className="text-2xl font-bold">Need help choosing?</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Our team is ready to answer any questions you might have about our
            plans.
          </p>
          <button
            className="relative px-6 py-4 text-md font-medium rounded-lg 
              transition-all duration-300 ease-out text-foreground bg-background border border-border hover:border-accent/50"
          >
            <span className="relative z-10">Contact Support</span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
