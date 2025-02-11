import React from "react";
import s from "./CardWorkshop.module.scss";
import Typography from "../../atoms/Typography/Typography";
import cn from "classnames";

interface IStyles {
  bgColor: string;
  partColor: string;
  detailColor: string;
}
interface IProps {
  title: string;
  part: string;
  detail: string[];
  style: IStyles[];
}

const CardWorkshop: React.FC<IProps> = ({ title, detail, part, style }) => {
  return (
    <div
      className={cn(s.wrapper)}
      style={{ backgroundColor: style[0].bgColor }}
    >
      <Typography
        variant="interTextMdBaseMedium"
        component="h3"
        style={{ color: style[0].partColor }}
      >
        {part}
      </Typography>
      <Typography
        variant="futuraH7Medium"
        component="h4"
        style={{ color: style[0].partColor }}
      >
        {title}
      </Typography>
      <ol className="ml-5" style={{ color: style[0].detailColor }}>
        {detail?.map((item, index) => (
          <li key={index}>
            <Typography variant="interTextSmRegular" component="h5">
              {item}
            </Typography>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CardWorkshop;
