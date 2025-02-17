import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "classnames";
import s from "./InputField.module.scss";

const inputVariants = cva(s.input, {
  variants: {
    size: {
      sm: s.sm,
      md: s.md,
      lg: s.lg,
    },
    variant: {
      default: s.default,
      error: s.error,
      disabled: s.disabled,
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  size?: "sm" | "md" | "lg";
  type?: React.HTMLInputTypeAttribute;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, size = "md", variant, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ size, variant }), className)}
        type={type}
        {...props}
      />
    );
  }
);

InputField.displayName = "InputField";
export { InputField };
