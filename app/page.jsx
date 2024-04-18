import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="font-serif flex min-h-screen flex-col bg-gradient-to-br from-[#F2E9DC] to-[#D2B48C] overflow-hidden text-black">
      <Navbar />
      <div className="container mx-auto mt-28 md:mt-0 px-2 md:px-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
      <EmailSection />
      <Footer />
    </main>
  );
}
