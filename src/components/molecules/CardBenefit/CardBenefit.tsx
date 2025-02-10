import React from "react";
import s from "./CardBenefit.module.scss";
// import Calender from "../../atoms/icons/Calender/Calender";
// import { Button } from "../../atoms/Button/Button";
import Typography from "../../atoms/Typography/Typography";
import Star from "../../atoms/icons/Star/Star";
interface IProps {
  title: string;
  subtitle: string;
}

const CardBenefit: React.FC<IProps> = ({ title, subtitle }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.icon}>
        <Star />
      </div>
      <Typography variant="futuraH6Medium" component="h3">
        {title}
      </Typography>
      <Typography variant="interTextMdBaseMedium" component="h3">
        {subtitle}
      </Typography>
    </div>
  );
};

export default CardBenefit;
