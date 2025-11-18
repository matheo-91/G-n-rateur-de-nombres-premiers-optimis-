import { FeatureCard } from "../molecules/index.js";

/**
 * Organism: FeaturesGrid
 * Grille affichant les fonctionnalités principales
 */
export function FeaturesGrid({ features }) {
  return (
    <div id="features" className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          color={feature.color}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}

