


import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";

import { ParticleBackground } from "./components/UI/ParticleBackground";
import { Navbar } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";
import { Hero } from "./components/Sections/Hero";
import { About } from "./components/Sections/About";
import { Skills } from "./components/Sections/Skills";
import { Projects } from "./components/Sections/Projects";
import { Services } from "./components/Sections/Services";
import { Experience } from "./components/Sections/Experience";
import { Contact } from "./components/Sections/Contact";

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-cyan-500/30">
      <ParticleBackground />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}