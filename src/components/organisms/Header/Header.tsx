import React from "react";
import { Button } from "../../atoms/Button/Button";
import { useTranslations } from "next-intl";
import s from "./Header.module.scss";
import Image from "next/image";
import Calender from "../../atoms/icons/Calender/Calender";
import Call from "../../atoms/icons/Call/Call";
const Header: React.FC = () => {
  const t = useTranslations();
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Button variant={"outlineColor"} size={"xl"} icon={<Call />}>
          CONTACT
        </Button>

        <Image
          src="/images/logo.png"
          alt="hero"
          width={136}
          height={100}
          priority
        />

        <div className="flex gap-2">
          <Button variant={"primaryOutline"} size={"xl"} icon={<Calender />}>
            {t("KENNISMAKING PLANNEN")}
          </Button>
          <Button variant={"primaryOutline"} size={"xl"}>
            {t("lang")}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
