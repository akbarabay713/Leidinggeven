import { forwardRef } from "react";
import { Label } from "../../atoms/Label/Label"; // Assuming this is the Label component
import { CheckboxField } from "../../atoms/CheckboxField/CheckboxField"; // Checkbox input
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage"; // Error message component

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  errorMessage?: string;
  variant?: "default" | "error" | "disabled";
  isRequired?: boolean;
  className?: string;
}

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
    return (
      <div className="flex items-center gap-2">
        {label && (
          <Label htmlFor={id} isRequired={isRequired} className={className}>
            <CheckboxField ref={ref} id={id} variant={variant} {...props} />
            {label}
          </Label>
        )}

        <ErrorMessage message={errorMessage} />
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
export { Checkbox };
