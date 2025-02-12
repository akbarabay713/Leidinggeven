const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1.2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  arrows: true,
  variableWidth: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default sliderSettings;
