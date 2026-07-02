export default function FadeIn({
  children,
  delay = 0,
  duration = 1,
  direction = "down",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?:
    | "up"
    | "down"
    | "left"
    | "right"
    | "none";
  className?: string;
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "down" ? 24 : direction === "up" ? -24 : 0,
      x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      transition={{ duration, delay }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}