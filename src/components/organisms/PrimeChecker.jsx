import { useState } from "react";
import { usePrimeStore } from "../../stores/usePrimeStore.js";
import { inputNumberSchema } from "../../schemas/numberSchema.js";
import { Heading, Card, Button } from "../atoms/index.js";
import { NumberInputForm, PrimeResult } from "../molecules/index.js";

/**
 * Organism: PrimeChecker
 * Section complète pour vérifier manuellement un nombre premier
 */
export function PrimeChecker() {
  const { currentNumber, setNumber, clearNumber, isPrimeResult } = usePrimeStore();
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

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
    <div className="space-y-6">
      <Card>
        <Heading level={2} className="text-gray-800 mb-4">
          Vérifier un nombre manuellement
        </Heading>
        
        <NumberInputForm
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleInputSubmit}
          error={inputError}
          onErrorChange={setInputError}
        />
      </Card>

      {currentNumber !== null && (
        <div>
          <PrimeResult number={currentNumber} isPrime={isPrimeResult} />
          <div className="mt-4 text-center">
            <Button onClick={clearNumber} variant="secondary">
              Effacer
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

