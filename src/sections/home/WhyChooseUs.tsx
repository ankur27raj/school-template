"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Globe, Sparkles, LucideIcon } from "lucide-react";
import { schoolConfig } from "@/config/school";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./WhyChooseUs.module.scss";

// Map configured string icon names to Lucide icons
const iconMap: Record<string, LucideIcon> = {
  Award,
  Heart,
  Globe,
  Sparkles,
};

export const WhyChooseUs: React.FC = () => {
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
    <section className={styles.whyChooseUs} id="why-choose-us">
      <div className={styles.container}>
        {/* Section Header */}
        <SectionHeader
          badge="Core Pillars"
          title="Why Choose Apex International"
          description="We provide a nurturing environment where children are encouraged to excel academically, grow ethically, and build global capabilities."
          align="center"
        />

        {/* Values Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {schoolConfig.values.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={index}
                className={styles.card}
                variants={cardVariants}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent size={24} aria-hidden="true" />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
