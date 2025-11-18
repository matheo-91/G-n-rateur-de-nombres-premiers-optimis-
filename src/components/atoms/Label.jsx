/**
 * Atom: Label
 * Composant Label pour les formulaires
 */
export function Label({ htmlFor, children, className = "" }) {
  return (
    <label 
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 mb-2 ${className}`}
    >
      {children}
    </label>
  );
}

