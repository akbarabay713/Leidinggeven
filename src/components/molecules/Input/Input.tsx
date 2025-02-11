import { forwardRef } from "react";
import { Label } from "../../atoms/Label/Label";
import { InputField } from "../../atoms/InputField/InputField";
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  size?: "sm" | "md" | "lg";
  isRequired?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, id, isRequired, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[6px] w-full">
        {label && (
          <Label htmlFor={id} isRequired={isRequired}>
            {label}
          </Label>
        )}
        <InputField ref={ref} id={id} {...props} />
        <ErrorMessage message={errorMessage} />
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };
