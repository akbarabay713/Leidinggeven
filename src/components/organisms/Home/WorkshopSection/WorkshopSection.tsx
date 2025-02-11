import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./WorkshopSection.module.scss";
import { WORKSHOP } from "@/src/constants/Workshops";
import CardWorkshop from "@/src/components/molecules/CardWorkshop/CardWorkshop";
import Divider from "@/src/components/atoms/Divider/Divider";
const WorkshopSection: React.FC = () => {
  const t = useTranslations("workshop");

  return (
    <section className={s.workshop}>
      <div className={s.workshopContainer}>
        <Typography
          variant="futuraH3Bold"
          component="h2"
          className={s.workshopTitle}
        >
          {t.rich("title", {
            span: (chunks) => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </Typography>

        <Typography
          variant="interTextLgRegular"
          component="h3"
          className={s.workshopSubtitle}
        >
          {t("subtitle")}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[60px]">
          {WORKSHOP.map((i, index) => (
            <CardWorkshop
              key={index}
              title={i.title}
              detail={i.detail}
              style={i.style}
              part={i.part}
            />
          ))}
        </div>
        <Divider className="mb-4" />
      </div>
    </section>
  );
};

export default WorkshopSection;
