"use client";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { useState } from "react";

function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "ki520C8GJqo";

  return (
    <section
      className="relative py-24 px-4 overflow-hidden bg-background"
      id="how-it-works"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] brand-gradient-bg opacity-[0.07] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent-magenta opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 border border-accent/15 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
              // SEE IT IN ACTION
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Watch How </span>
            <span className="brand-gradient-text">It Works</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how ResumeAI transforms candidate search with semantic
            intelligence and AI-powered matching.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Gradient border glow */}
          <div className="absolute -inset-[1px] brand-gradient-bg rounded-2xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-500" />

          {/* Main video wrapper with glassmorphism */}
          <div className="relative glass-card rounded-2xl p-1">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-background">
              {!isPlaying ? (
                <div
                  className="absolute inset-0 cursor-pointer group/play"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/play:scale-105"
                  />

                  {/* Dark overlay for better play button visibility */}
                  <div className="absolute inset-0 bg-background/30" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <div
                        className="absolute inset-0 brand-gradient-bg rounded-full animate-ping opacity-30"
                        style={{ animationDuration: "2s" }}
                      />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 brand-gradient-bg rounded-full flex items-center justify-center shadow-2xl shadow-accent/30">
                        <Play
                          className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                          fill="white"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-foreground/70 text-sm font-mono uppercase tracking-wider">
                      [ CLICK TO PLAY ]
                    </p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="RebuzzAI Demo Video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Corner accents with gradient */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-accent/30 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-accent-magenta/30 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-accent-magenta/30 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-accent/30 rounded-br-lg" />
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: "AI-Powered", description: "Semantic Resume Search", tag: "01" },
            { title: "Real Candidates", description: "Verified profiles, real talent", tag: "02" },
            { title: "Faster Hiring", description: "Reduce time-to-hire by 60%", tag: "03" },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-5 glass-card rounded-xl hover:border-accent/20 transition-all duration-300 group"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent/60 mb-2 block">
                [ {feature.tag} ]
              </span>
              <h3 className="text-foreground font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default VideoShowcase;
