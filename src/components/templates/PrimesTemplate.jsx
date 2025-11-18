import { Heading, Container } from "../atoms/index.js";
import { ApiNumberGenerator, PrimeChecker } from "../organisms/index.js";
import { Layout } from "./Layout.jsx";

/**
 * Template: PrimesTemplate
 * Template de la page de vérification des nombres premiers
 */
export function PrimesTemplate() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <Container className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto fade-in">
            <Heading level={1} centered className="text-blue-900 mb-4">
              Générateur de Nombres Premiers
            </Heading>
            <p className="text-center text-blue-700 text-lg mb-12 max-w-2xl mx-auto">
              Générez des nombres aléatoires ou vérifiez manuellement si un nombre est premier
            </p>

            <div className="space-y-6">
              <ApiNumberGenerator />
              <PrimeChecker />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

