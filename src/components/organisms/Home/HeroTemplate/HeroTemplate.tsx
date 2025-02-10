import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./HeroTemplate.module.scss";
import { Button } from "@/src/components/atoms/Button/Button";
import Image from "next/image";
import cn from "classnames";
import Call from "@/src/components/atoms/icons/Call/Call";
import Calender from "@/src/components/atoms/icons/Calender/Calender";

const HeroTemplate: React.FC = () => {
  const t = useTranslations("hero");
  return (
    <section className={s.hero}>
      <div className={cn(s.heroContainer)}>
        <div className="z-20 relative">
          <Typography
            variant="futuraH1Bold"
            component="h1"
            className={s.heroTitle}
          >
            {t.rich("title", {
              span: (chunks) => <span>{chunks}</span>,
              br: () => <br />,
            })}
          </Typography>
          <Typography
            variant="futuraH5Medium"
            component="h2"
            className={s.heroSubtitle}
          >
            {t("subtitle")}
          </Typography>

          <div className={s.heroButtons}>
            <Button variant={"primaryOutline"} size={"xl"} icon={<Calender />}>
              {t("KENNISMAKING PLANNEN")}
            </Button>
            <Button variant={"outlineColor"} size={"xl"} icon={<Call />}>
              CONTACT
            </Button>
          </div>
        </div>

        <div className={cn(s.heroImg, "z-10")}>
          <Image
            src="/images/hero.png"
            alt="hero"
            width={853.934}
            height={760.893}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroTemplate;
