import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./TrainingTemplate.module.scss";
import { Button } from "@/src/components/atoms/Button/Button";
import Call from "@/src/components/atoms/icons/Call/Call";

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
          {t("TRAINING")} <br />
          <Typography component="span" variant="futuraH3Bold">
            {t("GEBASEERD OP EEN KRACHTIGE 8-STAPPENMODEL")}
          </Typography>
        </Typography>

        <Typography
          variant="interTextLgRegular"
          component="h3"
          className={s.trainingSubtitle}
        >
          {t(
            "Wij helpen leiders van alle niveaus om de principes uit Leidinggeven met en Zonder Ego in de praktijk te brengen We leren je leidinggeven op de gulde middenweg van controle en loslaten Je leert op een diep niveau wisselen tussen directief en dienstbaar leidinggeven, waardoor je dat gaat doen wat nodig is om een team naar duurzame prestaties te leiden Ben jij klaar om de volgende stap te zetten in je leiderschap en jezelf uit te dagen?"
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
