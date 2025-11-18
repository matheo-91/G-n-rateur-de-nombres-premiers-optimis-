import { Container } from "../atoms/index.js";
import { Header, Hero, FeaturesGrid, HowItWorksSection, CTASection } from "../organisms/index.js";

/**
 * Template: HomeTemplate
 * Template de la page d'accueil
 */
export function HomeTemplate({ 
  heroData, 
  features, 
  howItWorks, 
  ctaData 
}) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <Container className="py-16 sm:py-24">
          <Hero {...heroData} />
          <FeaturesGrid features={features} />
          <HowItWorksSection {...howItWorks} />
          <CTASection {...ctaData} />
        </Container>
      </div>
    </>
  );
}

