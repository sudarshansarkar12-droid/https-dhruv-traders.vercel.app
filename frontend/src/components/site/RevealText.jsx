import { motion } from "framer-motion";

/**
 * Line-by-line masked reveal for display headings.
 * Pass `lines` as array of strings, each rendered on its own masked row.
 */
export function LineReveal({ lines, className = "", delay = 0, stagger = 0.09 }) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-line">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.05,
              ease: [0.2, 0.8, 0.2, 1],
              delay: delay + i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

/** Scroll-in reveal for headings once in view. */
export function ScrollReveal({ children, className = "", delay = 0, y = 40 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
