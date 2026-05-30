"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { schoolConfig } from "@/config/school";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Testimonials.module.scss";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % schoolConfig.testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? schoolConfig.testimonials.length - 1 : prev - 1
    );
  }, []);

  const selectSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    timerRef.current = setInterval(nextSlide, 6000);
  }, [nextSlide]);

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay]);

  const currentTestimonial = schoolConfig.testimonials[currentIndex];

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        {/* Section Header */}
        <SectionHeader
          badge="Voices of our Community"
          title="What Parents & Alumni Say"
          description="Hear from families who have experienced the transformative impact of our education firsthand."
          align="center"
        />

        {/* Carousel Area */}
        <div
          className={styles.carousel}
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div className={styles.cardWrapper}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants as any}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles.testimonialCard}
              >
                <Quote size={40} className={styles.quoteIcon} aria-hidden="true" />
                <blockquote className={styles.quoteText}>
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                <div className={styles.authorInfo}>
                  <div className={styles.avatar}>
                    {getInitials(currentTestimonial.author)}
                  </div>
                  <cite className={styles.name}>{currentTestimonial.author}</cite>
                  <span className={styles.role}>{currentTestimonial.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Controls */}
          <div className={styles.controls}>
            <button
              onClick={prevSlide}
              className={styles.controlBtn}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className={styles.controlBtn}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className={styles.dots}>
            {schoolConfig.testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => selectSlide(idx)}
                className={`${styles.dot} ${
                  idx === currentIndex ? styles.active : ""
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
