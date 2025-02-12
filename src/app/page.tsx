import { HeroSection } from "@/components/layout/hero-section"
import { AboutSection } from "@/components/layout/about-section"
import { CoursesSection } from "@/components/layout/courses-section"
import { ScrollBasedVelocityDemo } from "@/components/layout/scrolling-txt";
import { SuccessStories } from "@/components/layout/success-stories"
import { CTASection } from "@/components/layout/cta-section"
import { Footer } from "@/components/layout/footer"
import  OurJourneySection from "@/components/layout/our-journey-section"
import { NewCTASection } from "@/components/layout/new-cta-section"
import { MissionSection } from "@/components/layout/mission-section"
import { WhoThisIsForSection } from "@/components/layout/who-this-is-for"
import { SpecialOffers } from "@/components/layout/special-offers"
import { AchievementsCarousel } from "@/components/layout/achievements-carousel"

export default function Home() {
  return (
    <>
    <main className="relative w-full h-full overflow-hidden">
      <div className="z-[100] absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <WhoThisIsForSection />
      <OurJourneySection />
      <CoursesSection />
      <SpecialOffers />
      <AchievementsCarousel />
      <SuccessStories />
      <NewCTASection />
      {/* <ScrollBasedVelocityDemo/> */}
      {/* <CTASection /> */}
      <Footer />
      </main>
    </>
  );
}
