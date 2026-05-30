"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { schoolConfig } from "@/config/school";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Facilities.module.scss";

export const Facilities: React.FC = () => {
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
    <section className={styles.facilities} id="facilities">
      <div className={styles.container}>
        {/* Section Header */}
        <SectionHeader
          badge="Our Campus"
          title="World-Class Facilities"
          description="A modern, safe environment designed to optimize learning, foster creativity, and support high-level physical development."
          align="center"
        />

        {/* Facilities Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {schoolConfig.facilities.map((facility, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
            >
              {/* Image background */}
              <div className={styles.imageWrapper}>
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.image}
                  loading="lazy"
                />
              </div>

              {/* Tint overlay */}
              <div className={styles.overlay} />

              {/* Text content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{facility.title}</h3>
                <p className={styles.cardDescription}>{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
