import React from "react";
import s from "./FormContact.module.scss";
import { useTranslations } from "next-intl";

import { Input } from "../Input/Input";
import { Button } from "../../atoms/Button/Button";
import PaperPlane from "../../atoms/icons/PaperPlane/PaperPlane";
import { Textarea } from "../Textarea/Textarea";
import { Checkbox } from "../Checkbox/Checkbox";

const FormContact: React.FC = () => {
  const t = useTranslations("contact");
  return (
    <form action="">
      <div className={s.form}>
        <div className={s.formWrapper}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Input
              label="Email"
              placeholder="typ hier"
              variant="default"
              isRequired={true}
              size="md"
            />
            <Input
              label="Bedrijfnaam"
              placeholder="typ hier"
              variant="default"
              size="md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-4">
            <Input
              label="Email-adres"
              placeholder="typ hier"
              variant="default"
              isRequired={true}
              size="md"
            />
            <Input
              label="Telefoonnummer"
              placeholder="typ hier"
              variant="default"
              size="md"
              isRequired={true}
            />
          </div>
          <Textarea
            label="Bericht"
            placeholder="typ hier"
            variant="default"
            isRequired={true}
            className="mb-4"
          />
          <Checkbox
            label="Ja, ik ga er mee akkoord om af en toe emails te ontvangen met gratis tips en leuke updates."
            variant="default"
            className="text-[#667085] flex items-center gap-4"
            id="checkbox"
          />
        </div>
        <div className={s.formFooter}>
          <Button
            variant={"primary"}
            size={"md"}
            icon={<PaperPlane />}
            iconPosition="right"
          >
            {t("VERSTUREN")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormContact;
