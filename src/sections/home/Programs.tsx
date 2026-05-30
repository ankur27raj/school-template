"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { schoolConfig } from "@/config/school";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Programs.module.scss";

export const Programs: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <section className={styles.programs} id="programs">
      <div className={styles.container}>
        {/* Section Header */}
        <SectionHeader
          badge="Educational Pathways"
          title="Featured Academic Programs"
          description="Tailored educational paths designed to meet the unique cognitive, emotional, and social development needs of students at every grade level."
          align="center"
        />

        {/* Programs Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {schoolConfig.programs.map((program, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
            >
              {/* Image banner */}
              <div className={styles.imageWrapper}>
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.image}
                  loading="lazy"
                />
              </div>

              {/* Card content */}
              <div className={styles.cardContent}>
                <span className={styles.gradesBadge}>{program.grades}</span>
                <h3 className={styles.cardTitle}>{program.title}</h3>
                <p className={styles.cardDescription}>{program.description}</p>
                <Link href={program.href} className={styles.cardLink}>
                  <span>Explore Program</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
