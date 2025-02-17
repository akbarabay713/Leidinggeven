"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Button.module.scss";

const button = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      primaryOutline: styles.primaryOutline,
      outlineColor: styles.outlineColor,
      outlineGray: styles.outlineGray,
      linkPrimary: styles.linkPrimary,
    },
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
      xl: styles.xl,
      smIcon: styles.smIcon,
      mdIcon: styles.mdIcon,
      lgIcon: styles.lgIcon,
      xlIcon: styles.xlIcon,
    },
    disabled: {
      false: styles.enabled,
      true: styles.disabled,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  size: "sm" | "md" | "lg" | "xl" | "smIcon" | "mdIcon" | "lgIcon" | "xlIcon";
  variant?:
    | "primary"
    | "primaryOutline"
    | "outlineColor"
    | "outlineGray"
    | "linkPrimary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  disabled,
  icon,
  iconPosition = "left",
  children,
  ...props
}) => (
  <button
    className={button({ variant, size, disabled, className })}
    disabled={disabled || undefined}
    {...props}
  >
    {icon && iconPosition === "left" && (
      <span className={styles.icon}>{icon}</span>
    )}
    {children && <span className={styles.text}>{children}</span>}

    {icon && iconPosition === "right" && (
      <span className={styles.icon}>{icon}</span>
    )}
  </button>
);
