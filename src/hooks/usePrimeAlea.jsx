import { useQuery } from "@tanstack/react-query";
import { fetchNumberAlea } from "../api/fetchApi.js";

/**
 * Hook TanStack Query pour récupérer un nombre aléatoire
 * Isole toute la logique asynchrone
 */
export function usePrimeAlea() {
  return useQuery({
    queryKey: ["primeNumber"],
    queryFn: fetchNumberAlea,
    staleTime: 0, // Toujours considérer comme stale pour permettre le refresh
  });
}

