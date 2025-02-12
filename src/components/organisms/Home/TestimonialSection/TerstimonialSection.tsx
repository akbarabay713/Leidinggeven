"use client";
import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./TestimonialSection.module.scss";
import { Button } from "@/src/components/atoms/Button/Button";
import cn from "classnames";
import CardAuthor from "@/src/components/molecules/CardAuthor/CardAuthor";
import TestimonialSlider from "./../../../molecules/TestimoniSlider/TestimoniSlider";

const TestimonialSection: React.FC = () => {
  const t = useTranslations("testimonial");

  return (
    <section className={s.testimonial}>
      <div className={cn(s.testimonialContainer)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
          <Typography
            variant="futuraH3Bold"
            component="h2"
            className={s.testimonialTitle}
          >
            {t.rich("title", { br: () => <br /> })}
          </Typography>
          <div className="flex gap-1 flex-col">
            <Typography
              variant="interTextLgRegular"
              component="p"
              className={s.testimonialSubtitle}
            >
              {t("subtitle")}
            </Typography>
            <Button variant="primary" size="xl">
              {t("TERUGBELVERZOEK?")}
            </Button>
          </div>
        </div>

        <div className="flex gap-10 w-full flex-wrap lg:flex-nowrap justify-center items-center">
          <div className="w-full lg:w-[20%] flex justify-center">
            <CardAuthor />
          </div>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
