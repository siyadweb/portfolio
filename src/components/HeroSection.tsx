import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import TypewriterText from "./TypewriterText";
import GlowButton from "./GlowButton";
import headshot from "@/assets/headshot.png";

const HeroSection = () => {
  const roles = [
    "Frontend Developer",
    "React Specialist",
    "Full-Stack Builder",
    "UI/UX Enthusiast",
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Headshot */}
        <motion.div
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated rotating border */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ padding: "3px" }}
          >
            <div className="w-full h-full rounded-full bg-background" />
          </motion.div>
          
          {/* Glowing ring */}
          <motion.div
            className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/50 to-accent/50 blur-lg"
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Headshot image */}
          <img
            src={headshot}
            alt="Professional headshot"
            className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover object-top border-2 border-primary/30"
          />
        </motion.div>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">2+ Years of Building for the Web</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I Turn{" "}
          <span className="relative">
            <span className="text-gradient">Ideas</span>
            <motion.span
              className="absolute -inset-2 bg-primary/20 rounded-lg -z-10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
          {" "}Into
          <br />
          <span className="text-gradient">Reality</span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          className="text-xl md:text-2xl text-muted-foreground mb-12 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypewriterText texts={roles} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GlowButton variant="primary" onClick={scrollToContact}>
            Let's Work Together
            <ArrowRight className="w-4 h-4" />
          </GlowButton>
          <GlowButton variant="secondary" onClick={scrollToProjects}>
            View My Work
          </GlowButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { value: "30+", label: "Projects Completed" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "2+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
