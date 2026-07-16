import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, TrendingUp, Zap } from "lucide-react";
import headshot from "@/assets/headshot.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Target, text: "Pixel-Perfect" },
    { icon: Lightbulb, text: "Creative Coder" },
    { icon: TrendingUp, text: "Performance-First" },
    { icon: Zap, text: "Fast Learner" },
  ];

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-border/30"
                animate={{ rotate: [0, -3, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Main content area with headshot */}
              <div className="absolute inset-8 rounded-2xl overflow-hidden">
                {/* Animated rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{ padding: "4px" }}
                >
                  <div className="w-full h-full rounded-2xl bg-background" />
                </motion.div>
                
                {/* Glowing effect */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/40 to-accent/40 blur-xl"
                  animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Headshot image */}
                <img
                  src={headshot}
                  alt="Professional headshot"
                  className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-xl object-cover object-top"
                />
              </div>

              {/* Floating badges */}
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute glass-card px-4 py-2 flex items-center gap-2"
                  style={{
                    top: `${20 + index * 20}%`,
                    left: index % 2 === 0 ? '-10%' : 'auto',
                    right: index % 2 === 1 ? '-10%' : 'auto',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="text-accent font-semibold tracking-wider text-sm uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.span>
            
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-display mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Turning Designs Into{" "}
              <span className="text-gradient">Code</span>
            </motion.h2>
            
            <motion.div
              className="space-y-4 text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I'm a passionate web developer with{" "}
                <span className="text-foreground font-semibold">2+ years</span> of experience 
                building modern, responsive, and performant web applications.
              </p>
              <p>
                From crafting beautiful interfaces with{" "}
                <span className="text-primary font-semibold">React & TypeScript</span> to 
                building robust backends with <span className="text-accent font-semibold">Node.js & databases</span>, 
                I bring a full-stack approach to every project.
              </p>
              <p>
                My mission? To help businesses{" "}
                <span className="text-gradient font-semibold">
                  bring their vision to life
                </span>{" "}
                with clean, scalable code.
              </p>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { value: "20+", label: "Happy Clients" },
                { value: "30+", label: "Projects Shipped" },
              ].map((stat, index) => (
                <div key={index} className="glass-card p-4">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
