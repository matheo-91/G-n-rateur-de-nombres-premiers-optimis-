import { useMemo } from "react";
import { Heading, Text, Card } from "../atoms/index.js";

/**
 * Molecule: PrimeResult
 * Affiche le résultat de la vérification d'un nombre premier
 */
export function PrimeResult({ number, isPrime }) {
  const displayResult = useMemo(() => {
    if (number === null || number === undefined) return null;
    return isPrime;
  }, [number, isPrime]);

  if (number === null || number === undefined) {
    return (
      <div className="text-center p-4">
        <Text variant="muted">Aucun nombre à vérifier</Text>
      </div>
    );
  }

  return (
    <Card className="text-center">
      <Heading level={3} className="mb-4">
        Nombre : {number}
      </Heading>
      {displayResult === true ? (
        <Text variant="success" size="xl" className="font-semibold">
          ✓ Ce nombre est premier
        </Text>
      ) : displayResult === false ? (
        <Text variant="error" size="xl" className="font-semibold">
          ✗ Ce nombre n'est pas premier
        </Text>
      ) : (
        <Text variant="muted" size="xl">
          En cours de vérification...
        </Text>
      )}
    </Card>
  );
}

