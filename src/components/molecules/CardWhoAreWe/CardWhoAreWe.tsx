import React from "react";
import Typography from "../../atoms/Typography/Typography";

interface IStyle {
  bgColor: string;
  textColor: string;
}

interface IProps {
  text: string;
  styles: IStyle[];
}

const CardWhoAreWe: React.FC<IProps> = ({ text, styles }) => {
  return (
    <div
      className="bg-green-200 rounded-lg p-4 min-h-[172px] flex items-end"
      style={{ backgroundColor: styles[0].bgColor }}
    >
      <Typography
        variant="interTextSmRegular"
        component="h4"
        style={{ color: styles[0].textColor }}
      >
        {text}
      </Typography>
    </div>
  );
};

export default CardWhoAreWe;
