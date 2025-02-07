import ChallengesSection from '@/src/components/templates/Home/ChallengesSection/ChallengesSection';
import HeroTemplate from '@/src/components/templates/Home/HeroTemplate/HeroTemplate';
import TrainingTemplate from '@/src/components/templates/Home/TrainingTemplate/TrainingTemplate';
import React from 'react';


const Hero: React.FC = () => {
  return (
    <>
      <HeroTemplate />
      <TrainingTemplate />
      <ChallengesSection />
    </>
  );
};

export default Hero;