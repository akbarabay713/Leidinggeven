"use client";
import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./BenefitSection.module.scss";
import { Button } from "@/src/components/atoms/Button/Button";
import CardBenefit from "@/src/components/molecules/CardBenefit/CardBenefit";
import { BENEFIT } from "@/src/constants/benefit";
import Calender from "@/src/components/atoms/icons/Calender/Calender";
import { openModal } from "@/src/stores/slices/modalSlice";
import { useAppDispatch } from "@/src/stores/hooks";

const BenefitSection: React.FC = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  return (
    <section className={s.benefit}>
      <div className={s.benefitContainer}>
        <Typography
          variant="futuraH3Bold"
          component="h2"
          className={s.benefitTitle}
        >
          {t.rich("benefit title", {
            span: (chunks) => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </Typography>

        <div>
          <div className="flex flex-col gap-6 pl-4 md:pl-0">
            {BENEFIT.map((b, i) => (
              <CardBenefit
                title={t(b.title)}
                subtitle={t(b.subtitle)}
                key={i}
              />
            ))}
          </div>

          <Typography
            variant="interTextLgRegular"
            component="p"
            className={s.benefitSubtitle}
          >
            {t("benefit subtitle")}
          </Typography>
          <Button
            size={"xl"}
            variant={"primary"}
            icon={<Calender />}
            iconPosition="left"
            onClick={() => dispatch(openModal("ModalOntvang"))}
          >
            {t("KENNISMAKING PLANNEN")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
