import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./TrainingTemplate.module.scss";
import { Button } from "@/src/components/atoms/Button/Button";
import Call from "@/src/components/atoms/icons/Call/Call";

const TrainingTemplate: React.FC = () => {
  const t = useTranslations('training');

  return (
    <section className={s.training}>
      <div className={s.trainingContainer}>
        <Typography
          variant="futuraH3Bold"
          component="h2"
          className={s.trainingTitle}
        >
          {t.rich("title", {
              span: (chunks) => <span>{chunks}</span>,
              br: () => <br />,
            })} 
        </Typography>

        <Typography
          variant="interTextLgRegular"
          component="h3"
          className={s.trainingSubtitle}
        >
          {t(
            "subtitle"
          )}
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
    </section>
  );
};

export default TrainingTemplate;
