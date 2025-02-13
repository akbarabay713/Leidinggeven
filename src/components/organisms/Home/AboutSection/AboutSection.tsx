import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./AboutSection.module.scss";
import Image from "next/image";
import Linkedin from "@/src/components/atoms/icons/Linkedin/Linkedin";

const AboutSection: React.FC = () => {
  const t = useTranslations();

  return (
    <section className={s.about}>
      <div className={s.aboutContainer}>
        <div className="flex items-center justify-between mb-16 flex-wrap md:flex-nowrap">
          <Typography
            variant="futuraH3Bold"
            component="h2"
            className={s.aboutTitle}
          >
            {t.rich("about title", {
              span: (chunks) => <span>{chunks}</span>,
              br: () => <br />,
            })}
          </Typography>

          <Image
            src="/images/book-small.png"
            alt="hero"
            width={269}
            height={316}
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p>{t("Geschreven door:")}</p>
            <div className="flex gap-6 flex-col pr-12 border-r border-[#3A5A28]">
              <div className="flex items-center justify-between">
                <Typography
                  variant="futuraH4Bold"
                  component="h3"
                  className={s.aboutNames}
                >
                  PAUL VAN SCHAIK
                </Typography>
                <Linkedin color="white" size={32} />
              </div>
              <div className="flex items-center justify-between">
                <Typography
                  variant="futuraH4Bold"
                  component="h4"
                  className={s.aboutNames}
                >
                  ALFRED SCHMITS
                </Typography>
                <Linkedin color="white" size={32} />
              </div>
              <div className="flex items-center justify-between">
                <Typography
                  variant="futuraH4Bold"
                  component="h4"
                  className={s.aboutNames}
                >
                  DENNIS STOUT
                </Typography>
                <Linkedin color="white" size={32} />
              </div>
            </div>
          </div>

          <Typography variant="interTextLgRegular" component="h3">
            {t.rich("about subtitle", {
              span: (chunks) => <span>{chunks}</span>,
              br: () => <br />,
            })}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
