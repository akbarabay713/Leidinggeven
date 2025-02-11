import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./AreYouReadySection.module.scss";
import Image from "next/image";
import { Button } from "@/src/components/atoms/Button/Button";

const AreYouReadySection: React.FC = () => {
  const t = useTranslations("areYouReady");

  return (
    <section className={s.areYouReady}>
      <div className={s.areYouReadyContainer}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-start justify-items-center">
          <Image
            src="/images/areyouready.png"
            alt="hero"
            width={609}
            height={615}
            priority
          />

          <div>
            <Typography
              variant="futuraH3Bold"
              component="h2"
              className={s.areYouReadyTitle}
            >
              {t.rich("title", {
                span: (chunks) => <span>{chunks}</span>,
                br: () => <br />,
              })}
            </Typography>
            <Typography
              variant="interTextLgRegular"
              component="h3"
              className={s.areYouReadySubtitle}
            >
              {t.rich("subtitle", {
                span: (chunks) => <span>{chunks}</span>,
                br: () => <br />,
              })}
            </Typography>

            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              <Button variant={"primary"} size={"xl"}>
                {t("TERUGBELVERZOEK")}
              </Button>
              <Button variant={"outlineColor"} size={"xl"}>
                {t("KENNISMAKING PLANNEN")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreYouReadySection;
