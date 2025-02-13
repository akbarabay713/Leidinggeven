import React from "react";
import Typography from "../../atoms/Typography/Typography";
import Star from "../../atoms/icons/Star/Star";
import cn from "classnames";

interface BadgeProps {
  text: string;
  className?: string;
}
const Badge: React.FC<BadgeProps> = ({ text, className }) => {
  return (
    <div
      className={cn(
        "py-3 pl-3 pr-4 flex items-start md:items-center justify-center gap-[0.625rem] rounded-2xl bg-gray-50 w-full md:w-fit md:flex-row flex-col",
        className
      )}
    >
      <div className="rounded-lg p-1 flex items-center justify-center bg-primary-500">
        <Star />
      </div>
      <Typography
        variant="interTextLgRegular"
        component="span"
        className="text-gray-500"
      >
        {text}
      </Typography>
    </div>
  );
};

export default Badge;
