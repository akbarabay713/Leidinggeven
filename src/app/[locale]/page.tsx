import Testimonial from "@/src/features/home/views/Testimonial";
import Challenge from "../../features/home/views/Challenge";
import Hero from "../../features/home/views/Hero";
import Training from "../../features/home/views/Training";
import Benefit from "@/src/features/home/views/Benefit";
import Organisation from "@/src/features/home/views/Organisation";
import Leading from "@/src/features/home/views/Leading";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Training />
      <Challenge />
      <Testimonial />
      <Benefit />
      <Organisation />
      <Leading />
    </>
  );
};

export default HomePage;
