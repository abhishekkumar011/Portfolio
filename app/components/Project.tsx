"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/ui/card";

export default function Project() {
  const projects = [
    {
      title: "TripMind AI",
      description:
        "An intelligent trip planning app that uses AI to generate personalized travel itineraries with hotels and activities, based on user preferences.",
      tech: [
        "Next.js",
        "TypeScript",
        "Convex",
        "OpenAI",
        "Clerk",
        "Tailwind CSS",
      ],
      src: "/tripmindai.png",
      gitHubLink: "https://github.com/abhishekkumar011/Trip-Mind-AI",
      liveLink: "https://trip-mind-ai.vercel.app/",
    },
    {
      title: "Blog Craft",
      description:
        "A responsive blogging platform where users can securely create, edit, and publish blog posts with images using JWT authentication.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Tailwind CSS",
      ],
      src: "/blogapp.png",
      gitHubLink: "https://github.com/abhishekkumar011/BlogCraft",
      liveLink: "https://blog-craft-gamma.vercel.app/",
    },
    {
      title: "Media Flow",
      description:
        "Media Flow is a backend system for a video streaming platform where users can upload, search,  and organize videos into playlists and the dashboard to view channel statistics.",
      tech: ["Node.js", "Express.js", "MongoDB", "Cloudinary"],
      src: "/backend.jpg",
      gitHubLink: "https://github.com/abhishekkumar011/Media-Flow",
      liveLink: "",
    },
    {
      title: "Scope Seeker",
      description:
        "Scope Seeker is a frontend-focused job search platform focused on making job hunting easier with a simple and accessible user interface.",
      tech: ["Next.js", "TypeScript", "ChakraUI"],
      src: "/scopeseeker.png",
      gitHubLink: "https://github.com/abhishekkumar011/scopeseeker-frontend",
      liveLink: "https://scopeseeker-frontend.vercel.app/",
    },
    {
      title: "Music App",
      description:
        "A web application offering a variety of music-based courses, designed to help users explore and learn music interactively.",
      tech: ["Next.js", "Aceternity UI", "Tailwind CSS"],
      src: "/musicapp.png",
      gitHubLink: "https://github.com/abhishekkumar011/Music-next.js",
      liveLink: "https://music-school-delta.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-gray-900/50 border border-blue-500/20 backdrop-blur-sm hover:bg-gray-900/70 hover:border-violet-500/40 transition-all duration-300 h-full py-0">
                <CardContent className="px-0">
                  <div className="mb-5">
                    <Image
                      src={project.src}
                      alt="Abhishek Kumar"
                      width={500}
                      height={300}
                    />
                  </div>

                  <div className="px-4 pb-6">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 duration-300">
                      {project.title}
                    </h3>

                    <p className="line-clamp-3 text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4 pr-4">
                      <Link
                        href={project.gitHubLink}
                        target="_blank"
                        className={`${
                          !project.liveLink ? "w-full" : "w-1/2"
                        } flex gap-2 border rounded-md justify-center items-center bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 cursor-pointer`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
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
                        Code
                      </Link>
                      {project.liveLink && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          className="flex gap-2 border rounded-md justify-center items-center w-1/2 bg-transparent border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-black transition-all duration-300 cursor-pointer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
