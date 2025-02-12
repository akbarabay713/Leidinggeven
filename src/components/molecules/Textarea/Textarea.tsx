import { forwardRef } from "react";
import { Label } from "../../atoms/Label/Label";
import { TextareaField } from "../../atoms/TextareaField/TextareaField";
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage";

interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  errorMessage?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "error" | "disabled";
  isRequired?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      errorMessage,
      id,
      isRequired,
      variant = "default",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-[6px] w-full">
        {label && (
          <Label htmlFor={id} isRequired={isRequired}>
            {label}
          </Label>
        )}
        <TextareaField
          ref={ref}
          id={id}
          variant={variant}
          size={size}
          {...props}
        />
        <ErrorMessage message={errorMessage} />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export { Textarea };
