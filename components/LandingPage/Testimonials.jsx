import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Star } from 'lucide-react'

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
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

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
}

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth Inc.",
    avatar: "/sarah.jpg",
    content:
      "This content calendar tool has completely transformed our marketing strategy. We've seen a 40% increase in engagement since implementing the AI-generated content ideas.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Social Media Manager",
    company: "Innovate Solutions",
    avatar: "/michael.jpg",
    content:
      "I was skeptical at first, but the quality of content suggestions is remarkable. It's like having an expert content strategist on demand, available with just one click.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "E-commerce Owner",
    company: "StyleBoutique",
    avatar: "/jessica.jpg",
    content:
      "The country-specific holiday recommendations have been a game-changer for our international campaigns. Our engagement rates have never been higher.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Content Creator",
    company: "Digital Nomad",
    avatar: "/david.jpg",
    content:
      "As a solo creator, planning content was always my biggest challenge. Now I can generate a month's worth of ideas in minutes. Absolutely worth every penny!",
    rating: 5,
  },
]

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  // Generate star rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? "text-[#ff6600] fill-[#ff6600]" : "text-gray-400"}`} />
      ))
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      id="testimonials"
      viewport={{ once: false }}
      className="py-[140px] relative overflow-hidden bg-black text-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] rounded-full bg-[#ff6600]/5 blur-[120px]" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[70%] rounded-full bg-[#ff6600]/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[5%] w-[30%] h-[40%] rounded-full bg-[#ff9d4d]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            What Our <span className="text-[#ff6600]">Users</span> Are Saying
          </h2>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Join thousands of content creators who have revolutionized their content strategy
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Add a fixed height container to prevent layout shifts */}
          <div className="relative" style={{ height: "auto", minHeight: "300px" }}>
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
                <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/5 to-transparent opacity-80" />

                  {/* Decorative elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#ff6600]/10 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#ff9d4d]/10 blur-3xl" />

                  <div className="relative p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                      {/* Avatar and info */}
                      <div className="flex flex-col items-center text-center md:text-left md:items-start space-y-4">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff6600] to-[#ff9d4d] blur-md opacity-30 scale-110" />
                          <div className="relative p-1 rounded-full bg-gradient-to-br from-[#ff6600] to-[#ff9d4d]">
                            <div className="p-0.5 rounded-full bg-black/80 backdrop-blur-sm">
                              <img
                                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                                alt={testimonials[currentIndex].name}
                                className="w-20 h-20 rounded-full object-cover"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-2">
                          <h4 className="font-bold text-xl text-white">{testimonials[currentIndex].name}</h4>
                          <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                          <p className="text-[#ff6600] font-medium">{testimonials[currentIndex].company}</p>
                        </div>

                        <div className="flex space-x-1 mt-2">{renderStars(testimonials[currentIndex].rating)}</div>
                      </div>

                      {/* Testimonial content */}
                      <div className="flex-1 relative">
                        <Quote className="absolute -top-2 -left-2 w-10 h-10 text-[#ff6600] opacity-20" />
                        <div className="relative">
                          <p className="text-lg md:text-xl leading-relaxed pt-6 text-gray-200 font-medium">
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
                  index === currentIndex ? "w-10 bg-[#ff6600]" : "w-2 bg-white/20 hover:bg-white/30",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-[#ff6600]/60"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 6, ease: "linear", repeat: isAutoPlaying ? Number.POSITIVE_INFINITY : 0 }}
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
                  ? "bg-[#ff6600]/10 text-[#ff6600] hover:bg-[#ff6600]/20"
                  : "bg-white/10 text-gray-400 hover:bg-white/20",
              )}
            >
              {isAutoPlaying ? "Auto-playing" : "Paused"}
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
