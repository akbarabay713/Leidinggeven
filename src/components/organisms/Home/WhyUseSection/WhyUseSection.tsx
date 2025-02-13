"use client";
import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./WhyUseSection.module.scss";
import { WHYUS } from "@/src/constants/WyyUs";
import Badge from "@/src/components/molecules/Badge/Badge";
import Swipers from "@/src/components/molecules/Swipers/Swipers";

const WhyUseSection: React.FC = () => {
  const t = useTranslations();

  return (
    <section className={s.whyUs}>
      <div className={s.whyUsContainer}>
        <Typography
          variant="futuraH3Bold"
          component="h2"
          className={s.whyUsTitle}
        >
          {t.rich("whyUse title", {
            span: (chunks) => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </Typography>

        <Typography
          variant="interTextXlRegular"
          component="h3"
          className={s.whyUsSubtitle}
        >
          {t("whyUse subtitle")}
        </Typography>

        <div className="hidden md:flex gap-4 flex-wrap items-center justify-center">
          {WHYUS.map((item, index) => (
            <Badge text={t(item)} key={index} />
          ))}
        </div>
        <Swipers />
      </div>
    </section>
  );
};

export default WhyUseSection;
