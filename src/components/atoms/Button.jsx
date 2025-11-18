/**
 * Atom: Button
 * Composant Button réutilisable avec différentes variantes
 */
export function Button({ 
  children, 
  onClick, 
  disabled = false, 
  variant = "primary", 
  type = "button",
  className = "" 
}) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors duration-200";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

