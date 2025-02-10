"use client";
import Typography from "@/src/components/atoms/Typography/Typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./TestimonialSection.module.scss";
import { Button } from "@/src/components/atoms/Button/Button";
import cn from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardTesimonial from "@/src/components/molecules/CardTestimonial/CardTestimonial";
import CardAuthor from "@/src/components/molecules/CardAuthor/CardAuthor";

const TestimonialSection: React.FC = () => {
  const t = useTranslations("testimonial");
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    variableWidth: true,
    centerMode: false,
  };
  return (
    <section className={s.testimonial}>
      <div className={cn(s.testimonialContainer)}>
        <div className="grid grid-cols-2 gap-2 mb-12">
          <Typography
            variant="futuraH3Bold"
            component="h2"
            className={s.testimonialTitle}
          >
            {t.rich("title", {
              br: () => <br />,
            })}
          </Typography>
          <div className="flex gap-1 flex-col">
            <Typography
              variant="interTextLgRegular"
              component="p"
              className={s.testimonialSubtitle}
            >
              {t("subtitle")}
            </Typography>
            <Button variant={"primary"} size={"xl"}>
              {t("TERUGBELVERZOEK?")}
            </Button>
          </div>
        </div>
        <div>
          <div className="flex gap-10 w-full">
            <div>
              <CardAuthor />
            </div>
            <Slider {...settings} className="w-full">
              <div>
                <CardTesimonial />
              </div>
              <div>
                <CardTesimonial />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
