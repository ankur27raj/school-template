"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Cpu, Globe, BookOpen, Music, Shield, GraduationCap } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./academics.module.scss";

export default function AcademicsPage() {
  const breadcrumbs = [{ label: "Academics" }];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
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

  // Program details list
  const programDetails = [
    {
      title: "Early Years Foundation",
      grades: "Preschool - Kindergarten",
      desc: "Our Early Years curriculum centers on active inquiry and emotional-social balance. Using Montessori-inspired spaces and certified instructors, we nurture creativity, fine motor coordination, and a love for discovery.",
      image: "/images/programs-early.png",
      features: [
        "Play-based sensory learning environment",
        "Introduction to bilingual communication",
        "Ratio of 1 teacher to 6 children",
        "Creative arts & music foundations",
      ],
    },
    {
      title: "Primary School",
      grades: "Grades 1 - 5",
      desc: "Primary school builds robust foundations in critical areas while fostering collaborative habits. Students engage in project-based activities that link science, mathematics, literature, and social awareness to concrete reality.",
      image: "/images/programs-primary.png",
      features: [
        "Core focus on literacy and computational math",
        "Weekly science experimentation labs",
        "Beginning of digital citizenship and coding",
        "Mandatory music or performing arts lessons",
      ],
    },
    {
      title: "Middle School",
      grades: "Grades 6 - 8",
      desc: "Middle school acts as a vital bridge to advanced academic study. We encourage critical research habits, public articulation, and ethical analysis. Classrooms utilize multi-disciplinary challenges to stimulate problem-solving skills.",
      image: "/images/programs-middle.png",
      features: [
        "Integrated STEM research blocks",
        "Introductory World History and civics",
        "Structured physical education & sports leagues",
        "Academic advisory and counseling support",
      ],
    },
    {
      title: "High School",
      grades: "Grades 9 - 12",
      desc: "High school offers advanced tracks preparing students for university entrance globally. Combining rigorous AP and dual enrollment courses with independent research, our students develop deep academic specialties.",
      image: "/images/programs-high.png",
      features: [
        "Over 30 Advanced Placement (AP) courses",
        "Individualized college advisory counselor guidance",
        "Independent senior capstone research projects",
        "Global study abroad opportunities",
      ],
    },
  ];

  // Departments List
  const departments = [
    {
      title: "Science & STEM",
      desc: "Covers biology, physics, chemistry, robotics, and advanced coding. Empowers students through experiment-driven inquiry.",
      icon: Cpu,
    },
    {
      title: "Humanities & Socials",
      desc: "Includes world history, comparative literature, government, and economic structures to build empathetic citizens.",
      icon: Globe,
    },
    {
      title: "Languages & Linguistics",
      desc: "Immersion instruction in French, Spanish, and Mandarin alongside English literature and vocabulary development.",
      icon: BookOpen,
    },
    {
      title: "Visual & Fine Arts",
      desc: "Programs in classical orchestra, set design, digital animation, oil painting, and theatrical performances.",
      icon: Music,
    },
    {
      title: "Athletics & Wellness",
      desc: "Competitive sports clubs and wellness advisory classes focusing on teamwork, cardiovascular health, and nutrition.",
      icon: Shield,
    },
    {
      title: "College Counseling",
      desc: "Comprehensive guidance helping students identify their university options, write essays, and secure scholarship placements.",
      icon: GraduationCap,
    },
  ];

  return (
    <>
      <PageHeader title="Academics Pathways" breadcrumbs={breadcrumbs} />

      {/* Philosophy Section */}
      <section className={styles.section} aria-label="Our Philosophy">
        <div className={styles.container}>
          <SectionHeader
            badge="Academic Philosophy"
            title="Rigorous Curriculum, Holistic Focus"
            description="We prepare students not just to pass exams, but to think critically and apply their knowledge ethically in a global society."
            align="center"
          />
        </div>
      </section>

      {/* Program Levels Section */}
      <section className={`${styles.section} ${styles.grayBg}`} id="program-levels" aria-label="Program Levels">
        <div className={styles.container}>
          {programDetails.map((program, idx) => (
            <motion.div
              key={idx}
              className={styles.programBlock}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Graphic */}
              <div className={styles.imageWrapper}>
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.image}
                  loading="lazy"
                />
              </div>

              {/* Text detail */}
              <div className={styles.programContent}>
                <span className={styles.grades}>{program.grades}</span>
                <h2 className={styles.title}>{program.title}</h2>
                <p className={styles.desc}>{program.desc}</p>
                
                <ul className={styles.detailsList}>
                  {program.features.map((feat, fidx) => (
                    <li key={fidx} className={styles.detailItem}>
                      <Check size={16} aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Departments Section */}
      <section className={styles.section} id="departments" aria-label="Academic Departments">
        <div className={styles.container}>
          <SectionHeader
            badge="Departments"
            title="Core Academic Subject Areas"
            description="Our faculty is organized across specialized departments, ensuring rigorous, age-appropriate instruction in every field."
            align="center"
          />

          <motion.div
            className={styles.departmentsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <motion.div
                  key={index}
                  className={styles.deptCard}
                  variants={itemVariants}
                >
                  <div className={styles.deptHeader}>
                    <div className={styles.iconWrapper}>
                      <IconComponent size={22} aria-hidden="true" />
                    </div>
                    <h3 className={styles.deptTitle}>{dept.title}</h3>
                  </div>
                  <p className={styles.deptDesc}>{dept.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
