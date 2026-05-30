"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";
import { schoolConfig } from "@/config/school";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  // Get the first three stats for the bottom highlights
  const heroStats = schoolConfig.statistics.slice(0, 3);

  return (
    <section className={styles.hero}>
      {/* Background Image with Gradient Overlay */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/campus-hero.png"
          alt={`${schoolConfig.name} Campus`}
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className={styles.badge}>
            <GraduationCap size={16} />
            <span>Admissions Now Open</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className={styles.title}>
            Fostering <span>Excellence</span>, <br />
            Inspiring the Future.
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className={styles.subtitle}>
            Welcome to {schoolConfig.name}. We provide a world-class education
            that cultivates intellectual curiosity, character integrity, and the
            skills needed to lead in a global society.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className={styles.actions}>
            <Link href="/admissions">
              <Button
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Apply for Admissions
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className={styles.exploreBtn}>
                Explore Campus
              </Button>
            </Link>
          </motion.div>

          {/* Stats Preview Row */}
          <motion.div variants={itemVariants} className={styles.statsRow}>
            {heroStats.map((stat, idx) => (
              <div key={idx} className={styles.statCard}>
                <div className={styles.statValue}>
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
