import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "classnames";

const inputVariants = cva(
  "w-full rounded-md border px-3 py-2 text-sm outline-none transition-all",
  {
    variants: {
      size: {
        sm: "text-sm py-1 px-2",
        md: "text-base py-2 px-3",
        lg: "text-lg py-3 px-4",
      },
      variant: {
        default: "border-gray-300 focus:ring-2 focus:ring-blue-500",
        error: "border-red-500 focus:ring-2 focus:ring-red-500",
        disabled: "bg-gray-100 border-gray-300 cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ size, variant }), className)}
        {...props}
      />
    );
  }
);

InputField.displayName = "InputField";
export { InputField };
