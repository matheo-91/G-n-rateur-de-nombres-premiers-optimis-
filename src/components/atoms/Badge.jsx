/**
 * Atom: Badge
 * Composant Badge pour afficher des icônes ou des numéros avec un fond coloré
 */
export function Badge({ children, variant = "default", shape = "rounded", className = "" }) {
  const shapeClasses = {
    rounded: "rounded-lg",
    circle: "rounded-full",
  };

  const variantClasses = {
    default: "bg-blue-500 text-white",
    gradient: "bg-gradient-to-br text-white",
  };

  const baseClasses = "flex items-center justify-center font-bold";

  return (
    <div className={`${baseClasses} ${shapeClasses[shape]} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

