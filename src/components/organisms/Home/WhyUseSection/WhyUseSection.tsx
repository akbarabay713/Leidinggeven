import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./WhyUseSection.module.scss";
import { WHYUS } from "@/src/constants/WyyUs";
import Badge from "@/src/components/molecules/Badge/Badge";
const WhyUseSection: React.FC = () => {
  const t = useTranslations("whyUse");

  return (
    <section className={s.whyUs}>
      <div className={s.whyUsContainer}>
        <Typography
          variant="futuraH3Bold"
          component="h2"
          className={s.whyUsTitle}
        >
          {t.rich("title", {
            span: (chunks) => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </Typography>

        <Typography
          variant="interTextXlRegular"
          component="h3"
          className={s.whyUsSubtitle}
        >
          {t("subtitle")}
        </Typography>

        <div className="flex gap-4 flex-wrap items-center justify-center">
          {WHYUS.map((item, index) => (
            <Badge text={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUseSection;
