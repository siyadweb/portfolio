import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Linkedin, Twitter, MessageCircle, ArrowRight } from "lucide-react";
import GlowButton from "./GlowButton";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase
    .from("contact_messages")
    .insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

  if (error) {
    toast.error("Failed to send message.");
    console.error(error);
    return;
  }

  toast.success("Message sent successfully!");

  setFormData({
    name: "",
    email: "",
    message: "",
  });
};

  const socials = [
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold tracking-wider text-sm uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 mb-6">
            Let's Build Your{" "}
              <span className="text-gradient">Next Project</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Have a project in mind? I'm here to help you build 
              fast, modern web applications that deliver real 
              business value.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-4 rounded-xl glass-card group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Floating element */}
            <motion.div
              className="mt-12 p-6 glass-card inline-block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Available for new projects
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              {/* Name field */}
              <motion.div
                className="relative"
                animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
              >
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="John Doe"
                  required
                />
                {focusedField === 'name' && (
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-primary pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>

              {/* Email field */}
              <motion.div
                className="relative"
                animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
              >
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </motion.div>

              {/* Message field */}
              <motion.div
                className="relative"
                animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}
              >
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>

              {/* Submit button */}
              <GlowButton variant="primary" className="w-full">
                Send Message
                <ArrowRight className="w-4 h-4" />
              </GlowButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
