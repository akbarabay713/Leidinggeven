"use client";
import React, { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { useTranslations } from "next-intl";
import s from "./Header.module.scss";
import Image from "next/image";
import Calender from "../../atoms/icons/Calender/Calender";
import Call from "../../atoms/icons/Call/Call";
import LanguageSwitcher from "../../molecules/LanguageSwitcher/LanguageSwitcher";
import Drawer from "../../molecules/Drawer/Drawer";
import Menu from "../../atoms/icons/Menu/Menu";
const Header: React.FC = () => {
  const t = useTranslations();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
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

        <div className="w-20 h-20 md:w-[136px] md:h-[100px] relative">
          <Image
            src="/images/logo.png"
            alt="hero"
            priority
            width={136}
            height={100}
            sizes="(max-width: 768px) 100%"
            className="lg:ml-10 ml-0 object-contain"
          />
        </div>
        {/* hamburger menu */}
        <Button
          variant={"primary"}
          size={"xlIcon"}
          icon={<Menu size={40} />}
          className="flex lg:hidden"
          onClick={toggleDrawer}
        />

        <div className="hidden lg:flex gap-2 ">
          <Button variant={"primaryOutline"} size={"xl"} icon={<Calender />}>
            {t("KENNISMAKING PLANNEN")}
          </Button>
          <LanguageSwitcher />
        </div>
      </div>

      <Drawer isOpen={drawerOpen} onClose={toggleDrawer}>
        <Button variant={"primaryOutline"} size={"xl"}>
          {t("KENNISMAKING PLANNEN")}
        </Button>
        <LanguageSwitcher />
      </Drawer>
    </header>
  );
};

export default Header;
