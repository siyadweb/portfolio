import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "An exceptional developer who delivered our platform ahead of schedule. The code quality and attention to detail were outstanding. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, AppVenture",
    content: "Transformed our outdated website into a modern, lightning-fast web app. The user experience improved dramatically and our conversion rates doubled.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, DataFlow",
    content: "A rare developer who understands both design and engineering. Built our entire dashboard from scratch with clean, maintainable code.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Product Manager, CloudScale",
    content: "Incredible full-stack skills. Handled everything from database design to pixel-perfect UI implementation. A true professional.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden min-h-[300px]">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
                  "{testimonials[current].content}"
                </p>

                <div>
                  <div className="font-semibold text-lg">{testimonials[current].name}</div>
                  <div className="text-muted-foreground text-sm">{testimonials[current].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? 'bg-primary' : 'bg-muted'
                  }`}
                  whileHover={{ scale: 1.3 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
