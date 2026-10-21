import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { PolicyTimeline } from "@/components/PolicyTimeline";
import { FullBleedPhoto } from "@/components/FullBleedPhoto";
import { RuralEconomy } from "@/components/RuralEconomy";
import { CaseStudy } from "@/components/CaseStudy";
import { PolicyToPractice } from "@/components/PolicyToPractice";
import { RegionalDiversity } from "@/components/RegionalDiversity";
import { BenefitsChallenges } from "@/components/BenefitsChallenges";
import { VideoSection } from "@/components/VideoSection";
import { EvidenceSection } from "@/components/EvidenceSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { ClosingSection } from "@/components/ClosingSection";
import { Footer } from "@/components/Footer";
import { images } from "@/content/images";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <IntroSection />
        <PolicyTimeline />
        <FullBleedPhoto
          image={images.ruralWorkersBihar}
          caption="Behind every nursery and planting season are the people who do the work — in fields like this one in Bihar."
        />
        <RuralEconomy />
        <CaseStudy />
        <PolicyToPractice />
        <FullBleedPhoto
          image={images.odishaField}
          caption="Agroecology differs block by block — what grows well in Odisha may not suit Rajasthan's drylands."
        />
        <RegionalDiversity />
        <BenefitsChallenges />
        <VideoSection />
        <EvidenceSection />
        <ReferencesSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
