import { useEffect, useMemo } from "react";
import { usePrimeStore } from "../../stores/usePrimeStore.js";
import { usePrimeAlea } from "../../hooks/usePrimeAlea.jsx";
import { Heading, Card, Button, Text } from "../atoms/index.js";

/**
 * Organism: ApiNumberGenerator
 * Section pour générer un nombre aléatoire depuis l'API
 */
export function ApiNumberGenerator() {
  const { setNumber } = usePrimeStore();
  const { data, isLoading, isError, error, refetch } = usePrimeAlea();

  // Utilisation de useMemo pour optimiser le traitement des données
  const apiNumber = useMemo(() => {
    if (data?.number) {
      return data.number;
    }
    return null;
  }, [data]);

  // Mettre à jour le store quand on reçoit une nouvelle donnée de l'API
  useEffect(() => {
    if (apiNumber !== null) {
      setNumber(apiNumber);
    }
  }, [apiNumber, setNumber]);

  const handleFetchNumber = () => {
    refetch();
  };

  return (
    <Card>
      <Heading level={2} className="text-gray-800 mb-4">
        Nombre aléatoire depuis l'API
      </Heading>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Button onClick={handleFetchNumber} disabled={isLoading}>
          {isLoading ? "Chargement..." : "Générer un nombre"}
        </Button>
        
        {isError && (
          <Text variant="error">
            Erreur : {error?.message || "Une erreur est survenue"}
          </Text>
        )}
      </div>
    </Card>
  );
}

