import { Heading } from "../atoms/index.js";
import { ApiNumberGenerator, PrimeChecker } from "../organisms/index.js";

/**
 * Template: PrimesTemplate
 * Template de la page de vérification des nombres premiers
 */
export function PrimesTemplate() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Heading level={1} centered className="text-gray-800 mb-8">
          Générateur de Nombres Premiers
        </Heading>

        <div className="space-y-6">
          <ApiNumberGenerator />
          <PrimeChecker />
        </div>
      </div>
    </div>
  );
}

