import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "🔀" },
  { name: "Docker", icon: "🐳" },
  { name: "Figma", icon: "🎯" },
  { name: "VS Code", icon: "💻" },
  { name: "MongoDB", icon: "🍃" },
  { name: "AWS", icon: "☁️" },
];

const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-4">
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            The technologies I use to build modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <motion.div
                className="glass-card p-6 flex flex-col items-center justify-center aspect-square cursor-pointer"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              >
                <motion.span className="text-4xl mb-2" whileHover={{ scale: 1.2 }}>
                  {tool.icon}
                </motion.span>
                <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                  {tool.name}
                </span>

                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    background: 'radial-gradient(circle, hsl(217 91% 60% / 0.2), transparent 70%)',
                    filter: 'blur(15px)',
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

export default ToolsSection;
