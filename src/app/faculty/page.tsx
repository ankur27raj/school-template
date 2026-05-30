"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./faculty.module.scss";

// Faculty list
const facultyMembers = [
  {
    name: "Dr. Evelyn Vance",
    role: "Principal & Head of School",
    dept: "Leadership",
    class: "leadership",
    credentials: "Ph.D. in Educational Leadership, Stanford University",
    initials: "EV",
  },
  {
    name: "Prof. Jonathan Sterling",
    role: "Dean of Academics",
    dept: "Leadership",
    class: "leadership",
    credentials: "M.Ed. in Curriculum Design, Harvard University",
    initials: "JS",
  },
  {
    name: "Dr. Marcus Vance",
    role: "AP Physics Instructor",
    dept: "Science & STEM",
    class: "stem",
    credentials: "Ph.D. in Applied Physics, MIT",
    initials: "MV",
  },
  {
    name: "Ms. Clara Harrison",
    role: "AP Calculus Teacher",
    dept: "Science & STEM",
    class: "stem",
    credentials: "M.S. in Mathematics, Caltech",
    initials: "CH",
  },
  {
    name: "Dr. Alistair Cooke",
    role: "World History Lecturer",
    dept: "Humanities",
    class: "humanities",
    credentials: "Ph.D. in European History, Cambridge University",
    initials: "AC",
  },
  {
    name: "Ms. Helena Rostova",
    role: "AP English Literature",
    dept: "Humanities",
    class: "humanities",
    credentials: "M.A. in English Lit, Columbia University",
    initials: "HR",
  },
  {
    name: "Mr. François Dubois",
    role: "French Studies Lead",
    dept: "Languages",
    class: "languages",
    credentials: "M.A. in French Literature, Sorbonne University",
    initials: "FD",
  },
  {
    name: "Ms. Li Wei",
    role: "Mandarin Language Instructor",
    dept: "Languages",
    class: "languages",
    credentials: "B.A. in Linguistics, Beijing Normal University",
    initials: "LW",
  },
  {
    name: "Mr. Arthur Pendelton",
    role: "Classical Orchestra Director",
    dept: "Fine Arts",
    class: "arts",
    credentials: "M.Mus. in Conducting, Juilliard School",
    initials: "AP",
  },
  {
    name: "Ms. Sophia Martinez",
    role: "Fine Arts & Painting Studio",
    dept: "Fine Arts",
    class: "arts",
    credentials: "M.F.A. in Painting, Yale School of Art",
    initials: "SM",
  },
  {
    name: "Mr. David Miller",
    role: "Athletics Coach & Coordinator",
    dept: "Athletics",
    class: "stem", // reuse class styling for simplicity
    credentials: "B.S. in Sports Science, University of Michigan",
    initials: "DM",
  },
];

// Department Filter Tabs
const departments = ["All", "Leadership", "Science & STEM", "Humanities", "Languages", "Fine Arts"];

export default function FacultyPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const breadcrumbs = [{ label: "Faculty" }];

  const filteredFaculty = facultyMembers.filter((member) =>
    selectedDept === "All" ? true : member.dept === selectedDept
  );

  return (
    <>
      <PageHeader title="Faculty Directory" breadcrumbs={breadcrumbs} />

      <section className={styles.section} aria-label="Faculty Directory Grid">
        <div className={styles.container}>
          <SectionHeader
            badge="Directory"
            title="Our Distinguished Faculty"
            description="Our academic staff is composed of certified educators, scholars, and industry mentors dedicated to academic rigor and supportive coaching."
            align="center"
          />

          {/* Department Filter Menu */}
          <div className={styles.filterBar}>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`${styles.filterBtn} ${
                  selectedDept === dept ? styles.active : ""
                }`}
                aria-pressed={selectedDept === dept}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Directory Grid */}
          <motion.div className={styles.facultyGrid} layout>
            <AnimatePresence mode="popLayout">
              {filteredFaculty.map((member) => (
                <motion.div
                  key={member.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={styles.facultyCard}
                >
                  {/* Stylized letter avatar based on department */}
                  <div className={`${styles.avatarCircle} ${styles[member.class]}`}>
                    {member.initials}
                  </div>

                  <h3 className={styles.name}>{member.name}</h3>
                  <span className={styles.role}>{member.role}</span>
                  <span className={styles.deptBadge}>{member.dept}</span>
                  <p className={styles.credentials}>{member.credentials}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
