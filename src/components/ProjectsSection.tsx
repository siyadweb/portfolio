import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Code2, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "React + Node.js",
    description: "A full-featured online store with cart, checkout, payment integration, and admin dashboard built with React and Node.js.",
    tags: ["React", "TypeScript", "Stripe", "PostgreSQL"],
    stats: [
      { icon: Code2, value: "15K+", label: "Lines of Code" },
      { icon: Globe, value: "99.9%", label: "Uptime" },
    ],
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "SaaS Dashboard",
    category: "Next.js + Supabase",
    description: "An analytics dashboard with real-time data visualization, user management, and role-based access control.",
    tags: ["Next.js", "Tailwind", "Supabase", "Charts"],
    stats: [
      { icon: Smartphone, value: "100%", label: "Responsive" },
      { icon: Code2, value: "50+", label: "Components" },
    ],
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Social Media App",
    category: "React Native + Firebase",
    description: "A cross-platform mobile app with real-time messaging, image sharing, and push notifications.",
    tags: ["React Native", "Firebase", "TypeScript", "Expo"],
    stats: [
      { icon: Globe, value: "iOS/Android", label: "Platforms" },
      { icon: Code2, value: "20+", label: "Screens" },
    ],
    gradient: "from-orange-500 to-red-500",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built. Each one crafted with care and attention to detail.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="glass-card h-full overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold mt-2 mb-3 flex items-center gap-2">
                    {project.title}
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -10 }}
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </motion.span>
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    {project.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 p-3 rounded-lg bg-secondary/20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.1 }}
                      >
                        <stat.icon className="w-4 h-4 text-accent" />
                        <div>
                          <div className="text-sm font-bold">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `linear-gradient(135deg, hsl(217 91% 60% / 0.15), hsl(187 94% 49% / 0.15))`,
                    filter: 'blur(30px)',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
