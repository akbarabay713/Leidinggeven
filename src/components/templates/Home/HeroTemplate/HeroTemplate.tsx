import React from 'react';

interface HeroTemplateProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

const HeroTemplate: React.FC<HeroTemplateProps> = ({ title, subtitle, ctaText, onCtaClick }) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

export default HeroTemplate;