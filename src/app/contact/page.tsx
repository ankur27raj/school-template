"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { schoolConfig } from "@/config/school";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import styles from "./contact.module.scss";

// Custom Brand Icons
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
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

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
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

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
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

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
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

const socialMap: Record<string, React.FC<{ size?: number }>> = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
};

// Form interfaces
interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact" }];

  // Form State
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = "Your name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formValues.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Message details are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <PageHeader title="Contact Administration" breadcrumbs={breadcrumbs} />

      <section className={styles.section} aria-label="Contact Information and Form">
        <div className={styles.container}>
          <div className={styles.contactSplit}>
            {/* Left Side: Info */}
            <div className={styles.infoCol}>
              <div className={styles.infoBlock}>
                <h2 className={styles.heading}>Administrative Contacts</h2>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <MapPin size={22} aria-hidden="true" />
                    <span>{schoolConfig.contact.address}</span>
                  </li>
                  <li className={styles.listItem}>
                    <Phone size={22} aria-hidden="true" />
                    <a href={`tel:${schoolConfig.contact.phone}`}>
                      {schoolConfig.contact.phone}
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <Mail size={22} aria-hidden="true" />
                    <a href={`mailto:${schoolConfig.contact.email}`}>
                      {schoolConfig.contact.email}
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <Clock size={22} aria-hidden="true" />
                    <span>{schoolConfig.contact.officeHours}</span>
                  </li>
                </ul>
              </div>

              {/* Social Channels */}
              <div className={styles.socialsBlock}>
                <h3 className={styles.heading}>Connect With Us</h3>
                <div className={styles.socialsGrid}>
                  {schoolConfig.socials.map((social) => {
                    const IconComponent = socialMap[social.icon] || (() => null);
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialBtn}
                        aria-label={`Visit our ${social.name} page`}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className={styles.formCol}>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className={styles.form}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        className={`${styles.input} ${
                          errors.name ? styles.errorBorder : ""
                        }`}
                        disabled={isSubmitting}
                        required
                      />
                      {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        className={`${styles.input} ${
                          errors.email ? styles.errorBorder : ""
                        }`}
                        disabled={isSubmitting}
                        required
                      />
                      {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.label}>
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formValues.subject}
                        onChange={handleInputChange}
                        className={`${styles.input} ${
                          errors.subject ? styles.errorBorder : ""
                        }`}
                        disabled={isSubmitting}
                        required
                      />
                      {errors.subject && (
                        <p className={styles.errorText}>{errors.subject}</p>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>
                        Message Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formValues.message}
                        onChange={handleInputChange}
                        className={`${styles.textarea} ${
                          errors.message ? styles.errorBorder : ""
                        }`}
                        disabled={isSubmitting}
                        required
                      />
                      {errors.message && (
                        <p className={styles.errorText}>{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      rightIcon={<Send size={16} />}
                      style={{ marginTop: "8px" }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className={styles.successCard}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={styles.successIcon}>
                      <CheckCircle size={36} aria-hidden="true" />
                    </div>
                    <h3 className={styles.successTitle}>Message Sent Successfully!</h3>
                    <p className={styles.successDesc}>
                      Thank you for contacting us. A representative from the administrative team has received your message and will respond to (**{formValues.email}**) within one business day.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setFormValues({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                        setIsSubmitted(false);
                      }}
                      style={{ marginTop: "8px" }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className={styles.mapWrapper}>
            <iframe
              src={schoolConfig.contact.mapEmbedUrl}
              allowFullScreen
              loading="lazy"
              title={`${schoolConfig.name} Location Map`}
              aria-label="Interactive Map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
