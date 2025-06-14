"use client";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Textarea } from "@/ui/textarea";
import { Card, CardContent } from "@/ui/card";
import { Alert, AlertDescription } from "@/ui/alert";
import { AlertCircle, CheckCircle, Mail, Send } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEBFORMS_ACCESS_KEY,
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setMessage("Thank you for your message! I'll get back to you soon.");
        form.reset();
      } else {
        setSubmitStatus("error");
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("FETCH ERROR:", error);
      setSubmitStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border border-blue-500/20 backdrop-blur-sm">
              <CardContent>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-semibold text-blue-400 mb-4">
                    Let's work together
                  </h3>
                  <p className="text-gray-300">
                    I'm always interested in new opportunities and exciting
                    projects. Feel free to reach out!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className=" text-white font-medium block mb-2"
                      >
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="bg-black/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-violet-500 transition-colors duration-300"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className=" text-white font-medium block mb-2"
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        name="email"
                        className="bg-black/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-violet-500 transition-colors duration-300"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-white font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      type="text"
                      placeholder="What's this about"
                      name="subject"
                      className="bg-black/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-violet-500 transition-colors duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Your message here..."
                      rows={5}
                      className="bg-black/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-violet-500 transition-colors duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {submitStatus === "success" && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        {message}
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        {message}
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white py-3 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-blue-500/20">
                  <div className="flex justify-center space-x-6">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="https://github.com/abhishekkumar011"
                      target="_blank"
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
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
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
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
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="mailto:abhishekkumar0336165@gmail.com"
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
                    >
                      <Mail className="h-6 w-7" />
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
