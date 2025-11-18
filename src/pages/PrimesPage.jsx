import { useState, useMemo, useEffect } from "react";
import { usePrimeStore } from "../stores/usePrimeStore.js";
import { usePrimeAlea } from "../hooks/usePrimeAlea.jsx";
import { Prime } from "../components/Prime.jsx";
import { Button } from "../components/ui/Button.jsx";
import { inputNumberSchema } from "../schemas/numberSchema.js";

/**
 * Page principale pour la vérification des nombres premiers
 * Combine TanStack Query, Zustand, et la validation Zod
 */
export function PrimesPage() {
  const { currentNumber, setNumber, clearNumber } = usePrimeStore();
  const { data, isLoading, isError, error, refetch } = usePrimeAlea();
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

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

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setInputError("");

    try {
      const validated = inputNumberSchema.parse({ number: inputValue });
      setNumber(validated.number);
      setInputValue("");
    } catch (err) {
      if (err.issues && err.issues.length > 0) {
        setInputError(err.issues[0].message);
      } else {
        setInputError("Erreur de validation");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Générateur de Nombres Premiers
        </h1>

        <div className="space-y-6">
          {/* Section API */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Nombre aléatoire depuis l'API
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button onClick={handleFetchNumber} disabled={isLoading}>
                {isLoading ? "Chargement..." : "Générer un nombre"}
              </Button>
              
              {isError && (
                <div className="text-red-600 dark:text-red-400">
                  Erreur : {error?.message || "Une erreur est survenue"}
                </div>
              )}
            </div>
          </div>

          {/* Section Formulaire */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Vérifier un nombre manuellement
            </h2>
            
            <form onSubmit={handleInputSubmit} className="space-y-4">
              <div>
                <label htmlFor="number-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Entrez un nombre entier positif
                </label>
                <input
                  id="number-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setInputError("");
                  }}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600 ${
                    inputError ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ex: 17, 23, 100..."
                />
                {inputError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">{inputError}</p>
                )}
              </div>
              <Button type="submit" variant="primary">
                Vérifier
              </Button>
            </form>
          </div>

          {/* Affichage du résultat */}
          {currentNumber !== null && (
            <div>
              <Prime number={currentNumber} />
              <div className="mt-4 text-center">
                <Button onClick={clearNumber} variant="secondary">
                  Effacer
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
