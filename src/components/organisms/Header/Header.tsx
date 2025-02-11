import React from "react";
import { Button } from "../../atoms/Button/Button";
import { useTranslations } from "next-intl";
import s from "./Header.module.scss";
import Image from "next/image";
import Calender from "../../atoms/icons/Calender/Calender";
import Call from "../../atoms/icons/Call/Call";
import LanguageSwitcher from "../../molecules/LanguageSwitcher/LanguageSwitcher";
const Header: React.FC = () => {
  const t = useTranslations();
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Button
          variant={"outlineColor"}
          size={"xl"}
          icon={<Call />}
          className="hidden md:flex"
        >
          CONTACT
        </Button>

        <div className="w-16 md:w-[136px] md:h-[100px]">
          <Image
            src="/images/logo.png"
            alt="hero"
            width={136}
            height={100}
            priority
            className="md:ml-10 ml-0"
          />
        </div>

        <Button
          variant={"primaryOutline"}
          size={"xlIcon"}
          icon={<Calender />}
          className="flex md:hidden"
        />

        <div className="hidden md:flex gap-2 ">
          <Button variant={"primaryOutline"} size={"xl"} icon={<Calender />}>
            {t("KENNISMAKING PLANNEN")}
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
