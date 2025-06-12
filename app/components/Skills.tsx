"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      imageUrl: "/nextjs.png",
      skillName: "Next.js",
    },
    {
      imageUrl: "/react.png",
      skillName: "React.js",
    },
    {
      imageUrl: "/js.png",
      skillName: "JavaScript",
    },
    {
      imageUrl: "/typescript.png",
      skillName: "TypeScript",
    },
    {
      imageUrl: "/tailwind.png",
      skillName: "Tailwind CSS",
    },
    {
      imageUrl: "/redux.png",
      skillName: "Redux",
    },
    {
      imageUrl: "/java.png",
      skillName: "Java",
    },
    {
      imageUrl: "/node.png",
      skillName: "Node.js",
    },
    {
      imageUrl: "/express.png",
      skillName: "Express.js",
    },
    {
      imageUrl: "/mongo.png",
      skillName: "MongoDB",
    },
    {
      imageUrl: "/git.png",
      skillName: "Git",
    },
    {
      imageUrl: "/github.png",
      skillName: "GitHub",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row">
          {/* Image div  */}

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <motion.div
              animate={{
                y: [0, -30, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-400/50 to-purple-400/50 rounded-full blur-3xl opacity-50"></div>
              </div>
              <Image
                src={"/avatar.svg"}
                alt="avatar"
                width={500}
                height={100}
                className="relative z-20"
              />
            </motion.div>
          </div>

          {/* Skills Div */}
          <div className="flex gap-10 flex-wrap w-full lg:w-1/2 justify-center lg:justify-normal">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className={`w-18 h-18 flex items-center justify-center`}>
                  <Image
                    src={skill.imageUrl}
                    alt="Skills"
                    height={20}
                    width={60}
                  />
                </div>
                <h3 className="text-center text-lg">{skill.skillName}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
