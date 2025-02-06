import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Button.module.scss";

const button = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
      xl: styles.xl,
    },
    disabled: {
      false: styles.enabled,
      true: styles.disabled,
    },
  },
  compoundVariants: [
    { variant: "primary", size: "md", className: '' },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  disabled,
  ...props
}) => (
  <button
    className={button({ variant, size, disabled, className })}
    disabled={disabled || undefined}
    {...props}
  />
);