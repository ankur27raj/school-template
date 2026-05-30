"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./gallery.module.scss";

// Gallery Items List
const galleryItems = [
  {
    title: "Apex Campus Building",
    category: "Campus",
    src: "/images/campus-hero.png",
  },
  {
    title: "Advanced STEM Lab",
    category: "Facilities",
    src: "/images/facility-stem.png",
  },
  {
    title: "Resource Library",
    category: "Facilities",
    src: "/images/facility-library.png",
  },
  {
    title: "Olympic Sports Complex",
    category: "Facilities",
    src: "/images/facility-sports.png",
  },
  {
    title: "Performing Arts Auditorium",
    category: "Facilities",
    src: "/images/facility-arts.png",
  },
  {
    title: "Kindergarten Center",
    category: "Academics",
    src: "/images/programs-early.png",
  },
  {
    title: "Primary Grade Classroom",
    category: "Academics",
    src: "/images/programs-primary.png",
  },
  {
    title: "Middle School Robotics Lab",
    category: "Academics",
    src: "/images/programs-middle.png",
  },
  {
    title: "High School Seminar Hall",
    category: "Academics",
    src: "/images/programs-high.png",
  },
];

export default function GalleryPage() {
  const breadcrumbs = [{ label: "Gallery" }];
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIdx(index);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  const nextImage = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev! + 1) % galleryItems.length);
  }, [activeIdx]);

  const prevImage = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev! - 1));
  }, [activeIdx]);

  // Key listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx, nextImage, prevImage]);

  // Prevent scroll when lightbox open
  useEffect(() => {
    if (activeIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIdx]);

  return (
    <>
      <PageHeader title="School Gallery" breadcrumbs={breadcrumbs} />

      <section className={styles.section} aria-label="Campus Gallery Grid">
        <div className={styles.container}>
          <SectionHeader
            badge="Visual Tour"
            title="Campus Life & Learning Spaces"
            description="Explore our campus architecture, specialized stem laboratories, athletic courts, and student workspaces."
            align="center"
          />

          {/* Grid layout */}
          <div className={styles.galleryGrid}>
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className={styles.galleryCard}
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <span className={styles.cardCategory}>{item.category}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightbox}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className={styles.closeBtn}
              aria-label="Close Lightbox"
            >
              <X size={32} />
            </button>

            {/* Previous Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className={`${styles.navBtn} ${styles.prev}`}
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Lightbox center content */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.lightboxImageWrapper}>
                <Image
                  src={galleryItems[activeIdx].src}
                  alt={galleryItems[activeIdx].title}
                  fill
                  sizes="90vw"
                  priority
                  className={styles.lightboxImage}
                />
              </div>

              {/* Text Caption */}
              <div className={styles.captionBlock}>
                <h2 className={styles.lightboxTitle}>{galleryItems[activeIdx].title}</h2>
                <span className={styles.lightboxCategory}>
                  {galleryItems[activeIdx].category}
                </span>
              </div>
            </motion.div>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className={`${styles.navBtn} ${styles.next}`}
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
