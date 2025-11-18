/**
 * Atom: ErrorText
 * Composant pour afficher les messages d'erreur
 */
export function ErrorText({ children, className = "" }) {
  if (!children) return null;
  
  return (
    <p className={`mt-2 text-sm text-red-600 dark:text-red-400 ${className}`}>
      {children}
    </p>
  );
}

