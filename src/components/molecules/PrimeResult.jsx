import { useMemo } from "react";
import { Heading, Typography, Card } from "../atoms/index.js";

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
        <Typography variant="muted">Aucun nombre à vérifier</Typography>
      </div>
    );
  }

  return (
    <Card className="text-center border border-blue-100" hover>
      <Heading level={3} className="text-blue-900 mb-4">
        Nombre : {number}
      </Heading>
      {displayResult === true ? (
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
          <Typography variant="success" size="xl" className="font-semibold">
            ✓ Ce nombre est premier
          </Typography>
          <Typography variant="muted" size="sm" className="mt-2">
            Il n'est divisible que par 1 et lui-même
          </Typography>
        </div>
      ) : displayResult === false ? (
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
          <Typography variant="error" size="xl" className="font-semibold">
            ✗ Ce nombre n'est pas premier
          </Typography>
          <Typography variant="muted" size="sm" className="mt-2">
            Il possède d'autres diviseurs que 1 et lui-même
          </Typography>
        </div>
      ) : (
        <Typography variant="muted" size="xl">
          En cours de vérification...
        </Typography>
      )}
    </Card>
  );
}

