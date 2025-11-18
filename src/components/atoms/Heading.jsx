/**
 * Atom: Heading
 * Composants de titres réutilisables avec différents niveaux
 */
export function Heading({ level = 1, children, className = "", centered = false }) {
  const Tag = `h${level}`;
  
  const sizeClasses = {
    1: "text-5xl sm:text-6xl font-bold",
    2: "text-3xl font-bold",
    3: "text-2xl font-semibold",
    4: "text-xl font-semibold",
    5: "text-lg font-semibold",
    6: "text-base font-semibold",
  };

  const centerClass = centered ? "text-center" : "";

  return (
    <Tag className={`${sizeClasses[level]} ${centerClass} ${className}`}>
      {children}
    </Tag>
  );
}

