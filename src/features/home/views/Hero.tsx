import HeroTemplate from '@/src/components/templates/Home/HeroTemplate/HeroTemplate';
import React from 'react';


const Hero: React.FC = () => {
  return (
    <HeroTemplate
      title="Welcome to My Website"
      subtitle="We provide the best services for you"
      ctaText="Get Started"
      onCtaClick={() => alert('Get Started clicked!')}
    />
  );
};

export default Hero;