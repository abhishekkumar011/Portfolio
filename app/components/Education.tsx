"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/ui/card";
import { GraduationCap, MapPin, Award, BookOpen } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Sagar Institute of Research and Technology",
      university: "RGPV University",
      location: "Bhopal, Madhya Pradesh",
      duration: "2020 - 2024",
      grade: "CGPA: 8.12",
      type: "Bachelor's Degree",
      icon: GraduationCap,
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/10 to-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      degree: "Higher Secondary School",
      institution: "Prakritik School",
      university: "",
      location: "Patna, Bihar",
      duration: "2020",
      grade: "Percentage: 70.4%",
      type: "12th Grade",
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500 opacity-30"></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0
                    ? "md:pr-1/2 md:text-right"
                    : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-black z-10"></div>

                <Card
                  className={`ml-16 md:ml-0 bg-gray-900/50 border ${edu.borderColor} backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 group`}
                >
                  <CardContent className="">
                    <div className="flex items-start gap-4 flex-col md:flex-row">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${edu.gradient}`}
                      >
                        <edu.icon className="h-6 w-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${edu.bgGradient} text-white border ${edu.borderColor}`}
                          >
                            {edu.type}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {edu.duration}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>

                        <div className="mb-3">
                          <p className="text-blue-300 text-lg font-medium">
                            {edu.institution}
                          </p>
                          {edu.university && (
                            <p className="text-gray-400">{edu.university}</p>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-blue-400" />
                            <span className="text-gray-300">
                              {edu.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-violet-400" />
                            <span className="text-gray-300">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
