import React from "react";
import s from "./FormContact.module.scss";
import { useTranslations } from "next-intl";

import { Input } from "../Input/Input";
import { Button } from "../../atoms/Button/Button";
import PaperPlane from "../../atoms/icons/PaperPlane/PaperPlane";

const FormContact: React.FC = () => {
  const t = useTranslations("contact");
  return (
    <form action="">
      <div className={s.form}>
        <div className={s.formWrapper}>
          <div className="flex gap-6 w-full">
            <Input
              label="Email"
              placeholder="Enter your email"
              variant="default"
              errorMessage="Invalid email address"
              isRequired={true}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              variant="default"
              errorMessage="Invalid email address"
            />
          </div>

          <div className="flex gap-6 w-full">
            <Input
              label="Email"
              placeholder="Enter your email"
              variant="default"
              errorMessage="Invalid email address"
              isRequired={true}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              variant="default"
              errorMessage="Invalid email address"
            />
          </div>
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
