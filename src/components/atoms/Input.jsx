/**
 * Atom: Input
 * Composant Input réutilisable avec gestion d'erreur
 */
export function Input({ 
  id,
  type = "text", 
  value, 
  onChange, 
  placeholder = "",
  error = false,
  className = "" 
}) {
  const baseClasses = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const errorClasses = error ? "border-red-500" : "border-gray-300";

  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${baseClasses} ${errorClasses} ${className}`}
    />
  );
}

