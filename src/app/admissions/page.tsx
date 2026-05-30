"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, FileText, Check, HelpCircle } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import styles from "./admissions.module.scss";

// Types for form values & validation errors
interface FormValues {
  parentName: string;
  studentName: string;
  email: string;
  phone: string;
  gradeLevel: string;
  message: string;
}

interface FormErrors {
  parentName?: string;
  studentName?: string;
  email?: string;
  phone?: string;
  gradeLevel?: string;
}

export default function AdmissionsPage() {
  const breadcrumbs = [{ label: "Admissions" }];

  // Form States
  const [formValues, setFormValues] = useState<FormValues>({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    gradeLevel: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    // Clear errors when the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Form validator
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formValues.parentName.trim()) {
      newErrors.parentName = "Parent/Guardian name is required.";
    }
    
    if (!formValues.studentName.trim()) {
      newErrors.studentName = "Student name is required.";
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    // Phone validation (simple length check)
    if (!formValues.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formValues.phone.replace(/\D/g, "").length < 7) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    
    if (!formValues.gradeLevel) {
      newErrors.gradeLevel = "Please select a grade level.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Mock network request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <PageHeader title="Admissions Center" breadcrumbs={breadcrumbs} />

      {/* Admission Process */}
      <section className={styles.section} id="process" aria-label="Admission Process">
        <div className={styles.container}>
          <SectionHeader
            badge="Process"
            title="Step-by-Step Admissions Pipeline"
            description="We seek to make the enrollment process simple, supportive, and transparent for families at every stage."
            align="center"
          />

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.stepNum}>01</div>
              <h3 className={styles.stepTitle}>Online Inquiry</h3>
              <p className={styles.stepDesc}>
                Submit an inquiry form with student details and grade levels to schedule a campus tour.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.stepNum}>02</div>
              <h3 className={styles.stepTitle}>Submit Documents</h3>
              <p className={styles.stepDesc}>
                Provide past transcripts, birth certificates, teacher recommendations, and wellness forms.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.stepNum}>03</div>
              <h3 className={styles.stepTitle}>Interview & Review</h3>
              <p className={styles.stepDesc}>
                Student takes a diagnostic evaluation and both parents meet with our admissions committee.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.stepNum}>04</div>
              <h3 className={styles.stepTitle}>Offer & Enrollment</h3>
              <p className={styles.stepDesc}>
                Upon acceptance, receive an placement offer. Complete registration fee payments to secure placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility and Required Documents */}
      <section className={`${styles.section} ${styles.grayBg}`} id="requirements" aria-label="Requirements">
        <div className={styles.container}>
          <div className={styles.detailsSplit}>
            {/* Required Documents Card */}
            <div className={styles.detailsCol}>
              <h2 className={styles.heading}>Required Documentation</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <FileText size={18} aria-hidden="true" />
                  <span><strong>Student Birth Certificate</strong> or copy of passport pages.</span>
                </li>
                <li className={styles.listItem}>
                  <FileText size={18} aria-hidden="true" />
                  <span><strong>Transcripts / Grade Cards</strong> for the last two consecutive academic terms.</span>
                </li>
                <li className={styles.listItem}>
                  <FileText size={18} aria-hidden="true" />
                  <span><strong>Teacher Recommendation Letter</strong> from a mathematics or English instructor.</span>
                </li>
                <li className={styles.listItem}>
                  <FileText size={18} aria-hidden="true" />
                  <span><strong>Immunization & Health Records</strong> signed by a registered physician.</span>
                </li>
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div className={styles.detailsCol}>
              <h2 className={styles.heading}>Eligibility Criteria</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Check size={18} aria-hidden="true" />
                  <span><strong>Early Years:</strong> Must be 3 years of age by September 1 for Preschool entry.</span>
                </li>
                <li className={styles.listItem}>
                  <Check size={18} aria-hidden="true" />
                  <span><strong>Primary School:</strong> Age-appropriate developmental readiness verified during review.</span>
                </li>
                <li className={styles.listItem}>
                  <Check size={18} aria-hidden="true" />
                  <span><strong>Middle School:</strong> Complete primary qualifications and show solid disciplinary habits.</span>
                </li>
                <li className={styles.listItem}>
                  <Check size={18} aria-hidden="true" />
                  <span><strong>High School:</strong> Solid record of past academic grades and favorable teacher reviews.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className={styles.section} id="inquiry" aria-label="Admissions Inquiry Form">
        <div className={styles.container}>
          <SectionHeader
            badge="Inquire Now"
            title="Submit An Admissions Inquiry"
            description="Please fill out the details below, and our admissions team will contact you to schedule a placement review."
            align="center"
          />

          <div className={styles.formWrapper}>
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
                  {/* Parent Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="parentName" className={styles.label}>
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formValues.parentName}
                      onChange={handleInputChange}
                      className={`${styles.input} ${
                        errors.parentName ? styles.errorBorder : ""
                      }`}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.parentName && (
                      <p className={styles.errorText}>{errors.parentName}</p>
                    )}
                  </div>

                  {/* Student Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="studentName" className={styles.label}>
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formValues.studentName}
                      onChange={handleInputChange}
                      className={`${styles.input} ${
                        errors.studentName ? styles.errorBorder : ""
                      }`}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.studentName && (
                      <p className={styles.errorText}>{errors.studentName}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
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
                      {errors.email && (
                        <p className={styles.errorText}>{errors.email}</p>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        className={`${styles.input} ${
                          errors.phone ? styles.errorBorder : ""
                        }`}
                        placeholder="+1 (555) 000-0000"
                        disabled={isSubmitting}
                        required
                      />
                      {errors.phone && (
                        <p className={styles.errorText}>{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Grade Level */}
                  <div className={styles.formGroup}>
                    <label htmlFor="gradeLevel" className={styles.label}>
                      Grade Level Applying For *
                    </label>
                    <select
                      id="gradeLevel"
                      name="gradeLevel"
                      value={formValues.gradeLevel}
                      onChange={handleInputChange}
                      className={`${styles.select} ${
                        errors.gradeLevel ? styles.errorBorder : ""
                      }`}
                      disabled={isSubmitting}
                      required
                    >
                      <option value="">-- Select Grade --</option>
                      <option value="preschool">Preschool - Kindergarten</option>
                      <option value="primary">Primary School (Grades 1-5)</option>
                      <option value="middle">Middle School (Grades 6-8)</option>
                      <option value="high">High School (Grades 9-12)</option>
                    </select>
                    {errors.gradeLevel && (
                      <p className={styles.errorText}>{errors.gradeLevel}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Additional Message / Inquiry Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formValues.message}
                      onChange={handleInputChange}
                      className={styles.textarea}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    variant="secondary"
                    disabled={isSubmitting}
                    style={{ marginTop: "8px" }}
                  >
                    {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
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
                  <h3 className={styles.successTitle}>Inquiry Submitted Successfully!</h3>
                  <p className={styles.successDesc}>
                    Thank you for your interest in Apex International School. Our admissions team, led by Ms. Sarah Jenkins, has received your details and will contact you via email (**{formValues.email}**) or phone within two business days.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setFormValues({
                        parentName: "",
                        studentName: "",
                        email: "",
                        phone: "",
                        gradeLevel: "",
                        message: "",
                      });
                      setIsSubmitted(false);
                    }}
                    style={{ marginTop: "8px" }}
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
