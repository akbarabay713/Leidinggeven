"use client";
import { forwardRef } from "react";
import { Label } from "../../atoms/Label/Label";
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage";
import { cva } from "class-variance-authority";
import Check from "../../atoms/icons/Check/Check";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "value"> {
  label: string;
  errorMessage?: string;
  variant?: "default" | "error" | "disabled";
  isRequired?: boolean;
  className?: string;
  value?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const checkboxVariants = cva("inline-flex items-center gap-2", {
  variants: {
    variant: {
      default:
        "border-gray-200 text-blue-500 checked:bg-primary-500 checked:border-transparent",
      error: "border-red-700 text-red-500",
      disabled: "cursor-not-allowed border-gray-300 text-gray-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      errorMessage,
      id,
      isRequired,
      className,
      variant = "default",
      value = false,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {label && (
            <Label htmlFor={id} isRequired={isRequired} className={className}>
              <input
                ref={ref}
                id={id}
                type="checkbox"
                className="hidden"
                checked={value}
                onChange={onChange}
                {...props}
              />
              <span
                className={`inline-flex items-center justify-center w-6 h-6 rounded border border-gray-200 ${checkboxVariants(
                  {
                    variant,
                  }
                )} ${value ? "bg-primary-500" : ""}`}
              >
                {value && <Check />}
              </span>

              {label}
            </Label>
          )}
        </div>

        {/* Error message */}
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
export { Checkbox };
