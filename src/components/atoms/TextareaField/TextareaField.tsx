import styles from "./TextareaField.module.scss";
import { forwardRef } from "react";
import cn from "classnames";

interface TextareaFieldProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "error" | "disabled";
}

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ className, size = "md", variant = "default", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          styles.textarea,
          styles[size],
          styles[variant],
          className
        )}
        {...props}
      />
    );
  }
);

TextareaField.displayName = "TextareaField";
export { TextareaField };
