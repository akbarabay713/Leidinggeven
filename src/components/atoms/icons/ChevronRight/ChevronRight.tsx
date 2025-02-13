import * as React from "react";
import { IIconProps } from "@/src/types/icon";

const ChevronRight: React.FC<IIconProps> = ({
  color = "currentColor",
  //   size = 20,
  ...props
}) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 16a.999.999 0 01-.707-1.707L11.586 10 7.293 5.707a.999.999 0 111.414-1.414l5 5a.999.999 0 010 1.414l-5 5A.997.997 0 018 16z"
      fill={color}
    />
  </svg>
);

export default ChevronRight;
