import * as React from "react";
import { IIconProps } from "@/src/types/icon";

const CloseCircle: React.FC<IIconProps> = ({
  color = "currentColor",
  size = 20,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM7.403 7.403a1 1 0 0 1 1.414 0L12 10.586l3.183-3.183a1 1 0 1 1 1.414 1.414L13.414 12l3.183 3.183a1 1 0 0 1-1.414 1.414L12 13.414l-3.183 3.183a1 1 0 0 1-1.414-1.414L10.586 12 7.403 8.817a1 1 0 0 1 0-1.414z"
      fill={color}
    />
  </svg>
);

export default CloseCircle;
