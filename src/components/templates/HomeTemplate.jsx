import { Hero, FeaturesGrid, HowItWorksSection, CTASection } from "../organisms/index.js";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Hero {...heroData} />
        <FeaturesGrid features={features} />
        <HowItWorksSection {...howItWorks} />
        <CTASection {...ctaData} />
      </div>
    </div>
  );
}

