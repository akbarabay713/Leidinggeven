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
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto] gap-8">
          {/* <div className="flex gap-8 items-center justify-between md:flex-nowrap flex-wrap"> */}
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
          <div>
            <Button
              size="xlIcon"
              variant="outlineGray"
              icon={<ChevronUp color="transparent" />}
            />
            <Button
              size="xlIcon"
              variant="outlineGray"
              icon={<Whatsapp color="white" />}
              className="fixed bottom-[120px] z-50 bg-gradient-to-b from-[#61FD7D] to-[#2BB826] border-white"
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
