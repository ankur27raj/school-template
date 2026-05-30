"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { schoolConfig } from "@/config/school";
import Button from "../ui/Button";
import styles from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const headerClass = [
    styles.header,
    scrolled ? styles.scrolled : "",
    mobileMenuOpen ? styles.mobileMenuOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClass}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            {schoolConfig.logoText}<span>.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
              {schoolConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${
                        isActive ? styles.active : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className={styles.navActions}>
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Inquire
              </Button>
            </Link>
            <Link href="/admissions">
              <Button
                variant="secondary"
                size="sm"
                rightIcon={<ArrowRight size={14} />}
              >
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className={styles.menuButton}
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={styles.mobileMenu}
          >
            <nav aria-label="Mobile Navigation">
              <ul className={styles.mobileNavList}>
                {schoolConfig.navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`${styles.mobileNavLink} ${
                          isActive ? styles.active : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.mobileActions}>
              <Link href="/contact" onClick={closeMobileMenu}>
                <Button variant="outline" fullWidth>
                  Inquire
                </Button>
              </Link>
              <Link href="/admissions" onClick={closeMobileMenu}>
                <Button variant="secondary" fullWidth>
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
