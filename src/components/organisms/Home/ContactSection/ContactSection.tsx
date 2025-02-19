import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./ContactSection.module.scss";
import FormContact from "@/src/components/molecules/FormContact/FormContact";

const ContactSection: React.FC = () => {
  const t = useTranslations();

  return (
    <section className={s.contact} id="contact">
      <div className={s.contactContainer}>
        <Typography
          variant="futuraH3Bold"
          component="h2"
          className={s.contactTitle}
        >
          {t.rich("contact title", {
            span: (chunks) => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </Typography>
        <Typography
          variant="interTextLgRegular"
          component="h3"
          className={s.contactSubtitle}
        >
          {t.rich("contact subtitle", {
            span: (chunks) => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </Typography>

        <FormContact />
      </div>
    </section>
  );
};

export default ContactSection;
