import { Helmet } from "react-helmet-async";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ToolsSection from "@/components/ToolsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Web Developer Portfolio | React, TypeScript & Full-Stack</title>
        <meta 
          name="description" 
          content="Web developer specializing in React, TypeScript, and full-stack development. I turn ideas into reality with clean, performant code." 
        />
        <meta name="keywords" content="web developer, React, TypeScript, Node.js, full-stack, frontend, portfolio" />
        <meta property="og:title" content="Web Developer Portfolio | Turning Ideas Into Reality" />
        <meta property="og:description" content="2+ years of experience building modern web applications with React, TypeScript, and Node.js." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>

      <main className="relative overflow-x-hidden">
        <AnimatedBackground />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ToolsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
