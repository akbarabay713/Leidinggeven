// import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import s from "./CardAuthor.module.scss";
// import Typography from "@/src/components/atoms/Typography/Typography";
import Image from "next/image";
import Calender from "../../atoms/icons/Calender/Calender";
import { Button } from "../../atoms/Button/Button";

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
        <Button variant={"primary"} size={"xl"} icon={<Calender />}>
          STEFANIE VAN BOEKEL
        </Button>
        <Button variant={"primary"} size={"xl"}>
          STEFANIE VAN BOEKEL
        </Button>
      </div>
    </div>
  );
};

export default CardAuthor;
