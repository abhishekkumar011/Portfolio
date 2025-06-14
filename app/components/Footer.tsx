"use client";
import { Button } from "@/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { Mail, Heart, ArrowUp, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setCurrentTime(time);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: LuGithub,
      href: "https://github.com/abhishekkumar011",
      color: "text-gray-400 hover:text-white",
      bg: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: LuLinkedin,
      href: "https://www.linkedin.com/in/abhishek-kumar-1644b824b/",
      color: "text-blue-400 hover:text-blue-300",
      bg: "hover:bg-blue-900/20",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:abhishekkumar0336165@gmail.com",
      color: "text-violet-400 hover:text-violet-300",
      bg: "hover:bg-violet-900/20",
    },
  ];

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
      <div className="absolute top-10 right-10 md:top-20 md:right-20 w-1 h-1 bg-violet-500 rounded-full animate-pulse"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-violet-200 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to collaborate on your next project? I'm always excited to
              work with passionate people and bring innovative ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left Section*/}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Abhishek Kumar
                  </h3>
                  <p className="text-blue-400 text-lg font-medium mb-4">
                    Full-Stack Developer
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Passionate about creating scalable web applications with
                    modern technologies. Specialized in React, Next.js, and
                    Node.js ecosystem.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Phone className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-white">+91 6204090140</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-white">Bhopal, Madhya Pradesh</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Clock className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Local Time</p>
                      <p className="text-white">{currentTime} IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center Section*/}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">
                  Navigation
                </h4>
                <div className="space-y-3">
                  {navigationLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8 }}
                      className="block text-gray-400 hover:text-white transition-all duration-300 cursor-pointer relative group"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl border border-green-800/30">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">
                    Available for work
                  </span>
                </div>
                <p className="text-gray-400 text-xs">
                  Open to new opportunities and collaborations
                </p>
              </div>
            </motion.div>

            {/* Right Section*/}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-8"
            >
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">
                  Connect
                </h4>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center justify-between p-4 bg-gray-900/30 rounded-xl border border-gray-800 ${social.bg} transition-all duration-300 group`}
                      target="_blank"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <social.icon
                            className={`h-5 w-5 ${social.color} transition-colors duration-300`}
                          />
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            {social.name}
                          </p>
                        </div>
                      </div>
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                        <ArrowUp className="h-3 w-3 text-gray-400 rotate-45 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 text-gray-500 text-sm"
              >
                <div className="flex items-center space-x-2">
                  <span>© 2025 Abhishek kumar. All rights reserved.</span>
                </div>

                <div className="w-px h-4 bg-gray-700"></div>

                <div className="flex md:items-center space-x-2 flex-col md:flex-row">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                  <span>by Abhishek Kumar</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <span className="text-gray-500 text-sm">Back to top</span>
                <Button
                  onClick={scrollToTop}
                  size="sm"
                  className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 transition-all duration-300 group cursor-pointer"
                >
                  <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
