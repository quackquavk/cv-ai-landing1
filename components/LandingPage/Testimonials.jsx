import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const testimonialVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.95,
    position: "absolute", // Add absolute positioning
    width: "100%", // Ensure full width
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    position: "relative", // Reset to relative when centered
    width: "100%", // Ensure full width
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0, // Change to 0 to fade out completely
    scale: 0.95,
    position: "absolute", // Add absolute positioning
    width: "100%", // Ensure full width
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Manager",
    company: "TalentBridge Inc.",
    avatar: "/sarah.jpg",
    content:
      "Resume AI has revolutionized our hiring process. We’ve cut candidate screening time by 60%, allowing us to focus on top talent faster.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Recruitment Lead",
    company: "Innovate Solutions",
    avatar: "/michael.jpg",
    content:
      "I was skeptical at first, but Resume AI’s candidate matching is incredibly accurate. It feels like having an AI recruiter working 24/7 for us.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Hiring Specialist",
    company: "TechTalent Hub",
    avatar: "/jessica.jpg",
    content:
      "The AI-driven recommendations have helped us discover hidden talent we would’ve otherwise overlooked. Our hiring speed has doubled!",
    rating: 4,
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Talent Acquisition Manager",
    company: "GlobalHire",
    avatar: "/david.jpg",
    content:
      "Resume AI takes the guesswork out of recruitment. It quickly filters top candidates, making our decision-making process much smoother.",
    rating: 5,
  },
];

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Generate star rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-accent fill-accent" : "text-muted-foreground/40"
          }`}
        />
      ));
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      id="testimonials"
      viewport={{ once: false }}
      className="py-[140px] relative overflow-hidden bg-background text-foreground"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[70%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[5%] w-[30%] h-[40%] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div
        className="relative z-10 container mx-auto px-6
      
      "
      >
        {/* Section header */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What Our <span className="text-accent">Users</span> Are Saying
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Resume AI helps recruiters identify and connect with ideal
            candidates by leveraging AI-driven talent matching technology.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Add a fixed height container to prevent layout shifts */}
          <div className="relative" style={{ height: "450px" }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-muted/30 border border-accent/10 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-80" />

                  {/* Decorative elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-accent/5 blur-3xl" />

                  <div className="relative p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                      {/* Avatar and info */}
                      <div className="flex flex-col items-center text-center md:text-left md:items-start space-y-4">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent/70 blur-md opacity-30 scale-110" />
                          <div className="relative p-1 rounded-full bg-gradient-to-br from-accent to-accent/70">
                            <div className="p-0.5 rounded-full bg-background/80 backdrop-blur-sm">
                              <Image
                                src={
                                  testimonials[currentIndex].avatar ||
                                  "/placeholder.svg"
                                }
                                alt={testimonials[currentIndex].name}
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-2">
                          <h4 className="font-bold text-xl text-foreground">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-muted-foreground">
                            {testimonials[currentIndex].role}
                          </p>
                          <p className="text-accent font-medium">
                            {testimonials[currentIndex].company}
                          </p>
                        </div>

                        <div className="flex space-x-1 mt-2">
                          {renderStars(testimonials[currentIndex].rating)}
                        </div>
                      </div>

                      {/* Testimonial content */}
                      <div className="flex-1 relative">
                        <Quote className="absolute -top-2 -left-2 w-10 h-10 text-accent opacity-20" />
                        <div className="relative">
                          <p className="text-lg md:text-xl leading-relaxed pt-6 text-foreground font-medium">
                            {testimonials[currentIndex].content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "relative h-2 rounded-full transition-all duration-500 overflow-hidden",
                  index === currentIndex
                    ? "w-10 bg-accent"
                    : "w-2 bg-muted-foreground/20 hover:bg-muted-foreground/30",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-accent/60"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{
                      duration: 6,
                      ease: "linear",
                      repeat: isAutoPlaying ? Number.POSITIVE_INFINITY : 0,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={cn(
                "text-xs font-medium px-3 py-1 rounded-full transition-all duration-300",
                isAutoPlaying
                  ? "bg-accent/10 text-accent hover:bg-accent/20"
                  : "bg-muted/10 text-muted-foreground hover:bg-muted/20",
              )}
            >
              {isAutoPlaying ? "Auto-playing" : "Paused"}
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
