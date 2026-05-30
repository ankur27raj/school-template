"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Target, Compass, Users } from "lucide-react";
import { schoolConfig } from "@/config/school";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./about.module.scss";

export default function AboutPage() {
  const breadcrumbs = [{ label: "About" }];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  // Mock Leadership Team
  const leadership = [
    {
      name: schoolConfig.principal.name,
      role: `Principal & Head of School`,
      credentials: schoolConfig.principal.credentials,
      image: "/images/principal.png",
    },
    {
      name: "Prof. Jonathan Sterling",
      role: "Dean of Academics",
      credentials: "M.Ed. in Curriculum Design, Harvard University; B.A., Oxford",
      image: "/images/dean.png",
    },
    {
      name: "Ms. Sarah Jenkins",
      role: "Director of Admissions",
      credentials: "B.A. in Communications & Relations, UC Berkeley",
      image: "/images/sarah.png",
    },
  ];

  return (
    <>
      <PageHeader title="About Our School" breadcrumbs={breadcrumbs} />

      {/* Vision & Mission */}
      <section className={styles.section} aria-label="Vision and Mission">
        <div className={styles.container}>
          <motion.div
            className={styles.mvGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Vision Card */}
            <motion.div className={styles.mvCard} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                <Eye size={32} aria-hidden="true" />
              </div>
              <h2 className={styles.cardTitle}>Our Vision</h2>
              <p className={styles.cardText}>
                To be a globally recognized leader in education, inspiring generations of curious minds to innovate, lead with high integrity, and construct a more peaceful, connected world.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div className={styles.mvCard} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                <Target size={32} aria-hidden="true" />
              </div>
              <h2 className={styles.cardTitle}>Our Mission</h2>
              <p className={styles.cardText}>
                We commit to cultivating academic excellence, ethical grounding, and holistic personal well-being. By combining challenging study pathways with active global learning, we nurture compassionate citizens prepared to address humanity&apos;s challenges.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* School History */}
      <section className={`${styles.section} ${styles.grayBg}`} id="history" aria-label="School History">
        <div className={styles.container}>
          <div className={styles.historySplit}>
            {/* Left Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.historyText}
            >
              <SectionHeader
                badge="Our Legacy"
                title="A Tradition of Academic Distinction"
                align="left"
              />
              <p>
                Founded in 1998, {schoolConfig.name} began as a small academy of 60 primary students dedicated to offering a rigorous alternative to conventional educational layouts. Over the past three decades, we have grown into a premier K-12 international school serving over 1,200 students.
              </p>
              <p>
                Throughout our growth, our guiding light has remained unchanged: education must cultivate character alongside intellectual capacity. Our graduates have carried these pillars into leadership roles across medicine, public service, space exploration, and community building globally.
              </p>
            </motion.div>

            {/* Right Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={styles.historyTimeline}
            >
              <div className={styles.timelineItem}>
                <div className={styles.year}>1998</div>
                <h3 className={styles.itemTitle}>School Founding</h3>
                <p className={styles.itemDesc}>Apex Academy opens with 60 students in Grades 1-5.</p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.year}>2006</div>
                <h3 className={styles.itemTitle}>Middle School Expansion</h3>
                <p className={styles.itemDesc}>Constructed the STEM resource center and welcomed Middle School students.</p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.year}>2014</div>
                <h3 className={styles.itemTitle}>High School & AP Accreditations</h3>
                <p className={styles.itemDesc}>First senior class graduates. Full Advanced Placement (AP) certification achieved.</p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.year}>2022</div>
                <h3 className={styles.itemTitle}>Visual & Performing Arts Opening</h3>
                <p className={styles.itemDesc}>Inaugurated our 450-seat professional theater auditorium and sports fields.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className={styles.section} id="leadership" aria-label="Leadership Team">
        <div className={styles.container}>
          <SectionHeader
            badge="Administration"
            title="Meet Our Leadership Team"
            description="Our senior administration brings together decades of educational experience and a shared commitment to school community excellence."
            align="center"
          />

          <motion.div
            className={styles.leadershipGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                className={styles.leaderCard}
                variants={itemVariants}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <div className={styles.leaderInfo}>
                  <h3 className={styles.name}>{leader.name}</h3>
                  <span className={styles.role}>{leader.role}</span>
                  <p className={styles.credentials}>{leader.credentials}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
