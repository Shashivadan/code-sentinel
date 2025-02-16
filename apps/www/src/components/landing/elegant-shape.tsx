import { cn } from "@codesentinel/ui/lib/utils";
import { motion } from "motion/react";

export function ElegantShape({
  width,
  height,
  rotate,
  gradient,
  className,
  delay,
}: {
  width: number;
  height: number;
  rotate: number;
  gradient: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div
        initial={{ y: 0, rotate: rotate }}
        animate={{
          y: [0, -20, 0],

          transition: {
            y: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay,
            },
          },
        }}
        className={cn("absolute", className)}
        style={{
          width,
          height,
        }}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  );
}
