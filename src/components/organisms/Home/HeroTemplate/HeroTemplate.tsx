"use client";
import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./HeroTemplate.module.scss";
import { Button } from "@/src/components/atoms/Button/Button";
import Image from "next/image";
import cn from "classnames";
import Call from "@/src/components/atoms/icons/Call/Call";
import Calender from "@/src/components/atoms/icons/Calender/Calender";

import { useAppDispatch, useAppSelector } from "@/src/stores/hooks";
import { openModal } from "@/src/stores/slices/modalSlice";
import { useUsers } from "@/src/hooks/useFetchUser";

const ModalContact: React.FC = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const { data } = useUsers();
  const users = useAppSelector((state) => state.user.users);
  // console.log(data, users);
  return (
    <section className={s.hero}>
      <div className={cn(s.heroContainer)}>
        <div className="z-20 relative">
          <Typography
            variant="futuraH1Bold"
            component="h1"
            className={s.heroTitle}
          >
            {t.rich("hero title", {
              span: (chunks) => <span>{chunks}</span>,
              br: () => <br />,
            })}
          </Typography>
          <Typography
            variant="futuraH5Medium"
            component="h2"
            className={s.heroSubtitle}
          >
            {t.rich("hero subtitle", {
              br: () => <br />,
            })}
          </Typography>

          <div className={s.heroButtons}>
            <Button
              variant={"primaryOutline"}
              size={"xl"}
              icon={<Calender />}
              onClick={() => dispatch(openModal("ModalOntvang"))}
            >
              {t("KENNISMAKING PLANNEN")}
            </Button>
            <Button
              variant={"outlineColor"}
              size={"xl"}
              icon={<Call />}
              onClick={() => dispatch(openModal("ModalContact"))}
            >
              CONTACT
            </Button>
          </div>
        </div>

        <div className={cn(s.heroImg)}>
          <Image
            src="/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            priority
            quality={100}
          />
        </div>
      </div>
      <div className="w-[2116px] h-[329px] absolute -bottom-40 z-[1]">
        <Image
          src="/images/leiding.png"
          alt="hero"
          // fill
          priority
          quality={100}
          width={2116}
          height={329}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default ModalContact;
