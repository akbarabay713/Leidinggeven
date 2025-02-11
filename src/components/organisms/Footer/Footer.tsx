import React from "react";
import s from "./Footer.module.scss";
import Image from "next/image";
import { Button } from "../../atoms/Button/Button";
import ChevronUp from "../../atoms/icons/ChevronUp/ChevronUp";
import Whatsapp from "../../atoms/icons/Whatsapp/Whatsapp";
const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <div className="flex gap-8 items-center justify-between">
          <Image
            src="/images/logo-green.png"
            alt="hero"
            width={312}
            height={224}
            priority
          />
          <div></div>
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
              className="fixed bottom-20"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
