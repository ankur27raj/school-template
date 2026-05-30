"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Compass, Languages, Check, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./Academics.module.scss";

export const Academics: React.FC = () => {
  return (
    <section className={styles.academics} id="academic-excellence">
      <div className={styles.container}>
        {/* Left Side: Text Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.content}
        >
          <span className={styles.badge}>Academic Excellence</span>
          <h2 className={styles.title}>
            A Rigorous Curriculum to Build Inquisitive Minds
          </h2>
          <p className={styles.description}>
            We combine high global academic standards with experiential learning. Our curriculum encourages students to ask deep questions, collaborate, think critically, and apply their knowledge to solve real-world challenges.
          </p>

          {/* Academic Features */}
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <BookOpen size={20} />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Dual Diploma Options</h3>
                <p className={styles.featureText}>
                  Offering both Advanced Placement (AP) and honors pathways, allowing students to tailor their studies for university readiness.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Compass size={20} />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>College Counseling Program</h3>
                <p className={styles.featureText}>
                  One-on-one professional guidance starting in Grade 9 to assist students in finding and entering their best-fit global universities.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Languages size={20} />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>World Language Immersion</h3>
                <p className={styles.featureText}>
                  Providing immersive language instruction in Spanish, French, and Mandarin to nurture multilingual, globally competent thinkers.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href="/academics">
              <Button
                variant="primary"
                rightIcon={<ArrowRight size={16} />}
              >
                Explore Curriculum
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Credential Cards Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className={styles.graphicWrapper}
        >
          <div className={`${styles.graphicCard} ${styles.highlighted}`}>
            <div className={styles.graphicValue}>30+</div>
            <div className={styles.graphicLabel}>AP & Honors Courses</div>
            <div className={styles.graphicDesc}>Extensive college-level course catalog</div>
          </div>

          <div className={styles.graphicCard}>
            <div className={styles.graphicValue}>100%</div>
            <div className={styles.graphicLabel}>Graduation Rate</div>
            <div className={styles.graphicDesc}>Every student successfully graduates on time</div>
          </div>

          <div className={styles.graphicCard}>
            <div className={styles.graphicValue}>$4.2M</div>
            <div className={styles.graphicLabel}>Scholarships Offered</div>
            <div className={styles.graphicDesc}>Earned by our graduating class of 2025</div>
          </div>

          <div className={`${styles.graphicCard} ${styles.highlighted}`}>
            <div className={styles.graphicValue}>Top 50</div>
            <div className={styles.graphicLabel}>University Entries</div>
            <div className={styles.graphicDesc}>Placements in leading global institutions</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics;
