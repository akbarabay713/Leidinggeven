import React from "react";
import s from "./CardAuthor.module.scss";

import Image from "next/image";
import { Button } from "../../atoms/Button/Button";
import Linkedin from "../../atoms/icons/Linkedin/Linkedin";

const CardAuthor: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <Image
          src="/images/author.png"
          alt="hero"
          width={144}
          height={235}
          priority
        />
      </div>
      <div className="flex flex-col gap-2 p-2 items-center justify-center">
        <Button variant={"primary"} size={"xl"} icon={<Linkedin />}>
          STEFANIE VAN BOEKEL
        </Button>
        <Button variant={"primary"} size={"xl"} icon={<Linkedin />}>
          STEFANIE VAN BOEKEL
        </Button>
      </div>
    </div>
  );
};

export default CardAuthor;
