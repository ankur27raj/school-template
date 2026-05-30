"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle } from "lucide-react";
import { schoolConfig } from "@/config/school";
import Button from "@/components/ui/Button";
import styles from "./CTA.module.scss";

export const CTA: React.FC = () => {
  return (
    <section className={styles.cta} aria-label="Admissions Call To Action">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.banner}
        >
          {/* Badge */}
          <span className={styles.badge}>Admissions 2026-2027</span>

          {/* Heading */}
          <h2 className={styles.title}>
            Shape Your Child&apos;s Destiny At {schoolConfig.shortName}
          </h2>

          {/* Description */}
          <p className={styles.description}>
            Join our global educational community where children are empowered to discover their potential, lead with character, and build a brighter tomorrow. Applications are now open for the upcoming school term.
          </p>

          {/* Action buttons */}
          <div className={styles.actions}>
            <Link href="/admissions">
              <Button
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Apply for Admissions
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className={styles.inquireBtn}
                leftIcon={<HelpCircle size={18} />}
              >
                Inquire Today
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
