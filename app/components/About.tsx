"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div className="rounded-sm overflow-hidden">
                <Image src={"/Resume.jpg"} alt="Abhishek Kumar" width={500} height={300}/>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border border-blue-500/20 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 shadow-xl shadow-blue-500/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Hello, I'm Abhishek Kumar!
                </h3>
                <div className="space-y-4 text-gray-300 text-lg">
                  <p>
                    I'm a passionate Full stack Developer and with a strong
                    passion for building clean, scalable, and user-focused web
                    applications.
                  </p>
                  <p>
                    I've worked on personal and team projects that span the full
                    stack—from creating responsive frontends with React and
                    Next.js to developing secure, efficient backends using
                    Node.js and MongoDB.
                  </p>
                  <p>
                    I focus on learning and applying proven technologies that
                    deliver real value. I enjoy collaborating with others,
                    writing clean and maintainable code. Whether it's
                    structuring an application from scratch, or optimizing
                    performance, I bring a thoughtful and practical mindset to
                    every project..
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
