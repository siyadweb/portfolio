import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, TrendingUp, Users, Code2 } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "TechVision Studio",
    period: "2023 - Present",
    description: "Building responsive web apps with React, TypeScript, and modern tooling. Leading frontend architecture for client projects.",
    metrics: [
      { icon: Code2, value: "15+", label: "Apps Shipped" },
      { icon: Users, value: "10+", label: "Clients Served" },
    ],
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "2022 - 2023",
    description: "Developed full-stack web applications, implemented REST APIs, and collaborated with design teams to deliver pixel-perfect UIs.",
    metrics: [
      { icon: TrendingUp, value: "20+", label: "Features Built" },
      { icon: Code2, value: "50K+", label: "Lines of Code" },
    ],
  },
  {
    title: "Web Development Intern",
    company: "StartUp Labs",
    period: "2021 - 2022",
    description: "Assisted in building landing pages, fixing bugs, and learning modern web development practices in a fast-paced environment.",
    metrics: [
      { icon: Users, value: "5+", label: "Projects Contributed" },
      { icon: TrendingUp, value: "3x", label: "Skill Growth" },
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="absolute left-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  className="glass-card p-6"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  <div className="flex flex-wrap gap-4">
                    {exp.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 + i * 0.1 }}
                      >
                        <metric.icon className="w-4 h-4 text-accent" />
                        <span className="font-bold text-gradient">{metric.value}</span>
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
