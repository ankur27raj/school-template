"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "outline" | "text" | "emerald";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  animate?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  animate = true,
  className = "",
  disabled,
  ...props
}) => {
  const buttonClass = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (!animate || disabled) {
    return (
      <button className={buttonClass} disabled={disabled} {...props}>
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </button>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={buttonClass}
      disabled={disabled}
      {...(props as any)}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </motion.button>
  );
};

export default Button;
