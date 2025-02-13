"use client";
import { forwardRef, useState } from "react";
import { Label } from "../../atoms/Label/Label"; // Assuming this is the Label component
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage"; // Error message component
import { cva } from "class-variance-authority"; // Assuming CVA is being used for variant handling

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  errorMessage?: string;
  variant?: "default" | "error" | "disabled";
  isRequired?: boolean;
  className?: string;
}

const checkboxVariants = cva("inline-flex items-center gap-2", {
  variants: {
    variant: {
      default: "border-gray-400 text-blue-500 checked:bg-primary-500",
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
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked((prev) => !prev); // Toggle the checked state
    };

    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {label && (
            <Label htmlFor={id} isRequired={isRequired} className={className}>
              <label htmlFor={id} className="cursor-pointer">
                {/* Hidden checkbox input */}
                <input
                  ref={ref}
                  id={id}
                  type="checkbox"
                  className="hidden"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  {...props}
                />
                {/* Custom checkbox appearance */}
                <span
                  className={`inline-flex items-center justify-center w-8 h-8 p-1 rounded border ${checkboxVariants(
                    {
                      variant,
                    }
                  )} ${isChecked ? "bg-primary-500" : ""}`}
                >
                  {/* SVG checkmark icon */}
                  {isChecked && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </label>
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
