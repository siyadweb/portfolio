import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const GlowButton = ({ children, variant = "primary", className = "", onClick }: GlowButtonProps) => {
  const baseStyles = "relative px-8 py-4 font-semibold text-sm tracking-wide rounded-xl overflow-hidden transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-accent text-primary-foreground",
    secondary: "bg-secondary/50 text-foreground border border-border/50 backdrop-blur-sm",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.5), hsl(187 94% 49% / 0.5))',
            filter: 'blur(20px)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.1), transparent)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default GlowButton;
