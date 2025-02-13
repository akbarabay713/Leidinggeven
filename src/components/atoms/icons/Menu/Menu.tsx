import * as React from "react";
import { IIconProps } from "@/src/types/icon";

const Menu: React.FC<IIconProps> = ({
  color = "currentColor",
  size = 20,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill={color}
    {...props}
  >
    <path
      d="M2.5 5.83203H17.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M2.5 10H17.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M2.5 14.168H17.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Menu;
