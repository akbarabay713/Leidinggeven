import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./AuthorSection.module.scss";
import Image from "next/image";
import { Button } from "@/src/components/atoms/Button/Button";
import Call from "@/src/components/atoms/icons/Call/Call";
import cn from "classnames";
import Linkedin from "@/src/components/atoms/icons/Linkedin/Linkedin";
import Divider from "@/src/components/atoms/Divider/Divider";

const AuthorSection: React.FC = () => {
  const t = useTranslations();

  return (
    <section className={s.author}>
      <div className={s.authorContainer}>
        <Typography
          variant="futuraH3Bold"
          component="h2"
          className={s.authorTitle}
        >
          {t.rich("author title", {
            span: (chunks) => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </Typography>

        <div className="flex gap-[77px] items-end justify-center mb-16 flex-wrap md:flex-nowrap">
          <div className="w-[269px] min-w-[269px] flex-shrink-0">
            <div className="w-[269px] h-[316px]  relative">
              <Image
                src="/images/author2.png"
                alt="hero"
                priority
                // fill
                width={269}
                height={316}
                sizes="(max-width: 768px) 100%"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="relative flex flex-col gap-3 items-center justify-center -mt-28">
              <Button variant={"primary"} size={"md"} icon={<Linkedin />}>
                <Typography
                  variant="interTextXsSemibold"
                  component="span"
                  className={cn("text-white")}
                >
                  STEFANIE VAN BOEKEL
                </Typography>
              </Button>
              <Button variant={"primary"} size={"md"} icon={<Linkedin />}>
                <Typography
                  variant="interTextXsSemibold"
                  component="span"
                  className={cn("text-white")}
                >
                  STEFANIE VAN BOEKEL
                </Typography>
              </Button>
            </div>
          </div>
          <div className="w-fit">
            <Typography
              variant="interTextLgRegular"
              component="h3"
              className={s.authorSubtitle}
            >
              {t.rich("author subtitle", {
                br: () => <br />,
              })}
            </Typography>
            <Button variant={"primary"} size={"md"} icon={<Call />}>
              {t("PLAN KENNISMAKING")}
            </Button>
          </div>
        </div>
        <Divider className="border-[#b2b4b6] opacity-100 my-8" />
      </div>
    </section>
  );
};

export default AuthorSection;
