"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function AnimatedHeading({ children, className = "", delay = 0, as = "h2" }: AnimatedHeadingProps) {
  const words = children.split(" ");
  const HeadingComponent = motion[as] as typeof motion.h2;
  let letterIndex = 0;

  return (
    <HeadingComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((letter) => {
            const currentIndex = letterIndex++;
            return (
              <motion.span
                key={currentIndex}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: currentIndex * 0.03,
                      duration: 0.3,
                    },
                  },
                }}
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span className="inline-block" style={{ width: "0.4em" }}> </span>
          )}
        </span>
      ))}
    </HeadingComponent>
  );
}
