import Header from "../components/Header"
import InitialSection from "../components/InitialSection"
import IntroductionSection from "../components/IntroductionSection"
import PilarsSection from "../components/PilarsSection"
import BenefitsSection from "../components/BenefitsSection"
import StepsSection from "../components/StepsSection"

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
      </div>
    </>
  );
}
