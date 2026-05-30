"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  lightTheme?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = "center",
  lightTheme = false,
  className = "",
}) => {
  const containerClass = [
    styles.wrapper,
    styles[align],
    lightTheme ? styles.lightTheme : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={containerClass}
    >
      {badge && <span className={styles.badge}>{badge}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  );
};

export default SectionHeader;
