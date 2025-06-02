import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <About/>
    </div>
  );
}
