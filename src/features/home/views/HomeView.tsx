import React from "react";
import HeroTemplate from "@/src/components/organisms/Home/HeroTemplate/HeroTemplate";
import TrainingTemplate from "@/src/components/organisms/Home/TrainingTemplate/TrainingTemplate";
import ChallengesSection from "@/src/components/organisms/Home/ChallengesSection/ChallengesSection";
import TestimonialSection from "@/src/components/organisms/Home/TestimonialSection/TerstimonialSection";
import BenefitSection from "@/src/components/organisms/Home/BenefitSection/BenefitSection";
import OrganisationSection from "@/src/components/organisms/Home/OrganisationSection/OrganisationSection";
import LeadingSection from "@/src/components/organisms/Home/LeadingSection/LeadingSection";
import WorkshopSection from "@/src/components/organisms/Home/WorkshopSection/WorkshopSection";
import AuthorSection from "@/src/components/organisms/Home/AuthorSection/AuthorSection";
import WhyUseSection from "@/src/components/organisms/Home/WhyUseSection/WhyUseSection";
import LeadershipTipsSection from "@/src/components/organisms/Home/LeadershipTipsSection/LeadershipTipsSection";
import WhoAreWeSection from "@/src/components/organisms/Home/WhoAreWeSection/WhoAreWeSection";
import AboutSection from "@/src/components/organisms/Home/AboutSection/AboutSection";
import AreYouReadySection from "@/src/components/organisms/Home/AreYouReadySection/AreYouReadySection";
import ContactSection from "@/src/components/organisms/Home/ContactSection/ContactSection";

const HomeView: React.FC = () => {
  return (
    <>
      <HeroTemplate />
      <TrainingTemplate />
      <ChallengesSection />
      <TestimonialSection />
      <BenefitSection />
      <OrganisationSection />
      <LeadingSection />
      <WorkshopSection />
      <AuthorSection />
      <WhyUseSection />
      <LeadershipTipsSection />
      <WhoAreWeSection />
      <AboutSection />
      <AreYouReadySection />
      <ContactSection />
    </>
  );
};

export default HomeView;
