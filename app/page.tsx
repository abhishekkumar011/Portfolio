import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import HeroSection from "./components/HeroSection";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <About />
      <Project />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
