"use client";

import { motion } from "framer-motion";
import { FileCode } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="py-20 md:py-0 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div className="absolute top-1/4 left-1/5 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <motion.div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <span className="text-white">Hey, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Abhishek
              </span>
              <span className="ml-2">✨</span>
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">A </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Software Developer
              </span>
            </h2>

            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              A <span className="font-semibold">fullstack developer</span> with
              strong foundations in{" "}
              <span className="font-semibold">modern web technologies</span>.
              passionate about building scalable apps, I thrive at the
              intersection of performance and user experience.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 flex-col md:flex-row items-center md:items-stretch">
              <button className="w-50 md:w-fit bg-black hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer">
                <a
                  href="mailto:abhishekkumar0336165@gmail.com"
                  className="text-center w-full"
                >
                  @ Contact Me
                </a>
              </button>

              <button className="w-50 md:w-fit bg-black hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer">
                <a
                  href=""
                  className="flex items-center justify-center w-full gap-2"
                >
                  <FileCode size={17} />
                  View Projects
                </a>
              </button>

              <div className="hidden md:flex border border-gray-100/60 mx-5"></div>

              <div className="mt-10 md:mt-0 flex md:items-center gap-6 justify-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/abhishekkumar011"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github-icon lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/abhishek-kumar-1644b824b/"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin-icon lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
