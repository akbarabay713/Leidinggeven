import React from "react";
import { RadioButton } from "../RadioButton/RadioButton";
import { useTranslations } from "next-intl";

interface RadioGroupProps {
  options: { id: string; value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  name: string;
}

export const RadioGroup = ({
  options,
  selectedValue,
  onChange,
  name,
}: RadioGroupProps) => {
  const t = useTranslations();
  return (
    <div className="flex gap-1.5 bg-gray-50 p-2 rounded-lg w-full flex-wrap md:flex-nowrap">
      {options.map((option) => (
        <RadioButton
          key={option.id}
          id={option.id}
          name={name}
          value={option.value}
          label={t(option.label)}
          checked={selectedValue === option.value}
          onChange={(e) => onChange(e.target.value)}
          intent={selectedValue === option.value ? "selected" : "default"}
        />
      ))}
    </div>
  );
};
