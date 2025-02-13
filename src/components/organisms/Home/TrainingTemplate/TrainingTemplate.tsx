import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./TrainingTemplate.module.scss";
import { Button } from "@/src/components/atoms/Button/Button";
import Call from "@/src/components/atoms/icons/Call/Call";
import Image from "next/image";

const TrainingTemplate: React.FC = () => {
  const t = useTranslations();

  return (
    <section className={s.training}>
      <div className={s.trainingContainer}>
        <Typography
          variant="futuraH3Bold"
          component="h2"
          className={s.trainingTitle}
        >
          {t.rich("training title", {
            span: (chunks) => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </Typography>

        <Typography
          variant="interTextLgRegular"
          component="h3"
          className={s.trainingSubtitle}
        >
          {t("training subtitle")}
        </Typography>

        <Button
          size={"md"}
          variant={"primary"}
          icon={<Call />}
          iconPosition="left"
        >
          CONTACT
        </Button>
      </div>
      <div className="w-[2116px] h-[329px] absolute -bottom-44 z-[1]">
        <Image
          src="/images/leiding.png"
          alt="hero"
          // fill
          priority
          quality={100}
          width={2116}
          height={329}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default TrainingTemplate;
