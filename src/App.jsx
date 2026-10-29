import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="scroll-smooth bg-gradient-to-b from-[#0a1a0f] to-[#050d08] font-sans text-[#e8f0e4]">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Services />
      
      <About />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
