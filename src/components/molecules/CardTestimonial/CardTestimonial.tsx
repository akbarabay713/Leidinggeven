// import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
// import { useTranslations } from "next-intl";
import s from "./CardTestimonial.module.scss";
import Typography from "@/src/components/atoms/Typography/Typography";
import Linkedin from "../../atoms/icons/Linkedin/Linkedin";

const CardTesimonial: React.FC = () => {
  //   const t = useTranslations();
  return (
    <div className={s.card}>
      <p className={s.name}>MARK</p>
      <div className={s.wrapper}>
        <p className={s.companyName}>Operations Manager</p>
        <div className={s.divider} />
        <p className={s.companyName}> Reelcoe Agency</p>
      </div>
      <Typography variant="interTextXxlRegular" component="h3">
        &quot;De training heeft me nieuwe inzichten gegeven in hoe ik mijn team
        beter kan aansturen. Vooral de focus op actieve communicatie en empathie
        heeft mijn stijl sterk verbeterd. Ik zie nu al positieve veranderingen
        in de samenwerking.&quot;
      </Typography>
      <Linkedin color="#133563" size={40} />
    </div>
  );
};

export default CardTesimonial;
