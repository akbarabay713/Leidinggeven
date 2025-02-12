import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./ChallengesSection.module.scss";
import { Button } from "@/src/components/atoms/Button/Button";
import cn from "classnames";
import Image from "next/image";
// interface ChallengesTemplateProps {
//   title: string;
//   subtitle: string;
//   ctaText: string;
//   onCtaClick: () => void;
// }

const ChallengesSection: React.FC = () => {
  const t = useTranslations("challenge");

  return (
    <section className={s.challenges}>
      <div className={cn(s.challengesContainer)}>
        <Typography
          variant="futuraH3Bold"
          component="h2"
          className={s.challengesTitle}
        >
          {t.rich("title", {
            br: () => <br />,
          })}
        </Typography>

        <ul>
          <li>
            <Typography variant="interTextLgRegular" component="p">
              {t("Heb je het gevoel dat je sterk moet zijn voor je team?")}
            </Typography>
          </li>
          <li>
            <Typography variant="interTextLgRegular" component="p">
              {t("Pas jij je gedrag aan uit angst voor afwijzing?")}
            </Typography>
          </li>
          <li>
            <Typography variant="interTextLgRegular" component="p">
              {t(
                "Doe je wat je baas van je verwacht en luister je niet naar je eigen inzichten?"
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="interTextLgRegular" component="p">
              {t("Vertrouw je in moeilijke situaties op rationeel denken?")}
            </Typography>
          </li>
          <li>
            <Typography variant="interTextLgRegular" component="p">
              {t("Voel je weerstand of sabotage binnen je team?")}
            </Typography>
          </li>
          <li>
            <Typography variant="interTextLgRegular" component="p">
              {t(
                "Zijn jouw afdelingen meer bezig met hun eigen resultaten dan met het grotere geheel?"
              )}
            </Typography>
          </li>
        </ul>

        <Typography variant="interTextLgRegular" component="p">
          {t("Dan passen onze lezingen en trainingen bij jou!")}
        </Typography>

        <Button variant={"primary"} size={"md"}>
          {t("INSCHRIJVEN")}
        </Button>
      </div>
      <div className="w-[2116px] h-[329px] absolute -bottom-40 z-[1]">
        <Image
          src="/images/leiding.png"
          alt="hero"
          fill
          priority
          quality={100}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default ChallengesSection;
