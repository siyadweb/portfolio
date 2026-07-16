import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Server, Database, Palette, GitBranch } from "lucide-react";

const skills = [
  { name: "React / Next.js", level: 95, icon: Code2, color: "from-primary to-blue-400" },
  { name: "TypeScript", level: 90, icon: Layout, color: "from-blue-500 to-indigo-400" },
  { name: "Node.js / Express", level: 88, icon: Server, color: "from-green-500 to-emerald-400" },
  { name: "Databases (SQL/NoSQL)", level: 85, icon: Database, color: "from-purple-500 to-pink-400" },
  { name: "UI/UX & Tailwind CSS", level: 92, icon: Palette, color: "from-orange-500 to-yellow-400" },
  { name: "Git & DevOps", level: 87, icon: GitBranch, color: "from-accent to-cyan-400" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-4">
            Skills & <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Mastering the technologies that power modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card p-6 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                rotateX: 5,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-3 mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon className="w-full h-full text-white" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>

              <div className="relative">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
                
                <motion.span
                  className="absolute -top-6 right-0 text-sm font-semibold text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  background: `linear-gradient(135deg, hsl(217 91% 60% / 0.1), hsl(187 94% 49% / 0.1))`,
                  filter: 'blur(20px)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
