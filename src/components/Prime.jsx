import { useMemo } from "react";
import { usePrimeStore } from "../stores/usePrimeStore.js";

/**
 * Composant pour afficher le résultat de la vérification d'un nombre premier
 * Utilise useMemo pour optimiser les recalculs
 */
export function Prime({ number }) {
  const { isPrimeResult } = usePrimeStore();

  // Utilisation de useMemo pour éviter les recalculs inutiles
  // Le calcul est déjà fait dans le store, mais on peut optimiser l'affichage
  const displayResult = useMemo(() => {
    if (number === null || number === undefined) return null;
    return isPrimeResult;
  }, [number, isPrimeResult]);

  if (number === null || number === undefined) {
    return (
      <div className="text-center p-4">
        <p className="text-gray-500">Aucun nombre à vérifier</p>
      </div>
    );
  }

  return (
    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Nombre : {number}</h3>
      {displayResult === true ? (
        <div className="text-green-600 dark:text-green-400">
          <p className="text-xl font-semibold">Ce nombre est premier</p>
        </div>
      ) : displayResult === false ? (
        <div className="text-red-600 dark:text-red-400">
          <p className="text-xl font-semibold">Ce nombre n'est pas premier</p>
        </div>
      ) : (
        <div className="text-gray-500">
          <p className="text-xl">En cours de vérification...</p>
        </div>
      )}
    </div>
  );
}
