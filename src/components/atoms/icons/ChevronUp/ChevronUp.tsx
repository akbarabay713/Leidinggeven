import * as React from "react";
import { IIconProps } from "@/src/types/icon";

const ChevronUp: React.FC<IIconProps> = ({
  color = "currentColor",
  size = 20,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
    fill={color}
    width={size}
    height={size}
    {...props}
  >
    <path
      d="M6 14.4998L11.2929 9.20696C11.6834 8.81643 12.3166 8.81643 12.7071 9.20696L18 14.4998"
      stroke="#667085"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default ChevronUp;
