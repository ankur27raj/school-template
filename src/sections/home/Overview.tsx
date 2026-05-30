"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { schoolConfig } from "@/config/school";
import Button from "@/components/ui/Button";
import styles from "./Overview.module.scss";

export const Overview: React.FC = () => {
  return (
    <section className={styles.overview} id="about-overview">
      <div className={styles.container}>
        {/* Left Side: Principal Image with Frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.imageWrapper}
        >
          <div className={styles.imageCard}>
            <Image
              src="/images/principal.png"
              alt={schoolConfig.principal.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
            <div className={styles.imageCaption}>
              <div className={styles.name}>{schoolConfig.principal.name}</div>
              <div className={styles.role}>
                Principal, {schoolConfig.shortName}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Message & Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className={styles.content}
        >
          <span className={styles.welcomeText}>Welcome to our School</span>
          <h2 className={styles.title}>
            Shaping Minds, Building Futures since 1998
          </h2>
          <p className={styles.intro}>
            For over two decades, {schoolConfig.name} has stood as a beacon of academic rigor and character education. We invite you to explore our vibrant community and see how we support students to discover their voice, follow their interests, and reach their full potential.
          </p>

          {/* Principal Quote Box */}
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>
              &ldquo;{schoolConfig.principal.quote}&rdquo;
            </p>
          </div>

          <p className={styles.intro} style={{ fontSize: "0.95rem" }}>
            {schoolConfig.principal.bio}
          </p>

          <div className={styles.actions}>
            <Link href="/about">
              <Button
                variant="primary"
                rightIcon={<ArrowRight size={16} />}
              >
                Our History & Mission
              </Button>
            </Link>
            <Link href="/faculty">
              <Button variant="outline">Meet the Leadership</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
