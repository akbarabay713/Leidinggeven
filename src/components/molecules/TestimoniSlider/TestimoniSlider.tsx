"use client";
import React from "react";
import Slider from "react-slick";
import CardTestimonial from "@/src/components/molecules/CardTestimonial/CardTestimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "./../../../constants/SliderConfig";

const TestimonialSlider: React.FC = () => {
  const testimonials = [
    {
      name: "MARK",
      position: "Operations Manager",
      company: "Reelcoe Agency",
      desc: "testimoni1",
    },
    {
      name: "Sarah",
      position: "HR Director",
      company: "XYZ Company",
      desc: "testimoni2",
    },
    {
      name: "Tom",
      position: "Projectleider",
      company: "XYZ Company",
      desc: "testimoni3",
    },
    {
      name: "Tom",
      position: "Projectleider",
      company: "XYZ Company",
      desc: "testimoni3",
    },
    {
      name: "Tom",
      position: "Projectleider",
      company: "XYZ Company",
      desc: "testimoni3",
    },
    {
      name: "Tom",
      position: "Projectleider",
      company: "XYZ Company",
      desc: "testimoni3",
    },
  ];

  return (
    <Slider {...sliderSettings} className="w-[80%]">
      {testimonials.map((item, index) => (
        <CardTestimonial key={index} data={item} />
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
