"use client";

import { motion } from "framer-motion";

const partners = [
  {
    id: 1,
    name: "Meta (Facebook)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    id: 2,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 3,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 4,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 6,
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },
  {
    id: 8,
    name: "Nvidia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  },
];

export default function PartnersShowcase({ className }) {
  const doubledPartners = [...partners, ...partners];

  return (
    <section
      className={`relative h-[20vh] overflow-hidden bg-background ${className}`}
    >
      {/* Subtle top border with gradient */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px brand-gradient-bg opacity-20" />

      <div className="relative h-full flex flex-col items-center justify-center gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          // TRUSTED BY TEAMS AT
        </span>

        <div className="relative w-full">
          <div className="absolute top-0 left-0 w-[15%] md:w-[25%] h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute top-0 right-0 w-[15%] md:w-[25%] h-full bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex items-center gap-16 px-8"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {doubledPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 h-10 flex items-center justify-center"
              >
                <div className="w-[140px] h-10 flex items-center justify-center group">
                  <div
                    className="w-full h-full flex items-center justify-center transition-all duration-500 bg-muted-foreground/40 group-hover:bg-accent"
                    style={{
                      WebkitMaskImage: `url(${partner.logo})`,
                      maskImage: `url(${partner.logo})`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
