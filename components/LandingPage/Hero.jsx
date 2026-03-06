import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = ({ isLoading, router }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center min-h-[90vh] -mt-16 bg-background overflow-hidden"
    >
      {/* Gradient glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none brand-gradient-bg" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none bg-accent-magenta" />

      <div className="max-w-3xl w-full space-y-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 py-16 md:py-24"
        >
          {/* Monospace tag line */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full brand-gradient-bg animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
                // AI-POWERED RECRUITMENT
              </span>
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto space-y-6 text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="text-foreground">
                Find your next
              </span>
              <br />
              <span className="text-foreground">candidate </span>
              <span className="relative inline-block">
                <span className="brand-gradient-text">faster</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute bottom-1 left-0 h-[3px] brand-gradient-bg rounded-full"
                />
              </span>
            </h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
            >
              Precision-engineered AI that bypasses the noise. Semantic search
              meets intelligent matching to surface the talent you need.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center"
            >
              <Link href="https://app.cvai.dev">
                <Button
                  className="relative px-8 py-6 text-base font-semibold rounded-xl
                    transition-all duration-300 ease-out text-white brand-gradient-bg
                    shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:brightness-110 border-0 group"
                  disabled={isLoading}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Initialize Your Search
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>

              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  className="relative px-8 py-6 text-base font-semibold rounded-xl
                    border border-foreground/10 hover:border-accent/40
                    transition-all duration-300 ease-out text-foreground
                    hover:bg-accent/5 backdrop-blur-sm"
                  disabled={isLoading}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Watch Demo <Play className="h-5 w-5" />
                  </span>
                </Button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-14 flex items-center justify-center gap-8 md:gap-12"
            >
              {[
                { value: "50K+", label: "Resumes Processed" },
                { value: "3.2x", label: "More Matches" },
                { value: "7s", label: "Avg. Scan Time" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold brand-gradient-text">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
