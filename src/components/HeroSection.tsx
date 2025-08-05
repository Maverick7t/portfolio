"use client";
import React, { useEffect } from "react";
import { LucideGithub, ExternalLink } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import TextType from "@/components/ui/TextType";

const HeroSection = () => {
  const controls = useAnimation(); // ← for controlling TextType

  const descriptiveText = [
    "Building resilient, intelligent systems — where code scales, data flows, and reliability rules.",
    "Actively seeking opportunities where smart systems, automation, and impact meet — let’s build something that scales.",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({ opacity: 1 }); // ← trigger fade-in of TextType manually
    }, 1600); // wait till both h1 (0.3+0.8) and h2 (0.6+0.8)

    return () => clearTimeout(timeout);
  }, [controls]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <LampContainer className="absolute inset-0 -z-10" />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-teal-100 dark:from-slate-900 dark:via-slate-800/20 dark:to-teal-900/20" />

      <div className="absolute inset-0">
        {/* Floating blobs */}
        {/* ... your existing animated blobs here ... */}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-8">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-16 text-4xl md:text-7xl font-extrabold tracking-tight text-white font-Playfair"
          style={{
            textShadow: `
              0 1px 0 #ccc,
              0 2px 0 #bbb,
              0 3px 0 #aaa,
              0 4px 0 #999,
              0 5px 0 #888,
              0 6px 0 #777,
              0 7px 0 #666,
              0 8px 0 #555,
              0 9px 0 #444,
              0 10px 10px rgba(0, 0, 0, 0.6),
              0 0 20px rgba(13, 148, 136, 0.8),
              0 0 40px rgba(13, 148, 136, 0.6)
            `,
          }}
        >
          Moinaktar Shaikh
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-700 dark:text-slate-300 mt-4"
        >
          Data & Cloud Enthusiast
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls} // ← controlled animation
          transition={{ duration: 0.6 }}
        >
          <TextType
            text={descriptiveText}
            initialDelay={1} // ← no delay, it waits for mount
            typingSpeed={60}
            pauseDuration={3000}
            className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-slate-400 text-md md:text-lg leading-relaxed"
          />
        </motion.div>

        <div className="mt-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <a href="https://github.com/Maverick7t" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] transition-all duration-300"
              >
                <LucideGithub className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;