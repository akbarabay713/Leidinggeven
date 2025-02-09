import Challenge from "../../features/home/views/Challenge";
import Hero from "../../features/home/views/Hero";
import Training from "../../features/home/views/Training";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Training />
      <Challenge />
    </>
  );
};

export default HomePage;
