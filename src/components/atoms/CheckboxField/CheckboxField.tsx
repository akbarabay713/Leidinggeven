import { forwardRef } from "react";
import cn from "classnames";
import styles from "./CheckboxField.module.scss";

interface CheckboxFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "default" | "error" | "disabled";
}

const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={cn(styles.checkbox, styles[variant], className)}
        {...props}
      />
    );
  }
);

CheckboxField.displayName = "CheckboxField";
export { CheckboxField };
