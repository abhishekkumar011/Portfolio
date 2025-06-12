import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <About />
      <Project />
      <Skills />
    </div>
  );
}
