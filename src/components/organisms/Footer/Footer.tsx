import React from "react";
import s from "./Footer.module.scss";
import Image from "next/image";
import { Button } from "../../atoms/Button/Button";
import ChevronUp from "../../atoms/icons/ChevronUp/ChevronUp";
import Whatsapp from "../../atoms/icons/Whatsapp/Whatsapp";
import Typography from "../../atoms/Typography/Typography";
import { useTranslations } from "next-intl";
import Map from "../../atoms/icons/Map/Map";

const Footer: React.FC = () => {
  const t = useTranslations("footer");
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto] gap-8 place-items-start md:place-items-center">
          <Image
            src="/images/logo-green.png"
            alt="hero"
            width={312}
            height={224}
            priority
            className="px-[52px]"
          />
          <div>
            <Typography
              variant="interTextLgMedium"
              component="h3"
              className={s.footerInformatie}
            >
              {t("Informatie")}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto] gap-3">
              <div className="rounded-lg py-3 px-4 flex items-center justify-center gap-[10px] bg-#F4FCF0] border w-fit">
                <Map color="#8AD360" />
                <Typography
                  variant="interTextXsSemibold"
                  component="p"
                  className="text-[#09182E]"
                >
                  CHOPINLAAN 10, WAALRE, 5583XV
                </Typography>
              </div>
              <div className="rounded-lg py-3 px-4 flex items-center justify-center gap-[10px] bg-#F4FCF0] border w-fit">
                <Map color="#8AD360" />
                <Typography
                  variant="interTextXsSemibold"
                  component="p"
                  className="text-[#09182E]"
                >
                  STEFANIE VAN BOEKEL
                </Typography>
              </div>
              <div className="rounded-lg py-3 px-4 flex items-center justify-center gap-[10px] bg-#F4FCF0] border w-fit">
                <Map color="#8AD360" />
                <Typography
                  variant="interTextXsSemibold"
                  component="p"
                  className="text-[#09182E]"
                >
                  +31(0) 6 5246 8481
                </Typography>
              </div>
              <div className="rounded-lg py-3 px-4 flex items-center justify-center gap-[10px] bg-#F4FCF0] border w-fit">
                <Map color="#8AD360" />
                <Typography
                  variant="interTextXsSemibold"
                  component="p"
                  className="text-[#09182E]"
                >
                  STEAFBUE@COACHING.COM
                </Typography>
              </div>
            </div>
          </div>
          <div className="absolute right-4 md:static mt-4 md:mt-0">
            <Button
              size="xlIcon"
              variant="outlineGray"
              icon={<ChevronUp color="transparent" />}
            />
            <Button
              size="xlIcon"
              variant="outlineGray"
              icon={<Whatsapp color="white" />}
              className="mt-2 md:mt-0 static md:fixed md:bottom-[85px] bottom-[400px] z-50 bg-gradient-to-b from-[#61FD7D] to-[#2BB826] border-white"
            />
          </div>
        </div>
      </div>
      <div className={s.footerBottom}>
        <Typography
          variant="interTextSmRegular"
          component="h3"
          className="text-white"
        >
          {t("title")}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
