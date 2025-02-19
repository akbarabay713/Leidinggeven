import React from "react";
import Typography from "../../atoms/Typography/Typography";
import { useTranslations } from "next-intl";

interface IStyle {
  bgColor: string;
  textColor: string;
}

interface IProps {
  text: string;
  styles: IStyle[];
}

const CardWhoAreWe: React.FC<IProps> = ({ text, styles }) => {
  const t = useTranslations();
  return (
    <div
      className="bg-green-200 rounded-lg p-4 min-h-[10.75rem] flex items-end"
      style={{ backgroundColor: styles[0].bgColor }}
    >
      <Typography
        variant="interTextSmRegular"
        component="h4"
        style={{ color: styles[0].textColor }}
      >
        {t(text)}
      </Typography>
    </div>
  );
};

export default CardWhoAreWe;
