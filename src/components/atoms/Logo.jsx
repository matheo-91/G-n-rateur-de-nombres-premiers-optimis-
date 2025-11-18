/**
 * Atom: Logo
 * Composant Logo réutilisable
 */
export function Logo({ src, alt = "Logo", size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${sizeClasses[size]} ${className}`} 
    />
  );
}

