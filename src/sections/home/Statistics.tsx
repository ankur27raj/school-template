"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { schoolConfig } from "@/config/school";
import styles from "./Statistics.module.scss";

interface CounterProps {
  value: number;
  duration?: number; // In seconds
}

const Counter: React.FC<CounterProps> = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (end === 0) return;

    const frameRate = 60; // 60fps
    const totalFrames = Math.round(duration * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.round(easeProgress * end);
      
      setCount(currentVal);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export const Statistics: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <section className={styles.statistics} aria-label="Key Statistics">
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {schoolConfig.statistics.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statCard}
              variants={itemVariants}
            >
              <div className={styles.value}>
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <div className={styles.label}>{stat.label}</div>
              <p className={styles.description}>{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
