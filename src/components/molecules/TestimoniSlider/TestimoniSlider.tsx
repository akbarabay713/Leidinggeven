"use client";
import React from "react";
import Slider from "react-slick";
import CardTestimonial from "@/src/components/molecules/CardTestimonial/CardTestimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "./../../../constants/SliderConfig";

const TestimonialSlider: React.FC = () => {
  const testimonials = [1, 2, 3];

  return (
    <Slider {...sliderSettings} className="w-[80%]">
      {testimonials.map((_, index) => (
        <CardTestimonial key={index} />
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
