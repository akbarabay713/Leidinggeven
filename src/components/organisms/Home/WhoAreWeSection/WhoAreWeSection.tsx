import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./WhoAreWeSection.module.scss";
import CardWhoAreWe from "@/src/components/molecules/CardWhoAreWe/CardWhoAreWe";
import { WHOAREWE } from "@/src/constants/WhoAreWe";

const WhoAreWeSection: React.FC = () => {
  const t = useTranslations("whoAreWe");

  return (
    <section className={s.whoAreWe}>
      <div className={s.whoAreWeContainer}>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
          <Typography
            variant="futuraH3Bold"
            component="h2"
            className={s.whoAreWeTitle}
          >
            {t.rich("title", {
              span: (chunks) => <span>{chunks}</span>,
              br: () => <br />,
            })}
          </Typography>

          <Typography
            variant="interTextLgRegular"
            component="h3"
            className={s.whoAreWeSubtitle}
          >
            {t("subtitle")}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <CardWhoAreWe text={WHOAREWE[0].text} styles={WHOAREWE[0].styles} />
          <CardWhoAreWe text={WHOAREWE[1].text} styles={WHOAREWE[1].styles} />
          <CardWhoAreWe text={WHOAREWE[2].text} styles={WHOAREWE[2].styles} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CardWhoAreWe text={WHOAREWE[3].text} styles={WHOAREWE[3].styles} />
          <CardWhoAreWe text={WHOAREWE[4].text} styles={WHOAREWE[4].styles} />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeSection;
