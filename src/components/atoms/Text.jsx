/**
 * Atom: Typography
 * Composant Typography réutilisable avec différentes variantes
 */
export function Typography({ children, variant = "default", size = "base", className = "" }) {
  const variantClasses = {
    default: "text-gray-800",
    muted: "text-gray-600",
    primary: "text-blue-700",
    success: "text-green-600",
    error: "text-red-600",
    white: "text-white",
  };

  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  return (
    <p className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </p>
  );
}

