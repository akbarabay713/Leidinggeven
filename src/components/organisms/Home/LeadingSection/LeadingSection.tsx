import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./LeadingSection.module.scss";
import Image from "next/image";
import { Button } from "@/src/components/atoms/Button/Button";

const LeadingSection: React.FC = () => {
  const t = useTranslations();

  return (
    <section className={s.leading}>
      <div className={s.leadingContainer}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center justify-items-center">
          <Image
            src="/images/leading.png"
            alt="hero"
            width={720}
            height={648}
            priority
          />
          <div>
            <Typography
              variant="futuraH3Bold"
              component="h2"
              className={s.leadingTitle}
            >
              {t.rich("leading title", {
                span: (chunks) => <span>{chunks}</span>,
                br: () => <br />,
              })}
              <br />
              <Typography variant="futuraH3Bold" component="span">
                {t.rich("leading span", {
                  span: (chunks) => <span>{chunks}</span>,
                  br: () => <br />,
                })}
              </Typography>
            </Typography>
            <Typography
              variant="interTextXxlMedium"
              component="h3"
              className={s.leadingSubtitle}
            >
              {t.rich("leading subtitle", {
                span: (chunks) => <span>{chunks}</span>,
                br: () => <br />,
              })}
            </Typography>
            <div className="flex gap-4 mt-8">
              <Button variant={"primary"} size={"xl"}>
                {t("INSCHRIJVEN")}
              </Button>
              <Button variant={"primaryOutline"} size={"xl"}>
                {t("KENNISMAKEN")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingSection;
