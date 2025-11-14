// Cache pour stocker les résultats de vérification des nombres premiers
const primeCache = new Map();

/**
 * Vérifie si un nombre est premier
 * Utilise un cache pour éviter les recalculs
 * @param {number} num - Le nombre à vérifier
 * @returns {boolean} - true si le nombre est premier, false sinon
 */
export function isPrime(num) {
  // Validation de base
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  // Vérifier le cache
  if (primeCache.has(num)) {
    return primeCache.get(num);
  }

  // Algorithme optimisé : on teste seulement jusqu'à la racine carrée
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      primeCache.set(num, false);
      return false;
    }
  }

  // Le nombre est premier
  primeCache.set(num, true);
  return true;
}

/**
 * Réinitialise le cache
 */
export function clearPrimeCache() {
  primeCache.clear();
}

