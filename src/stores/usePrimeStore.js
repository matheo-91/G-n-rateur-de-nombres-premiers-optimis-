import { create } from "zustand";
import { isPrime } from "../service/verifIsPrime.js";

/**
 * Store Zustand pour la gestion de la logique métier des nombres premiers
 * Séparation claire : pas de logique réseau, pas de React Query
 */
export const usePrimeStore = create((set, get) => ({
  // Données
  currentNumber: null,
  isPrimeResult: null,
  displayMode: "auto", // "auto" | "manual"

  // Actions
  setNumber: (number) => {
    const primeResult = isPrime(number);
    set({
      currentNumber: number,
      isPrimeResult: primeResult,
    });
  },

  setDisplayMode: (mode) => {
    set({ displayMode: mode });
  },

  clearNumber: () => {
    set({
      currentNumber: null,
      isPrimeResult: null,
    });
  },
}));

