import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./LeadingSection.module.scss";
import Image from "next/image";

const LeadingSection: React.FC = () => {
  const t = useTranslations();

  return (
    <section className={s.leading}>
      <div className={s.leadingContainer}>
        <Typography
          variant="futuraH3Bold"
          component="h2"
          className={s.leadingTitle}
        >
          {t.rich("leading.title", {
            span: (chunks) => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center justify-items-center">
          <Image
            src="/images/leading.png"
            alt="hero"
            width={620}
            height={548}
            priority
          />
          <Typography
            variant="interTextXxlMedium"
            component="h3"
            className={s.leadingSubtitle}
          >
            {t.rich("leading.subtitle", {
              span: (chunks) => <span>{chunks}</span>,
              br: () => <br />,
            })}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default LeadingSection;
