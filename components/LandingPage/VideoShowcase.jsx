"use client";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { useState } from "react";

function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "ki520C8GJqo";

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />

      {/* Ambient glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300 font-medium">
              See It In Action
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">
              Watch How It Works
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover how Resume AI transforms candidate search with semantic search and AI-powered matching.
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
          {/* Decorative border glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/50 via-purple-500/30 to-orange-500/50 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

          {/* Main video wrapper */}
          <div className="relative bg-gradient-to-b from-zinc-800/80 to-zinc-900/80 rounded-2xl p-1 backdrop-blur-sm border border-white/10">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
              {!isPlaying ? (
                /* Thumbnail with play button overlay */
                <div
                  className="absolute inset-0 cursor-pointer group/play"
                  onClick={() => setIsPlaying(true)}
                >
                  {/* YouTube thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/play:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      {/* Animated ring */}
                      <div
                        className="absolute inset-0 bg-orange-500/30 rounded-full animate-ping"
                        style={{ animationDuration: "2s" }}
                      />

                      {/* Play button background */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/30">
                        <Play
                          className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                          fill="white"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/80 text-sm md:text-base font-medium">
                      Click to watch the demo
                    </p>
                  </div>
                </div>
              ) : (
                /* YouTube iframe */
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

          {/* Decorative corner accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-orange-500/40 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-orange-500/40 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-orange-500/40 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-orange-500/40 rounded-br-lg" />
        </motion.div>

        {/* Feature highlights below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: "AI-Powered", description: "Semantic Resume Search" },
            { title: "Real Candidates", description: "Real candidates, not fake profiles" },
            { title: "Faster Hiring", description: "Faster hiring, less time spent" },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default VideoShowcase;
