import React, { type HTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { TTypographyComponent } from "./types";
import cn from "classnames";
import styles from "./Typography.module.scss";

const typographyVariants = cva("", {
  variants: {
    variant: {
      futuraH1Medium: styles.futuraH1Medium,
      futuraH1Bold: styles.futuraH1Bold,
      futuraH2Medium: styles.futuraH2Medium,
      futuraH2Bold: styles.futuraH2Bold,
      futuraH3Medium: styles.futuraH3Medium,
      futuraH3Bold: styles.futuraH3Bold,
      futuraH4Medium: styles.futuraH4Medium,
      futuraH4Bold: styles.futuraH4Bold,
      futuraH5Medium: styles.futuraH5Medium,
      futuraH5Bold: styles.futuraH5Bold,
      futuraH6Medium: styles.futuraH6Medium,
      futuraH6Bold: styles.futuraH6Bold,
      futuraButtonSmall: styles.futuraButtonSmall,
      futuraButtonLarge: styles.futuraButtonLarge,
      futuraH7Medium: styles.futuraH7Medium,
      interTextXxlRegular: styles.interTextXxlRegular,
      interTextXxlMedium: styles.interTextXxlMedium,
      interTextXlRegular: styles.interTextXlRegular,
      interTextXlMedium: styles.interTextXlMedium,
      interTextXlSemibold: styles.interTextXlSemibold,
      interTextXlBold: styles.interTextXlBold,
      interTextLgRegular: styles.interTextLgRegular,
      interTextLgMedium: styles.interTextLgMedium,
      interTextLgSemibold: styles.interTextLgSemibold,
      interTextLgBold: styles.interTextLgBold,
      interTextMdBaseRegular: styles.interTextMdBaseRegular,
      interTextMdBaseMedium: styles.interTextMdBaseMedium,
    },
  },
  defaultVariants: {
    variant: "futuraH1Medium",
  },
});

interface ITypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  children?: ReactNode;
  component?: TTypographyComponent;
  variant: String;
}

const Typography: React.FC<ITypographyProps> = ({
  children,
  className,
  component = "p",
  variant,
  style,
  ...props
}) => {
  return React.createElement(
    component,
    {
      ...props,
      className: cn(typographyVariants({ variant }), className),
      style: { ...style },
    },
    children
  );
};

export default Typography;
