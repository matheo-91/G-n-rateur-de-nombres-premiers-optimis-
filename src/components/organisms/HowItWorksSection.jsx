import { Heading } from "../atoms/index.js";
import { StepCard } from "../molecules/index.js";

/**
 * Organism: HowItWorksSection
 * Section expliquant le fonctionnement du système
 */
export function HowItWorksSection({ title, steps }) {
  return (
    <div className="mt-20">
      <Heading level={2} centered className="text-blue-900 mb-12">
        {title}
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => (
          <StepCard
            key={index}
            step={item.step}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

