import React from "react";
import cn from "classnames";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <hr
      className={cn("border-t-[3px] border-white opacity-[0.12]", className)}
    />
  );
};

export default Divider;
