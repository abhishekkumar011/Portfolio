"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-gray-500/30`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
          >
            Abhishek
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
            <Link
              href="/AbhishekResume.pdf"
              target="_blank"
              className="bg-blue-600 px-4 py-2 flex items-center gap-2 cursor-pointer rounded text-sm text-white"
            >
              <FileText size={15} />
              Resume
              <Download size={15} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md rounded-lg p-4 mb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg"
              >
                {item.name}
              </button>
            ))}
            <Link
              href="/AbhishekResume.pdf"
              target="_blank"
              className="bg-blue-600 px-4 py-4 flex items-center justify-between gap-2 cursor-pointer rounded text-sm text-white mt-3"
            >
              <span className="flex gap-2 items-center">
                <FileText size={15} />
                Resume
              </span>
              <Download size={15} />
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
