"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Bell } from "lucide-react";
import { schoolConfig } from "@/config/school";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./news.module.scss";

type TabOption = "all" | "notices" | "events";

export default function NewsPage() {
  const breadcrumbs = [{ label: "Notices & Events" }];
  const [activeTab, setActiveTab] = useState<TabOption>("all");

  const showNotices = activeTab === "all" || activeTab === "notices";
  const showEvents = activeTab === "all" || activeTab === "events";

  return (
    <>
      <PageHeader title="Notices & Events" breadcrumbs={breadcrumbs} />

      <section className={styles.section} aria-label="Notices and Events board">
        <div className={styles.container}>
          <SectionHeader
            badge="Bulletin Board"
            title="School Announcements & Calendar"
            description="Keep up with administrative policies, student highlights, term timelines, and athletic schedules."
            align="center"
          />

          {/* Toggle Tabs */}
          <div className={styles.tabBar}>
            <button
              onClick={() => setActiveTab("all")}
              className={`${styles.tabBtn} ${activeTab === "all" ? styles.active : ""}`}
              aria-selected={activeTab === "all"}
            >
              All Updates
            </button>
            <button
              onClick={() => setActiveTab("notices")}
              className={`${styles.tabBtn} ${activeTab === "notices" ? styles.active : ""}`}
              aria-selected={activeTab === "notices"}
            >
              Notices
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`${styles.tabBtn} ${activeTab === "events" ? styles.active : ""}`}
              aria-selected={activeTab === "events"}
            >
              Events Calendar
            </button>
          </div>

          {/* Content area */}
          <div className={styles.contentStack}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={styles.contentStack}
              >
                {/* Notices stack */}
                {showNotices && (
                  <div className={styles.noticesGrid} aria-label="Announcements Stack">
                    {activeTab !== "all" && (
                      <h2 style={{ display: "none" }}>Notices Bulletin</h2>
                    )}
                    {schoolConfig.notices.map((notice) => (
                      <article
                        key={notice.id}
                        className={`${styles.noticeCard} ${
                          notice.isImportant ? styles.important : ""
                        }`}
                      >
                        <div className={styles.noticeHeader}>
                          <span className={styles.date}>{notice.date}</span>
                          {notice.isImportant ? (
                            <span className={styles.importantBadge}>Urgent Notice</span>
                          ) : (
                            <span className={styles.categoryBadge}>{notice.category}</span>
                          )}
                        </div>
                        <h3 className={styles.noticeTitle}>{notice.title}</h3>
                        <p className={styles.noticeBody}>{notice.content}</p>
                      </article>
                    ))}
                  </div>
                )}

                {/* Events Timeline stack */}
                {showEvents && (
                  <div className={styles.eventsTimeline} aria-label="Timeline Events Stack">
                    {activeTab !== "all" && (
                      <h2 style={{ display: "none" }}>Events Calendar</h2>
                    )}
                    {schoolConfig.events.map((event) => (
                      <div key={event.id} className={styles.eventCard}>
                        {/* Calendar date grid block */}
                        <div className={styles.dateBlock}>
                          <span className={styles.day}>{event.date}</span>
                          <span className={styles.month}>{event.month}</span>
                        </div>

                        {/* Detail text */}
                        <div className={styles.eventDetails}>
                          <h3 className={styles.eventTitle}>{event.title}</h3>
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
                          <p className={styles.eventDesc}>{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
