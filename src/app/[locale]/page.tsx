import Testimonial from "@/src/features/home/views/Testimonial";
import Challenge from "../../features/home/views/Challenge";
import Hero from "../../features/home/views/Hero";
import Training from "../../features/home/views/Training";
import Benefit from "@/src/features/home/views/Benefit";
import Organisation from "@/src/features/home/views/Organisation";
import Leading from "@/src/features/home/views/Leading";
import Workshop from "@/src/features/home/views/Workshop";
import Author from "@/src/features/home/views/Author";
import Whyus from "@/src/features/home/views/WhyUs";
import LeadershipTips from "@/src/features/home/views/LeadershipTips";
import WhoAreWe from "@/src/features/home/views/WhoAreWe";
import About from "@/src/features/home/views/About";
import AreYouReady from "@/src/features/home/views/AreYouReady";
import Contact from "@/src/features/home/views/Contact";

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
      <Workshop />
      <Author />
      <Whyus />
      <LeadershipTips />
      <WhoAreWe />
      <About />
      <AreYouReady />
      <Contact />
    </>
  );
};

export default HomePage;
