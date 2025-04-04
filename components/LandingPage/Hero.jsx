import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Adjust the import path as necessary
import { Sparkles, Play } from "lucide-react"; // Ensure these icons are available
import Link from "next/link";

const Hero = ({ isLoading, router }) => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative z-10 container mx-auto px-2 md:px-6 flex flex-col items-center justify-center min-h-[90vh] -mt-16 bg-black">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 py-16 md:py-24"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto space-y-6 text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-sm">
                Find your next
              </span>
              <div className="flex items-center justify-center gap-2 md:gap-4 mt-1 md:mt-2">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-sm">
                  candidate
                </span>
                <span className="relative">
                  <span className="text-[#ff6600] drop-shadow-glow">
                    faster
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-0 left-0 h-1 bg-[#ff6600]/70 rounded-full"
                  />
                </span>
              </div>
            </h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-xl mx-auto"
            >
              Our AI-powered platform helps you find the perfect candidates
              faster and more efficiently than traditional methods.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center"
            >
              <Button
                style={{
                  backgroundColor: "#ff6600",
                  borderColor: "#ff6600",
                  color: "white",
                }}
                onClick={() => router.push("https://app.cvai.dev")}
                className="relative px-8 py-6 text-lg font-medium rounded-lg 
                  transition-all duration-300 ease-out text-white bg-[#ff6600] hover:bg-[#ff6600]
                  shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                disabled={isLoading}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 ">
                  <Link href="https://app.cvai.dev">Get Started</Link>
                  <Sparkles className="h-5 w-5" />
                </span>
              </Button>

              <Button
                onClick={() => router.push("/demo")}
                variant="outline"
                className="relative px-8 py-6 text-lg font-medium rounded-lg 
                  border-2 border-gray-700 hover:border-[#ff6600]/70
                  transition-all duration-300 ease-out text-white 
                  hover:bg-[#ff6600]/10"
                disabled={isLoading}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Watch Demo <Play className="h-5 w-5" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 text-gray-400 flex items-center justify-center gap-2"
            >

              <span className="mx-2">•</span>
              <span className="mx-2">Free for now.</span>
              <span className="mx-2">•</span>
              
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
