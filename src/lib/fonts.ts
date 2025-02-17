import localFont from "next/font/local";

export const futuraFont = localFont({
  fallback: ["sans-serif"],
  src: [
    {
      path: "../assets/fonts/Futura-Heavy-font.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../assets/fonts/Futura-Book-font.ttf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--futura-font",
});
