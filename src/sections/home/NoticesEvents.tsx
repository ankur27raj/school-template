"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { schoolConfig } from "@/config/school";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./NoticesEvents.module.scss";

export const NoticesEvents: React.FC = () => {
  return (
    <section className={styles.noticesEvents} id="news-events">
      <div className={styles.container}>
        {/* Section Header */}
        <SectionHeader
          badge="Campus Updates"
          title="Latest Notices & Upcoming Events"
          description="Stay informed about important announcements, student achievements, and calendar activities happening at our school."
          align="center"
        />

        <div className={styles.grid}>
          {/* Column 1: Notices */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={styles.column}
          >
            <div className={styles.columnHeader}>
              <h3 className={styles.heading}>Latest Notices</h3>
              <Link href="/news" className={styles.viewAll}>
                <span>All Notices</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.noticesStack}>
              {schoolConfig.notices.map((notice) => (
                <article
                  key={notice.id}
                  className={`${styles.noticeCard} ${
                    notice.isImportant ? styles.important : ""
                  }`}
                >
                  <div className={styles.noticeMeta}>
                    <span className={styles.date}>{notice.date}</span>
                    {notice.isImportant ? (
                      <span className={styles.importantBadge}>Urgent</span>
                    ) : (
                      <span className={styles.categoryBadge}>
                        {notice.category}
                      </span>
                    )}
                  </div>
                  <h4 className={styles.noticeTitle}>{notice.title}</h4>
                  <p className={styles.noticeContent}>{notice.content}</p>
                </article>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Events */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className={styles.column}
          >
            <div className={styles.columnHeader}>
              <h3 className={styles.heading}>Upcoming Events</h3>
              <Link href="/news#events" className={styles.viewAll}>
                <span>Calendar</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.eventsStack}>
              {schoolConfig.events.map((event) => (
                <div key={event.id} className={styles.eventCard}>
                  {/* Calendar Date Block */}
                  <div className={styles.dateBlock}>
                    <span className={styles.day}>{event.date}</span>
                    <span className={styles.month}>{event.month}</span>
                  </div>

                  {/* Event details */}
                  <div className={styles.eventDetails}>
                    <h4 className={styles.eventTitle}>{event.title}</h4>
                    <div className={styles.eventMeta}>
                      <div className={styles.metaItem}>
                        <Clock size={12} aria-hidden="true" />
                        <span>{event.time}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <MapPin size={12} aria-hidden="true" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className={styles.eventDescription}>
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NoticesEvents;
