import Header from "@/components/Header"
import InitialSection from "@/components/InitialSection"
import IntroductionSection from "@/components/IntroductionSection"
import PilarsSection from "@/components/PilarsSection"
import BenefitsSection from "@/components/BenefitsSection"
import StepsSection from "@/components/StepsSection"
import SubscribeSection from "@/components/SubscribeSection"
import Footer from "@/components/Footer"
import QuestionsSection from "@/components/QuestionsSection"

export default function Home() {
  return (
    <>
      <div className="bg-fundo">
        <Header />
        <InitialSection />
        <IntroductionSection />
        <PilarsSection />
        <BenefitsSection />
        <StepsSection />
        <SubscribeSection />
        <QuestionsSection />
        <Footer />
      </div>
    </>
  );
}
