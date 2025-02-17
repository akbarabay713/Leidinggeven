import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./LeadershipTipsSection.module.scss";
import Image from "next/image";
import { Button } from "@/src/components/atoms/Button/Button";

const LeadershipTipsSection: React.FC = () => {
  const t = useTranslations();

  return (
    <section className={s.leadershipTips}>
      <div className={s.leadershipTipsContainer}>
        <div className="mt-14 z-10 relative">
          <Typography
            variant="futuraH3Bold"
            component="h2"
            className={s.leadershipTipsTitle}
          >
            {t.rich("leadershipTips title", {
              span: (chunks) => <span>{chunks}</span>,
              br: () => <br />,
            })}
          </Typography>

          <Typography
            variant="interTextXlRegular"
            component="h3"
            className={s.leadershipTipsSubtitle}
          >
            {t("leadershipTips subtitle")}
          </Typography>
          <Button variant={"primaryOutline"} size={"xl"}>
            {t("AANMELDEN")}
          </Button>
        </div>

        <Image
          src="/images/book.png"
          alt="hero"
          width={691}
          height={629}
          priority
          className="md:mt-10 -mt-20"
        />
      </div>
      <div className="w-[100%] h-[100px] absolute bottom-0 z-[1]">
        <Image
          src="/images/ego.png"
          alt="hero"
          // fill
          priority
          quality={100}
          width={800}
          height={800}
          className="w-full "
        />
      </div>
      <div className="w-[100%] h-[100px] absolute top-0 z-[1]">
        <Image
          src="/images/ego.png"
          alt="hero"
          // fill
          priority
          quality={100}
          width={800}
          height={800}
          className="w-full "
        />
      </div>
    </section>
  );
};

export default LeadershipTipsSection;
