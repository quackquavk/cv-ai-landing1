"use client"

import { motion } from "framer-motion"

// Sample partners data - replace with your actual partners
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
]


export default function PartnersShowcase({ className }) {
  // Double the partners array to create a seamless loop
  const doubledPartners = [...partners, ...partners]

  return (
    <section
      className={`relative h-[25vh] overflow-hidden bg-black ${className}`}
    >
      <div className="relative h-full flex items-center">
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-[10%] md:w-[80%] h-full bg-gradient-to-r from-black  to-black/10 z-10" />
        <div className="absolute top-0 right-0 w-[10%] md:w-[50%] h-full bg-gradient-to-l from-black  to-transparent z-10" />

        {/* Scrolling logos */}
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
            <div key={`${partner.id}-${index}`} className="flex-shrink-0 h-12 flex items-center justify-center">
              <div className="w-[160px] h-12 flex items-center justify-center group">
                <div
                  className="w-full h-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#ff6600]"
                  style={{
                    WebkitMaskImage: `url(${partner.logo})`,
                    maskImage: `url(${partner.logo})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    background: "linear-gradient(90deg, rgb(229, 231, 235) 0%, white 50%, rgb(229, 231, 235) 100%)",
                  }}
                >
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

