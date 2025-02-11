import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./LeadershipTipsSection.module.scss";
import Image from "next/image";
import { Button } from "@/src/components/atoms/Button/Button";

const LeadershipTipsSection: React.FC = () => {
  const t = useTranslations("leadershipTips");

  return (
    <section className={s.leadershipTips}>
      <div className={s.leadershipTipsContainer}>
        <div>
          <Typography
            variant="futuraH3Bold"
            component="h2"
            className={s.leadershipTipsTitle}
          >
            {t.rich("title", {
              span: (chunks) => <span>{chunks}</span>,
              br: () => <br />,
            })}
          </Typography>

          <Typography
            variant="interTextXlRegular"
            component="h3"
            className={s.leadershipTipsSubtitle}
          >
            {t("subtitle")}
          </Typography>
          <Button variant={"outlineColor"} size={"xl"}>
            {t("AANMELDEN")}
          </Button>
        </div>

        <Image
          src="/images/book.png"
          alt="hero"
          width={691}
          height={629}
          priority
          className="mt-10"
        />
      </div>
    </section>
  );
};

export default LeadershipTipsSection;
