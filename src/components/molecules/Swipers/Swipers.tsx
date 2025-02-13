"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Badge from "@/src/components/molecules/Badge/Badge";
import { WHYUS } from "@/src/constants/WyyUs";
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import { useTranslations } from "next-intl";

const Swipers: React.FC = () => {
  const t = useTranslations();
  return (
    <div className="flex md:hidden gap-4 items-center justify-center relative">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
      >
        {/* First Slide */}
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-4">
            {WHYUS.slice(0, 6).map((item, index) => (
              <Badge text={t(item)} key={index} />
            ))}
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-4">
            {WHYUS.slice(6).map((item, index) => (
              <Badge text={t(item)} key={index} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination w-full h-4 shrink-0 absolute -bottom-20 flex items-center gap-4 justify-center"></div>
    </div>
  );
};

export default Swipers;
