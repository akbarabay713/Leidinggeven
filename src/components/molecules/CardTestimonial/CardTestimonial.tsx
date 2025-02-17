import React from "react";
import { useTranslations } from "next-intl";
import s from "./CardTestimonial.module.scss";
import Typography from "@/src/components/atoms/Typography/Typography";
import Linkedin from "../../atoms/icons/Linkedin/Linkedin";

interface IProps {
  name: string;
  position: string;
  company: string;
  desc: string;
}
interface IData {
  data: IProps;
}

const CardTestimonial: React.FC<IData> = ({ data }) => {
  const t = useTranslations();
  const { name, position, company, desc } = data;

  return (
    <div className={s.card}>
      <p className={s.name}>{name}</p>
      <div className={s.wrapper}>
        <p className={s.companyName}>{position}</p>
        <div className={s.divider} />
        <p className={s.companyName}>{company}</p>
      </div>
      <Typography variant="interTextXxlRegular" component="h3">
        &quot;{t(desc)}&quot;
      </Typography>
      <Linkedin color="#133563" size={40} />
    </div>
  );
};

export default CardTestimonial;
