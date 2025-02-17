import * as React from "react";
import { IIconProps } from "@/src/types/icon";

const Sms: React.FC<IIconProps> = ({
  color = "currentColor",
  size = 20,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 19"
    fill="none"
    {...props}
  >
    <path
      d="M16 18H6C3 18 1 16.5 1 13V6C1 2.5 3 1 6 1H16C19 1 21 2.5 21 6V13C21 16.5 19 18 16 18Z"
      fill={color}
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M16 6.5L12.87 9C11.84 9.82 10.15 9.82 9.12 9L6 6.5" fill={color} />
    <path
      d="M16 6.5L12.87 9C11.84 9.82 10.15 9.82 9.12 9L6 6.5"
      stroke="white"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Sms;
