import { motion } from "framer-motion";

interface EqualizerProps {
  bars?: number;
  className?: string;
  color?: string;
}

export default function Equalizer({ bars = 12, className = "", color = "bg-primary" }: EqualizerProps) {
  return (
    <div className={`flex items-end gap-[3px] h-8 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className={`w-[3px] rounded-full ${color}`}
          initial={{ height: 4 }}
          animate={{
            height: [4, Math.random() * 28 + 4, 8, Math.random() * 24 + 4, 4],
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
