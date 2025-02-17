import { cva, type VariantProps } from "class-variance-authority";
import { Label } from "../../atoms/Label/Label";

const radioButtonVariants = cva(
  "inline-block w-full px-5 py-2.5 text-sm font-normal rounded-md transition-all duration-300",
  {
    variants: {
      intent: {
        default: "text-gray-400 bg-transparent",
        selected: "text-white bg-primary-500",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

interface RadioButtonProps extends VariantProps<typeof radioButtonVariants> {
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
  intent,
}: RadioButtonProps) => {
  return (
    <Label className="flex-grow relative inline-block cursor-pointer text-center w-full">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span className={radioButtonVariants({ intent })}>{label}</span>
    </Label>
  );
};
