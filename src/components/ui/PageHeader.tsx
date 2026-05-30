import React from "react";
import Link from "next/link";
import styles from "./PageHeader.module.scss";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <section className={styles.pageHeader} aria-label={`Banner: ${title}`}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <span className={styles.separator} aria-hidden="true">
                /
              </span>
              {crumb.href ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                <span className={styles.current}>{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;
