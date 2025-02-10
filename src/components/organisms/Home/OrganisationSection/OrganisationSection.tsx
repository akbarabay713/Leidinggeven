import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./OrganisationSection.module.scss";
import Image from "next/image";

const OrganisationSection: React.FC = () => {
  const t = useTranslations();

  return (
    <section className={s.organisation}>
      <div className={s.organisationContainer}>
        <Typography
          variant="futuraH3Bold"
          component="h2"
          className={s.organisationTitle}
        >
          {t.rich("organisation.title", {
            span: (chunks) => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </Typography>

        <div className="grid grid-cols-2 gap-8 place-items-center justify-items-center">
          <Typography
            variant="interTextXxlMedium"
            component="h3"
            className={s.organisationSubtitle}
          >
            {t.rich("organisation.subtitle", {
              span: (chunks) => <span>{chunks}</span>,
              br: () => <br />,
            })}
          </Typography>
          <Image
            src="/images/organisation.png"
            alt="hero"
            width={628}
            height={371}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default OrganisationSection;
