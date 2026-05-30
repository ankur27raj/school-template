import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { schoolConfig } from "@/config/school";
import styles from "./Footer.module.scss";

// Custom SVG Brand Icons since newer versions of lucide-react do not bundle them
const FacebookIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const iconMap: Record<string, React.FC<{ size?: number }>> = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Logo and Tagline */}
        <div className={styles.logoCol}>
          <Link href="/" className={styles.logo}>
            {schoolConfig.logoText}<span>.</span>
          </Link>
          <p className={styles.tagline}>{schoolConfig.tagline}</p>
          <div className={styles.socials}>
            {schoolConfig.socials.map((social) => {
              const IconComponent = iconMap[social.icon] || GlobeIconPlaceholder;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Academics Links */}
        <div className={styles.linksCol}>
          <h3 className={styles.heading}>Academics</h3>
          <ul className={styles.list}>
            <li>
              <Link href="/academics#curriculum" className={styles.link}>
                Curriculum
              </Link>
            </li>
            <li>
              <Link href="/academics#early-years" className={styles.link}>
                Early Years
              </Link>
            </li>
            <li>
              <Link href="/academics#primary" className={styles.link}>
                Primary School
              </Link>
            </li>
            <li>
              <Link href="/academics#middle" className={styles.link}>
                Middle School
              </Link>
            </li>
            <li>
              <Link href="/academics#high" className={styles.link}>
                High School
              </Link>
            </li>
          </ul>
        </div>

        {/* Admissions Links */}
        <div className={styles.linksCol}>
          <h3 className={styles.heading}>Admissions</h3>
          <ul className={styles.list}>
            <li>
              <Link href="/admissions#process" className={styles.link}>
                Admission Process
              </Link>
            </li>
            <li>
              <Link href="/admissions#eligibility" className={styles.link}>
                Eligibility
              </Link>
            </li>
            <li>
              <Link href="/admissions#fees" className={styles.link}>
                Tuition & Fees
              </Link>
            </li>
            <li>
              <Link href="/admissions#inquiry" className={styles.link}>
                Inquiry Form
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactCol}>
          <h3 className={styles.heading}>Get In Touch</h3>
          <div className={styles.list}>
            <div className={styles.contactItem}>
              <MapPin size={18} aria-hidden="true" />
              <span>{schoolConfig.contact.address}</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={18} aria-hidden="true" />
              <a href={`tel:${schoolConfig.contact.phone}`}>
                {schoolConfig.contact.phone}
              </a>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${schoolConfig.contact.email}`}>
                {schoolConfig.contact.email}
              </a>
            </div>
            <div className={styles.contactItem}>
              <Clock size={18} aria-hidden="true" />
              <span>{schoolConfig.contact.officeHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.bottom}>
        <p>
          &copy; {currentYear} {schoolConfig.name}. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy-policy" className={styles.bottomLink}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className={styles.bottomLink}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

// Fallback Icon
const GlobeIconPlaceholder: React.FC<{ size?: number }> = ({ size = 18 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
};

export default Footer;
