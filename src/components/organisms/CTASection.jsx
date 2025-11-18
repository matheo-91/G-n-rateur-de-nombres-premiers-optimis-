import { Link } from "@tanstack/react-router";
import { Heading, Text } from "../atoms/index.js";
import { CTAButton } from "../molecules/index.js";

/**
 * Organism: CTASection
 * Section Call-to-Action avec gradient et bouton
 */
export function CTASection({ title, description, buttonText, buttonLink }) {
  return (
    <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white">
      <Heading level={2} className="mb-4">
        {title}
      </Heading>
      <Text variant="white" size="lg" className="text-blue-100 mb-8 max-w-2xl mx-auto">
        {description}
      </Text>
      <Link to={buttonLink}>
        <CTAButton>
          {buttonText}
        </CTAButton>
      </Link>
    </div>
  );
}

