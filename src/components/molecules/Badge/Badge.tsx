import React from "react";
import Typography from "../../atoms/Typography/Typography";
import Star from "../../atoms/icons/Star/Star";

interface BadgeProps {
  text: string;
}
const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="py-3 pl-3 pr-4 flex items-center justify-center gap-[10px] rounded-2xl bg-[#F9FAFB] w-fit">
      <div className="rounded-lg p-1 flex items-center justify-center bg-[#8AD360]">
        <Star />
      </div>
      <Typography
        variant="interTextLgRegular"
        component="span"
        className="text-[#667085]"
      >
        {text}
      </Typography>
    </div>
  );
};

export default Badge;
